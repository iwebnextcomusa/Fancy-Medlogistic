import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Get parent bounds
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf8fafc, 0.015);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 100);
    camera.position.z = 30;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle Logistics Network
    const particleCount = 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions: { x: number; y: number; z: number; speedX: number; speedY: number; speedZ: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 45;
      const y = (Math.random() - 0.5) * 45;
      const z = (Math.random() - 0.5) * 45;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions.push({
        x,
        y,
        z,
        speedX: (Math.random() - 0.5) * 0.02,
        speedY: (Math.random() - 0.5) * 0.02,
        speedZ: (Math.random() - 0.5) * 0.02,
      });
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Glowing Dot Material
    const material = new THREE.PointsMaterial({
      color: 0x0ea5e9, // Sky Blue accent
      size: 0.8,
      transparent: true,
      opacity: 0.6,
      blending: THREE.NormalBlending,
      sizeAttenuation: true,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Node connections (transit lines)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x94a3b8, // Slate gray lines
      transparent: true,
      opacity: 0.15,
      blending: THREE.NormalBlending,
    });

    let lineSegments = new THREE.LineSegments(new THREE.BufferGeometry(), lineMaterial);
    scene.add(lineSegments);

    // Mouse movement state
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    // Scroll influence
    let scrollY = 0;
    let targetScroll = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 6;
      targetY = (event.clientY / window.innerHeight - 0.5) * 6;
    };

    const handleScroll = () => {
      targetScroll = window.scrollY * 0.02;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Resize Observer for robust resizing without bugs
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: entryWidth, height: entryHeight } = entry.contentRect;
        camera.aspect = entryWidth / entryHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(entryWidth, entryHeight);
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lag
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Smooth scroll lag
      scrollY += (targetScroll - scrollY) * 0.05;

      // Dynamic rotation of particle system
      particleSystem.rotation.y = elapsedTime * 0.05 + mouseX * 0.1;
      particleSystem.rotation.x = elapsedTime * 0.03 + mouseY * 0.1;
      lineSegments.rotation.copy(particleSystem.rotation);

      // Scroll camera zoom / transition
      camera.position.z = 25 + Math.sin(scrollY * 0.1) * 8;
      camera.position.y = mouseX * 0.5;

      // Update particle drift positions
      const positionsAttr = geometry.attributes.position as THREE.BufferAttribute;
      const livePositions = positionsAttr.array as Float32Array;

      // We will trace connections
      const linePositions: number[] = [];

      for (let i = 0; i < particleCount; i++) {
        // Retrieve original & update drift
        const pt = originalPositions[i];
        pt.x += pt.speedX;
        pt.y += pt.speedY;
        pt.z += pt.speedZ;

        // Bounce inside bounding sphere
        if (Math.abs(pt.x) > 23) pt.speedX *= -1;
        if (Math.abs(pt.y) > 23) pt.speedY *= -1;
        if (Math.abs(pt.z) > 23) pt.speedZ *= -1;

        livePositions[i * 3] = pt.x + Math.sin(elapsedTime + i) * 0.5;
        livePositions[i * 3 + 1] = pt.y + Math.cos(elapsedTime + i) * 0.5;
        livePositions[i * 3 + 2] = pt.z;
      }
      positionsAttr.needsUpdate = true;

      // Build logistics line grid connecting nearby particles
      for (let i = 0; i < particleCount; i++) {
        const px = livePositions[i * 3];
        const py = livePositions[i * 3 + 1];
        const pz = livePositions[i * 3 + 2];

        // Find 2 nearest neighbors
        let neighbors: { index: number; dist: number }[] = [];
        for (let j = i + 1; j < particleCount; j++) {
          const dx = px - livePositions[j * 3];
          const dy = py - livePositions[j * 3 + 1];
          const dz = pz - livePositions[j * 3 + 2];
          const dSq = dx * dx + dy * dy + dz * dz;

          if (dSq < 140) { // Maximum connection distance
            neighbors.push({ index: j, dist: dSq });
          }
        }

        // Draw line connections
        neighbors.forEach(({ index }) => {
          linePositions.push(px, py, pz);
          linePositions.push(livePositions[index * 3], livePositions[index * 3 + 1], livePositions[index * 3 + 2]);
        });
      }

      lineSegments.geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      );

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      lineMaterial.dispose();
      lineSegments.geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      id="3d-network-canvas-container"
      ref={containerRef}
      className="absolute inset-0 w-full h-full min-h-screen pointer-events-none -z-10 bg-transparent"
    >
      <canvas ref={canvasRef} className="block w-full h-full opacity-[0.35]" />
    </div>
  );
}
