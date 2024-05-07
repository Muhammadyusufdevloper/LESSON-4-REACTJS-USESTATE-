import React, { useState } from 'react'
import "./Product.scss"
import { productData } from '../../static'
import Modal from '../modal/Modal'

const Product = () => {
    const [prodact,setProdact] = useState(null)


    const product = productData?.map((product)=>(
        <div className='product__card' key={product.id}>
            <div onClick={()=> setProdact(product)} className='product__card-img'>
                <img src={product.img} alt="" />
            </div>
            <div className='product__card-info'>
                <h3 className='product__card-info__title'>{product.title}</h3>
                <img src={product.start} alt="star img" />
                <div className='product__card-info__part'>
                    <p className='product__card-info__old-price'>{product.oldPrice}</p>
                    <p className='product__card-info__new-price'>{product.newPrice}</p>
                </div>
            </div>
        </div>
    ))
  return (
    <>
    <section className='product'>
        <div className='container product__wrapper'>
            <p className='product__desc'>Find your favourite smart watch.</p>
            <h2 className='product__title'>Our Latest Products</h2>
            <div className='product__cards'>
                {product}
            </div>
            <button className='product__btn'>View More</button>
        </div>
    </section>
    {prodact ? <Modal data={prodact} close={setProdact} /> : <></>}
    </>
  )
}

export default Product