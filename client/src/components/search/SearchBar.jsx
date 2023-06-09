import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {React } from "react";
export default function SearchBar(){
  
  const recipes = useSelector((store)=>store.search)

  return( 
  <div class="show">
    <nav class='list'>
      <ul>
      {recipes.map((recipe,index)=>{
          return <Link to={`/food/${recipes.id}`} style={{textDecoration: "none",color:"#fff"}}  key={index}><li><img src={recipe.imagen} alt={recipe.nombre} />{recipe.nombre}</li></Link>
        })}
      </ul>
        </nav>
  </div>
    
)}

