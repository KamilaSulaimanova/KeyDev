import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { loadFull } from 'tsparticles';
import { useMemo } from 'react';
import { useCallback } from 'react';

const ParticlesComponent = () => {
    const options = useMemo(() => {
        return {
            background: {
                color: "#ffffff",
            },
            fullScreen: {
                enable: true,
                zIndex: -9,
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push'
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse'
                    },
                },
                modes: {
                    push: {
                        quantity: 10,
                    },
                    repulse: {
                        radius: 80,
                        // distance: 100,
                    }
                }
            },
            particles: {
                color: {
                    value: "#dd4722"
                },
                links: {
                    enable: true,
                    color: '#5ca8b5',
                    distance: 150,
                },
                move: {
                    enable: true,
                    speed: {min: 1, max: 5},
                },
                opacity: {
                    value: {min: 0.3, max: 0.7},
                },
                size: {
                    value: {min: 1, max: 3},
                },
            },
        };
    }, []);
        
    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
    }, []);

    return <Particles init={particlesInit} params={options} />;
}

export default ParticlesComponent;