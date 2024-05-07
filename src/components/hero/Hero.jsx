import React from 'react'
import "./Hero.scss"
import { IoIosSearch} from "react-icons/io";
import heroImg from"../../assets/image/hero/hero.png"

const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className='container'>
                <div className='hero__wrapper'>
                    <div className='hero__left--boxes'>
                        <h1 className='hero__title'>Discover Most Suitable Watches</h1>
                        <p className='hero__desc'>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
                        <div className='hero__search--card'>
                            <div>
                                <IoIosSearch className='hero__search--icons' />
                                <input className='hero__search--input' type="search" placeholder='Find the best brands'/>
                            </div>
                            <button className='hero__search--btn'>Search</button>
                        </div>
                    </div>
                    <div className='hero__right--boxes'>
                         <img className='hero__right--boxes__img' src={heroImg} alt="hero img" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero