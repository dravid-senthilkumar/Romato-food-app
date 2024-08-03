import React, { createContext, useEffect, useState } from 'react';
import { food_list } from '../assets/assets';

const DataContext = createContext(null);

export const DataContextProvider = ({ children }) => {

  const [itemCount, setItemCount] = useState({});

  const itemIncrement = (itemId) => {
    if (!itemCount[itemId]) {
      setItemCount((prevCount) => ({ ...prevCount, [itemId]: 1 }))
    }
    else {
      setItemCount((prevCount) => ({ ...prevCount, [itemId]: prevCount[itemId] + 1 }))
    }
  }

  const itemDecrement = (itemId) => {
    setItemCount((prevCount) => ({ ...prevCount, [itemId]: prevCount[itemId] - 1 }))
  }

  useEffect(() =>{
    console.log(itemCount)
  },[itemCount])

  const getTotalCartAmount = () =>{
    var totalAmount = 0;
    for(var item in itemCount){
      if( itemCount[item] > 0){
        var FilteredList = food_list.find((list) => list._id === item)
        totalAmount += FilteredList.price * itemCount[item];
      }
    }
    return totalAmount;
  }

  const DataValue = {
    food_list,
    itemCount,
    setItemCount,
    itemIncrement,
    itemDecrement,
    getTotalCartAmount
  };

  return (
    <DataContext.Provider value={DataValue}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
