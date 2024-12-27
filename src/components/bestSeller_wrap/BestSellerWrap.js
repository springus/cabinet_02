import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './bestsellerwrap.module.css'
import useProducts from '../../hooks/useProducts'
import regExp from '../../utile/regExp'

export default function BestSellerWrap() {

  const [products] = useProducts()

  const category = [
    { index: 0, text: "종합" },
    { index: 1, text: "소설" },
    { index: 2, text: "인문" },
    { index: 3, text: "과학" }
  ]

  const [selectCategory, setSelectCategory] = useState(category[0].text)

  const [categoryItems, setCategoryItems] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    if (selectCategory === "종합") {
      setCategoryItems(products)
    } else {
      const categoryItems = products.filter((item) => (item.category === selectCategory))
      setCategoryItems(categoryItems)
    }
  }, [selectCategory, products])

  let rankNum=1

  return (
    <>
      <div className='ad_listpage'><img src='/images/listpage_visual.gif' alt="배너" /></div>
      <nav className={styles.snb_inner}>
        <h2 className='hidden'>카테고리</h2>
        {/* <p className={styles.snb_title}>종합</p> */}
        <ul id={styles.snb_list}>
          {
            category.map((item) => (
              <li key={item.index} className={`${item.text === selectCategory && styles.selected}`} onClick={() => {
                setSelectCategory(item.text)
              }}><Link to={item.index}>{item.text}</Link></li>
            ))
          }
        </ul>
      </nav>
      <section id={styles.bestseller_wrap}>
        <h2 className='hidden'>베스트셀러</h2>
        <ul className={styles.bestseller_item_inner}>
          {
            categoryItems.map((item) => (
              <li>
                <div className={styles.bestseller_item_rank} key={item.id} onClick={() => {
                  navigate(`/productlist/${item.id}`)
                }}>
                  <p className={styles.bestseller_item_num}>{rankNum++}</p>
                  <p className={styles.bestseller_item_img}><img src={item.images} alt='책제목' /></p>
                  <div className={styles.bestseller_item_content}>
                    <p className={styles.bestseller_item_title}>{item.title}</p>
                    <p className={styles.bestseller_item_name}>저자:{item.name}<span className={styles.bestseller_item_publish}>출판사:{item.publish}</span></p>
                    <p className={styles.bestseller_item_text}>{item.text}</p>
                    <span className={styles.bestseller_rank_item_date}>발행:{item.date}</span>
                  </div>
                  <div className={styles.bestseller_item_write_wrap}>
                    <p className={styles.bestseller_item_write}>{item.write}</p>
                    <span className={styles.bestseller_item_detail}><Link to='#'>상세보기</Link></span>
                  </div>
                  <div className={styles.bestseller_item_cost_wrap}>
                    <p className={styles.bestseller_item_cost}>정가:<span className={styles.bestseller_item_cost_num}>{regExp.comma(item.cost)}</span>원</p>
                    <p className={styles.bestseller_item_price}>판매가:<span className={styles.bestseller_item_price_num}>{regExp.comma(item.price)}</span>원</p>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </section >
    </>
  )
}
