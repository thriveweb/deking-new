import React from 'react'
import { ChevronRight, ChevronLeft } from 'react-feather'
import Swiper from 'react-id-swiper/lib/custom'
import 'swiper/dist/css/swiper.css'
import _get from 'lodash/get'

import Image from './Image'
import './OptionGallery.css'

export default class OptionGallery extends React.Component {
  constructor(props) {
    super(props)
    this.goNext = this.goNext.bind(this)
    this.goPrev = this.goPrev.bind(this)
    this.swiper = null
  }

  componentDidUpdate(prevProps) {
    if(!_get(this, 'props.selectedOptions') && !_get(prevProps, 'selectedOptions')) return null
    const currentNull = this.props.selectedOptions.indexOf(null)
    const prevNull = prevProps.selectedOptions.indexOf(null)
    if (currentNull !== prevNull) {
      setTimeout(() => {
        this.goNext()
      }, 200)
    }
  }

  goNext() {
    if (this.swiper) this.swiper.slideNext()
  }

  goPrev() {
    if (this.swiper) this.swiper.slidePrev()
  }

  render() {
    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1,
      spaceBetween: 0,
      // remove gatsby Image
      loop: false,
      autoplay: false,
      noSwiping: true,
      grabCursor: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      renderPrevButton: () => null,
      // (
      //   <button className="SwiperButton swiper-button-prev">
      //     <ChevronLeft />
      //   </button>
      // ),
      renderNextButton: () => null,
      // (
      //   <button className="SwiperButton swiper-button-next">
      //     <ChevronRight />
      //   </button>
      // ),
    }

    const { children, selectedOptions } = this.props

    return (
      <div className="QuoteStep-Options">
        <Swiper
          {...params}
          ref={node => {
            if (node) {
              this.swiper = node.swiper
            }
          }}
        >
          {children}
        </Swiper>
      </div>
    )
  }
}
