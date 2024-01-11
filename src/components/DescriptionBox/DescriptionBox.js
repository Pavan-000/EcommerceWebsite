import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>
                Description
            </div>
            <div className='descriptionbox-nav-box fade'>
                Reviews (122)
            </div>
        </div>
        <div className='descriptionbox-description'>
            <p>An E-commerce website is an Online platform that faciliating buying and selling of products pr services over 
                the internet  serves as a virtual market place where business and individuals showcase their products, interact with customers, and transactions without the need for physical presence.
                Ecommerce websites gained a lot of popularity due to their convinient accessbility, and global reach they offer.
            </p>
            <p>
                E-commerce website tyically display products services and a detailed description, images , prices, and any available varables. (E.g., sizes, colors).
                Each product usually has its own relevant information.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox