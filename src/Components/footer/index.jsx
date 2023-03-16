import { faFacebook, faInstagram, faLinkedin, faWhatsapp, faDiscord} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './index.css'

export default function Footer() {
    const icons = [faFacebook,faInstagram,faLinkedin, faWhatsapp,faDiscord];



    function addContact(icon) {
        return(
            <>
                <a href="#">
                    <FontAwesomeIcon icon={icon} className='contact-icon'/>
                </a>
            </>
        )
    }
    return(
        <React.Fragment>
            <div className="footer-main">
                <h3>Contact me</h3>
                <div className="contact">
                    {   
                        icons.map((i)=>addContact(i))
                    }
                </div>
                <p>All Copyright reserved ©2023 emmanuel.com </p>
            </div>
        </React.Fragment>
    )
}