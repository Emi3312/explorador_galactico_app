import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import telescopioImage from './images/telescopio.png'; 
import planetaImage from './images/planet.png'

const screens = [
    {
        id: 0,
        text: '¡Bienvenido a tu aventura espacial! Hoy aprenderás sobre los **exoplanetas**, ¡planetas fuera de nuestro sistema solar! ¿Estás listo para comenzar?',
        buttonText: '¡Explorar!',
    },
    {
        id: 1,
        text: 'Un **exoplaneta** es un planeta que gira alrededor de una estrella que **no es nuestro Sol**. ¡Hay miles allá afuera!',
        buttonText: 'Siguiente',
    },
    {
        id: 2,
        text: 'Los científicos usan **telescopios** para verlos. Cuando un exoplaneta pasa frente a una estrella, la luz de la estrella se atenúa un poco. ¡Eso nos da una pista!',
        buttonText: 'Siguiente',
    },
    {
        id: 3,
        text: 'Algunos exoplanetas podrían parecerse a la Tierra, pero la mayoría son muy diferentes. Hay gigantes de gas, planetas rocosos, llenos de lava, ¡y hasta unos que podrían tener agua!',
        buttonText: 'Siguiente',
    },
    {
        id: 4,
        text: '¡Ya hemos descubierto más de **5,000** exoplanetas, y seguimos buscando! ¿Quién sabe qué sorpresas encontraremos en el futuro?',
        buttonText: 'Ver exoplanetas',
    },
];

// Estilos en constantes
const styles = {
    container: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        overflow: 'hidden',
    },
    stars: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 1,
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
    sunOrbit: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100px',
        height: '100px',
        marginTop: '-50px',
        marginLeft: '-50px',
        backgroundColor: '#FFD700',
        borderRadius: '50%',
        zIndex: 2,
        boxShadow: '0 0 30px 15px #FFD700',
    },
    orbit: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '200px',
        height: '200px',
        marginTop: '-100px',
        marginLeft: '-100px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '50%',
        zIndex: 2,
        animation: 'orbitAnimation 5s linear infinite', 
    },
    planetOrbit: {
        position: 'absolute',
        top: '50%',
        left: '0%',
        width: '20px',
        height: '20px',
        backgroundColor: '#00FF00',
        borderRadius: '50%',
        marginTop: '-10px',
        marginLeft: '-10px',
        boxShadow: '0 0 10px 2px #00FF00',
    },
    sunTransit: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        width: '100px',
        height: '100px',
        marginTop: '-50px',
        marginLeft: '-50px',
        backgroundColor: '#FFD700',
        borderRadius: '50%',
        zIndex: 2,
        boxShadow: '0 0 30px 15px #FFD700',
        animation: 'brighten 6s ease-in-out infinite', 
    },
    planetTransit: {
        position: 'absolute',
        top: '40%',
        left: '0%',
        width: '30px',
        height: '30px',
        backgroundColor: '#00FF00',
        borderRadius: '50%',
        animation: 'transit 6s linear infinite', 
        boxShadow: '0 0 10px 2px #00FF00',
    },
    telescopio: {
        width: '300px',
        marginBottom: '2rem',
        animation: 'move 4s ease-in-out infinite', 
    },
    content: {
        position: 'relative',
        zIndex: 2,
        padding: '2rem',
    },
    text: {
        fontSize: '1.5rem',
        marginBottom: '2rem',
    },
    button: {
        padding: '1rem 2rem',
        fontSize: '1rem',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#00FFFF',
        color: '#000',
        boxShadow: '0 0 10px #00FFFF',
        transition: 'transform 0.3s',
        position: 'absolute',
        bottom: '5px',
        left: '50%',
        transform: 'translateX(-50%)',
    },
};


const generateStars = (numStars) => {
    const starsArray = [];
    for (let i = 0; i < numStars; i++) {
        const size = Math.random() * 3 + 1; 
        const style = {
            ...styles.star,
            width: `${size}px`,
            height: `${size}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
        };
        starsArray.push(<div key={`star-${i}`} style={style}></div>);
    }
    return starsArray;
};


const renderTextWithBold = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g); 
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return (
                <strong key={index}>
                    {part.slice(2, -2)} 
                </strong>
            );
        }
        return part; 
    });
};

const AventuraEspacial = () => {
    const [currentScreen, setCurrentScreen] = useState(0);
    const navigate = useNavigate();

    const handleNext = () => {
        if (currentScreen < screens.length - 1) {
            setCurrentScreen(currentScreen + 1);
        } else {
            navigate('/carrusel');
        }
    };

    
    const stars = useMemo(() => generateStars(500), []);

    const { text, buttonText } = screens[currentScreen];

    
    const keyframes = `
    @keyframes twinkle {
      0% { opacity: 0.8; }
      50% { opacity: 0.2; }
      100% { opacity: 0.8; }
    }
    @keyframes orbitAnimation {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes brighten {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    @keyframes transit {
      0% { left: 0%; }
      50% { left: 50%; }
      100% { left: 100%; }
    }
    @keyframes move {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  `;

    return (
        <div style={styles.container}>
            
            <style>{keyframes}</style>

            
            {(currentScreen === 0 || currentScreen === 1 || currentScreen === 2 || currentScreen === 3 || currentScreen === 4) && (
                <div style={styles.stars}>
                    {stars}
                </div>
            )}

            
            {currentScreen === 1 && (
                <div>
                    <div style={styles.sunOrbit}></div> 
                    <div style={styles.orbit}>
                        <div style={styles.planetOrbit}></div> 
                    </div>
                </div>
            )}

            
            {currentScreen === 2 && (
                <div>
                    <div style={styles.sunTransit}></div> 
                    <div style={styles.planetTransit}></div> 
                </div>
            )}

            
            <div style={styles.content}>
                <p style={styles.text}>
                    {renderTextWithBold(text)}
                </p>

                {currentScreen === 2 && (
                    <img
                        src={telescopioImage}
                        alt="Telescopio"
                        style={styles.telescopio} 
                    />
                )}

                {currentScreen === 3 && (
                    <img
                        src={planetaImage}
                        alt="Telescopio"
                        style={styles.telescopio} 
                    />
                )}

                <button style={styles.button} onClick={handleNext}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default AventuraEspacial;
