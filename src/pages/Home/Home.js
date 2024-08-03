import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
  var [selected , setSelected] = useState("all");
  return (
    <div>
      <Header />
      <ExploreMenu selected={selected} setSelected={setSelected}/>
      <FoodDisplay selected={selected}/>
      <AppDownload/>
    </div>
  )
}

export default Home