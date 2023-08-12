import React from 'react'
import './card.css'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Swiping({ item })  {
  return (
    <div>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='swiper-container'
    >
      {item.photos.map((it,i) => (
         <SwiperSlide key={i}>
            <img src={it} className="card-img" />
         </SwiperSlide>
       ))}
    </Swiper>
    <div className="card-info-flex">
        <h3 className="card-title">{item.name}</h3>
        <div className="card-rating">
          <StarRateRoundedIcon />
          <p>{item.rating}</p>
        </div>
      </div>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{item.description}</p>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{item.date}</p>
      <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black" }}>
        <span style={{ fontWeight: "600" }}>${item.price_per_night}</span> night
      </p>
    </div>
  )
}

export default Swiping