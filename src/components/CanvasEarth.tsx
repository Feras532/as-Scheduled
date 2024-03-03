import { Application } from '@splinetool/runtime';
import { useEffect, useRef } from 'react'

const CanvasEarth = () => {

    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const app = new Application(canvasRef.current);
            app.load('https://prod.spline.design/03n0spMTVRHaY84I/scene.splinecode')

                .then(() => {
                    // Spline scene is loaded
                })
                .catch((error) => {
                    console.error('Error loading the Spline scene:', error);
                });
        }
    }, []);

    return (
        <canvas ref={canvasRef}></canvas>
    )
}

export default CanvasEarth