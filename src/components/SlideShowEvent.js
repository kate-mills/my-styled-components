import React from 'react'
import styled from 'styled-components'
import  {SlideShowImages} from '../constants/imageurls'

class SlideShow extends React.Component {
  state = {
   active: 0,
    transitionTime: 8000, 
  };
  handleShow = () => {
    var slides = document.getElementsByClassName("mySlides");
    for(var i = 0;i<slides.length; i++){
      if (i === this.state.active){
        slides[i].style.display = "block"
      }
      else{
        slides[i].style.display = "none"
      }
    }
    if(this.state.active === slides.length-1){
      this.setState({active: 0})
    }
    else{
      this.setState({active: this.state.active+1})
    }
    setTimeout(this.timerFn, this.state.transitionTime)
  };
  timerFn = () => {
    this.handleShow();
  }
  componentDidMount () {
    this.handleShow()
  }
  render(){
    return(
      <div className={` ${this.props.className}`}>
        <div className="clear"/>
        <div className="slideshowContainer" >
        {
          SlideShowImages.map((item, index) =>  {
            return(
              <div key={index} className="mySlides fade">
                <img 
                  src={item.lg} 
                  className="img"
                  alt={item.alt} 
                  style={{width: "100%"}}
                  samesite="None"
                />
              </div>
            )
        })
        }
        </div>
        <div className="clear"/>
      </div>
    )
  }
}
export default styled(SlideShow)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  border: 0;
  height: 549px;
  width: 100vw;
  object-fit: cover;
  box-sizing: border-box;
  background-color: white;
  transition: all .4s ease-in-out;
  .img {
     display: block;
  }
  .mySlides {
    display: none;
    box-sizing: border-box;
  }
  img {
    vertical-align: middle;
    box-sizing: border-box;
  }
  .clear{
  font-size:0;
  margin:0;
  line-height:0;
  padding:0;
  border: 0;
  box-sizing: border-box;
  }
`

