import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import educ from '../assets/KCA University.png';
import Roonie from '../assets/Roonie.png';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container" style={{ width: '80%', margin: '0 auto' }}>
      <Slider {...settings}>
        <div>
          <img src={educ} alt="Slide 1" />
        </div>
       
      </Slider>
    </div>
  );
};

export default SliderComponent;
