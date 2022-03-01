import React from "react";
import { Container,Content,Wrap } from "./styles/style";

export default function Disney({children}){
	return <Container>{children}</Container>
}
Disney.Header = function DisneyHeader({children}){
	return <h4>{children}</h4>
}
Disney.Content = function DisneyContent({children}){
	return <Content>{children}</Content>
}
Disney.Wrap = function DisneyWrap({children,...restProps}){
	return <Wrap {...restProps}>{children}</Wrap>
}