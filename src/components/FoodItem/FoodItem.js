import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import DataContext from '../../Contexts/DataContext';

const FoodItem = ({ id, name, description, price, image }) => {

  const {itemCount, itemIncrement, itemDecrement} = useContext(DataContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
      {
        !itemCount[id] ?
            <img className="add" onClick={() => itemIncrement(id)} src={assets.add_icon_white} alt="" /> :
       <div className="food-item-counter">
            <img onClick={() => itemDecrement(id)} src={assets.remove_icon_red} alt="" />
            <p>{itemCount[id]}</p>
            <img onClick={() => itemIncrement(id)} src={assets.add_icon_green} alt="" />
       </div>
      }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img className='rating' src={assets.rating_starts} alt="" />
        </div>
           <div className="food-item-desc">{description}</div>
           <div className="food-item-price">₹{price}</div>
      </div>
    </div>
  )
}

export default FoodItem