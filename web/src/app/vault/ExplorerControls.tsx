import { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { PointerLockControls } from '@react-three/drei';
import { Vector3 } from 'three';

export default function ExplorerControls() {
    const { camera } = useThree();
    const controlsRef = useRef<any>(null);
    const moveForward = useRef(false);
    const moveBackward = useRef(false);
    const moveLeft = useRef(false);
    const moveRight = useRef(false);
    const velocity = useRef(new Vector3());
    const direction = useRef(new Vector3());

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            switch (event.code) {
                case 'ArrowUp':
                case 'KeyW':
                    moveForward.current = true;
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    moveLeft.current = true;
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    moveBackward.current = true;
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    moveRight.current = true;
                    break;
            }
        };

        const onKeyUp = (event: KeyboardEvent) => {
            switch (event.code) {
                case 'ArrowUp':
                case 'KeyW':
                    moveForward.current = false;
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    moveLeft.current = false;
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    moveBackward.current = false;
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    moveRight.current = false;
                    break;
            }
        };

        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('keyup', onKeyUp);
        };
    }, []);

    useFrame((state, delta) => {
        if (controlsRef.current?.isLocked) {
            velocity.current.x -= velocity.current.x * 10.0 * delta;
            velocity.current.z -= velocity.current.z * 10.0 * delta;

            direction.current.z = Number(moveForward.current) - Number(moveBackward.current);
            direction.current.x = Number(moveRight.current) - Number(moveLeft.current);
            direction.current.normalize();

            // Speed multiplier
            if (moveForward.current || moveBackward.current) velocity.current.z -= direction.current.z * 400.0 * delta;
            if (moveLeft.current || moveRight.current) velocity.current.x -= direction.current.x * 400.0 * delta;

            controlsRef.current.moveRight(-velocity.current.x * delta);
            controlsRef.current.moveForward(-velocity.current.z * delta);

            // Wall Collision (Simple bounds)
            if (camera.position.x < -20) camera.position.x = -20;
            if (camera.position.x > 20) camera.position.x = 20;
            if (camera.position.z < -20) camera.position.z = -20;
            if (camera.position.z > 20) camera.position.z = 20;

            // Keep height constant
            camera.position.y = 2;
        }
    });

    return (
        <PointerLockControls ref={controlsRef} />
    );
}
