import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Lista completa de exoplanetas
const exoplanetas = [
    {
        "nombre": "HD 189733b",
        "descripción": "Este lejano planeta azul puede parecer un refugio acogedor, pero no te dejes engañar: el clima aquí es mortal. El color azul cobalto del planeta proviene de una atmósfera brumosa y quemada que contiene nubes con cristales.",
        "distancia_anos_luz": 64,
        "constelación": "Velpecula",
        "imagen_url": "",
        "version_ar": "https://mariru1z.github.io/HD-189733b/"
    },
    {
        "nombre": "TRAPPIST-1e",
        "descripción": "Uno de los siete planetas de tamaño terrestre en el sistema TRAPPIST-1, ubicado en la zona habitable, con posibilidad de albergar agua líquida.",
        "distancia_anos_luz": 41,
        "constelación": "Acuario",
        "imagen_url": "",
        "version_ar": "https://mariru1z.github.io/TRAPPIST-1e/"
    },
    {
        "nombre": "55 Cancri e",
        "descripción": "Este mundo súper caliente está cubierto por un océano global de lava y tiene cielos brillantes.",
        "distancia_anos_luz": 41,
        "constelación": "Cáncer",
        "imagen_url": "",
        "version_ar": "https://mariru1z.github.io/55-Cancri-e/"
    },
    {
        "nombre": "WASP-12b",
        "descripción": "Un gigante gaseoso que está siendo estirado y desgarrado por la gravedad de su estrella, completando una órbita en solo un día terrestre.",
        "distancia_anos_luz": 1393,
        "constelación": "Auriga",
        "imagen_url": "",
        "version_ar": "https://mariru1z.github.io/WASP-12b/"
    },
    {
        "nombre": "Kepler-22b",
        "descripción": "Una súper-Tierra posiblemente cubierta por un océano, ubicada en la zona habitable, siendo uno de los primeros planetas de este tipo descubiertos.",
        "distancia_anos_luz": 635,
        "constelación": "Cisne",
        "imagen_url": "",
        "version_ar": "https://mariru1z.github.io/Kepler-22b/"
    },
    {
        "nombre": "Proxima Centauri-b",
        "descripción": "El exoplaneta más cercano a nuestro sistema solar, orbitando en la zona habitable de la estrella Proxima Centauri, a solo 4 años luz de distancia.",
        "distancia_anos_luz": 4,
        "constelación": "Centauro",
        "imagen_url": "",
        "version_ar": "https://mariru1z.github.io/Proxima-Centauri-b/"
    },
    {
        "nombre": "Kepler-452b",
        "descripción": "Llamado 'el primo de la Tierra', este planeta orbita en la zona habitable de una estrella muy similar a nuestro Sol.",
        "distancia_anos_luz": 1799,
        "constelación": "Cisne",
        "imagen_url": "",
        "version_ar": "https://mariru1z.github.io/Kepler-452b/"
    },
    {
        "nombre": "Kepler-10b",
        "descripción": "Un exoplaneta rocoso con una superficie cubierta de lava, orbitando extremadamente cerca de su estrella con temperaturas superiores a los 1,300°C.",
        "distancia_anos_luz": 605,
        "constelación": "Draco",
        "imagen_url": "",
        "version_ar": "https://mariru1z.github.io/Kepler-10b/"
    },
    {
        "nombre": "Upsilon Andromedae b",
        "descripción": "Un gigante gaseoso con diferencias extremas de temperatura entre su lado diurno y nocturno, un mundo de 'fuego y hielo'.",
        "distancia_anos_luz": 44,
        "constelación": "Andrómeda",
        "imagen_url": "",
        "version_ar": "https://mariru1z.github.io/Upsilon-Andromedae-b/"
    },
    {
        "nombre": "HR 5183 b",
        "descripción": "Conocido como el 'planeta látigo' por su órbita altamente excéntrica, tarda entre 74 años en completar una revolución alrededor de su estrella.",
        "distancia_anos_luz": 103,
        "constelación": "Virgo",
        "imagen_url": "",
        "version_ar": "https://mariru1z.github.io/HR5183b/"
    }
];

