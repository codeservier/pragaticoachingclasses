import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

// Import images
import image1 from "../../assets/1.webp";
import image2 from "../../assets/2.webp";
import image3 from "../../assets/3.webp";
import image4 from "../../assets/4.webp";
import image5 from "../../assets/1.webp";
import image6 from "../../assets/2.webp";

export const Upcoming = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="  ">
      <h1 className="text-2xl font-medium  px-0 py-4 text-[#800020] text-400  mb-4">
        Upcoming batches
      </h1>
      <Slider {...settings}>
        <div>
          <img
            src={image1}
            alt="Slide 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <img
            src={image2}
            alt="Slide 2"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <img
            src={image3}
            alt="Slide 3"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <img
            src={image4}
            alt="Slide 4"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <img
            src={image5}
            alt="Slide 5"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <img
            src={image6}
            alt="Slide 6"
            className="h-full w-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};
