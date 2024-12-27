import React from 'react'
import styles from './main.module.css'
import BestSellerWrap from '../components/bestSeller_wrap/BestSellerWrap'

export default function DetailPage() {
  return (
    <div className={styles.container_wrap}>
      <BestSellerWrap/>
    </div>
  )
}
