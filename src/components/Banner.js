import React from 'react';
import camera2 from './asset/camera-icon.png';
import { Button, Container } from 'react-bootstrap';

export default function Banner() {
  const bannerContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '500px', 
    backgroundColor:'#ffffff', 
    color: '#000000', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 20px',
  };

  const headingStyle = {
    fontFamily: 'Utopia Std, serif',
    fontSize: '4rem',
  };

  const paragraphStyle = {
    fontFamily: 'Utopia Std, serif',
    fontSize: '1.5rem',
  };

  function handleClick(){
    window.location.href = '/HeroSection';
  }

  return (
    <div style={bannerContainerStyle}>
      <div>
        <h1 style={headingStyle}>Capturing Life Through the Lens <img src={camera2} alt='camera' width={100} height={100} /></h1>
        <Container>
        <p style={paragraphStyle}>
          Life unfolds its myriad hues with every passing moment, and I am here to capture
          those stories through the lens of my camera. Each photo tells a unique tale,
          each frame holding a piece of life's intricate tapestry.
        </p>
        </Container>
        <Button variant='dark' className='banner-btn' onClick={handleClick}>Explore More</Button>
      </div>
    </div>
  );
}
