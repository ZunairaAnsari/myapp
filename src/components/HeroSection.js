import React from 'react';
import { Stack } from 'react-bootstrap';
import Image1 from './asset/heroSectionImages/1.jpg.jpg';
import Image2 from './asset/heroSectionImages/architecture.jpg';
import Image3 from './asset/heroSectionImages/spring.jpg';
import food from './asset/heroSectionImages/food.jpg';
import linked from './asset/heroSectionImages/linked.jpg';

export default function HeroSection({ history }) {
  const navigateToPage = (page) => {
    window.location.href = "/nature";
  };

  const imageStyle = {
    borderRadius: '10px'
  }

  return (
    <div style={{ position: 'relative' }}>
      <Stack direction="horizontal" gap={2}>
        <div className="p-2" style={{ position: 'relative' }}>
          <img src={Image1} style={imageStyle} width={'600px'} height={'450px'} alt='1' />
          <button 
            onClick={() => navigateToPage('/nature')}
            className="button">
           <h3>Nature</h3>
          </button>
        </div>
        <div className="p-2 ms-auto" style={{ position: 'relative' }}>
          <img src={Image2} style={imageStyle} width={'300px'} height={'450px'} alt='architecture' />
          <button 
            onClick={() => navigateToPage('/page2')}
            className="button">
            <h3>Architecture</h3>
          </button>
        </div>
        <div className="p-2" style={{ position: 'relative' }}>
          <img src={Image3} style={imageStyle} width={'300px'} height={'450px'} alt='spring'/>
          <button 
            onClick={() => navigateToPage('/page3')}
            className="button">
            <h3>Spring</h3>
          </button>
        </div>
      </Stack>

      <Stack direction="horizontal" gap={2}>
        <div className="p-2" style={{ position: 'relative' }}>
          <img src={food} style={imageStyle} width={'850px'} height={'450px'} alt='1' />
          <button 
            onClick={() => navigateToPage('/page1')}
            className="button">
            Meals and Appitizers
          </button>
        </div>
        <div className="p-2" style={{ position: 'relative' }}>
          <img src={linked} style={imageStyle} width={'400px'} height={'450px'} alt='spring'/>
          <button 
            onClick={() => navigateToPage('/page3')}
            className="button">
            Go to Page 3
          </button>
        </div>
      </Stack>
    </div>
  );
}

