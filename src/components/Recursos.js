import React from 'react';
import { useNavigate } from 'react-router-dom';

const recursosList = [
  {
    titulo: 'Exploración de Exoplanetas - NASA',
    url: 'https://science.nasa.gov/exoplanets/',
  },
  {
    titulo: 'Tipos de Exoplanetas - NASA',
    url: 'https://science.nasa.gov/exoplanets/planet-types/',
  },
  {
    titulo: 'Datos Curiosos de Exoplanetas - NASA',
    url: 'https://science.nasa.gov/exoplanets/facts/',
  },
  {
    titulo: 'Todo sobre Exoplanetas - NASA Space Place',
    url: 'https://spaceplace.nasa.gov/all-about-exoplanets/sp/',
  },
];

const styles = {
  container: {
    position: 'relative',
    width: '100vw',
    minHeight: '100vh',
    overflow: 'hidden',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '2rem',
  },
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '200%',
    height: '200%',
    backgroundColor: '#000',
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
    animationName: 'twinkle',
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  title: {
    marginTop: '2rem',
    fontSize: '2.5rem',
    textShadow: '0 0 10px #00FFFF',
    zIndex: 1,
  },
  linkContainer: {
    marginTop: '2rem',
    width: '80%',
    zIndex: 1,
  },
  link: {
    display: 'block',
    padding: '1rem',
    margin: '1rem 0',
    fontSize: '1.2rem',
    color: '#FFFFFF',
    textDecoration: 'none',
    background: 'linear-gradient(45deg, #00FFFF, #0040FF)',
    borderRadius: '5px',
    boxShadow: '0 0 10px #00FFFF',
    transition: 'transform 0.3s, background 0.3s',
  },
  backButton: {
    padding: '1rem 2rem',
    fontSize: '1rem',
    borderRadius: '5px',
    background: 'linear-gradient(45deg, #00FFFF, #0040FF)',
    color: '#FFFFFF',
    boxShadow: '0 0 10px #00FFFF',
    marginTop: '2rem',
    cursor: 'pointer',
    zIndex: 1,
  },
};

const Recursos = () => {
  const navigate = useNavigate();

  
  const stars = React.useMemo(() => {
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

  React.useEffect(() => {
    // Inyectar las animaciones CSS en el head del documento
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.innerHTML = `
      @keyframes twinkle {
        0% { opacity: 0.8; }
        50% { opacity: 0.2; }
        100% { opacity: 0.8; }
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.background}>{stars}</div>

      <h1 style={styles.title}>Recursos Adicionales</h1>

      <div style={styles.linkContainer}>
        {recursosList.map((recurso, index) => (
          <a
            key={index}
            href={recurso.url}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                'linear-gradient(45deg, #FFD700, #FF8C00)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                'linear-gradient(45deg, #00FFFF, #0040FF)')
            }
          >
            {recurso.titulo}
          </a>
        ))}
      </div>

      <button style={styles.backButton} onClick={() => navigate('/')}>
        Volver al Menú
      </button>
    </div>
  );
};

export default Recursos;
