import React, {useState } from 'react'
import {api, dataBase, filter, healthScore, sort,ALL_RECIPES} from '../../Redux/Actions/index'
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlineCloudServer,FcDataBackup,BiSortAZ} from 'react-icons/all'

const MenuHome = () => {
const dispactch = useDispatch()
const [state,setState] =useState(true)
const diets = useSelector((store)=>store.diets)

const handleClick = (value,origin)=>{
  if(origin === "dieta"){
    dispactch(filter(value))
  }else if(origin === "allRecipes"){
    dispactch(api(value))
  }else if(origin === "api"){
    dispactch(api(value))
  }else if(origin==="dB"){
  dispactch(dataBase()) 
  }
  else if(origin==="sort"){
  dispactch(sort(value))
  } else if(origin==="health score"){
    if(state){
      value = state
      dispactch(healthScore(value))
      setState(false)
    }else{
    value = state
    dispactch(healthScore(value))
    setState(true)
  }
    }
}



  return (
    <div className='container_menu'>
      <section>
        <h2>Recetas</h2>
        <img style ={{cursor:"pointer"}} src="https://e0.pxfuel.com/wallpapers/319/167/desktop-wallpaper-chicken-kebab-non-veg.jpg" alt="recetas" onClick={()=>handleClick(null,"allRecipes")}/>
        <h2>Dietas</h2>
        <ul>
          {diets.map((diet) =>
            <li key={diet.id} onClick={() => handleClick(diet.name,"dieta")}><img src={diet.image} alt= {diet.name} /> {diet.name}</li>
            )}
        </ul>
         <h3>Origen</h3>
        <ul>
          <li onClick={() => handleClick("Data Base","dB")} >Data Base <FcDataBackup/></li>
          <li onClick={() => handleClick("Api","api")}>Api <AiOutlineCloudServer/></li>
        </ul>
      </section>
       <section>
        <h2>Sort</h2>
        <nav>
           <ul>
            <li><BiSortAZ/></li>
            <li onClick={()=>handleClick("upward","sort")} >Falling</li>
            <li onClick={()=>handleClick("falling","sort")}>Upward</li>
           </ul>
          <ul>
            <li onClick={() => handleClick("vegan","health score")}>health score</li>
            <li onClick={() => handleClick()}></li>
          </ul>
        </nav>
       </section>
    </div>
  )
}

export default MenuHome
