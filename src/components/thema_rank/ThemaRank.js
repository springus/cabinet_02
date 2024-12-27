import React from 'react'
import styles from './themarank.module.css'
import { Link } from 'react-router-dom'

export default function ThemaRank() {
  return (
    <div id={styles.themarank_wrap}>
      <h3 id={styles.themarank_title}>인기테마</h3>
      <ul id={styles.themarank_inner}>
        <li>
          <Link to='/'>
            <p className={styles.thema_num}><img src='./images/themarank1.gif' alt='1위' /></p>
            <span className={styles.thema_list}>소설</span>
            <span className={styles.thema_list_part}>고전소설</span>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <p className={styles.thema_num}><img src='./images/themarank2.gif' alt='2위' /></p>
            <span className={styles.thema_list}>인문</span>
            <span className={styles.thema_list_part}>심리학</span>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <p className={styles.thema_num}><img src='./images/themarank3.gif' alt='3위' /></p>
            <span className={styles.thema_list}>경제</span>
            <span className={styles.thema_list_part}>제테크/금융</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
