import { useRef, useState } from 'react';
import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface InfoPanelProps {
    position: [number, number, number];
    title: string;
    description: string;
    color?: string;
}

export default function InfoPanel({ position, title, description, color = '#00e5cc' }: InfoPanelProps) {
    const [isOpen, setIsOpen] = useState(false);
    const groupRef = useRef<THREE.Group>(null);
    const [opacity, setOpacity] = useState(0);

    useFrame((state) => {
        if (groupRef.current) {
            // Look at camera but lock Y axis for readability
            groupRef.current.lookAt(state.camera.position);

            // Distance check for auto-fade
            const dist = state.camera.position.distanceTo(groupRef.current.position);
            const targetOpacity = dist < 10 ? 1 : 0;
            setOpacity(THREE.MathUtils.lerp(opacity, targetOpacity, 0.1));
        }
    });

    if (opacity < 0.1) return null;

    return (
        <group position={position} ref={groupRef}>
            <Html transform occlude distanceFactor={8} style={{ opacity: opacity, transition: 'opacity 0.2s' }}>
                <div style={{
                    background: 'rgba(0, 0, 0, 0.8)',
                    border: `2px solid ${color}`,
                    borderRadius: '8px',
                    padding: '16px',
                    width: '300px',
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                    fontFamily: 'monospace',
                    boxShadow: `0 0 20px ${color}40`,
                    transform: 'scale(1)',
                    pointerEvents: 'none', // Allow clicking through
                }}>
                    <div style={{
                        borderBottom: `1px solid ${color}80`,
                        paddingBottom: '8px',
                        marginBottom: '8px',
                        fontWeight: 'bold',
                        fontSize: '1.2em',
                        color: color,
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        {title}
                    </div>
                    <div style={{
                        fontSize: '0.9em',
                        lineHeight: '1.4',
                        color: '#ddd'
                    }}>
                        {description}
                    </div>
                    <div style={{
                        marginTop: '12px',
                        fontSize: '0.7em',
                        color: color,
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <span>ID: {Math.floor(Math.random() * 9999)}</span>
                        <span>STATUS: ACTIVE</span>
                    </div>
                </div>
            </Html>

            {/* Connecting Line */}
            <mesh position={[0, -2, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 4]} />
                <meshBasicMaterial color={color} transparent opacity={opacity * 0.5} />
            </mesh>
        </group>
    );
}
