import React, { useContext } from 'react'
import './PlaceOrder.css'
import DataContext from '../../Contexts/DataContext'

const PlaceOrder = () => {
   const {getTotalCartAmount} = useContext(DataContext);
  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name'/>
        </div>
            <input type="email" placeholder='Email address'/>
            <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="number" placeholder='Zip code' />
          <input type="text" placeholder='Country'/>
        </div>
        <input type="number" placeholder='Phone number'/>
      </div>

      <div className="place-order-right">
         <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{ getTotalCartAmount()}</p>
            </div>
           <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{ getTotalCartAmount() === 0 ? 0 : 25}</p>
            </div>
           <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{ getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 25}</b>
            </div>
          </div>
          <button >PROCEED T0 PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder