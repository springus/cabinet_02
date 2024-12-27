import React, { useEffect, useState } from 'react'
import styles from './contents_main.module.css'
import { Link } from 'react-router-dom'
import useProducts from '../../hooks/useProducts'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


export default function ContentsMain() {

  const [products] = useProducts()


  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    setBestSeller(products.filter((item) => (item.isNew === true)))
  }, [products])


  return (
    <section id={styles.contents_daily_wrap}>
      <h2 className='hidden'>오늘의 도서&작가소개</h2>
      <div id={styles.daily_best}>
        <h3 id={styles.daily_best_title}><Link to='/'>오늘의 도서</Link></h3>
        <ul id={styles.daily_best_inner}>

          <>
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              // pagination={{
              //   clickable: true,
              // }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {
                bestSeller.map((item) => (
                  <SwiperSlide key={item.id}><li>
                    <img src={item.images} alt='책소개' />
                    <p className={styles.daily_books}>{item.title}</p>
                  </li></SwiperSlide>
                ))
              }
            </Swiper>
          </>




        </ul>
        <span id={styles.daily_more}><Link to='/'>더 보기</Link></span>
      </div>
      <div id={styles.weekly_author}>
        <h3 id={styles.weekly_author_title}>오늘의 작가</h3>
        <dl id={styles.author_inner}>
          <Link to='/'>
            <dt>베르나르 베르베르</dt>
            <dd id={styles.author_img}><img src='./images/author_img00.gif' alt='작가소개' /></dd>
            <dd id={styles.author_text}>신규 출간 - 꿀벌의 예언</dd>
          </Link>
        </dl>
      </div>
    </section >
  )
}
