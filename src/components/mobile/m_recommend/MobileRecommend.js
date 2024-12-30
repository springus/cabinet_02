import React, { useRef, useEffect, useState } from 'react'
import styles from './mobilerecommend.module.css'
import useProducts from '../../../hooks/useProducts'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';

export default function MobileRecommend() {

  const [products] = useProducts()

  const recommendList = [
    { index: 0, text: "#베스트셀러" },
    { index: 1, text: "#신규 도서" },
    { index: 2, text: "#추천 도서" },
    { index: 3, text: "#스테디 셀러" }
  ]

  const [selectRecommend, setSelectRecommend] = useState(recommendList[0].text)

  const [selectItem, setSelectItem] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    if (selectRecommend === "#베스트셀러") {
      const selectItem = products.filter((item) => (item.classify === "베스트셀러"))
      setSelectItem(selectItem)
    }
    else if (selectRecommend === "#신규 도서") {
      const selectItem = products.filter((item) => (item.classify === "신규도서"))
      setSelectItem(selectItem)
    }
    else if (selectRecommend === "#추천 도서") {
      const selectItem = products.filter((item) => (item.classify === "추천도서"))
      setSelectItem(selectItem)
    }
    else if (selectRecommend === "#스테디 셀러") {
      const selectItem = products.filter((item) => (item.classify === "스테디셀러"))
      setSelectItem(selectItem)
    }
  }, [products, selectRecommend])

  // console.log(selectItem)



  return (
    <section id={styles.recommend_wrap}>
      <h2 className='hidden'>추천도서</h2>
      <ul id={styles.recommend_inner}>
        {
          recommendList.map((item) => (
            <li key={item.index} onClick={() => { setSelectRecommend(item.text) }} className={`${item.text === selectRecommend && styles.selected}`}>{item.text}</li>
          ))
        }
      </ul >
      <ul id={styles.bestseller_inner}>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            selectItem.map((item) => (

              <SwiperSlide><li key={item.id} onClick={() => {
                navigate(`/MobileProductList/${item.id}`)
              }} id={styles.bestseller_item}>
                <img src={item.images} alt="책제목" />
                <p id={styles.bestseller_title}>{item.title}</p>
                <p id={styles.bestseller_name}>저자 : {item.name}</p>
              </li></SwiperSlide>
            ))
          }
        </Swiper>
      </ul>
      <p id={styles.morebook}>더 많은 책 보기<span><i className="fa-solid fa-caret-right"></i></span></p>
    </section >
  )
}
