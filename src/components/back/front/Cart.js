import React from 'react'
import './Cart.css'
const Cart = ({cartitems, handleAddproduct, handleremoveproduct, handleCartClearance}) => {
    const totalPrice= cartitems.reduce((price, item ) =>price+ item.quantity * item.price, 0 )
  return (
    <div className='cart-items'>
    <h2 className='cart-items-header'> Cart items</h2>
    <div className='"clear-cart'>{cartitems.length>= 1 &&(
        <button className='clear-cart-button' onClick={handleCartClearance}>Clear cart</button>
    )}</div>

    {cartitems.length===0 && (<div className='cart-items-empty'> No items added</div>
    )}
    <div>
        {cartitems.map((item) => (
            <div key={item.id} className="cart-items-list">
                <img className='cart-items-image'
                src={item.image}
                alt={item.name} />
                <div className='cart-items-name'>{item.name}</div>
                <div className='cart-items-function'>
                    <button className='cart-items-add' onClick={()=> handleAddproduct(item)}>+</button>
                    <button className='cart-items-remove' onClick={()=> handleremoveproduct(item)}>-</button>
                    </div>
                    <div className='cart-items-price'>
                        {item.quantity} * $ {item.price}
                        </div>
         </div>

        ))}
        <div className='cart-items-total-price-name'> Total Price</div>
        <div className='cart-items-total-price'> $ {totalPrice}</div>
    </div>


    </div>

  )
}

export default Cart