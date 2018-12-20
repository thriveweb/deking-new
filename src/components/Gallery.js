import React from 'react'
import { ChevronRight, ChevronLeft } from 'react-feather'
import Swiper from 'react-id-swiper/lib/custom'
import 'swiper/dist/css/swiper.css'
import _get from 'lodash/get'

import Image from './Image'
import './Gallery.css'

export default ({ images = [], alt = '' }) => {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    autoHeight: false,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    // remove gatsby Image
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    renderPrevButton: () => (
      <button className="SwiperButton swiper-button-prev">
        <ChevronLeft />
      </button>
    ),
    renderNextButton: () => (
      <button className="SwiperButton swiper-button-next">
        <ChevronRight />
      </button>
    )
  }

  return (
    <div className="Gallery">
      <Swiper {...params}>
        {images.map((image, index) => (
          <div key={`GalleryImage${index}`}>
            <Image
              background
              key={image.image + index}
              src={_get(image, `image.childImageSharp.sizes.src`)}
              srcSet={_get(image, 'image.childImageSharp.sizes.srcSet')}
              alt={alt}
            />
          </div>
        ))}
      </Swiper>
    </div>
  )
}
