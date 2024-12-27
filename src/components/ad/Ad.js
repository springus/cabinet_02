import React from 'react'
import styles from './ad.module.css'

export default function Ad() {
  return (
    <div id={styles.ad_box}>
        <ul id={styles.ad_inner}>
          <li><img src='/images/ad_img00.jpg' alt='배너광고'/></li>
          <li><img src='/images/ad_img01.jpg' alt='배너광고'/></li>
        </ul>
    </div>
  )
}
