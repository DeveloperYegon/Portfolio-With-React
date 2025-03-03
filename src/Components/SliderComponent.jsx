import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import educ1 from '../assets/1.png';
import educ2 from '../assets/2.png';
import educ3 from '../assets/3.png';
import educ4 from '../assets/4.png';
import educ5 from '../assets/5.png';
import educ6 from '../assets/6.png';
import educ7 from '../assets/7.png';
import educ8 from '../assets/8.png';

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
          <img src={educ1} alt="Slide 1" />
         
        </div>
        <div>
        <img src={educ2} alt="Slide 1" />
        </div> 
        <div>
        <img src={educ3} alt="Slide 1" />
        </div>
        <div>
        <img src={educ4} alt="Slide 1" />
        </div>
        <div>
        <img src={educ7} alt="Slide 1" />
        </div>
        <div>
        <img src={educ5} alt="Slide 1" />
        </div>
        <div>
        <img src={educ6} alt="Slide 1" />
        </div> <div>
        <img src={educ8} alt="Slide 1" />
        </div>
       
      </Slider>
    </div>
  );
};

export default SliderComponent;
