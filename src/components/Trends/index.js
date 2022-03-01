import React from "react";
import {Container,Content,Wrap} from "./styles/style";
export default function Trends({children}){
	return <Container>{children}</Container>
}
Trends.Header = function TrendsHeader({children}){
	return <h4>{children}</h4>
}
Trends.Content = function TrendsContent({children}){
	return <Content>{children}</Content>
}
Trends.Wrap = function TrendsWrap({children,...restProps}){
	return <Wrap {...restProps}>{children}</Wrap>
}