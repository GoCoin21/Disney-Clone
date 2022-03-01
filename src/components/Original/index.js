import React from "react";
import { Container,Content,Wrap } from "./styles/style";
export default function Originals({children}){
	return <Container>{children}</Container>
}

Originals.Header = function OriginalHeader({children}){
	return <h4>{children}</h4>
}
Originals.Content = function OriginalContent({children}){
	return <Content>{children}</Content>
}
Originals.Wrap = function OriginalWrap({children,...restProps}){
	return <Wrap {...restProps}>{children}</Wrap>
}