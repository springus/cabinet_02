import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root'
import Main from './pages/Main'
import './App.css'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import { isMobile } from 'react-device-detect'
import MobileMain from './pages/mobile/MobileMain'
import MobileRoot from './pages/mobile/MobileRoot'
import MobileProductList from './pages/mobile/MobileProductList'
import { AuthContextProvider } from './context/AuthContext'
import MobileProductDetail from './pages/mobile/MobileProductDetail'

export default function App() {

  let router = null
  
  // 모바일 뷰 적용 안될 시
  // const isMobile = true

  if (isMobile === true) {
    router = createBrowserRouter([
      {
        path: '/',
        element: <MobileRoot />,
        children: [
          { index: true, element: <MobileMain /> },
          { path: '/mobileproductlist/:bookId', element: <MobileProductDetail /> }
        ],
      },
      { path: '/mobileproductlist', element: <MobileProductList /> },
    ])
  } else {
    router = createBrowserRouter([
      {
        path: '/',
        element: <Root />,
        children: [
          { index: true, element: <Main /> },
          { path: '/productlist', element: <ProductList /> },
          { path: '/productlist/:bookId', element: <ProductDetail /> },
        ]
      }
    ])
  }



  return (
    <div>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </div>
  )
}
