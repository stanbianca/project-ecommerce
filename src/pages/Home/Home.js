import React, { useState } from 'react'
import { ArrowLeft } from 'phosphor-react'
import { ArrowRight } from 'phosphor-react'
import "./Home.css"

 export const Home = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://www.botanytowncentre.co.nz/getmedia/fe0079b2-48c0-41b5-8953-e3fe0bbaa3e1/Pandroa-retailer-image.png?width=1080&height=474&ext=.png",
        "https://www.pandoraoutletromania.com/images/Pandora%20Timeless1212.jpg",
        "https://masha.ro/wp-content/uploads/2020/02/bijuterii-pandora-din-argint-online-min.jpg",
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    }


    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    }


  return (
    <div className="slider">
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
      <div className="icons">
          <div className="icon" onClick={prevSlide}>
              <ArrowLeft size={32}/>
          </div>
          <div className="icon" onClick={nextSlide}>
              <ArrowRight size={32}/>
          </div>
      </div>
    </div>
  )
}


