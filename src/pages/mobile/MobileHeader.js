import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styles from './mobileheader.module.css'
import { gsap } from 'gsap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
import { login, logout } from '../../api/firebase'

export default function MobileHeader() {

  const gnbInner = [
    {
      index: 0, name: "신간 도서", pathName: '/', gnbInnerList: [
        {
          index: 0, name: "Test list1", pathName: '/'
        },
        {
          index: 1, name: "Test list2", pathName: '/'
        },
        {
          index: 2, name: "Test list3", pathName: '/'
        },
        {
          index: 3, name: "Test list4", pathName: '/'
        },
        {
          index: 4, name: "Test list5", pathName: '/'
        }
      ]
    },

    {
      index: 1, name: "베스트 도서", pathName: '/', gnbInnerList: [
        {
          index: 0, name: "input Text list1", pathName: '/'
        },
        {
          index: 1, name: "input Text list2", pathName: '/'
        },
        {
          index: 2, name: "input Text list3", pathName: '/'
        }
      ]
    },

    {
      index: 2, name: "장바구니", pathName: '/mobileproductlist', gnbInnerList: []
    },

    {
      index: 3, name: "회사 소개", pathName: '/', gnbInnerList: []
    },

    {
      index: 4, name: "고객 센터", pathName: '/', gnbInnerList: []
    }
  ]

  const menuIcon = useRef()
  const gnbWrap = useRef()
  const closeBtn = useRef()
  const grayLayer = useRef()

  // let selectedMenu = useMemo(() => (null), [])

  let closeHeight = useMemo(() => (50),[])
  // let openHeight = useMemo(() => (null))

  useEffect(() => {
    grayLayer.current.style.display = "none"
    gnbWrap.current.style.left = "-70vw"
    gnbWrap.current.style.display = "none"
  }, [])

  const menuOpen = useCallback(() => {
    gsap.set('html,body', { overflow: "hidden" })
    gnbWrap.current.style.display = "block"
    grayLayer.current.style.display = "block"
    gsap.to(gnbWrap.current, {left:0, duration:0.4, ease:'power1.out'})
  }, [])

  const menuClose = useCallback(() => {
    gsap.set('html,body', { overflow: "visible" })
    gsap.to(gnbWrap.current, { left: '-70vw', duration: 0.4, ease: "power1.out", onComplete:()=>{
      //grayLayer.current.style.display = "none"
      //gnbWrap.current.style.display = "none"
      gsap.set(gnbWrap.current, {display:'none'})
      gsap.set(grayLayer.current, {display:'none'})
    } })

    // if (selectedMenu !== null) {
    //   selectedMenu.classList.remove(`${styles.selected}`)
    //   gsap.to(selectedMenu, { height: closeHeight, duration: 1, ease: "power1.out" })
    //   selectedMenu = null
    // }

    // setClickIndex()

  }, [])

  const [clickIndex, setClickIndex] = useState(null)

  const { user } = useAuthContext()

  // console.log(user)


  const navigate = useNavigate()



  return (
    <header id={styles.mobile_header}>
      <div id={styles.header_wrap}>
        <div id={styles.menu_icon} ref={menuIcon} onClick={menuOpen}><i className="fa-solid fa-bars"></i></div>
        <nav id={styles.gnb_wrap} ref={gnbWrap}>
          <h2 className='hidden'>전체메뉴</h2>
          <span id={styles.close_btn} ref={closeBtn} onClick={menuClose}><i className="fa-solid fa-xmark"></i></span>
          <div id={styles.login_wrap}>
            {
              user ?
                <p className={styles.login_text} onClick={logout}>로그아웃</p>
                :
                <p className={styles.login_text} onClick={login}>로그인 하기</p>
            }
            <p className={styles.login_guide}>회원가입<i className="fa-solid fa-chevron-right"></i></p>
            <p className={styles.login_guide}>비회원 배송조회<i className="fa-solid fa-chevron-right"></i></p>
          </div>
          <div id={styles.gnb_inner_wrap}>
            <ul id={styles.gnb_inner}>
              {
                gnbInner.map((item) => (
                  <li key={item.index} className={`${item.index === clickIndex && styles.selected}`} style={item.index === clickIndex ? { height: closeHeight + (closeHeight * item.gnbInnerList.length) } : { height: closeHeight }} onClick={() => {
                    setClickIndex(item.index === clickIndex ? '' : item.index)
                    item.index = null

                    if(item.gnbInnerList.length<1){
                      menuClose()
                      navigate(item.pathName)
                    }

                  }}>
                    {item.gnbInnerList < 1 ?
                      <>
                        {item.name}
                      </>
                      :
                      <>
                        {item.name}
                        <i class="fa-solid fa-chevron-right"></i>
                        <ul id={styles.gnb_inner_list}>
                          {
                            item.gnbInnerList.map((item) => (
                              <li key={item.index} onClick={menuClose}>{item.name}</li>
                            ))
                          }
                        </ul>
                      </>
                    }
                  </li>
                ))
              }
              {/* <li>
            신간 도서
            <ul className={styles.gnb_inner_list}>
              <li>Test list1</li>
              <li>Test list2</li>
              <li>Test list3</li>
              <li>Test list4</li>
              <li>Test list5</li>
            </ul>
          </li>
          <li>베스트 도서
            <ul className={styles.gnb_inner_list}>
              <li>input Text list1</li>
              <li>input Text list2</li>
              <li>input Text list3</li>
            </ul>
          </li>
          <li>이벤트/쿠폰
            <ul className={styles.gnb_inner_list}>
              <li>이벤트</li>
              <li>쿠폰</li>
            </ul>
          </li>
          <li>회사 소개</li>
          <li>고객 센터</li> */}
            </ul>
          </div>
        </nav>
        <h1 id={styles.logo}><Link to='/'><img src='/images/mobile_logo.png' alt="CABINET" /></Link></h1>
        <div id={styles.search_icon}><i className="fa-solid fa-magnifying-glass"></i></div>
      </div>
      <div id={styles.graylayer} ref={grayLayer}></div>


    </header>
  )
}
