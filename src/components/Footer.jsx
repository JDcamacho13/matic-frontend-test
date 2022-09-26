import logoLight from '../assets/logo-light.png'
import { FacebookIcon } from './icons/FacebookIcon'
import { YoutubeIcon } from './icons/YoutubeIcon'
import { TwitterIcon } from './icons/TwitterIcon'
import { PinterestIcon } from './icons/PinterestIcon'
import { InstagramIcon } from './icons/InstagramIcon'
import { ButtonCTA } from './ButtonCTA'

export const Footer = () => {
  return (
    <footer>
      <div className='links-container'>
        <div className='links-networks'>
          <picture>
            <img src={logoLight} />
          </picture>
          <div className="icons">
            <a href='#'><FacebookIcon /></a>
            <a href='#'><YoutubeIcon /></a>
            <a href='#'><TwitterIcon /></a>
            <a href='#'><PinterestIcon /></a>
            <a href='#'><InstagramIcon /></a>
          </div>
        </div>
        <nav>
          <ul>
            <a href='#'><li>About Us</li></a>
            <a href='#'><li>Careers</li></a>
            <a href='#'><li>Contact</li></a>
            <a href='#'><li>Support</li></a>
            <a href='#'><li>Blog</li></a>
            <a href='#'><li>Privacy Policy</li></a>
          </ul>
        </nav>
      </div>
      <div className='copyright-container'>
        <ButtonCTA>
          <span>Request Invite</span>
        </ButtonCTA>
        <p>© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  )
}
