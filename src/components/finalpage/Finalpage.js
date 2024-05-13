import React from 'react'
import './finalpage.css';
import { useLocation, Link } from 'react-router-dom';


function Finalpage() {
    const location = useLocation();

    // Access the state object from the location
    const { totalAmount } = location.state || {};
    console.log(totalAmount)
    return (
        <>
            <nav className="navbar">
                <div className="logo-container">
                    <img src="images/logo.svg" alt="Logo" className="logo" />
                </div>
                <ul className="nav-menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Speakers</a></li>
                    <li><a href="#">Schedule</a></li>
                    <li><a href="#">Sponsors</a></li>
                    <li><a href="#">Info</a></li>
                </ul>
            </nav>
            <div className="Finel_div">
                <div className="Finel_div_body">
                    <div className="form_div">
                        <div>
                            <h1 id="add_details" className="detail--main_details heading">Add your Details</h1>
                            <div className="form--main">
                                <form name="myForm" id="registrationForm">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">First Name</label>
                                            <input type="text" id="name" name="name" className="full-width form_input" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Last Name</label>
                                            <input type="email" id="email" name="email" className="full-width form_input" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" className="full-width form_input_email" />
                                    </div>
                                    <button type="submit" className="full-width fonm_btn">Continue</button>
                                </form>
                            </div>

                        </div>
                    </div>
                    <div className="table_div">
                        <div className="price-entry">
                            <h1 id="price-entry_text_inspire" className="price-entry_text">THE INSPIRE SUMMIT</h1>

                            <div className="side-container">

                            </div>
                            <div className="price-entry_text_two">
                                <h2 id="price-entry_text_apr" className="price-entry_apr">Apr 18, 2035, 8:30 AM</h2>
                            </div>
                            <div className="hitex">
                                <h2 id="price-entry_hit" className="hitex_text">HITEX Exhibition Center</h2>
                            </div>
                            <div className="side-container">

                            </div>
                            <div className="inside-items">
                            </div>
                            <div className="cont-totala">
                                <div> <h2 id="cont-total-text" >Subtotal</h2></div>
                                <div> <h2 id="final-price_rs_final" >Rs <span id="totalAmount1">{totalAmount}</span></h2>
                                </div>
                            </div>
                            <div className="final-service1">
                                <h2 id="final-service1-text-one" className="final-service1_text"></h2>
                                <h2 id="final-service1_rs-two" className="final-service1_rs"></h2>
                            </div>
                            <div className="side-container">

                            </div>
                            <div className="cont-totalb">
                                <div> <h2 id="cont-total-text" >Total</h2></div>
                                <div> <h1 id="final-price_rs_final" className="final-price_rs" style={{ paddingTop: '5px' }}>Rs <span id="totalAmount2">{totalAmount}</span></h1>
                                </div>
                            </div>
                            <div className="final-service1">
                                <h2 id="final-service1-text-one" className="final-service1_text"></h2>
                                <h2 id="final-service1_rs-two" className="final-service1_rs"></h2>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Finalpage
