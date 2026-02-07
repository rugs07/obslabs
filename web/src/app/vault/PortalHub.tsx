import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';

export default function PortalHub({ position }: { position: [number, number, number] }) {
    const groupRef = useRef<any>(null);
    const ringRef = useRef<any>(null);

    useFrame((state) => {
        if (ringRef.current) {
            ringRef.current.rotation.z -= 0.01;
            ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    return (
        <group position={position} ref={groupRef}>
            {/* Hub Platform */}
            <mesh position={[0, -2, 0]} receiveShadow>
                <cylinderGeometry args={[5, 6, 0.5, 8]} />
                <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
            </mesh>

            {/* Central Portal Ring */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <group ref={ringRef} position={[0, 1, 0]}>
                    <mesh rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[3, 0.2, 16, 100]} />
                        <meshStandardMaterial color="#e91e63" emissive="#e91e63" emissiveIntensity={2} />
                    </mesh>
                    {/* Energy Field */}
                    <mesh rotation={[Math.PI / 2, 0, 0]}>
                        <circleGeometry args={[2.8, 32]} />
                        <meshBasicMaterial color="#e91e63" transparent opacity={0.2} side={2} />
                    </mesh>
                </group>
            </Float>

            {/* Floating Portal Nodes */}
            {[0, 1, 2, 3].map((i) => (
                <mesh key={i} position={[
                    Math.cos(i * Math.PI / 2) * 4,
                    0,
                    Math.sin(i * Math.PI / 2) * 4
                ]}>
                    <octahedronGeometry args={[0.5]} />
                    <meshStandardMaterial color="#e91e63" wireframe />
                </mesh>
            ))}

            <Text
                position={[0, 4, 0]}
                fontSize={0.4}
                color="#e91e63"
                anchorX="center"
                anchorY="middle"
            >
                PORTAL HUB
            </Text>
        </group>
    );
}
