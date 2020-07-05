import React from 'react'
import styled from 'styled-components'

import  {Img} from '../constants/imageurls'


class SlideShow extends React.Component {
  slideIndex= 0;
  showSlides = () => {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) {this.slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].class.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";  
    dots[this.slideIndex-1].class += " active";
    setTimeout(this.showSlides, 2000); // Change image every 2 seconds
  }
  render (){
  return(
    <>
    <div className="slideshow-container">
    
    <div className="mySlides fade">
      <div className="numbertext">1 / 3</div>
      <img src={Img.cleansers.md} alt={Img.cleansers.alt} style={{width:"100%"}}/>
      <div className="text">Caption Text</div>
    </div>
    
    <div className="mySlides fade">
      <div className="numbertext">2 / 3</div>
      <img src={Img.candles.md} alt={Img.candles.alt} style={{width: "100%"}}/>
      <div className="text">Caption Two</div>
    </div>
    
    <div className="mySlides fade">
      <div className="numbertext">3 / 3</div>
      <img src={Img.love.md} alt={Img.love.alt} style={{width: "100%"}}/>
      <div className="text">Caption Three</div>
    </div>
    
    </div>
    <br/>
    
      <div style={{textAlign: "center"}}>
      <span className="dot"></span> 
      <span className="dot"></span> 
      <span className="dot"></span> 
    </div>
    </>
  )
}
}


export default SlideShow

