import React from 'react'
import { ChevronRight, ChevronLeft } from 'react-feather'
import Swiper from 'react-id-swiper/lib/custom'
import 'swiper/dist/css/swiper.css'

import './Reviews.css'

export default ({ reviews = [] }) => {
  const params = {
    slidesPerView: 'auto',
    spaceBetween: 0,
    autoHeight: false,
    grabCursor: true,
    centeredSlides: true,
    // remove gatsby Image
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  }

  return (
    <div className="Reviews">
      <h2 className="taCenter">Our Reviews</h2>
      <Swiper {...params}>
        {reviews.map((review, index) => (
          <div className="Review-card" key={`Review${index}`}>
            <div className={`Review-card-stars count-5`}>
              <svg
                fill="#F12337"
                width="20px"
                height="20px"
                version="1.1"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m85.418 41.668h-26.875l-8.543-27.086-8.543 27.086h-26.875l22.918 16.664-10.418 27.086 22.918-16.668 22.918 16.668-10.418-27.086z" />
              </svg>
              <svg
                fill="#F12337"
                width="20px"
                height="20px"
                version="1.1"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m85.418 41.668h-26.875l-8.543-27.086-8.543 27.086h-26.875l22.918 16.664-10.418 27.086 22.918-16.668 22.918 16.668-10.418-27.086z" />
              </svg>
              <svg
                fill="#F12337"
                width="20px"
                height="20px"
                version="1.1"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m85.418 41.668h-26.875l-8.543-27.086-8.543 27.086h-26.875l22.918 16.664-10.418 27.086 22.918-16.668 22.918 16.668-10.418-27.086z" />
              </svg>
              <svg
                fill="#F12337"
                width="20px"
                height="20px"
                version="1.1"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m85.418 41.668h-26.875l-8.543-27.086-8.543 27.086h-26.875l22.918 16.664-10.418 27.086 22.918-16.668 22.918 16.668-10.418-27.086z" />
              </svg>
              <svg
                fill="#F12337"
                width="20px"
                height="20px"
                version="1.1"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m85.418 41.668h-26.875l-8.543-27.086-8.543 27.086h-26.875l22.918 16.664-10.418 27.086 22.918-16.668 22.918 16.668-10.418-27.086z" />
              </svg>
            </div>
            <h4 className="Review-card-title">{review.title}</h4>
            <div className="Review-card-excerpt">
              <p>{review.details}</p>
            </div>
            <div className="Review-card-by">
              <small>{review.by}</small>
            </div>
          </div>
        ))}
      </Swiper>
    </div>
  )
}
