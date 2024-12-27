import React, { useRef, useState } from 'react';
import styles from './mobilevisual.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export default function MobileVisual() {
  return (
    <section id={styles.visual_wrap}>
      <h2 className='hidden'>오늘의 도서</h2>

      {/* <ul id={styles.visual_inner}> */}
      <Swiper
        slidesPerView={2}
        // centeredSlides={true}
        spaceBetween={80}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src='/images/book_img00.gif' alt="책제목" /></SwiperSlide>
        <SwiperSlide><img src='/images/book_img01.gif' alt="책제목" /></SwiperSlide>
        <SwiperSlide><img src='/images/book_img02.gif' alt="책제목" /></SwiperSlide>
        <SwiperSlide><img src='/images/book_img03.gif' alt="책제목" /></SwiperSlide>
        <SwiperSlide><img src='/images/book_img04.gif' alt="책제목" /></SwiperSlide>
        <SwiperSlide><img src='/images/book_img05.gif' alt="책제목" /></SwiperSlide>
        <SwiperSlide><img src='/images/book_img06.gif' alt="책제목" /></SwiperSlide>
      </Swiper>
      {/* </ul> */}

    </section>
  )
}
