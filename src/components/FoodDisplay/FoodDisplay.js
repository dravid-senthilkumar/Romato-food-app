import { useContext,} from 'react';
import './FoodDisplay.css';
import DataContext from '../../Contexts/DataContext';
import FoodItem from '../FoodItem/FoodItem';



const FoodDisplay = ({selected}) => {
  const { food_list } = useContext(DataContext);

  return (
    <div className='food-display'>
        <h2>Top dishes near you.</h2>
        <div className="food-display-list">
          {
            food_list.map((item,index)=> {
              if( selected==="all" || selected===item.category ){
                return (<FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>)
              }
            })
          }
        </div>
    </div>
  )
}

export default FoodDisplay;