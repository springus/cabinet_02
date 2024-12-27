import React from 'react'
import styles from './footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {

  const footer_inner = [
    { index: 0, path: '/', text: "회사소개" },
    { index: 1, path: '/', text: "광고안내" },
    { index: 2, path: '/', text: "입점문의" },
    { index: 3, path: '/', text: "청약철회" },
    { index: 4, path: '/', text: "청소년 보호정책" },
    { index: 5, path: '/', text: "이용약관" },
    { index: 6, path: '/', text: "개인정보처리방침" },
    { index: 7, path: '/', text: "영상정보처리방침" }
  ]

  return (
    <footer>
      <div id={styles.footer_wrap}>
        <ul id={styles.footer_inner}>
          {
            footer_inner.map((item) => (
              <li key={item.index}><Link to={item.path}>{item.text}</Link></li>
            ))
          }
        </ul>
        <ul id={styles.footer_info}>
          <li>(00000) 서울시 강남구 테헤란로</li>
          <li>사업자등록번호 000-00-00000</li>
          <li>대표전화 : 0000-0000</li>
        </ul>
      </div>



    </footer>
  )
}
