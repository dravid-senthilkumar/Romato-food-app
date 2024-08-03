import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({selected,setSelected}) => {
  return (
    <div className='explore-menu' id='explore-menu' >
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">
        Choose from a deserve menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <div className="explore-menu-list">
            {menu_list.map((item,index) => {
                    return(
                        <div onClick={() => setSelected((emtArr) => emtArr === item.menu_name ? "all" : item.menu_name)} key={index} className="explore-menu-list-items">
                            <img className={selected === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>  
                        )
                }
            )}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu