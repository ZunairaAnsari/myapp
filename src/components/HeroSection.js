import React from 'react'
import Image1 from './asset/heroSectionImages/1.jpg.jpg';
import Image2 from './asset/heroSectionImages/architecture.jpg';
import Image3 from './asset/heroSectionImages/spring.jpg';
import { Stack } from 'react-bootstrap';

export default function HeroSection() {
  return (
    <div>
      <Stack direction="horizontal" gap={1}>
      <div className="p-2"><img src={Image1} width={'600px'} height={'450px'} alt='1' /></div>
      <div className="p-2 ms-auto"><img src={Image2} width={'300px'} height={'450px'} alt='architecture' /></div>
      <div className="p-2"><img src={Image3} width={'300px'} height={'450px'} alt='spring'/></div>
    </Stack>
    </div>
  );
}
