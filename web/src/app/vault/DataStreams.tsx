import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function DataStreams() {
    const streamRefs = useRef<THREE.Mesh[]>([]);
    const particleCount = 60; // Reduced from 200 for performance

    useFrame((state) => {
        streamRefs.current.forEach((particle, i) => {
            if (particle) {
                const t = state.clock.elapsedTime + i * 0.1;
                const radius = 8 + Math.sin(t * 0.5) * 2;
                const speed = 0.5 + (i % 3) * 0.2;

                particle.position.x = Math.cos(t * speed) * radius;
                particle.position.z = Math.sin(t * speed) * radius;
                particle.position.y = Math.sin(t * 2) * 3 + 2;

                // Fade particles
                const material = particle.material as THREE.MeshBasicMaterial;
                material.opacity = 0.3 + Math.sin(t * 3) * 0.2;
            }
        });
    });

    const colors = ['#00e5cc', '#e91e63', '#ffd700'];

    return (
        <group>
            {Array.from({ length: particleCount }).map((_, i) => (
                <mesh
                    key={i}
                    ref={(el) => {
                        if (el) streamRefs.current[i] = el;
                    }}
                >
                    <sphereGeometry args={[0.03, 8, 8]} />
                    <meshBasicMaterial
                        color={colors[i % 3]}
                        transparent
                        opacity={0.5}
                    />
                </mesh>
            ))}
        </group>
    );
}
