import {ImSpoonKnife} from 'react-icons/all'
import styles from './LogogInic.module.css'
import logo from './cook.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const LogoInicial = () => {
  const [change, setChange] = useState(true)
  setTimeout(() => {
    setChange(false)
  }, 5000);
  return (
    <div className={styles.container}>
        <img src={logo} alt="cook.png" /> 
        <div></div>
        <div className={change?styles.load:styles.none} style={{position:"absolute", top:"65%"}}>
          <p style={{display:"inline"}}>.</p>
          <p style={{display:"inline"}}>.</p>
          <p style={{display:"inline"}}>.</p>
        </div>
        <Link to={'/food'} className={change?styles.none:styles.icon} style={{position:"absolute", top:"80%",color:"#fff",fontSize: "2.5em" ,textDecoration:"none"}}>To cook <ImSpoonKnife  style={{fontSize: ".5em" }}/></Link>
  
    </div>
   
  )
}

export default LogoInicial
