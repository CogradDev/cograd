import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './AwardsCarousel.scss';

import awardImage1 from "../assets/aw1.webp";
import awardImage2 from "../assets/aw2.webp";
import awardImage3 from "../assets/aw3.webp";
import awardImage4 from "../assets/aw4.webp";
import awardImage5 from "../assets/aw5.webp";

const awardsData = [
  {
    id: 1,
    title: "Excellence in Education",
    description: "Awarded for outstanding performance in education and innovative teaching methodologies.",
    image: awardImage1,
  },
  {
    id: 2,
    title: "Best School Infrastructure",
    description: "Recognized for providing state-of-the-art facilities and infrastructure for enhanced learning.",
    image: awardImage2,
  },
  {
    id: 3,
    title: "Innovative Curriculum",
    description: "Honored for developing and implementing a curriculum that fosters critical thinking and creativity.",
    image: awardImage3,
  },
  {
    id: 4,
    title: "Community Engagement",
    description: "Awarded for active involvement in community service and promoting social responsibility among students.",
    image: awardImage4,
  },
  {
    id: 5,
    title: "Excellence in Sports",
    description: "Recognized for exceptional achievements in sports and promoting physical education.",
    image: awardImage5,
  },
];

const AwardsCarousel = () => {
  const [centerIndex, setCenterIndex] = useState(2);

  const handleSlideChange = (swiper) => {
    setCenterIndex(swiper.realIndex);
  };

  return (
    <section className="awards">
      <h2>Awards and Recognition</h2>
      <Swiper
        modules={[EffectCoverflow, Keyboard, Mousewheel, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        keyboard={{ enabled: true }}
        mousewheel={{ forceToAxis: true }}
        loop={true}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {awardsData.map((award, index) => (
          <SwiperSlide key={award.id} className={`award-slide`}>
            <div className="carousel-container">
              <img src={award.image} alt={award.title} />
              {centerIndex === index ? (
                <div className="award-info">
                  <h3>{award.title}</h3>
                  {/* <p>{award.description}</p> */}
                </div>
              ) : null}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AwardsCarousel;
