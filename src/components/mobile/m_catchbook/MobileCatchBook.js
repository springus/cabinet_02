import React from 'react'
import styles from './mobilecatchbook.module.css'

export default function MobileCatchBook() {
  return (
    <section id={styles.catchbook_wrap}>
      <h2 id={styles.catchbook_title}>캐치 앤 북</h2>
      <div id={styles.catchbook_author_wrap}>
        <div id={styles.author_img}>
          <img src='/images/author_img00.gif' alt="베르나르베르베르" />
        </div>
        <dl id={styles.author_inner}>
          <dt className={styles.author_title}>오늘의작가</dt>
          <dt className={styles.author_title}>베르나르베르베르</dt>
          <dd className={styles.author_text}><span className={styles.author_intro}>출생</span>1961년 9월 18일 (61세)</dd>
          <dd className={styles.author_text}><span className={styles.author_intro}>국적</span>프랑스</dd>
          <dd className={styles.author_text}><span className={styles.author_intro}>장르</span>과학 소설, 추리 소설, 철학 소설</dd>
          <dd className={styles.author_text}><span className={styles.author_intro}>작품</span>개미, 뇌, 파피용, 제3인류 등</dd>
        </dl>
        <div id={styles.author_book}>
          <div id={styles.author_book_img}><img src='/images/author_book00.png' alt="책소개" /></div>
          <div id={styles.author_book_text}>
            <p id={styles.author_book_title}>꿀벌의 예언 (베르나르 베르베르)</p>
            <p id={styles.author_book_text}>2053년 꿀벌이 사라져 멸종을 앞둔 인류 <br /> 우리는 그 미래를 바꿀 수 있을까</p>
            <p id={styles.author_book_intro}>인류의 미래를 둘러싸고 펼쳐지는 대모험과학적 상상력과 역사적 사유가 만나 시작되는기상천외하고도 매혹적인 이야기!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
