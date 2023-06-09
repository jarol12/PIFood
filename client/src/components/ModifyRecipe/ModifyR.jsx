import React from 'react'
import styles from './modify.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateId } from '../../Redux/Actions'


const ModifyRecipe = ({dB}) => {
  const dispactch = useDispatch()

  const handleClick = (value)=>{
    dispactch(updateId(value))
  }

  
  return (
    <div className={styles.put}>
       <div style={{display:"none"}}>
       </div>
        <h4 style={{color:"#2E2B30"}}>Qué receta quieres moidficar ?</h4>
       <div className={styles.container}>
        <ul>
            {dB.length>0?dB.map(recipe =>{
                return <li key={recipe.id} onClick={() =>handleClick(recipe.id)}><Link to={'AddRecipes'} style={{color:"#2E2B30", textDecoration:"none", display:"flex", alignItems:"center"}}><img src={recipe.imagen} alt={recipe.nombre}/> {recipe.nombre} </Link></li>   
            }):<li style={{color:"#2E2B30",fontSize:"1.5em"}} >No tienes recetas 🥄</li>}
        </ul>
    </div>  
    </div>
   
  )
}

export default ModifyRecipe
