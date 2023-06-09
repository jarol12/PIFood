import React ,{useEffect, useState}from 'react'
import MenuHome from '../../menu/menu_home'
import {BiMenu} from 'react-icons/all'
import { useDispatch, useSelector } from "react-redux"
import { getRecipes,getDiets, cleanRecipes } from '../../../Redux/Actions'
import  Cards from '../../Cards/cards'
import Pagination from '../../pagination/pagination'
import hamburger from '../../../utils/hamburger.png'
import papas from '../../../utils/papas.png'
import NavBar from '../NavBar/navBar'
const HomePage = () => {
  const dispatch = useDispatch()
  const [menu, setMenu] = useState(false)
  const AllRecipes = useSelector((store)=> store.recipes)
  const page= useSelector((store)=> store.page)
  const Recipes = AllRecipes.slice(9* (page - 1), 9 * page)
  
 
  useEffect(()=>{
    dispatch(getRecipes())
    dispatch(getDiets())
    return ()=>{
      dispatch(cleanRecipes())
    }
  },[dispatch])


  const handleClick = (e)=>{
     if(!menu ){
     setMenu(true)
     }else if(menu){
      setMenu(false)
     }
 
         
  };
  return (
    <div className='container' >
      <NavBar style={{display:"none"}} recipes={AllRecipes}/>
     <div className='portada'>
      <img className='hamburger' src={hamburger} alt="hamburger" />
      <img className='hamburger' src={papas} alt="hamburger" />
     </div>
     <div style={{zIndex:"5",backgroundColor:"#F5F5F5"}}>
     <div className='nav_home'>
           <h1 style={{color:"#2E2B30",marginTop:"42px"}}  onClick={() =>handleClick()}> <BiMenu/></h1>
           <Pagination/>
      </div>
     <div className='container_home'>
        <div className={menu && window.screen.width <= 980?'menuR':'menu'}>
          <MenuHome/>
        </div>
          <div className='container_cards'>
            <div className='cards'>
            {AllRecipes.length>0?<Cards allRecipes={Recipes}/>:<h1 style={{color:"#2E2B30",fontSize:"120px"}}>Vacio ☹ </h1>}
            </div>
          </div>
      </div>
     </div>
    </div>
  )
}

export default HomePage
