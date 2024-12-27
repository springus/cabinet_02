import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useProducts from '../../hooks/useProducts'
import { getProductDetail } from '../../api/firebase'
import styles from './mobileproductdetail.module.css'
import MobileAd from '../../components/mobile/m_ad/MobileAd'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export default function MobileProductDetail() {

  const { bookId } = useParams()

  const [products] = useProducts()

  const [productItem, setProductItem] = useState([])

  const [bookcards, setBookcards] = useState([])

  useEffect(() => {
    getProductDetail(bookId).then((response) => {
      setProductItem(response)
      //console.log('productItembookcard', productItem.bookcard)
      //console.log('productItembookcard',productItem.bookcard)


      //setBookcards(Object.keys(response.bookcard).map(item => response.bookcard[item]))
      setBookcards(Object.values(response.bookcard))




      //console.log("test", Object.values(response.bookcard))


    })
  }, [products, bookId])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [bookId])

  useEffect(() => {
    //console.log('bookcards', bookcards)
  }, [])


  // const testItem = useMemo(() => (productItem.bookcard))

  //let { bookcards } = useParams()

  //bookcards = productItem.bookcard

  //console.log(bookcards)


  // useEffect(()=>{
  //   const testItem=productItem.bookcard;
  //   console.log(testItem)
  // },[])




  // const testItem = {

  //   "images": "/images/book_img00.gif",
  //   "title": "메리골드 마음 세탁소",
  //   "name": "윤정은",
  //   "publish": "북로망스",
  //   "cost": 15000,
  //   "price": 14400,
  //   "text": "마음에 묻은 얼룩을 마법처럼 지워드립니다 윤정은 작가 문학상 수상 11년 만의 첫 장편소설 한국형 힐링 소설의 결정판!",
  //   "date": "2023.03.06",
  //   "write": "우리는 가끔 시간을 되돌려 과거로 돌아가 후회됐던 일을 되돌리고 싶어한다. 그런데 과연 그 일을 지워버리는 게 현명한 선택일까? 그리고 그 기억을 지웠을 때 지금의 내가 있을 수 있을까? 만약 그 기억만 없다면 앞으로 행복만 할 수 있을까? 『메리골드 마음 세탁소』는 한밤중 언덕 위에 생겨난, 조금 수상하고도 신비로운 세탁소에서 벌어지는 일들을 그린 힐링 판타지 소설이다. 창백하게 하얀 얼굴에 젓가락처럼 마른 몸, 까맣고 구불구불 긴 머리의 미스테리한 여자는 세탁소를 찾아오는 누군가를 위해 매일같이 따뜻한 차를 끓인다. 차를 마신 이들은 어느 누구에게도 말하지 못했던 비밀스러운 이야기들을 자기도 모르게 그녀에게 털어놓는다. 아픈 날의 기억을 얼룩 지우듯 모조리 깨끗이 지워달라고 부탁한 사람들은 과연 세탁소를 나서며 행복해질 수 있을까?",
  //   "category": "소설",
  //   "isNew": true,
  //   "id": "001",
  //   "bookcard": {

  //     "001": {
  //       "id": "001", "images": "/images/bookcard0_img00.gif"
  //     },
  //     "002": {
  //       "id": "002", "images": "/images/bookcard0_img01.gif"
  //     },
  //     "003": {
  //       "id": "003", "images": "/images/bookcard0_img02.gif"
  //     },
  //     "004": {
  //       "id": "004", "images": "/images/bookcard0_img03.gif"
  //     },
  //     "005": {
  //       "id": "005", "images": "/images/bookcard0_img04.gif"
  //     },
  //     "006": {
  //       "id": "006", "images": "/images/bookcard0_img05.gif"
  //     },
  //     "007": {
  //       "id": "007", "images": "/images/bookcard0_img06.gif"
  //     },
  //     "008": {
  //       "id": "008", "images": "/images/bookcard0_img07 .gif"
  //     },
  //     "009": {
  //       "id": "009", "images": "/images/bookcard0_img08 .gif"
  //     },
  //     "010": {
  //       "id": "010", "images": "/images/bookcard0_img09 .gif"
  //     }


  //   }


  // }


  return (
    // <div style={{width:"200px"}}>
    //   <img src={productItem.images} style={{width:"100%", display:"block"}}/>
    // </div>
    <section id={styles.detailpage_wrap}>
      <h2 className='hidden'>상품페이지</h2>
      <div id={styles.book_img_wrap}><img src={productItem.images} alt="책제목" /></div>
      <div id={styles.book_intro_wrap}>
        <p id={styles.book_intro_title}>{productItem.title}</p>
        <p id={styles.book_intro_name}>저자: {productItem.name}</p>
        <p id={styles.book_intro_publish}>출판사: {productItem.publish}</p>
        <p id={styles.book_intro_date}>발행일: {productItem.date}</p>
        <p id={styles.book_intro_write}>{productItem.write}</p>
        <button className={styles.book_write_detail}>자세히보기<i className="fa-solid fa-angle-down"></i></button>
      </div>
      <div id={styles.bookcard_wrap}>
        <ul id={styles.bookcard_inner}>
          {/* {productItem.bookcard.images} */}


          <Swiper
            slidesPerView={2}
            // centeredSlides={true}
            spaceBetween={200}
            grabCursor={true}
            modules={[Pagination]}
            className="mySwiper"
          >

            {

              // Object.keys(productItem.bookcard).map((item) => productItem.bookcard[item])

              bookcards.map((item, index) => (
                <SwiperSlide>{item.index}<img src={item.images} alt="책제목" /></SwiperSlide>
              ))

            }

          </Swiper>



          {/* <li><img src='/images/bookcard1_img00.gif' alt=""/></li>
          <li><img src='/images/bookcard1_img01.gif' alt=""/></li>
          <li><img src='/images/bookcard1_img02.gif' alt=""/></li>
          <li><img src='/images/bookcard1_img03.gif' alt=""/></li>
          <li><img src='/images/bookcard1_img04.gif' alt=""/></li>
          <li><img src='/images/bookcard1_img05.gif' alt=""/></li>
          <li><img src='/images/bookcard1_img06.gif' alt=""/></li>
          <li><img src='/images/bookcard1_img07.gif' alt=""/></li>
          <li><img src='/images/bookcard1_img08.gif' alt=""/></li> */}






        </ul>
      </div>
      <div className={styles.book_detail_wrap}>
        <ul className={styles.book_detail_inner}>
          <li>목 차</li>
          <li>출판사 서평</li>
          <li>관련 도서</li>
        </ul>
        <div id={styles.book_table_wrap}>
          <ul id={styles.book_table}>
            <li>Prologue</li>
            <li>괴소문</li>
            <li>수상한 편지</li>
            <li>무더위 장마전야</li>
            <li>문지기 토리야</li>
            <li>장미상점 베르나의 불행전당포</li>
            <li>듀로프의 안내데스크</li>
            <li>엠마의 헤어살롱</li>
            <li>마타의 서점</li>
            <li>니콜의 향수공방</li>
          </ul>
          <button className={styles.book_write_detail}>자세히보기<i className="fa-solid fa-angle-down"></i></button>
        </div>
      </div>
      <div className={styles.book_detail_wrap}>
        <ul className={styles.book_detail_inner}>
          <li>목 차</li>
          <li>출판사 서평</li>
          <li>관련 도서</li>
        </ul>
        <div id={styles.book_publish_wrap}>
          <p id={styles.book_publish_title}>“당신의 불행을 파시겠습니까?”<br />
            세상에서 가장 특별한 상점으로 여러분을 초대합니다</p>
          <p id={styles.book_publish_text}>레인보우 타운의 오래된 폐가, 언젠가부터 이곳에 전해지는 괴이한 소문이 있다. 폐가에 자신의 사연을 적은 편지를 보내 당첨되면, 어느 날 정체 모를 티켓 한 장이 집으로 날아온다는 것이다. 그것은 바로 일 년에 단 한 번, 비가 오면 열리는 수상한 비밀 상점으로의 초대장. 그곳에 초대된 사람들은 자신의 불행을 파는 대신 원하는 행복을 무엇이든 살 수 있다고 하는데…. 지금부터 행복을 찾는 주인공 세린과 버려진 안내묘 잇샤의 모험이 시작된다...</p>
          <button className={styles.book_write_detail}>자세히보기<i className="fa-solid fa-angle-down"></i></button>
        </div>
      </div>
      <MobileAd />
      <div className={styles.book_detail_wrap}>
        <ul className={styles.book_detail_inner}>
          <li>목 차</li>
          <li>출판사 서평</li>
          <li>관련 도서</li>
        </ul>
        <div id={styles.book_anothor_wrap}>
          <ul id={styles.book_anothor}>
            <li>
              <div className={styles.book_anothor_img}>
                <img src='/images/book_img00.gif' alt="책제목" />
              </div>
              <p className={styles.book_anothor_title}>메리골드 마음 세탁소</p>
            </li>
            <li>
              <div className={styles.book_anothor_img}>
                <img src='/images/book_img01.gif' alt="책제목" />
              </div>
              <p className={styles.book_anothor_title}>비가오면 열리는 상점</p>
            </li>
            <li>
              <div className={styles.book_anothor_img}>
                <img src='/images/book_img02.gif' alt="책제목" />
              </div>
              <p className={styles.book_anothor_title}>바다가 들리는 편의점</p>
            </li>
          </ul>
        </div>
      </div>
    </section >
  )
}
