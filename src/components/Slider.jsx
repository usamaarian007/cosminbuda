import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black " }}
      
        
        onClick={onClick}
      >
        <p>nect</p>
        </div>
    );
  }
export default class SimpleSlider extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="mt-2 mb-5" >
        {/* <h2> Single Item</h2> */}
        
        <Slider {...settings}>
          <div  className="d-flex justify-content-center" >
            <img src="a1.jpeg" alt="" style={{height:'250px', width:"550px" }} />
          </div>
          <div className="d-flex justify-content-center">
          <img src="a2.jpeg" alt="" style={{height:'250px', width:"550px" }} />

          </div>
          <div className="d-flex justify-content-center">
          <img src="a3.jpeg" alt="" style={{height:'250px', width:"550px" }} />

          </div>
          <div className="d-flex justify-content-center">
          <img src="a4.jpeg" alt="" style={{height:'250px', width:"550px" }} />

          </div>
          <div className="d-flex justify-content-center">
          <img src="a5.jpg" alt="" style={{height:'250px', width:"550px" }} />

          </div>
       
        </Slider>
      </div>
    );
  }
}