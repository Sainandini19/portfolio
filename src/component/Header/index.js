

import {Outlet , Link} from 'react-router-dom'

import {AiOutlineHome, AiOutlineContacts} from 'react-icons/ai'

import {FaLinkedin} from 'react-icons/fa'

import {AiOutlineGithub} from 'react-icons/ai'

import {GiSkills} from 'react-icons/gi'

import {GoProjectSymlink} from 'react-icons/go'

import './index.css'


const Header = () => (
  <>
    <nav className="nav-container">
      <div>
      <Link to="/" className="nav-link">
      <img
          src="https://res.cloudinary.com/dhegijvfy/image/upload/v1695463398/attachment_8390576_vbulug.png"
          alt="logo"
          className="website-logo"
        />
      </Link>
        
      </div>

      <ul className="nav-desktop-content">
        <Link to="/" className="nav-link">
          <li className="nav-item">Home</li>
        </Link>

        <Link to="/skills" className="nav-link">
          <li className="nav-item">Skills</li>
        </Link>

        <Link to="/projects" className="nav-link">
          <li className="nav-item">Projects</li>
        </Link>

        <Link to="/contacts" className="nav-link">
          <li className="nav-item">Contacts</li>
        </Link>
      </ul>
      <div className="social-media">
        <a href='https://www.linkedin.com/in/sainandini-bandari/' target='_blank' rel="noreferrer">
        <FaLinkedin className='icon-social1' />
        </a>
         <a href='https://github.com/Sainandini19' target='_blank'   rel="noreferrer">
         <AiOutlineGithub className='icon-social' />
         </a>

         <a href='https://docs.google.com/document/d/15hoBNJiaLYSRx34lfzLax4aoC3dGGSGV/edit' target='_blank'   rel="noreferrer">
           <button type='button' className='resume-button'>Resume</button>
         </a>
        
      </div>
      <ul className="nav-mobile-content">
        <Link to="/" className="nav-link">
          <li className="nav-item-mobile">
            <AiOutlineHome />
          </li>
        </Link>

        <Link to="/skills" className="nav-link">
          <li className="nav-item-mobile">
            <GiSkills />
          </li>
        </Link>

        <Link to="/projects" className="nav-link">
          <li className="nav-item-mobile">
            <GoProjectSymlink />
          </li>
        </Link>

        <Link to="/contacts" className="nav-link">
          <li className="nav-item-mobile">
            <AiOutlineContacts />
          </li>
        </Link>
      </ul>
    </nav>
    <Outlet />
  </>
)
export default Header