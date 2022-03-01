import React from "react";
import { Container,Content,Wrap } from "./styles/style";
export default function Recommend({children}){
	return <Container>{children}</Container>
}

Recommend.Header = function RecommendHeader({children}){
	return <h4>{children}</h4>
}
Recommend.Content = function RecommendContent({children}){
	return <Content>{children}</Content>
}
Recommend.Wrap = function RecommendWrap({children,...restProps}){
	return <Wrap {...restProps}>{children}</Wrap>
}
