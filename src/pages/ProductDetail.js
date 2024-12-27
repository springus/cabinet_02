import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useProducts from '../hooks/useProducts'
import styles from './productdetail.module.css'
import Ad from '../components/ad/Ad'
// import '../utile/regExp'
import regExp from '../utile/regExp'
import { getProductDetail } from '../api/firebase'

export default function ProductDetail() {

  const { bookId } = useParams()

  const [products] = useProducts()

  const [productItem, setProductItem] = useState([])

  const [count, setCount] = useState(1)

  const addCount = () => {
    // alert("Click")
    setCount(count + 1)
  }

  const removeCount = () => {
    // alert("Click")
    if (count > 1) {
      setCount(count - 1)
    }
  }

  // useEffect(() => {
  //   const productItem = products.filter((item) => (productItem.id === bookId))
  //   setProductItem(productItem)
  // }, [products])

  useEffect(() => {
    getProductDetail(bookId).then((response) => {
      setProductItem(response)
    })
  }, [products])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [bookId])




  return (

    <>
      <section id={styles.bookdetail_wrap}>
        <h2 className='hidden'>{productItem.title}</h2>
        <div id={styles.bookdetail_inner}>
          <div id={styles.bookdetail_inner_textbox}>
            <p id={styles.bookdetail_title}>{productItem.title}</p>
            <p id={styles.bookdetail_name}>저자:{productItem.name}<span id={styles.bookdetail_publish}>출판사:{productItem.publish}</span></p>
            <p id={styles.bookdetail_write}>{productItem.write}</p>
            <p id={styles.bookdetail_text}>{productItem.text}</p>
            <div className={styles.bookdetail_approve_box}>
              <p id={styles.bookdetail_cost}>정가<span id={styles.bookdetail_cost_num}>{regExp.comma(productItem.cost)}</span>원</p>
              <p id={styles.bookdetail_price}>판매가<span id={styles.bookdetail_price_num}>{regExp.comma(productItem.price)}</span>원</p>
            </div>
            <div className={styles.bookdetail_approve_box}>
              <p id={styles.bookdetail_acc}>적립금<span id={styles.bookdetail_acc_num}>840원(5%)</span></p>
              <p id={styles.bookdetail_delivery}>배송안내<span id={styles.bookdetail_delivery_num}>무료배송</span></p>
            </div>
          </div>
          <div id={styles.bookdetail_img}><img src={productItem.images} alt='책제목' /></div>
        </div>
        <div id={styles.total_price_wrap}>
          <div id={styles.total_price_wrap1}>
            <p id={styles.total_price}>총 상품금액<span id={styles.total_price_num}>{regExp.comma(productItem.price * count)} 원</span></p>
            <div id={styles.total_price_add}>
              <button id={styles.remove_btn} onClick={removeCount}>-</button>
              <p id={styles.total_add_num}>{count}</p>
              <button id={styles.add_btn} onClick={addCount}>+</button>
            </div>
          </div>
          <div id={styles.total_price_wrap2}>
            <button className={styles.total_button}>장바구니</button>
            <button className={styles.total_button}>선물하기</button>
            <button className={styles.total_button}>구매하기</button>
          </div>
        </div>
        <section id={styles.bookcard}>
          <h3 className={styles.book_intro_text}>북카드</h3>
          <ul id={styles.bookcard_inner}>
            <li><img src='/images/bookcard0_img00.gif' alt='북카드' /></li>
            <li><img src='/images/bookcard0_img01.gif' alt='북카드' /></li>
            <li><img src='/images/bookcard0_img02.gif' alt='북카드' /></li>
            <li><img src='/images/bookcard0_img03.gif' alt='북카드' /></li>
          </ul>
        </section>
        <section id={styles.book_intro_wrap}>
          <h3 className='hidden'>책 소개</h3>
          <div id={styles.book_intro}>
            <p id={styles.book_intro_title}>책 소개</p>
            <p id={styles.book_intro_text}>불행을 파는 대신 원하는 행복을 살 수 있는 가게가 있다면? 듣기만 해도 방문하고 싶어지는, 비가 오면 열리는 수상한 상점에 초대된 여고생 세린이 안내묘 잇샤, 사람의 마음을 훔치는 도깨비들과 함께 펼치는 감동 모험 판타지!</p>
          </div>
          <div id={styles.book_intro_ditail}>
            <p className={styles.ditail_text}>글쓴이<span id={styles.ditail_name}>유영광</span></p>
            <p className={styles.ditail_text}>출판사<span id={styles.ditail_publish}>클레이하우스</span></p>
            <p className={styles.ditail_text}>발행일<span id={styles.ditail_date}>2023년 06월 14일</span></p>
            <p className={styles.ditail_text}> 쪽 수<span id={styles.ditail_num}>328쪽</span></p>
          </div>
        </section>
        <section id={styles.intro_publish_wrap}>
          <h3 className={styles.book_intro_text}>출판사 서평</h3>
          <div id={styles.intro_publish_text}>
            <p id={styles.publish_text_top}>“당신의 불행을 파시겠습니까?”<br /> 세상에서 가장 특별한 상점으로 여러분을 초대합니다</p>
            <p id={styles.publish_text_mid}>레인보우 타운의 오래된 폐가, 언젠가부터 이곳에 전해지는 괴이한 소문이 있다. 폐가에 자신의 사연을 적은 편지를 보내 당첨되면, 어느 날 정체 모를 티켓 한 장이 집으로 날아온다는 것이다. 그것은 바로 일 년에 단 한 번, 비가 오면 열리는 수상한 비밀 상점으로의 초대장. 그곳에 초대된 사람들은 자신의 불행을 파는 대신 원하는 행복을 무엇이든 살 수 있다고 하는데…. 지금부터 행복을 찾는 주인공 세린과 버려진 안내묘 잇샤의 모험이 시작된다.『비가 오면 열리는 상점』은 출간 전부터 많은 독자에게 입소문이 났던 소설이다. 처음 텀블벅에 소개됐을 때 무려 939명의 후원자가 2000만 원에 가까운 금액을 후원했고, 전자책 플랫폼 크레마클럽에 사전 연재됐을 때에도 한국소설 분야 1위에 오르는 등 폭발적인 호응 속에서 정식 종이책 출간을 요청받았다. 신인 작가의 소설에 이렇게 많은 독자가 관심을 보인 이유는 뭘까? 불행을 파는 상점이라는 흥미로운 소재, 다양한 매력을 지닌 도깨비 캐릭터들, 깜짝 반전이 있는 흡인력 있는 스토리가 ‘새롭고 재미있고 의미 있는 이야기’를 원하는 독자들의 마음을 사로잡았기 때문이다. 올여름 재미와 의미를 동시에 갖춘 매혹적인 이야기를 찾고 있다면, 『비가 오면 열리는 상점』이 최고의 선택이 될 것이다.</p>
            <p id={styles.publish_text_bottom}>비가 온 뒤 피어나는 무지개처럼</p>
          </div>
          <div id={styles.intro_publish_img}>
            <img src='/images/bookcard0_img00.gif' alt='북카드' />
          </div>
        </section>
      </section>
      <Ad />
    </>


  )
}
