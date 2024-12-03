import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';

const App = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  return (
    <div style={styles.container}>
      <div style={styles.webcamContainer}>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          style={styles.webcam}
        />
        <button onClick={capture} style={styles.button}>
          Capture Photo
        </button>
      </div>
      {imgSrc && (
        <div style={styles.imageContainer}>
          <img src={imgSrc} alt="Captured" style={styles.capturedImage} />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
    padding: '20px',
  },
  webcamContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  webcam: {
    borderRadius: '10px',
    maxWidth: '100%',
    width: '320px',
    height: '240px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  imageContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  capturedImage: {
    borderRadius: '10px',
    maxWidth: '100%',
    width: '320px',
    height: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

export default App;
