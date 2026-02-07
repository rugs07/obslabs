import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export default function TechLab({ position }: { position: [number, number, number] }) {
    const groupRef = useRef<any>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Subtle floating animation for the whole room content
            groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    return (
        <group position={position} ref={groupRef}>
            {/* Lab Platform */}
            <mesh position={[0, -2, 0]} receiveShadow>
                <cylinderGeometry args={[6, 7, 0.5, 6]} />
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Holographic Code Screens */}
            {[0, 1, 2].map((i) => (
                <group key={i} rotation={[0, (i * Math.PI * 2) / 3, 0]}>
                    <mesh position={[0, 0, -4]}>
                        <planeGeometry args={[3, 2]} />
                        <meshBasicMaterial color="#00e5cc" transparent opacity={0.3} side={2} />
                    </mesh>
                    <Text
                        position={[0, 0, -3.9]}
                        fontSize={0.15}
                        color="#00e5cc"
                        anchorX="center"
                        anchorY="middle"
                        maxWidth={2.8}
                    >
                        {`SYSTEM_STATUS: ONLINE\nCORE_TEMP: 450K\nQUANTUM_FLUX: STABLE\n\n>> INITIATING PROTOCOL ${i + 1}`}
                    </Text>
                </group>
            ))}

            {/* Central Server Column */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[1, 1, 4, 16]} />
                <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
            </mesh>

            {/* Server lights */}
            {Array.from({ length: 5 }).map((_, i) => (
                <pointLight
                    key={i}
                    position={[0, i - 2, 1.2]}
                    intensity={0.5}
                    color="#00e5cc"
                    distance={2}
                />
            ))}

            {/* Area Label */}
            <Text
                position={[0, 3, 0]}
                fontSize={0.5}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
            >
                TECH LAB
            </Text>
        </group>
    );
}
