import React, { useState, useRef,useEffect} from 'react'
import { BiSearch, } from 'react-icons/all'
import { Link } from 'react-router-dom'
import logo from '../logoInicial/logo2.png';
import { useDispatch, useSelector } from 'react-redux';
import { getdatadb, searchRecipe } from '../../../Redux/Actions';
import SearchBar from '../../search/SearchBar';
import ModifyRecipe from '../../ModifyRecipe/ModifyR';


const NavBar = () => {


  const dispatch = useDispatch()
  const recipes = useSelector((store)=> store.recipesDb)

  useEffect(()=>{
    dispatch(getdatadb())
  },[dispatch])

  const [change, setChange] = useState(null)
  const [state, setState]  = useState(false)

  let menuRef = useRef();
  
  const handleChange = (event)=>{
    setChange(event.target.value)
   // dispatch(searchRecipe(event.target.value))
    
  }
  
 

  const handleClick = () =>{
    if(state){
      setState(false)
    }else{
      setState(true)
    }
  }
  /*
  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setChange(false);
  
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

*/
  
  function createRecipe(event){
    event.preventDefault(); 
    dispatch(searchRecipe(change))
  }
  
  

  return (
    <div className='container_nav'>
        <img src={logo} alt="logoApp" style={{width:"60px"}} />
    <div className='search'>
      <form onSubmit={(e)=> createRecipe(e)}>
      <BiSearch className='input_icon' />
      <div className='input_wrapper'>
      <input type="search" className='input' placeholder="Search" onChange={(e) => handleChange(e)}/>
      <div className={change?"contain":"none"} ref={menuRef} > 
        <SearchBar />
      </div>
      </div>
      </form>
    </div>
    <div className='home'>
      <ul>
      <li  style={{display:'inline',paddingRight:"50px",color:"#fff",cursor:"pointer"}} onClick={() => handleClick()}> <strong>Modificar receta </strong></li>
      <li style={{display:'inline'}}> <Link to= "/food" style={{textDecoration: "none",color:"#fff"}}><strong> Home</strong></Link></li>
      </ul>
      <div className={state?'triangle':"none"}></div>
       <div className={state?'container_put':"none"}>
        <ModifyRecipe dB = {recipes}/>
       </div>
      </div>
      
    </div>
    
  )
}

export default NavBar




