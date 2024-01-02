import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Slider props
interface SliderComponentProps {
  children: React.ReactNode;
}

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
      },
    },
  ],
  slidesToScroll: 1,
  slidesToShow: 3,
  speed: 500,
};

function SliderComponent({ children }: SliderComponentProps) {
  return (
    <Slider
      dots={sliderSettings.dots}
      infinite={sliderSettings.infinite}
      speed={sliderSettings.speed}
      slidesToShow={sliderSettings.slidesToShow}
      slidesToScroll={sliderSettings.slidesToScroll}
      responsive={sliderSettings.responsive}
    >
      {children}
    </Slider>
  );
}

export default SliderComponent;
