import React from 'react';
import logo from '../images/small_logo.png'

const Footer = () => {
    return(
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Reservations</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contacts</h3>
                    <ul>
                        <li>Address: <br/> 123 Towncity, Chicago</li>
                        <li>Phone: <br/> ++0123 456 789</li>
                        <li>Email: <br/> contact@littlelemon.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href='https://www.facebook.com'>Facebook</a></li>
                        <li><a href='https://www.instagram.com'>Instagram</a></li>
                        <li><a href='https://www.twitter.com'>X</a></li>
                        <li><a href='https://www.youtube.com'>Youtube</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;