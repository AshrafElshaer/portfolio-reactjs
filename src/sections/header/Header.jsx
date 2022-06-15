import Navbar from '../../components/navbar/Navbar';
import Button from '../../components/button/Button';
import headerSVG from '../../images/header.svg';

import './header.scss';
import { FaLinkedin , FaGithub , FaTwitterSquare } from 'react-icons/fa';

const Header = () => {
return (
<header className="header" id="home">
  <Navbar />
  <div className="header__container">
    <div className="header-left">
      <nav>
        <ul className="header__container__social-navbar">
          <li className="header__container__social-navbar__list">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li className="header__container__social-navbar__list">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li className="header__container__social-navbar__list">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare />
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__container__text">
        <h1 className="header__container__text--title">
          <span>Hello , I'm </span>
          <span>Ashraf Elshaer</span>
          <span>frontEnd web Developer</span>
        </h1>
        <Button link='#' text="view my resume" />
      </div>

    </div>
    <div className="header-right">
      <img src={headerSVG} alt="header svg" />
    </div>
  </div>

</header>
)
}

export default Header