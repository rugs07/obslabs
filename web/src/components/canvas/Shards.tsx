"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";

function Shard({ position, rotation, scale, index }: any) {
    const mesh = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);
    const glowRef = useRef<THREE.Mesh>(null);

    // Random offset for this shard's movement
    const timeOffset = useMemo(() => Math.random() * 100, []);
    const rotSpeed = useMemo(() => 0.1 + Math.random() * 0.2, []);

    useFrame((state) => {
        if (!mesh.current) return;

        const t = state.clock.getElapsedTime();

        // Antigravity Bobbing - smoother motion
        mesh.current.position.y = position[1] + Math.sin(t * 0.4 + timeOffset) * 0.3;
        mesh.current.rotation.x = rotation[0] + Math.cos(t * rotSpeed + timeOffset) * 0.15;
        mesh.current.rotation.z = rotation[2] + Math.sin(t * rotSpeed + timeOffset) * 0.15;

        // Scroll-based dispersion
        const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
        const scrollProgress = Math.min(scrollY / (typeof window !== 'undefined' ? window.innerHeight : 1000), 1.5);

        // More dramatic fly-out effect
        const direction = new THREE.Vector3(position[0], position[1], position[2]).normalize();
        const disperse = direction.multiplyScalar(scrollProgress * 8);

        mesh.current.position.x = position[0] + disperse.x;
        mesh.current.position.z = position[2] + disperse.z + scrollProgress * 4;

        // Fade out as they disperse
        const material = mesh.current.material as THREE.MeshPhysicalMaterial;
        material.opacity = Math.max(0.1, 0.9 - scrollProgress * 0.6);

        // Update glow
        if (glowRef.current) {
            glowRef.current.position.copy(mesh.current.position);
            glowRef.current.rotation.copy(mesh.current.rotation);
            const glowMaterial = glowRef.current.material as THREE.MeshBasicMaterial;
            glowMaterial.opacity = hovered ? 0.3 : 0.1;
        }
    });

    return (
        <group>
            {/* Main shard */}
            <mesh
                ref={mesh}
                position={position}
                rotation={rotation}
                scale={scale}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <dodecahedronGeometry args={[1, 0]} />
                <meshPhysicalMaterial
                    color={hovered ? "#1a1a1a" : "#080808"}
                    roughness={0.05}
                    metalness={0.95}
                    clearcoat={1}
                    clearcoatRoughness={0.05}
                    reflectivity={1}
                    envMapIntensity={1.5}
                    transparent
                    opacity={0.9}
                />
            </mesh>

            {/* Subtle glow effect */}
            <mesh
                ref={glowRef}
                position={position}
                rotation={rotation}
                scale={scale * 1.15}
            >
                <dodecahedronGeometry args={[1, 0]} />
                <meshBasicMaterial
                    color="#a855f7"
                    transparent
                    opacity={0.1}
                    side={THREE.BackSide}
                />
            </mesh>
        </group>
    );
}

// Floating particles for atmosphere
function Particles() {
    const particlesRef = useRef<THREE.Points>(null);

    const particles = useMemo(() => {
        const count = 100;
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
        }

        return positions;
    }, []);

    useFrame((state) => {
        if (!particlesRef.current) return;
        const t = state.clock.getElapsedTime();
        particlesRef.current.rotation.y = t * 0.02;
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#ffffff"
                transparent
                opacity={0.3}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

export default function Shards() {
    const count = 35;

    const shards = useMemo(() => {
        return new Array(count).fill(0).map((_, i) => {
            // Create a cloud around the center
            const r = 4 + Math.random() * 5;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            return {
                position: [x, y, z],
                rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
                scale: Math.random() * 0.6 + 0.2,
                index: i,
            };
        });
    }, []);

    return (
        <group>
            {shards.map((props, i) => (
                <Shard key={i} {...props} />
            ))}
            <Particles />
        </group>
    );
}
