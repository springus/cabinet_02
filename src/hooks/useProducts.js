import { useEffect, useState } from 'react'
import axios from 'axios'
import { getProducts } from '../api/firebase'


export default function useProducts() {

  const [products, setProducts] = useState([])

  // useEffect(() => {
  //   axios.get('/data/products.json').then((response) => {
  //     setProducts(response.data)
  //   })
  // }, [])

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response)
    })
  },[])

  return (
    [products]
  )
}