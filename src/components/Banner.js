import React from 'react';
import banner from './asset/banner.jpg';

export default function Banner() {
  const bannerContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '500px', 
  };

  const bannerImageStyle = {
    width: '100%',
    height: '100%',
  };

  const overlayStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: '2rem',
  };  

  return (
    <div style={bannerContainerStyle}>
      <img src={banner} alt='banner' style={bannerImageStyle} />
      <div style={overlayStyle}>
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'Utopia Std, serif' }}>Capturing Life Through the Lens</h1>
      <p style={{ fontFamily: 'Utopia Std, serif' }}>
        Life unfolds its myriad hues with every passing moment, and I am here to capture
         those stories through the lens of my camera. Each photo tells a unique tale,
          each frame holding a piece of life's intricate tapestry.
          </p>
    </div>
  </div>
    </div>
  );
}