const CarruselExoplanetas = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showCongratsModal, setShowCongratsModal] = useState(false);


    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % exoplanetas.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + exoplanetas.length) % exoplanetas.length);
    };

    const {
        nombre,
        descripción,
        distancia_anos_luz,
        constelación,
        version_ar,
    } = exoplanetas[currentIndex];

    // Estilos generales
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
        planetContainer: {
            position: 'relative',
            margin: '0 auto',
            marginTop: '2rem',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            boxShadow: '0 0 30px',
            animation: '',
        },
        infoContainer: {
            marginTop: '1rem',
            padding: '0 2rem',
        },
        nombre: {
            fontSize: '2rem',
            marginBottom: '1rem',
        },
        descripción: {
            fontSize: '1.2rem',
            marginBottom: '1rem',
        },
        datos: {
            fontSize: '1rem',
            marginBottom: '1rem',
        },
        button: {
            padding: '1rem 2rem',
            margin: '0.5rem',
            fontSize: '1rem',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#00FFFF',
            color: '#000',
            boxShadow: '0 0 10px #00FFFF',
            transition: 'transform 0.3s',
        },
        navButtons: {
            position: 'absolute',
            top: '50%',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
        },
        navButton: {
            background: 'none',
            border: 'none',
            color: '#00FFFF',
            fontSize: '2rem',
            cursor: 'pointer',
        },
        backButton: {
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            background: 'none',
            border: 'none',
            color: '#00FFFF',
            fontSize: '1.5rem',
            cursor: 'pointer',
        },
        // Estilos para los modales
        modalOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
        },
        modalContent: {
            backgroundColor: '#1a1a1a',
            padding: '2rem',
            borderRadius: '10px',
            textAlign: 'center',
            color: '#fff',
            maxWidth: '90%',
            boxShadow: '0 0 20px #00FFFF',
        },
        modalButton: {
            padding: '0.8rem 1.5rem',
            margin: '0.5rem',
            fontSize: '1rem',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#00FFFF',
            color: '#000',
            boxShadow: '0 0 10px #00FFFF',
        },
    };

    // Definir animaciones específicas para cada planeta
    const keyframes = `
      @keyframes rotate${currentIndex} {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes pulsate${currentIndex} {
        0% { transform: scale(1); box-shadow: 0 0 10px #fff; }
        50% { transform: scale(1.1); box-shadow: 0 0 20px #fff; }
        100% { transform: scale(1); box-shadow: 0 0 10px #fff; }
      }
      @keyframes flicker${currentIndex} {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
      @keyframes orbit${currentIndex} {
        from { transform: rotate(0deg) translateX(50px) rotate(0deg); }
        to { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
      }
      @keyframes stretch${currentIndex} {
        0%, 100% { transform: scaleX(1); }
        50% { transform: scaleX(1.2); }
      }
      @keyframes moveLeftRight${currentIndex} {
        0%, 100% { transform: translateX(-50px); }
        50% { transform: translateX(50px); }
      }
    `;

    // Estilos y animaciones para cada planeta
    const planetStyles = [
        // HD 189733b - Planeta azul con atmósfera de cristales
        {
            background: 'radial-gradient(circle at 30% 30%, #1e90ff, #000080)',
            boxShadow: '0 0 30px #1e90ff',
            animation: `rotate${currentIndex} 20s linear infinite`,
        },
        // TRAPPIST-1e - Posible agua líquida
        {
            background: 'radial-gradient(circle at 50% 50%, #7fffd4, #006400)',
            boxShadow: '0 0 30px #7fffd4',
            animation: `pulsate${currentIndex} 4s ease-in-out infinite`,
        },
        // 55 Cancri e - Mundo súper caliente cubierto de lava
        {
            background: 'radial-gradient(circle at 50% 50%, #ff4500, #8b0000)',
            boxShadow: '0 0 30px #ff4500',
            animation: `flicker${currentIndex} 1s infinite`,
        },
        // WASP-12b - Gigante gaseoso estirado por su estrella
        {
            background: 'radial-gradient(ellipse at center, #ffd700, #ff8c00)',
            boxShadow: '0 0 120px #ffd700',
            animation: `stretch${currentIndex} 3s ease-in-out infinite`,
        },
        // Kepler-22b - Súper Tierra posiblemente cubierta por un océano
        {
            background: 'radial-gradient(circle at 50% 50%, #1e90ff, #00008b)',
            boxShadow: '0 0 30px #1e90ff',
            animation: `pulsate${currentIndex} 6s ease-in-out infinite`,
        },
        // Proxima Centauri-b - Exoplaneta más cercano
        {
            background: 'radial-gradient(circle at 50% 50%, #228b22, #006400)',
            boxShadow: '0 0 30px #228b22',
            animation: '',
        },
        // Kepler-452b - "Primo de la Tierra" (mover de izquierda a derecha)
        {
            background: 'radial-gradient(circle at 50% 50%, #2e8b57, #006400)',
            boxShadow: '0 0 30px #2e8b57',
            animation: `moveLeftRight${currentIndex} 5s ease-in-out infinite`,
        },
        // Kepler-10b - Superficie cubierta de lava
        {
            background: 'radial-gradient(circle at 50% 50%, #ff4500, #8b0000)',
            boxShadow: '0 0 30px #ff4500',
            animation: `flicker${currentIndex} 0.5s infinite`,
        },
        // Upsilon Andromedae b - Mundo de "fuego y hielo"
        {
            background: 'linear-gradient(45deg, #ff4500 50%, #1e90ff 50%)',
            boxShadow: '0 0 30px #ff4500',
            animation: `rotate${currentIndex} 15s linear infinite`,
        },
        // HR 5183 b - "Planeta látigo" con órbita excéntrica
        {
            background: 'radial-gradient(circle at 50% 50%, #ffff00, #ff8c00)',
            boxShadow: '0 0 30px #ffff00',
            animation: `orbit${currentIndex} 10s linear infinite`,
        },
    ];

    // Seleccionar los estilos del planeta actual
    const currentPlanetStyle = {
        ...styles.planetContainer,
        ...planetStyles[currentIndex],
    };

    const handleBack = () => {
        setShowConfirmModal(true);
    };

    const confirmEndAdventure = () => {
        setShowConfirmModal(false);
        setShowCongratsModal(true);
    };

    const closeCongratsModal = () => {
        setShowCongratsModal(false);
        navigate('/');
    };



    return (
        <div style={styles.container}>
            {/* Añadir las animaciones CSS específicas */}
            <style>{keyframes}</style>

            <button style={styles.backButton} onClick={handleBack}>
                ⬅ Inicio
            </button>

            <div style={styles.navButtons}>
                <button style={styles.navButton} onClick={handlePrev}>
                    &#10094;
                </button>
                <button style={styles.navButton} onClick={handleNext}>
                    &#10095;
                </button>
            </div>

            <div style={currentPlanetStyle}></div>

            <div style={styles.infoContainer}>
                <h2 style={styles.nombre}>{nombre}</h2>
                <p style={styles.descripción}>{descripción}</p>
                <p style={styles.datos}>
                    <strong>Distancia en años luz:</strong> {distancia_anos_luz}
                </p>
                <p style={styles.datos}>
                    <strong>Constelación:</strong> {constelación}
                </p>
                <button
                    style={styles.button}
                    onClick={() => (window.location.href = version_ar)}
                >
                    Ver en AR
                </button>
            </div>

            {/* Modal de confirmación */}
            {showConfirmModal && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modalContent}>
                        <h2>¿Deseas terminar tu aventura?</h2>
                        <p>
                            Si sales ahora, regresarás al menú principal. ¿Estás seguro?
                        </p>
                        <button
                            style={styles.modalButton}
                            onClick={confirmEndAdventure}
                        >
                            Sí, terminar
                        </button>
                        <button
                            style={styles.modalButton}
                            onClick={() => setShowConfirmModal(false)}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            )}

            {/* Modal de felicitación */}
            {showCongratsModal && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modalContent}>
                        <h2>¡Felicidades!</h2>
                        <p>
                            Has completado tu aventura espacial explorando exoplanetas.
                            ¡Esperamos que hayas aprendido mucho!
                        </p>
                        <button
                            style={styles.modalButton}
                            onClick={closeCongratsModal}
                        >
                            Volver al menú
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CarruselExoplanetas;