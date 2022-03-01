import React from "react";
import { Slider } from "../components";
import { Carousel } from "../components/SliderComp/styles/style";

export default function ImgSlider(){
	let settings = {
		dots: true,
		infinite : true,
		speed : 500,
		slidesToShow : 1,
		slidesToScroll: 1,
		autoPlay : true
	}
 return (
	 <Carousel {...settings}>
       <Slider.Wrap>
		   <Slider.Link>
			   <Slider.Image src={require("../images/slider-badging.jpg")} alt="slide1"/>
		   </Slider.Link>
	   </Slider.Wrap>

	   <Slider.Wrap>
		   <Slider.Link>
			   <Slider.Image src={require("../images/slider-scale.jpg")} alt="slide2"/>
		   </Slider.Link>
	   </Slider.Wrap>

	   <Slider.Wrap>
		   <Slider.Link>
			   <Slider.Image src={require("../images/slider-badag.jpg")} alt="slide3"/>
		   </Slider.Link>
	   </Slider.Wrap>

	   <Slider.Wrap>
		   <Slider.Link>
			   <Slider.Image src={require("../images/slider-scales.jpg")} alt="slide4"/>
		   </Slider.Link>
	   </Slider.Wrap>
	 </Carousel>
 )	
}