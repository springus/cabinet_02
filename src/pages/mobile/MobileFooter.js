import React, { useEffect } from 'react'
import styles from './mobilefooter.module.css'
import { Link } from 'react-router-dom'

export default function MobileFooter() {

  const footerInner = [
    { index: 0, path: '/', images: <i className="fa-solid fa-house"></i>, text: "홈" },
    { index: 1, path: '/', images: <i className="fa-solid fa-gift"></i>, text: "이벤트" },
    { index: 2, path: '/mobileproductlist', images: <i class="fa-solid fa-bag-shopping"></i>, text: "장바구니" },
    { index: 3, path: '/', images: <i class="fa-solid fa-user"></i>, text: "마이페이지" }
  ]

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // },[footerInner.path])

  return (
    <footer id={styles.mobile_footer}>
      <div id={styles.footer_wrap}>
        <ul id={styles.footer_inner}>
          {
            footerInner.map((item) => (
              <li key={item.index}><Link to={item.path}>{item.images}<p>{item.text}</p></Link></li>
            ))
          }
          {/* <li><Link to='/'><i className="fa-solid fa-house"></i><p>홈</p></Link></li>
          <li><Link to='/'><i className="fa-solid fa-gift"></i><p>이벤트</p></Link></li>
          <li><Link to='/'><i class="fa-solid fa-bag-shopping"></i><p>장바구니</p></Link></li>
          <li><Link to='/'><i class="fa-solid fa-user"></i><p>마이페이지</p></Link></li> */}
        </ul>
      </div>
    </footer>
  )
}