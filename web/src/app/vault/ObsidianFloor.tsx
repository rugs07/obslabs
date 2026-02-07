"use client";

import { MeshReflectorMaterial } from '@react-three/drei';

export default function ObsidianFloor() {
    return (
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <circleGeometry args={[10, 64]} />
            <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={1024}
                mixBlur={1}
                mixStrength={40}
                roughness={0.1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#000000"
                metalness={0.9}
            />
        </mesh>
    );
}
