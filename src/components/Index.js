import React from 'react'
import { Link, Outlet } from 'react-router-dom';
// import '../assets/style/index.css';

function Index() {
    return (
        <div>
            <div className="head" id="forback">
                <img src="assets/logos/logo.png" alt="Company Logo" className="logo" />
                <nav className="navi">
                    <ul>
                        <li className="up"><a className="ups" href="#home">Home</a></li>
                        <li className="up"><a href="#about">About</a></li>
                        <li className="up"><a href="#speak">Speakers</a></li>
                        <li className="up"><a href="#schedule">Schedule</a></li>
                        <li className="up"><a href="#spon">Sponsors</a></li>
                        <li className="up"><a href="#infor">Info</a></li>
                    </ul>
                </nav>
                <br />
                <br />
                <br />
                <div className="women">
                    <h1 className="title khand-semibold">WOMEN <span className="lobster-regular of">  of </span> <br /> <span className="tech">TECH PRESENT:</span> </h1>
                </div>
                <h1 className="title khand-regular inspire" id="inspire">THE INSPIRE SUMMIT</h1>
                <br />
                <p className="info">Date: <span id="date"> </span> | Location: <span id="location" /></p>
                <br />
                <Link to="/checkout"><a href="#" className="btn">Get Tickets</a></Link>



            </div>
            {/* about */}
            <div id="about">
                <br />
                <br />
                <br />
                <br />
                <p className="interaa">01</p>
                <br />
                <p className="interaa">ABOUT</p>
                <br />
                <p className="aboutpara">I'M A PARAGRAPH. CLICK TO ADD YOUR OWN TEXT <br />
                    AND EDIT ME. IT'S EASY. JUST CLICK "EDIT TEXT" OR <br />
                    DOUBLE CLICK ME TO ADD YOUR OWN CONTENT AND <br />
                    MAKE CHANGES TO THE FONT.</p>
                <br />
            </div>
            {/* speaker */}
            <section id="speaker" className="speaker">
                <br />
                <br />
                <h2 className="spk-h2 interaa">03</h2>
                <br />
                <br />
                <h2 className="interaa">SPEAKERS</h2>
                <br />
                <br />
                <div className="spk-container">
                    <div className="flexbox">
                        <div className="flipper">
                            <div className="front">
                                <img id="social-media-icon" src="assets/images/s1.png" alt="Image 1" className="image" />
                            </div>
                            <div className="back1">RACHAEL<br /> MOORE<br />
                                <div className="waa">WAWA.OG</div>
                                <div><button className="share-button"><svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                    <path d="M29.7074 13.2937L19.7074 3.29375C19.5676 3.15381 19.3895 3.05847 19.1955 3.01978C19.0016 2.98109 18.8005 3.00079 18.6177 3.07638C18.4349 3.15198 18.2787 3.28008 18.1687 3.44448C18.0588 3.60889 18 3.80221 17.9999 3.99999V9.04374C14.7574 9.32124 11.1762 10.9087 8.22992 13.4075C4.68242 16.4175 2.47367 20.2962 2.00992 24.3287C1.97368 24.6423 2.03725 24.9592 2.19158 25.2345C2.34591 25.5098 2.58313 25.7294 2.86949 25.862C3.15586 25.9947 3.47677 26.0337 3.78655 25.9734C4.09634 25.9131 4.37921 25.7566 4.59492 25.5262C5.96992 24.0625 10.8624 19.4337 17.9999 19.0262V24C18 24.1978 18.0588 24.3911 18.1687 24.5555C18.2787 24.7199 18.4349 24.848 18.6177 24.9236C18.8005 24.9992 19.0016 25.0189 19.1955 24.9802C19.3895 24.9415 19.5676 24.8462 19.7074 24.7062L29.7074 14.7062C29.8944 14.5188 29.9995 14.2648 29.9995 14C29.9995 13.7352 29.8944 13.4812 29.7074 13.2937ZM19.9999 21.5862V18C19.9999 17.7348 19.8946 17.4804 19.707 17.2929C19.5195 17.1054 19.2651 17 18.9999 17C15.4899 17 12.0712 17.9162 8.83867 19.725C7.19235 20.6503 5.65844 21.7627 4.26742 23.04C4.99242 20.06 6.81992 17.2262 9.52367 14.9325C12.4262 12.4712 15.9687 11 18.9999 11C19.2651 11 19.5195 10.8946 19.707 10.7071C19.8946 10.5196 19.9999 10.2652 19.9999 9.99999V6.41499L27.5862 14L19.9999 21.5862Z" fill="white" />
                                </svg></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flexbox">
                        <div className="flipper">
                            <div className="front">
                                <img src="assets/images/s2.png" alt="Image 2" className="image" />
                            </div>
                            <div className="back1">RACHAEL<br /> MOORE<br />
                                <div className="waa">WAWA.OG</div>
                                <div><button className="share-button"><svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                    <path d="M29.7074 13.2937L19.7074 3.29375C19.5676 3.15381 19.3895 3.05847 19.1955 3.01978C19.0016 2.98109 18.8005 3.00079 18.6177 3.07638C18.4349 3.15198 18.2787 3.28008 18.1687 3.44448C18.0588 3.60889 18 3.80221 17.9999 3.99999V9.04374C14.7574 9.32124 11.1762 10.9087 8.22992 13.4075C4.68242 16.4175 2.47367 20.2962 2.00992 24.3287C1.97368 24.6423 2.03725 24.9592 2.19158 25.2345C2.34591 25.5098 2.58313 25.7294 2.86949 25.862C3.15586 25.9947 3.47677 26.0337 3.78655 25.9734C4.09634 25.9131 4.37921 25.7566 4.59492 25.5262C5.96992 24.0625 10.8624 19.4337 17.9999 19.0262V24C18 24.1978 18.0588 24.3911 18.1687 24.5555C18.2787 24.7199 18.4349 24.848 18.6177 24.9236C18.8005 24.9992 19.0016 25.0189 19.1955 24.9802C19.3895 24.9415 19.5676 24.8462 19.7074 24.7062L29.7074 14.7062C29.8944 14.5188 29.9995 14.2648 29.9995 14C29.9995 13.7352 29.8944 13.4812 29.7074 13.2937ZM19.9999 21.5862V18C19.9999 17.7348 19.8946 17.4804 19.707 17.2929C19.5195 17.1054 19.2651 17 18.9999 17C15.4899 17 12.0712 17.9162 8.83867 19.725C7.19235 20.6503 5.65844 21.7627 4.26742 23.04C4.99242 20.06 6.81992 17.2262 9.52367 14.9325C12.4262 12.4712 15.9687 11 18.9999 11C19.2651 11 19.5195 10.8946 19.707 10.7071C19.8946 10.5196 19.9999 10.2652 19.9999 9.99999V6.41499L27.5862 14L19.9999 21.5862Z" fill="white" />
                                </svg></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flexbox">
                        <div className="flipper">
                            <div className="front">
                                <img src="assets/images/s2.png" alt="Image 3" className="image" />
                            </div>
                            <div className="back1">RACHAEL<br /> MOORE<br />
                                <div className="waa">WAWA.OG</div>
                                <div><button className="share-button"><svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                    <path d="M29.7074 13.2937L19.7074 3.29375C19.5676 3.15381 19.3895 3.05847 19.1955 3.01978C19.0016 2.98109 18.8005 3.00079 18.6177 3.07638C18.4349 3.15198 18.2787 3.28008 18.1687 3.44448C18.0588 3.60889 18 3.80221 17.9999 3.99999V9.04374C14.7574 9.32124 11.1762 10.9087 8.22992 13.4075C4.68242 16.4175 2.47367 20.2962 2.00992 24.3287C1.97368 24.6423 2.03725 24.9592 2.19158 25.2345C2.34591 25.5098 2.58313 25.7294 2.86949 25.862C3.15586 25.9947 3.47677 26.0337 3.78655 25.9734C4.09634 25.9131 4.37921 25.7566 4.59492 25.5262C5.96992 24.0625 10.8624 19.4337 17.9999 19.0262V24C18 24.1978 18.0588 24.3911 18.1687 24.5555C18.2787 24.7199 18.4349 24.848 18.6177 24.9236C18.8005 24.9992 19.0016 25.0189 19.1955 24.9802C19.3895 24.9415 19.5676 24.8462 19.7074 24.7062L29.7074 14.7062C29.8944 14.5188 29.9995 14.2648 29.9995 14C29.9995 13.7352 29.8944 13.4812 29.7074 13.2937ZM19.9999 21.5862V18C19.9999 17.7348 19.8946 17.4804 19.707 17.2929C19.5195 17.1054 19.2651 17 18.9999 17C15.4899 17 12.0712 17.9162 8.83867 19.725C7.19235 20.6503 5.65844 21.7627 4.26742 23.04C4.99242 20.06 6.81992 17.2262 9.52367 14.9325C12.4262 12.4712 15.9687 11 18.9999 11C19.2651 11 19.5195 10.8946 19.707 10.7071C19.8946 10.5196 19.9999 10.2652 19.9999 9.99999V6.41499L27.5862 14L19.9999 21.5862Z" fill="white" />
                                </svg></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flexbox">
                        <div className="flipper">
                            <div className="front">
                                <img src="assets/images/s4.png" alt="Image 4" className="image" />
                            </div>
                            <div className="back1">RACHAEL<br /> MOORE<br />
                                <div className="waa">WAWA.OG</div>
                                <div><button className="share-button"><svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                                    <path d="M29.7074 13.2937L19.7074 3.29375C19.5676 3.15381 19.3895 3.05847 19.1955 3.01978C19.0016 2.98109 18.8005 3.00079 18.6177 3.07638C18.4349 3.15198 18.2787 3.28008 18.1687 3.44448C18.0588 3.60889 18 3.80221 17.9999 3.99999V9.04374C14.7574 9.32124 11.1762 10.9087 8.22992 13.4075C4.68242 16.4175 2.47367 20.2962 2.00992 24.3287C1.97368 24.6423 2.03725 24.9592 2.19158 25.2345C2.34591 25.5098 2.58313 25.7294 2.86949 25.862C3.15586 25.9947 3.47677 26.0337 3.78655 25.9734C4.09634 25.9131 4.37921 25.7566 4.59492 25.5262C5.96992 24.0625 10.8624 19.4337 17.9999 19.0262V24C18 24.1978 18.0588 24.3911 18.1687 24.5555C18.2787 24.7199 18.4349 24.848 18.6177 24.9236C18.8005 24.9992 19.0016 25.0189 19.1955 24.9802C19.3895 24.9415 19.5676 24.8462 19.7074 24.7062L29.7074 14.7062C29.8944 14.5188 29.9995 14.2648 29.9995 14C29.9995 13.7352 29.8944 13.4812 29.7074 13.2937ZM19.9999 21.5862V18C19.9999 17.7348 19.8946 17.4804 19.707 17.2929C19.5195 17.1054 19.2651 17 18.9999 17C15.4899 17 12.0712 17.9162 8.83867 19.725C7.19235 20.6503 5.65844 21.7627 4.26742 23.04C4.99242 20.06 6.81992 17.2262 9.52367 14.9325C12.4262 12.4712 15.9687 11 18.9999 11C19.2651 11 19.5195 10.8946 19.707 10.7071C19.8946 10.5196 19.9999 10.2652 19.9999 9.99999V6.41499L27.5862 14L19.9999 21.5862Z" fill="white" />
                                </svg></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Schedule */}
            <div className="container">
                <br />
                <br />
                <p className="sc-head interaa">03</p>
                <br />
                <p className="sc-head interaa">SCHEDULE</p>
                <br />
                <table className="table">
                    <tbody><tr>
                        <th colSpan={2}>AM</th> </tr>
                        <tr>
                            <td>09:15</td>
                            <td>&nbsp;Maxine Hughes: Businesses that  Shine</td>
                        </tr>
                        <tr>
                            <td>09:15</td>
                            <td>&nbsp; Networking Break</td>
                        </tr>
                        <tr>
                            <td>09:15</td>
                            <td> &nbsp;Joan Seymour: The Multitasking Myth</td>
                        </tr>
                        <tr>
                            <td>12:00</td>
                            <td> &nbsp;Lunch Break</td>
                        </tr>
                    </tbody></table>
                <table className="table">
                    <tbody><tr>
                        <th colSpan={2}>PM</th> </tr>
                        <tr>
                            <td>09:15</td>
                            <td> &nbsp;Maxine Hughes: Businesses that Shine</td>
                        </tr>
                        <tr>
                            <td>09:15</td>
                            <td>&nbsp;Networking Break</td>
                        </tr>
                        <tr>
                            <td>09:15</td>
                            <td> &nbsp;Joan Seymour: The Multitasking Myth</td>
                        </tr>
                        <tr>
                            <td>12:00</td>
                            <td> &nbsp;Lunch Break</td>
                        </tr>
                    </tbody></table>
            </div>
            {/* sponsors */}
            <section className="sponsors" id="spon">
                <br />
                <p className="interaa">04</p>
                <br />
                <p className="interaa">Sponsors</p>
                <ul className="sponsor-logos">
                    <li><img src="assets/logos/l1.png" alt="Sponsor 1" /></li>
                    <li><img src="assets/logos/l2.png" alt="Sponsor 1" /></li>
                    <li><img src="assets/logos/l3.png" alt="Sponsor 1" /></li>
                    <li><img src="assets/logos/l4.png" alt="Sponsor 1" /></li>
                    <li><img src="assets/logos/l5.png" alt="Sponsor 1" /></li>
                </ul>
            </section>
            {/* info */}
            <section className="information" id="infor">
                <br />
                <br />
                <br />
                <h3 className="inter400 summit">THE INSPIRE SUMMIT</h3>
                <br />
                <div className="details">
                    <p className="inter400 nextdate">Date: 2024-05-10 | Location: New York City</p>
                </div>
                <Link to="/checkout"><button className="get-tickets open-sans-400">Get Tickets</button></Link>

            </section>
            {/* footer */}
            <div className="footer">
                <p className="fpara">2023 by Women of Tech. Powered</p>
                <div className="flogo">
                    <img src="assets/logos/fb.png" alt />
                    <img src="assets/logos/twitter.png" alt />
                </div>
            </div>
        </div>
    )
}

export default Index