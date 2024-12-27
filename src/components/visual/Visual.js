// import React, { useCallback, useRef, useState } from 'react';
import styles from './visual.module.css'
import { Link } from 'react-router-dom'
// import { gsap } from 'gsap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Visual() {

  // const visualInner = useRef()
  // const prevBtn = useRef()
  // const nextBtn = useRef()

  // let visualWidth = visualInner.current.offsetWidth

  // const nextVisual = (() => {
  //   gsap.set(visualInner.children, {left:-visualWidth, opacity:0})
  // })

  // const prevVisual = (()=>{
  // })


  return (
    <section id={styles.visual_wrap}>
      <h2 className='hidden'>책 소개</h2>
      <div id={styles.main_visual}>
        <ul id={styles.main_visual_inner}>

          <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              {/* <li Link to='/' ><img src='./images/main_visual00.jpg' alt='책소개' /></li> */}
              <li><Link to='/'><img src='./images/main_visual00.jpg' alt='책소개' /></Link></li>
            </SwiperSlide>
            <SwiperSlide>
              {/* <li Link to='/' ><img src='./images/main_visual01.jpg' alt='책소개' /></li> */}
              <li><Link to='/'><img src='./images/main_visual01.jpg' alt='책소개' /></Link></li>
            </SwiperSlide>
            <SwiperSlide>
              {/* <li Link to='/' ><img src='./images/main_visual02.jpg' alt='책소개' /></li> */}
              <li><Link to='/'><img src='./images/main_visual02.jpg' alt='책소개' /></Link></li>
            </SwiperSlide>
            <SwiperSlide>
              {/* <li Link to='/' ><img src='./images/main_visual03.jpg' alt='책소개' /></li> */}
              <li><Link to='/'><img src='./images/main_visual03.jpg' alt='책소개' /></Link></li>
            </SwiperSlide>
            <SwiperSlide>
              {/* <li Link to='/' ><img src='./images/main_visual04.jpg' alt='책소개' /></li> */}
              <li><Link to='/'><img src='./images/main_visual04.jpg' alt='책소개' /></Link></li>
            </SwiperSlide>
          </Swiper>

          {/* <li Link to='/' ><img src='./images/main_visual00.jpg' alt='책소개' /></li>
          <li Link to='/' ><img src='./images/main_visual01.jpg' alt='책소개' /></li>
          <li Link to='/' ><img src='./images/main_visual02.jpg' alt='책소개' /></li>
          <li Link to='/' ><img src='./images/main_visual03.jpg' alt='책소개' /></li>
          <li Link to='/' ><img src='./images/main_visual04.jpg' alt='책소개' /></li> */}
          <li><Link to='/'><img src='./images/main_visual00.jpg' alt='책소개' /></Link></li>
          <li><Link to='/'><img src='./images/main_visual01.jpg' alt='책소개' /></Link></li>
          <li><Link to='/'><img src='./images/main_visual02.jpg' alt='책소개' /></Link></li>
          <li><Link to='/'><img src='./images/main_visual03.jpg' alt='책소개' /></Link></li>
          <li><Link to='/'><img src='./images/main_visual04.jpg' alt='책소개' /></Link></li>

        </ul>
        {/* <ul id={styles.visual_dot}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <span id={styles.prev_btn}><img src='./images/prev_btn.gif' alt='이전버튼' /></span>
        <span id={styles.next_btn}><img src='./images/next_btn.gif' alt='다음버튼' /></span> */}
      </div>
      <div id={styles.sub_visual}>
        <ul id={styles.sub_visual_inner}>
          <li>
            <Link to='/'>
              <img src='/images/book_img01.gif' alt='책소개' />
              <p className={styles.sub_visual_title}>비가 오면 열리는 상점(유영광 소설)</p>
              <p className={styles.sub_visual_intro}>전 세계 독자들이 기다려 온 괴물 신인 작가의 탄생</p>
              <p className={styles.sub_visual_text}>“당신의 불행을 파시겠습니까?”<br />
                세상에서 가장 특별한 상점으로 여러분을 초대합니다</p>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <img src='/images/book_img02.gif' alt='책소개' />
              <p className={styles.sub_visual_title}>바다가 들리는 편의점(마치다 소노코 소설)</p>
              <p className={styles.sub_visual_intro}>“언제든 찾아오세요. 항상 여기에 있을 테니까요”</p>
              <p className={styles.sub_visual_text}>“누군가를 위해 뭔가 할 수 있다는 것은 행복한 일이야”<br />
                서로 다른 각자가 함께 행복해지는 이야기</p>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <img src='/images/book_img00.gif' alt='책소개' />
              <p className={styles.sub_visual_title}>메리골드 마음 세탁소(윤정은 소설)</p>
              <p className={styles.sub_visual_intro}>마음에 묻은 얼룩을 마법처럼 지워드립니다</p>
              <p className={styles.sub_visual_text}>마음의 상처를 살펴주는<br />
                언덕 위 신비로운 세탁소 이야기</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
