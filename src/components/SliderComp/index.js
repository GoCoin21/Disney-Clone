import React from "react";
import { Carousel,Wrap} from "./styles/style";
export default function Slider({children,...restProps}){
	return (
		<Carousel {...restProps}>{children}</Carousel>
	)
}

Slider.Wrap = function SliderWrap({children}){
	return <Wrap>{children}</Wrap>
}
Slider.Link = function SliderLink({children}){
	return <a>{children}</a>
}
Slider.Image = function SliderImage({...restProps}){
	return <img {...restProps}></img>
}
