import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'
import { useAuthContext } from '../context/AuthContext'
import { login, logout } from '../api/firebase'
// import { login, logout, onUserStateChange } from "../api/firebase"; // firebase.js 파일 연동

export default function Header() {

  const gnbInner = [
    { index: 0, path: '/productList', text: "베스트셀러" },
    { index: 1, path: '/productList', text: "주간베스트" },
    { index: 2, path: '/', text: "이벤트" },
    { index: 3, path: '/', text: "출석체크" },
    { index: 4, path: '/', text: "내정보" },
  ]

  const { user } = useAuthContext()

  // console.log(user)


  return (
    <header>
      <div id={styles.header_wrap}>
        <h1 id={styles.logo}><Link to='/'><img src='/images/logo.gif' alt='logo' /></Link></h1>
        <div id={styles.login_wrap}>
          <ul id={styles.login_inner}>
            <li>
              {
                user ?
                  <>
                    {/* <p>{user.displayName}님 반갑습니다.</p> */}
                    <p onClick={logout}><img src={user.photoURL} alt="" />로그아웃</p>
                  </>
                  :
                  <p onClick={login}>로그인</p>
              }
            </li>
            <li>
              {
                user ?
                  <p><Link to="#">내정보</Link></p>
                  :
                  <p><Link to='#'>회원가입</Link></p>
              }
            </li>
            <li>회원혜택</li>
            <li>고객센터</li>
          </ul>
        </div>
        <nav id={styles.gnb_wrap}>
          <h2 className='hidden'>메인메뉴</h2>
          <ul id={styles.gnb_inner}>
            {
              gnbInner.map((item) => (
                <li key={item.index}><Link to={item.path}>{item.text}</Link></li>
              ))
            }
          </ul>
        </nav>
        <div id={styles.search_bar}>
          <form id={styles.search}>
            <input type='text' />
            <Link to='#'><i className="fa-solid fa-magnifying-glass"></i></Link>
          </form>
        </div>
      </div>
    </header>
  )
}
