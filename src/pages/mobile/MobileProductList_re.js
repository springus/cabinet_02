import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styles from './mobileproductlist.module.css'
import useProducts from '../../hooks/useProducts'
import { Link, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import regExp from '../../utile/regExp'

export default function MobileProductList() {

  const [products] = useProducts()

  const categoryThema = [
    { index: 0, text: "전체" },
    { index: 1, text: "소설" },
    { index: 2, text: "인문" },
    { index: 3, text: "과학" }
  ]
  const categoryInner = useRef()
  const categorylist = useRef()
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)

  let clickCategory = useMemo(() => (false), [])

  const openCategory = useCallback(() => {
    if (clickCategory !== true) {
      setIsCategoryOpen(true)
      gsap.set(categoryInner.current, { overflow: "visible" })
      // clickCategory = true
    } else
      gsap.set(categoryInner.current, {
        overflow: "hidden", onComplete: () => {
          // clickCategory = false
          setIsCategoryOpen(false)
        }
      })

  }, [])

  // const categoryHeight = useMemo(() => (60), [])


  const closeCategory = useCallback(() => {
    if (clickCategory === true) {
      gsap.set(categoryInner.current, {
        overflow: "hidden", onComplete: () => {
          // clickCategory = false
          setIsCategoryOpen(false)
        }
      })
    }
  }, [])

  const [selectCategoryThema, setSelectCategoryThema] = useState(categoryThema[0].text)

  const [selectItems, setSelectItems] = useState([])

  const navigate = useNavigate()

  // useEffect(()=>{
  //   const categoryHeight = useMemo(()=>(30))
  //   selectCategoryThema === categoryThema({text}) && gsap.set(categoryInner.current, {height:categoryInner.current*categoryHeight})
  // })

  useEffect(() => {
    if (selectCategoryThema === "전체") {
      setSelectItems(products)
    } else {
      const filteredItem = products.filter((item) => (item.category === selectCategoryThema))
      setSelectItems(filteredItem)
    }
  }, [products, selectCategoryThema])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section id={styles.basket_wrap}>
      <span id={styles.backpage}><Link to='/'><i className="fa-solid fa-arrow-left"></i></Link></span>
      <h2>장바구니</h2>
      <div id={styles.basket_category}>
        <span id={styles.basket_category_title}>카테고리</span>
        <ul id={styles.basket_category_inner} ref={categoryInner}>
          {
            categoryThema.map((item) => (
              <li key={item.index} onClick={() => {
                setSelectCategoryThema(item.text)
                // closeCategory(true)
                setIsCategoryOpen(true)
              }} className={`${item.text === selectCategoryThema && styles.selected}`} ref={categorylist}>{item.text}</li>
            ))
          }
        </ul>
        <button onClick={openCategory}><i className="fa-solid fa-sort-down"></i></button>
      </div>
      {/* <div id={styles.basket_select_wrap}>
        <input id={styles.select_check} type='checkbox' />
        <p id={styles.select_all}>전체 선택</p>
        <p id={styles.select_delete}>선택 삭제</p>
      </div> */}
      <div id={styles.basket_inner_wrap}>
        <ul id={styles.bakset_inner}>
          {
            selectItems.map((item) => (
              <li key={item.id} onClick={() => {
                navigate(`/MobileProductList/${item.id}`)
              }}>
                <div id={styles.basket_list_wrap}>
                  {/* <input type='checkbox' ref={clickIndex} /> */}
                  <div id={styles.basket_list_img}>
                    <img src={item.images} alt='책제목' />
                  </div>
                  <div id={styles.basket_list_box}>
                    <p id={styles.basket_list_title}>{item.title}</p>
                    <p>저자: {item.name}</p>
                    <p>출판사: {item.publish}</p>
                    <p>발행일: {item.date}</p>
                    <p id={styles.basket_list_cost}>정가: <span id={styles.basket_cost_num}>{regExp.comma(item.cost)}원</span></p>
                    <p id={styles.basket_list_price}>판매가: <span id={styles.basket_price_num}>{regExp.comma(item.price)}원</span></p>
                    {/* <button id={styles.basket_list_detail}></button> */}
                  </div>
                  <p id={styles.basket_list_text}>{item.text}</p>
                  {/* <span id={styles.close_btn}><i className="fa-solid fa-xmark"></i></span> */}
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
