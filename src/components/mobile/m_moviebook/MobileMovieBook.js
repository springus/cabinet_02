import React from 'react'
import styles from './mobilemoviebook.module.css'

export default function MobileMovieBook() {
  return (
    <section id={styles.moviebook_wrap}>
      <h2 id={styles.moviebook_title}>책과 함께</h2>
      <ul id={styles.moviebook_inner}>
        <li>
          <p className={styles.moviebooks_img}><img src='/images/contents_sub_img00.gif' alt="책제목" /></p>
          <p className={styles.moviebooks_title}>반지의 제왕</p>
        </li>
        <li>
          <p className={styles.moviebooks_img}><img src='/images/contents_sub_img01.gif' alt="책제목" /></p>
          <p className={styles.moviebooks_title}>해리 포터</p>
        </li>
        <li>
          <p className={styles.moviebooks_img}><img src='/images/contents_sub_img02.gif' alt="책제목" /></p>
          <p className={styles.moviebooks_title}>황금나침반</p>
        </li>
      </ul>
    </section>
  )
}
