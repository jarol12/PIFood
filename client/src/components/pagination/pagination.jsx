import React,{useEffect} from 'react'
import {MdNavigateNext} from 'react-icons/all'; 
import { useState } from "react";
import styles from './pagination.module.css'
import { useDispatch, useSelector } from "react-redux";
import { dataPage, next,prev } from "../../Redux/Actions";
import { Link } from 'react-router-dom';

const Pagination = () => {
  const [boton, setBoton] = useState([]);
  const dispatch = useDispatch()
  let pg = useSelector((store) => store.page);
  let recipes = useSelector((store) => store.recipes);



  useEffect(() => {
    let numButtons = () => {
      let num = recipes && recipes.length / 9;   
      let num1 = Math.ceil(num);
      let arr = new Array(num1);
      for (let i = 0; i < arr.length; i++) {
        arr[i] = i+1; 
      }
      return setBoton(arr);
    };
    recipes && numButtons();
  }, [recipes]);


  let pagination = (e) => {
    dispatch(dataPage(e));
  };
    const handleNext = ( ) =>{
        if(pg<=boton.length-1){
        dispatch(next(1))};
      }
      const handlePrev = ( ) =>{
        if(pg>1){
        dispatch(prev(1))};
      }
    
  return (
    <div className={styles.pag}>
     <Link to = {'/AddRecipes'} style={{color:"#2E2B30", textDecoration:"none"}}> Add a recipe </Link>
    <div className={styles.next}  onClick={() => handlePrev()}> <MdNavigateNext  style={{transform: "rotate(180deg)"}}/>
    </div>
     <button  onClick={() => pagination(1)} className={pg-1>1? null :styles.none}>
      1
     </button>
     <button className={pg-2>1? styles.point:styles.none}>...
     </button>
   <button onClick={() => pagination(pg-1)} className={pg-1>0? null :styles.none}>
       {pg-1}
      </button>
      <button className={styles.ind}>
       {pg}
      </button>
      <button onClick={() => pagination(pg+1)} className={pg+1<boton[boton.length-1]? null :styles.none} >
       {pg+1}
    </button>
    <button className={pg<boton[boton.length-2]? styles.point :styles.none}>
      ...
     </button>
    <button  onClick={() => pagination(boton[boton.length-1])} className={pg<boton[boton.length-1]? null :styles.none}>
       {boton[boton.length-1]} 
     </button>
     <div className={styles.next} onClick={() => handleNext()}>
     <MdNavigateNext/>
      </div>

      </div>
  )
}

export default Pagination
