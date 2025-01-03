import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import alex from '../assets/Alexander Njuguna.png';
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
          <img src={alex} alt="Slide 1" />
        </div>
        <div>
          <img src={Roonie} alt="Slide 2" />
        </div>
        <div>
          <img src={alex} alt="Slide 3" />
        </div>
        <div>
          <img src={Roonie} alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
