import React from 'react'
import "./Modal.scss"

const Modal = ({data,close}) => {
  return (
    <>
    <div onClick={()=>close(null)} className='modal__overBackround'></div>
    <div className='modal__boes'>
        <div className='modal__card'>
            <div className='modal__card-img'>
                <img src={data.img} alt="single img" />
            </div>
            <div className='modal__card-info'>
                <button onClick={()=>close(null)} className='modal__card-info__close'>
                    X
                </button>
                <h3 className='modal__card__title'>{data.title}</h3>
                <img src={data.start} alt="" />
                <p className='modal__card__desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequuntur, consequatur pariatur sequi officia unde quae. Dolor amet vitae omnis voluptas harum cumque, aut numquam, sed itaque consequatur illo aliquam?</p>
                <div className='modal__card-info__part'>
                    <p className='modal__card-info__old-price'>{data.oldPrice}</p>
                    <p className='modal__card-info__new-price'>{data.newPrice}</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Modal