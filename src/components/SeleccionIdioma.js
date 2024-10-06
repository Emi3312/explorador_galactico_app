import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const idiomas = ['Español', 'Inglés', 'Zapoteco', 'Mixteco'];

const styles = {
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    zIndex: -1, // Asegura que el fondo esté detrás del contenido
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
  option: {
    margin: '1rem 0',
    padding: '1rem 2rem',
    fontSize: '1.5rem',
    borderRadius: '5px',
    background: 'linear-gradient(45deg, #00FFFF, #0040FF)',
    color: '#FFFFFF',
    boxShadow: '0 0 10px #00FFFF',
    cursor: 'pointer',
    transition: 'transform 0.3s, background 0.3s',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1rem',
    borderRadius: '5px',
    background: 'linear-gradient(45deg, #00FFFF, #0040FF)',
    color: '#FFFFFF',
    boxShadow: '0 0 10px #00FFFF',
    marginTop: '2rem',
    cursor: 'pointer',
  },
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
  title: {
    marginTop: '2rem',
    fontSize: '2.5rem',
    textShadow: '0 0 10px #00FFFF',
    zIndex: 1,
  },
};

const SeleccionIdioma = () => {
  const [selectedIdioma, setSelectedIdioma] = useState('Español');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSelectIdioma = (idioma) => {
    if (idioma !== 'Español') {
      setShowModal(true);
    } else {
      setSelectedIdioma(idioma);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGuardarCambios = () => {
    navigate('/');
  };

  // Generar fondo dinámico de estrellas
  const stars = useMemo(() => {
    const numStars = 500;
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
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.background}>
        {stars}
      </div>
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.8; }
          50% { opacity: 0.2; }
          100% { opacity: 0.8; }
        }
      `}</style>

      <h1 style={styles.title}>Selecciona tu Idioma o Dialecto</h1>
      {idiomas.map((idioma) => (
        <div
          key={idioma}
          style={{
            ...styles.option,
            transform: selectedIdioma === idioma ? 'scale(1.1)' : 'scale(1)',
            background:
              selectedIdioma === idioma
                ? 'linear-gradient(45deg, #FFD700, #FF8C00)'
                : styles.option.background,
          }}
          onClick={() => handleSelectIdioma(idioma)}
        >
          {idioma}
        </div>
      ))}

      <button style={styles.button} onClick={handleGuardarCambios}>
        Guardar cambios
      </button>

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2>No disponible</h2>
            <p>Este idioma o dialecto aún no está disponible.</p>
            <button style={styles.modalButton} onClick={handleCloseModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeleccionIdioma;
