import React from 'react'
import "./About.scss"
import { aboutData } from '../../static'

const About = () => {
    const card = aboutData?.map((user)=>(
        <div className='about__card' key={user.id}>
            <div className='about__card-img'>
                <img src={user.img} alt="about img"/>
            </div>
            <div className='about__card-info'>
                <h3 className='about__card-title'>{user.title}</h3>
                <p className='about__card-desc'>{user.desc}</p>
                <img src={user.star} alt="star img" />
            </div>
        </div>
    ))
  return (
    <>
        <section className='about'>
            <div className='container'>
                <p className='about__desc'>Here are our some of the best clients.</p>
                <h2 className='about__title'>What People Say About Us</h2>
                <div className='about__cards'>
                    {card}
                </div>
            </div>
        </section>
    </>
  )
}

export default About