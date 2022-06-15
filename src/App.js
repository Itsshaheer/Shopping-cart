import React, { useState } from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import data from "./components/back/Data/Data"
import Header from './components/back/front/Header'
import Routes from './components/back/front/Routes'
const App =() => {
  const {productItems}= data
  const  [cartitems ,setcartitems] = useState([])
  const handleAddproduct=(product) =>{
    const productExist= cartitems.find((item) => item.id=== product.id)
    if (productExist) {
      setcartitems(cartitems.map((item) => item.id=== product.id ?
      {...productExist, quantity: productExist.quantity+1}: item) )

    }
    else{
      setcartitems([...cartitems, {...product, quantity:1}])
    }
  }
  const handleremoveproduct= (product) => {
    const productExist= cartitems.find((item) => item.id === product.id)
    if (productExist.quantity===1) {
      setcartitems(cartitems.filter((item) => item.id !== product.id))
    } else {
      setcartitems(cartitems.map((item) => item.id=== product.id
      ? {...productExist, quantity: productExist.quantity-1}
      : item ))
    }
  }
  const handleCartClearance= () =>{
    setcartitems([])
  }
  return <div> 
    <Router>
    <Header  cartitems={cartitems}/>
    <Routes productItems={productItems} cartitems={cartitems} handleAddproduct={handleAddproduct}
    handleremoveproduct={handleremoveproduct} handleCartClearance={handleCartClearance} />
    </Router>
  </div>
}
export default App