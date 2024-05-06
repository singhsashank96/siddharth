import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
// import '../assets/style/checkout.css';


function Checkout() {
    return (
        <div>
            <section className="header">
                <div className="logo">
                    <img src="images/logo.svg" alt="company logo" />
                </div>
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="title-location">
                    <p>The Inspire Summit</p>
                    <p className="hitex">HITEX Exhibition Center  •  July 22 | 5PM</p>
                </div>
            </section>
            <section className="body">
                <div className="ticket-container">
                    <div className="container-ticket silver">
                        <div className="ticket-header">
                            <h2>PHASE 1-SILVER</h2>
                            <span className="price">Rs. 999</span>
                            <span className="multiplication">x</span>
                            <select name="tickets" className="number-of-tickets">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <p>This ticket grants entry to one person into the Silver section (standing only).</p>
                    </div>
                    <div className="container-ticket gold">
                        <div className="ticket-header">
                            <h2>PHASE 1-GOLD</h2>
                            <span className="price">Rs. 1499</span>
                            <span className="multiplication">x</span>
                            <select name="tickets" className="number-of-tickets">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <p>This ticket grants entry to one person into the Gold section (seated).</p>
                    </div>
                    <div className="container-ticket fanpit">
                        <div className="ticket-header">
                            <h2>PHASE 1-FANPIT</h2>
                            <span className="price">Rs. 2499</span>
                            <span className="multiplication">x</span>
                            <select name="tickets" className="number-of-tickets">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <p>This ticket grants entry to one person into the Fanpit area (front stage).</p>
                    </div>
                    <div className="container-ticket gold1">
                        <div className="ticket-header">
                            <h2>GOLD TABLE (4-6PAX) | STANDING COCKTAIL TABLE</h2>
                            <span className="price">Rs. 50000</span>
                            <span className="multiplication">x</span>
                            <select name="tickets" className="number-of-tickets">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <p>2 bottles of premium liquor (whisky/vodka), 12 beers, unlimited chasers, veg/non veg starters, elevated stage, hassle-free entry, 2 special car parking passes, dedicated restrooms, security and service.</p>
                    </div>
                    <div className="container-ticket diamond">
                        <div className="ticket-header">
                            <h2>DIAMOND TABLE (6-8 PAX) | SEATING SOFA</h2>
                            <span className="price">Rs. 85000</span>
                            <span className="multiplication">x</span>
                            <select name="tickets" className="number-of-tickets">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <p>3 bottles of premium liquor (whisky/vodka), 18 beers, unlimited chasers, veg/non veg starters, elevated stage, hassle-free entry, 3 special car parking passes, dedicated restrooms, security and service.</p>
                    </div>
                </div>
                <div className="total">
                    <span className="final-head">Total</span>
                    <span className="final-price">Rs.0</span>
                </div>
                <div className="checkout-btn">
                    <Link to="/finalpage">
                        <button >Checkout</button></Link>
                    {/* <a href="./finalpage.html" className="disabled">Checkout</a> */}
                </div>
            </section>
            <section className="last-bar" />
            <section className="footer">
                <include src="./footer.html" />
            </section>
        </div>
    )
}

export default Checkout