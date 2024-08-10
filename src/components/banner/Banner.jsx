import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

// Import images
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/1.png";
import image6 from "../../assets/2.png";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable previous and next buttons
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 2000, // Slide change interval in milliseconds
  };

  return (
    <>
      <Slider {...settings}>
        <div className="px-[1.5%] box-border">
          <img
            src={image1}
            alt="Slide 1"
            className="w-full h-auto object-contain rounded-[10px]"
          />
        </div>
        <div className="px-[1.5%] box-border">
          <img
            src={image2}
            alt="Slide 2"
            className="w-full h-auto object-contain rounded-[10px]"
          />
        </div>
        <div className="px-[1.5%] box-border">
          <img
            src={image3}
            alt="Slide 3"
            className="w-full h-auto object-contain rounded-[10px]"
          />
        </div>
        <div className="px-[1.5%] box-border  ">
          <img
            src={image4}
            alt="Slide 4"
            className="w-full h-auto object-contain rounded-[10px] "
          />
        </div>
        <div className="px-[1.5%] box-border">
          <img
            src={image5}
            alt="Slide 5"
            className="w-full h-auto object-contain rounded-[10px]"
          />
        </div>
        <div className="px-[1.5%] box-border">
          <img
            src={image6}
            alt="Slide 6"
            className="w-full h-auto object-contain rounded-[10px]"
          />
        </div>
      </Slider>
    </>
  );
};

export default Banner;
