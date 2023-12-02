import React from 'react'
import './styles/Footer.css'
import Facebook from '../assets/images/ico-facebook.png'
import Instagram from '../assets/images/ico-instagram.png'
import WhatsApp from '../assets/images/ico-whatsapp.png'
import Tiktok from '../assets/images/ico-tiktok.png'
import DH from '../assets/images/DH.png'

const Footer = () => {
  return (
    <footer className="Footer">
        <section className="Digital">
          <div className="SocialMedia">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src={Facebook} alt='facebook-logo' />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img src={Instagram} alt='instagram-logo' />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
              <img src={WhatsApp} alt='whatsapp-logo' />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
              <img src={Tiktok} alt='tiktok-logo' />
            </a>
          </div>
          
          <div className="Logo">
            <p>Powered by</p>
            <img src={DH} alt='DH-logo' />
          </div>
        </section>

        <div className="Container"></div>
    </footer>
  )
}

export default Footer