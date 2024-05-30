import {useEffect, useState} from 'react';
import './index.css';

import { products } from './data/products';
import CardList from './data/components/CardList';
import Header from './data/components/Header';
function App() {
 
  const [cardItems, setCardItems] = useState(products)
  
  useEffect(() => {
    setCardItems(products)
  },[])
   
  let increseQty = (id) => {
    setCardItems(items => items.map(item => item.id === id ? {...item, qty: item.qty + 1} : item))

  }

  let cartItem = cardItems.reduce((acc, val) => val.qty + acc,0)
 let totalPrice = cardItems.reduce((acc, val) => (val.qty * val.price) + acc, 0)
  
 console.log(totalPrice)
 return (
    <>
   <Header cartItem= {cartItem} totalPrice={totalPrice} />
    
    <CardList products = {cardItems} increseQty= {increseQty}  />
    </>
  )
}

export default App
