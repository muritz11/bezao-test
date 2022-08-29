import React from 'react'
import './Testimonial.css'
import { FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({ img, name, location, comment }) => {
  return (
    <div className='t-card'>
        <div className="card-header">
            <FaQuoteRight className='quote txt-tomato' />
            <div className='d-flex'>
                <img src={img} alt={name} className="client-avatar" />
                <p>
                    <span className="name fs-16 fw-700 txt-capitalize">{name}</span><br />
                    <span className="location txt-dark">{location}</span>
                </p>
            </div>
        </div>
        <div className="main fs-12 txt-dark">
            {comment}
        </div>
    </div>
  )
}

export default TestimonialCard