import React, { useState } from 'react';
import styles from './checkOut.module.css'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Checkout() {
    const [ticketQuantities, setTicketQuantities] = useState({
        silver: 0,
        gold: 0,
        fanpit: 0,
        goldTable: 0,
        diamondTable: 0,
    });

    const ticketPrices = {
        silver: 999,
        gold: 1499,
        fanpit: 2499,
        goldTable: 50000,
        diamondTable: 85000,
    };

    const handleTicketQuantityChange = (event, ticketType) => {
        const quantity = parseInt(event.target.value);
        setTicketQuantities({ ...ticketQuantities, [ticketType]: quantity });
    };

    const calculateTotalAmount = () => {
        let total = 0;
        for (const ticketType in ticketQuantities) {
            total += ticketQuantities[ticketType] * ticketPrices[ticketType];
        }
        return total;
    };

    const totalAmount = calculateTotalAmount();

    const navigate = useNavigate();

    const sendAmount=(e)=>{
        e.preventDefault();
        navigate('/finalpage', { state: { totalAmount } });
        console.log(totalAmount);
    }

    return (
        <body>
             
          
             <nav className={styles.navbar}>
         <br />
         <br />
         <img src="images/logo.svg" alt="Logo" className={styles.logo}/>  
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
       <section className={styles.body}>
                <div className={styles.ticketContainer}>
                    <div className={`${styles.ContainerTicket} ${styles.silver}`}>
                        <div className={styles.ticketHeader}>
                            <h2>PHASE 1-SILVER</h2>
                            <span className={styles.price}>Rs. 999</span>
                            <span className={styles.multiplication}>x</span>
                            <select
                                name="tickets"
                                className={styles.numberoftickets}
                                onChange={(event) => handleTicketQuantityChange(event, 'silver')}
                            >
                                {[0, 1, 2, 3, 4, 5].map((quantity) => (
                                    <option key={quantity} value={quantity}>
                                        {quantity}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <p style={{marginTop:'-9px' , color:'black'}}>This ticket grants entry to one person into the Silver section (standing only).</p>
                    </div>

                    <div className={`${styles.ContainerTicket} ${styles.gold}`}>
                        <div className={styles.ticketHeader}>
                     <h2>PHASE 1-GOLD</h2>
                     <span className={styles.price}>Rs. 1499</span>
                     <span className={styles.multiplication}>x</span>
                     <select
                                name="tickets"
                                className={styles.numberoftickets}
                                onChange={(event) => handleTicketQuantityChange(event, 'gold')}
                            >
                                {[0, 1, 2, 3, 4, 5].map((quantity) => (
                                    <option key={quantity} value={quantity}>
                                        {quantity}
                                    </option>
                                ))}
                            </select>
                 
                  </div>
                  <p style={{marginTop:'-9px' , color:'black'}}>This ticket grants entry to one person into the Gold section (seated).</p>
               </div>

               <div className={`${styles.ContainerTicket} ${styles.gold}`}>
                        <div className={styles.ticketHeader}>
                     <h2>PHASE 1-FANPIT</h2>
                     <span class={styles.price}>Rs. 2499</span>
                     <span class={styles.multiplication}>x</span>
                     {/* <select name="tickets" class="number-of-tickets"  onChange={(event) => handleTicketQuantityChange(event, 2499)}>
                        <option >0</option>
                        <option >1</option>
                        <option >2</option>
                        <option >3</option>
                        <option >4</option>
                        <option >5</option>
                        
                     </select> */}

<select
                                name="tickets"
                                className={styles.numberoftickets}
                                onChange={(event) => handleTicketQuantityChange(event, 'fanpit')}
                            >
                                {[0, 1, 2, 3, 4, 5].map((quantity) => (
                                    <option key={quantity} value={quantity}>
                                        {quantity}
                                    </option>
                                ))}
                            </select>


                  </div>
                  <p style={{marginTop:'-9px' , color:'black'}}>This ticket grants entry to one person into the Fanpit area (front stage).</p>
               </div>


             
         
                  <div className={`${styles.ContainerTicket} ${styles.gold1}`}>
                        <div className={styles.ticketHeader}>
                     <h2>GOLD TABLE (4-6PAX) | STANDING COCKTAIL TABLE</h2>
                     <span class={styles.price}>Rs. 50000</span>
                     <span class={styles.multiplication}>x</span>
                     <select
                                name="tickets"
                                className={styles.numberoftickets}
                                onChange={(event) => handleTicketQuantityChange(event, 'goldTable')}
                            >
                                {[0, 1, 2, 3, 4, 5].map((quantity) => (
                                    <option key={quantity} value={quantity}>
                                        {quantity}
                                    </option>
                                ))}
                            </select>
                  </div>
                  <p style={{marginTop:'-9px' , color:'black'}}>2 bottles of premium liquor (whisky/vodka), 12 beers, unlimited chasers, veg/non veg starters, elevated stage, hassle-free entry, 2 special car parking passes, dedicated restrooms, security and service.</p>
               </div>

               
                  <div className={`${styles.ContainerTicket} ${styles.diamond}`}>
                        <div className={styles.ticketHeader}  style={{position:'relative'}}>
                     <h2>DIAMOND TABLE (6-8 PAX) | SEATING SOFA  </h2> 
                     <span className={styles.texketLeft} style={{position:'absolute'}}> Few Tickets Left</span> 
                     <span class={styles.price}>Rs. 85000</span>
                     <span class={styles.multiplication}>x</span>
                     <select
                                name="tickets"
                                className={styles.numberoftickets}
                                onChange={(event) => handleTicketQuantityChange(event, 'diamondTable')}
                            >
                                {[0, 1, 2, 3, 4, 5].map((quantity) => (
                                    <option key={quantity} value={quantity}>
                                        {quantity}
                                    </option>
                                ))}
                            </select>
                  </div>
                  <p style={{marginTop:'-9px' , color:'black'}}>3 bottles of premium liquor (whisky/vodka), 18 beers, unlimited chasers, veg/non veg starters, elevated stage, hassle-free entry, 3 special car parking passes, dedicated restrooms, security and service.</p>
               </div>

                </div>
                <div className={styles.ticketHeader}>
                            <span className={styles.totleText}>Total</span>
                            <span className={styles.price} style={{marginLeft:'42rem' , fontWeight:'600'}}>Rs. {totalAmount}</span>
                          
                           
                        </div>
                <div className=''>
              
                <div>
                {totalAmount > 0 ? (
                    <div className={styles.checkoutBtn}  onClick={sendAmount}>
                        <a href="./finalpage.html" className="">
                            Checkout
                        </a>
                    </div>
                ) : (
                    <div className={styles.checkoutBtn}>
                        <a href="./finalpage.html" className={styles.disabled}>
                            Checkout
                        </a>
                    </div>
                )}
                </div>
                </div>
               
              
              

            </section>
            <div className={styles.redbar}></div>
                <footer class={styles.footer}>
              <div class={styles.logoContainer}>
                <img src="assets/logos/fb.png" alt="Logo 1" />
                <img src="assets/logos/twitter.png" alt="Logo 2" />
              </div>
              <p>This is some footer text.</p>
            </footer>
          
        </body>
    );
}

export default Checkout;
