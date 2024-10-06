import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom'; 


const styles = {
    container: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        color: '#FFFFFF',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '200%',
        height: '200%',
        backgroundColor: '#000000',
        overflow: 'hidden',
        zIndex: -1,
    },
    star: {
        position: 'absolute',
        width: '2px',
        height: '2px',
        background: 'white',
        borderRadius: '50%',
        opacity: '0.8',
        animation: 'twinkle 2s infinite',
    },
    planet: {
        position: 'absolute',
        borderRadius: '50%',
        animation: 'orbit linear infinite',
    },
    buttonContainer: {
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        padding: '1rem 2rem',
        margin: '1rem',
        fontSize: '1rem',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        background: 'linear-gradient(45deg, #00FFFF, #0040FF)',
        color: '#FFFFFF',
        boxShadow: '0 0 10px #00FFFF',
        transition: 'transform 0.3s',
        width: '50%',
        maxWidth: '300px',
    },
};

const ExploradorIntergalactico = () => {
    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        
        const toggleAnimation = () => {
            setAnimate(true); 
            setTimeout(() => {
                setAnimate(false); 
            }, 4000);
        };

        
        toggleAnimation();

        
        const interval = setInterval(() => {
            toggleAnimation();
        }, 5000); 

        return () => clearInterval(interval); 
    }, []);

    
    const titleStyle = {
        fontSize: '2.5rem',
        marginTop: '2rem',
        textShadow: '0 0 10px #00FFFF',
        textAlign: 'center',
    };

    const wordStyle = {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        borderRight: animate ? '0.15em solid' : 'none',
        display: 'block',
        margin: '0 auto',
        width: animate ? '0' : 'auto',
        animation: animate
            ? 'typing 2s steps(15, end), blink-caret 0.75s step-end infinite'
            : 'none',
    };

    const secondWordStyle = {
        ...wordStyle,
        animationDelay: animate ? '2s' : '0s', 
    };

    
    const stars = useMemo(() => {
        const numStars = 500;
        const starsArray = [];
        for (let i = 0; i < numStars; i++) {
            const size = Math.random() * 3 + 1;
            const style = {
                ...styles.star,
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 200}%`,
                left: `${Math.random() * 200}%`,
                animationName: 'twinkle',
                animationDuration: '2s',
                animationIterationCount: 'infinite',
                animationDelay: `${Math.random() * 5}s`,
            };
            starsArray.push(<div key={`star-${i}`} style={style}></div>);
        }
        return starsArray;
    }, []); 

    
    const planets = useMemo(() => {
        const planetColors = [
            'radial-gradient(circle at center, #FFD700, #FF8C00)', // Dorado
            'radial-gradient(circle at center, #FF00FF, #8B00FF)', // Morado
            'radial-gradient(circle at center, #00FF00, #008000)', // Verde
            'radial-gradient(circle at center, #FF0000, #800000)', // Rojo
            'radial-gradient(circle at center, #00FFFF, #008080)', // Cian
            'radial-gradient(circle at center, #FF4500, #FF6347)', // Naranja
        ];

        const numPlanets = 15;
        const planetsArray = [];

        for (let i = 0; i < numPlanets; i++) {
            const size = Math.random() * 50 + 20;
            const topPosition = `${Math.random() * 100}%`;
            const leftPosition = `${Math.random() * 100}%`;
            const color = planetColors[i % planetColors.length];

            const style = {
                ...styles.planet,
                width: `${size}px`,
                height: `${size}px`,
                top: topPosition,
                left: leftPosition,
                background: color,
                animationDuration: `${20 + i * 5}s`,
                animationName: 'orbit',
                animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
            };
            planetsArray.push(<div key={`planet-${i}`} style={style}></div>);
        }
        return planetsArray;
    }, []); // Sin dependencias

    // Definir las animaciones CSS
    const keyframes = `
    @keyframes twinkle {
      0% { opacity: 0.8; }
      50% { opacity: 0.2; }
      100% { opacity: 0.8; }
    }
    @keyframes orbit {
      from { transform: rotate(0deg) translateX(200px) rotate(0deg); }
      to { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
    }
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: white; }
    }
  
    @media (max-width: 600px) {
      h1 {
        font-size: 1.8rem;
      }
    }
  `;

    return (
        <div style={styles.container}>
            <style>{keyframes}</style>
            <div style={styles.background}>
                {stars}
                {planets}
            </div>
            <h1 style={titleStyle}>
                <div style={wordStyle}>Explorador</div>
                <div style={secondWordStyle}>Intergaláctico</div>
            </h1>
            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={() => navigate('/aventura')}>
                    Iniciar viaje
                </button>
                <button style={styles.button} onClick={() => navigate('/idioma')}>
                    Idioma/Dialecto
                </button>
                <button style={styles.button} onClick={() => navigate('/recursos')}>
                    Más recursos
                </button>
            </div>
        </div>
    );
};

export default ExploradorIntergalactico;
