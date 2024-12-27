import React from 'react'
import styles from './mobilebestgenre.module.css'

export default function MobileBestGenre() {
  return (
    <section id={styles.bestgenre_wrap}>
      <h2 id={styles.bestgenre_title}>베스트 장르</h2>
      <ul id={styles.bestgenre_inner}>
        <li>소설</li>
        <li>인문</li>
        <li>경제</li>
        <li>자기계발</li>
      </ul>
      <div id={styles.bestgenre_list}>
        <ul id={styles.bestgenre_list_inner}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  )
}
