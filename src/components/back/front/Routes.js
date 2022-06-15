import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Products from './Products'
import Signup from './Signup'
import Cart from './Cart'
const Routes = ({productItems , cartitems, handleAddproduct, handleremoveproduct, handleCartClearance}) => {
  return (
    <div>
        <Switch>
            <Route path='/' exact>
                <Products productItems={productItems} handleAddproduct={handleAddproduct}/>
            </Route>
            <Route path='/signup' exact>
                <Signup />
            </Route>
            <Route path='/cart' exact>
                <Cart  cartitems={cartitems} handleAddproduct={handleAddproduct} handleremoveproduct={handleremoveproduct}
                handleCartClearance={handleCartClearance}/>
            </Route>
        </Switch>
    </div>
  )
}

export default Routes