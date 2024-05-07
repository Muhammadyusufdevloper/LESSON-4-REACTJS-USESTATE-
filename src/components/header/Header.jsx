import React, {useState} from 'react'
import "./Header.scss"
import siteLogo from"../../assets/svg/header/Logo.svg"
import { IoIosSearch,IoMdMenu } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { headerListLink } from '../../static';


const Header = () => {
    const [show,setShow] = useState(false)

    const itemLink = headerListLink?.map((linkTitle)=>(
        <li className='header__item' key={linkTitle.id}>
            <a className='header__item__link'  href="#">{linkTitle.title}</a>
        </li>
    ))
  return (
    <>
        <header className='header'>
            <nav className='header__navbar container'>
                <a className='header__site-log-link' href="#">
                    <img src={siteLogo} alt="Site logo-svg" />
                </a>
                <ul className='header__list'>
                    {itemLink}
                </ul>
                <div className="header__btns">
                    <button>
                        <IoIosSearch className='header__icons' />
                    </button>
                    <button>
                        <FaUser className='header__icons' />
                    </button>
                    <button>
                        <PiShoppingCartSimpleFill className='header__icons' />
                    </button>
                    <button className='header__menu' onClick={()=>setShow(true)}>
                        <IoMdMenu className='header__icons' />
                    </button>
                </div>                   
            </nav>
            <div className={`header__card-media ${show ? "show" : ""}`}>
                {
                    show?
                    <button className='header__close-btn' onClick={()=>setShow(false)}>
                        <IoClose  className='header__close-icon'/>
                    </button>
                    :
                    <></>
                }
                <ul className='header__list-media'>
                    {itemLink}
                </ul>
            </div>
        </header>
    </>
  )
}

export default Header