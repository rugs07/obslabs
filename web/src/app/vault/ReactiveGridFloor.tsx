import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function ReactiveGridFloor() {
    const meshRef = useRef<THREE.Mesh>(null);
    const { camera } = useThree();

    useFrame((state) => {
        if (meshRef.current) {
            const material = meshRef.current.material as THREE.ShaderMaterial;
            material.uniforms.uTime.value = state.clock.elapsedTime;
            material.uniforms.uCameraPos.value = new THREE.Vector2(
                camera.position.x,
                camera.position.z
            );
        }
    });

    const vertexShader = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    const fragmentShader = `
        uniform float uTime;
        uniform vec2 uCameraPos;
        varying vec2 vUv;

        void main() {
            // Grid lines
            vec2 grid = abs(fract(vUv * 30.0 - 0.5) - 0.5) / fwidth(vUv * 30.0);
            float line = min(grid.x, grid.y);
            
            // Distance from camera for ripple
            vec2 worldPos = vUv * 20.0 - 10.0;
            float dist = distance(worldPos, uCameraPos);
            float ripple = sin(dist * 2.0 - uTime * 3.0) * 0.5 + 0.5;
            
            // Animated glow
            float gridGlow = 1.0 - min(line, 1.0);
            gridGlow *= ripple;
            
            // Neon cyan grid color
            vec3 color = vec3(0.0, 0.9, 0.8) * gridGlow;
            
            // Add magenta accents
            color += vec3(0.91, 0.12, 0.39) * ripple * 0.3;
            
            gl_FragColor = vec4(color, gridGlow * 0.8);
        }
    `;

    return (
        <mesh
            ref={meshRef}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1.5, 0]}
            receiveShadow
        >
            <planeGeometry args={[20, 20, 1, 1]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={{
                    uTime: { value: 0 },
                    uCameraPos: { value: new THREE.Vector2(0, 0) },
                }}
                transparent
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}
