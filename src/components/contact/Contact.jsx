import React from 'react'
import "./Contact.scss"
import contactImg from"../../assets/image/product/apple1.png"
const Contact = () => {
  return (
    <>
        <section className='contact'>
            <div className='container'>
                <div className='contact__wrapper'>
                    <div className='contact__left--boxes'>
                        <h1 className='contact__title'>Subscribe To Newsletter</h1>
                        <p className='contact__desc'>Get free guide about smart watches daily. </p>
                        <div className='contact__search--card'>
                            <div>
                                <input className='contact__search--input' type="search" placeholder='Find the best brands'/>
                            </div>
                            <button className='contact__search--btn'>Subscribe</button>
                        </div>
                    </div>
                    <div className='contact__right--boxes'>
                         <img className='contact__right--boxes__img' src={contactImg} alt="hero img" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact