import React from "react";
import "./styles/Hero.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";

const Hero = () => {
  return (
    <header className="hero__section">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="hero__slide__container">
            <div className="background__image">
              <img src={hero1} alt="" />
            </div>
            <div className="background__content">
              <div className="container">
                <h2>
                  Need Trusted <span>Technician</span> For Your
                  <span> Project?</span>
                </h2>
                <div className="buttons">
                  <button>Buy Now</button>
                  <button>Sell Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero__slide__container">
            <div className="background__image">
              <img src={hero2} alt="" />
            </div>
            <div className="background__content">
              <div className="container">
                <h2>
                  From <span>Douala</span> to <span>Lagos</span> to
                  <span> Capetown</span> Buy or sell your Properties
                </h2>
                <div className="buttons">
                  <button>Buy Now</button>
                  <button>Sell Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Hero;
