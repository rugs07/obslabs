import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface TeleportPadProps {
    position: [number, number, number];
    targetPosition: [number, number, number];
    label: string;
    description: string;
}

export default function TeleportPad({ position, targetPosition, label, description }: TeleportPadProps) {
    const { camera } = useThree();
    const [active, setActive] = useState(false);
    const textRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        const dist = camera.position.distanceTo(new THREE.Vector3(...position));

        // Activation threshold
        if (dist < 2 && !active) {
            setActive(true);
            // Teleport logic
            camera.position.set(...targetPosition);
            // Reset velocity if we had access to controls, but instant teleport is fine
            setActive(false); // Reset immediately after teleport
        }

        // Animation
        if (textRef.current) {
            textRef.current.rotation.y += 0.01;
        }
    });

    return (
        <group position={position}>
            {/* Pad Base */}
            <mesh position={[0, -1.9, 0]} receiveShadow>
                <cylinderGeometry args={[1.5, 1.8, 0.2, 8]} />
                <meshStandardMaterial
                    color="#333"
                    emissive="#00e5cc"
                    emissiveIntensity={0.5}
                />
            </mesh>

            {/* Glowing Ring */}
            <mesh position={[0, -1.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[1, 1.2, 32]} />
                <meshBasicMaterial color="#00e5cc" transparent opacity={0.6} />
            </mesh>

            {/* Particle Beam effect simulated with cylinder */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[1, 1, 4, 32, 1, true]} />
                <meshBasicMaterial
                    color="#00e5cc"
                    transparent
                    opacity={0.1}
                    side={THREE.DoubleSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* Label */}
            <group position={[0, 1.5, 0]} ref={textRef}>
                <Text
                    fontSize={0.2}
                    color="#ffffff"
                    anchorX="center"
                    anchorY="middle"
                >
                    {label}
                </Text>
                <Text
                    position={[0, -0.25, 0]}
                    fontSize={0.1}
                    color="#00e5cc"
                    anchorX="center"
                    anchorY="middle"
                >
                    {description}
                </Text>
            </group>
        </group>
    );
}
