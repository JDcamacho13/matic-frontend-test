import logo from '../assets/logo-dark.png'
import { ButtonCTA } from './ButtonCTA'

export const Header = () => {
  return (
    <header className='header'>
      <picture>
        <img src={logo} alt="logo" />
      </picture>
      <nav>
        <ul>
          <a href='#'><li>Home</li></a>
          <a href='#'><li>About</li></a>
          <a href='#'><li>Contact</li></a>
          <a href='#'><li>Blog</li></a>
          <a href='#'><li>Careers</li></a>
        </ul>
      </nav>
      <ButtonCTA>
        Request invite
      </ButtonCTA>
    </header>
  )
}
