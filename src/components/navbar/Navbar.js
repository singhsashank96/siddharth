import React from 'react'
import styles from '../checkout/checkOut.module.css'; 
import { Link } from 'react-router-dom';

function Navbar() {
  return (
   <>
    <nav className={styles.navbar}>
         <br />
         <br />
         <img src="assets/logos/frame.png" alt="Logo" className={styles.logo}/>  
         <ul className={styles.navMenu}>
           <li> <Link to="/">Home</Link></li>
           <li><a href="#">About</a></li>
           <li><a href="#">Speakers</a></li>
           <li><a href="#">Schedule</a></li>
           <li><a href="#">Sponsors</a></li>
           <li><a href="#">Info</a></li>
         </ul>
         <br/>
         <div className={styles.textContainer}>
           <p className={styles.para1}>The Inspire Summit</p>
           <p style={{marginTop:'-40px'}}>HITEX Exhibition Center   •   July 22 | 5PM</p>
         </div>
       </nav>
   </>
  )
}

export default Navbar