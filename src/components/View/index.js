import React from "react";
import { Container,Wrap } from "./styles/style";
export default function View({children}){
	return (
		<Container>{children}</Container>
	)
}

View.Wrap = function ViewWrap({children}){
	return <Wrap>{children}</Wrap>
}

View.Image = function ViewImage({...restProps}){
	return <img {...restProps}></img>
}
