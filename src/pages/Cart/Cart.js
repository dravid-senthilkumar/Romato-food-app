import React, { useContext,} from 'react'
import './Cart.css'
import DataContext from '../../Contexts/DataContext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const {food_list, itemCount, itemDecrement, getTotalCartAmount } = useContext(DataContext);

  const navigate = useNavigate();
 
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
         if(itemCount[item._id]>0){
          return(
            <div>
              <div className="cart-items-title cart-items-item">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p >₹{item.price}</p>
              <p >₹{itemCount[item._id]}</p>
              <p >₹{item.price * itemCount[item._id]}</p>
              <p className='delete' onClick={() => itemDecrement(item._id)} src={assets.cross_icon}>X</p>
            </div>
            <hr />
            </div>
          )
         }
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
           <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 25}</p>
            </div>
           <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 25}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>PROCEED T0 CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code? Enter it here.</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart