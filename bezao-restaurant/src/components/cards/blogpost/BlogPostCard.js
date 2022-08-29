import React from 'react'
import './BlogPostCard.css'

const BlogPostCard = ({ name, price, img, desc }) => {
  return (
      <div className="blog-card">
        <img src={img} alt={name} />
        <p className="fs-12 mb-8">
            <span className="txt-tomato mr-11 fs-12">Design</span>
            <span className="txt-dark fs-12">01 October 2019</span>
        </p>
        <h4 className='fs-15 mb-8 fw-700 txt-capitalize'>{name}</h4>
        <p className='fs-13 fw-400 mb-8 txt-dark'>{desc}</p>
        <a href="/" className='fs-13 fw-700 txt-tomato txt-upper'>read more</a>
      </div>
  )
}

export default BlogPostCard