import React, { useState } from 'react'
import {ImSpoonKnife,TbChefHat} from 'react-icons/all'
import {Link} from 'react-router-dom'

const Card = ({nombre,tipos_dietas,imagen,id,healthScore}) => {
  const [show,setShow] = useState(false)
  const handleClick = ()=>{
    if(show){
      setShow(false)
    }else{
      setShow(true)
    }
  }
  return (
    <div className="card-container">
      <img src={imagen} alt={nombre} />
      <div className='card-info'>
      <Link to={`/food/${id}`}  style={{textDecoration: "none",color:"#fff"}} ><h3>{nombre}</h3></Link>
       <p style={{color:"#fff"}}>health Score : {healthScore}</p>
       <div style={{position:"absolute", bottom:"3px", right:"5px",borderRadius:"50%", border:"1px solid #FFD71B",width:"25px",height:"25px", display:"flex", justifyContent:"center",alignItems:"center", cursor:"pointer"}} onClick={() => handleClick()}>
        <ImSpoonKnife color='#FFD71B'/>
       </div>
       
       <div className={show?"diets":"none"}>
       <TbChefHat fontSize="22px" color='#2E2B30' style={{position:"absolute", left:"70px"}}/>
       <p>Dietas</p>
       <ul style={{display:"flex", height:"100%", flexDirection:"column", flexWrap:"wrap"}} >{tipos_dietas.map((diet,index )=> 
       <li key={index}>{diet}</li>
      )} 
      </ul> 
        </div> 
       
      </div>
     
    </div>
  )
}

export default Card
