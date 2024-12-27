import React from 'react'
import styles from './contents_sub.module.css'
import ThemaRank from '../thema_rank/ThemaRank'
import { Link } from 'react-router-dom'

export default function ContentsSub() {
  return (
    <section id={styles.contents_sub}>
      <h2 className='hidden'>책 & 영화</h2>
      <div id={styles.withbook}>
        <h3 id={styles.withbook_title}>책과 함께</h3>
        <ul id={styles.withbook_inner}>
          <li>
            <Link to='/'>
            <img src='./images/contents_sub_img00.gif' alt='책소개' />
            <p className={styles.withbook_inner_text}>반지의 제왕</p>
            </Link>
          </li>
          <li>
          <Link to='/'>
            <img src='./images/contents_sub_img01.gif' alt='책소개' />
            <p className={styles.withbook_inner_text}>해리포터</p>
          </Link>
          </li>
          <li>
          <Link to='/'>
            <img src='./images/contents_sub_img02.gif' alt='책소개' />
            <p className={styles.withbook_inner_text}>황금나침반</p>
          </Link>
          </li>
        </ul>
      </div>
      <ThemaRank />
    </section>
  )
}
