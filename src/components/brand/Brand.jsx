import React from 'react'
import "./Brand.scss"
import { brandData } from '../../static'

const Brand = () => {
  const brandCard =  brandData?.map((card)=>(
    <div className='brand__cards' key={card.id}>
        <div className='brand__card'>
            <img src={card.img} alt="Card img" />
        </div>
        <div className='brand__card'>
            <h3 className='brand__title'>{card.title}</h3>
            <p className='brand__text'>{card.desc}</p>
        </div>
    </div>
  ))
  return (
    <>
        <section className='brand'>
            <div className='container brand__wrapper'>
                {brandCard}
            </div>
        </section>
    </>
  )
}

export default Brand