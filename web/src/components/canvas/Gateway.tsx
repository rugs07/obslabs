"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export default function Gateway() {
    const meshRef = useRef<THREE.Points>(null);
    const innerMeshRef = useRef<THREE.Mesh>(null);

    // Create particles for a more ethereal look
    const particles = useMemo(() => {
        const count = 200;
        const positions = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            // Distribute particles in a sphere
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 2.5 + Math.random() * 0.5;

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);
            sizes[i] = Math.random() * 0.05 + 0.02;
        }

        return { positions, sizes };
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        // Animate wireframe
        if (innerMeshRef.current) {
            const scale = 1 + Math.sin(t * 1.5) * 0.08;
            innerMeshRef.current.scale.set(scale, scale, scale);
            innerMeshRef.current.rotation.y += 0.003;
            innerMeshRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
        }

        // Animate particles
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.002;
            meshRef.current.rotation.z = Math.sin(t * 0.2) * 0.1;

            // Pulsing opacity effect
            const material = meshRef.current.material as THREE.PointsMaterial;
            material.opacity = 0.4 + Math.sin(t * 2) * 0.2;
        }
    });

    return (
        <group>
            {/* Inner wireframe icosahedron */}
            <mesh ref={innerMeshRef}>
                <icosahedronGeometry args={[2, 1]} />
                <meshBasicMaterial
                    color="#a855f7"
                    wireframe
                    transparent
                    opacity={0.25}
                />
            </mesh>

            {/* Outer particle sphere */}
            <points ref={meshRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particles.positions.length / 3}
                        array={particles.positions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.04}
                    color="#a855f7"
                    transparent
                    opacity={0.5}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                />
            </points>

            {/* Core glow */}
            <mesh>
                <sphereGeometry args={[0.5, 16, 16]} />
                <meshBasicMaterial
                    color="#a855f7"
                    transparent
                    opacity={0.15}
                />
            </mesh>
        </group>
    );
}
