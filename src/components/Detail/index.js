import React from "react";
import{
	Container,
	Background,
	ImageTitle,
	ContentMeta,
	Controls,
	Player,
	Trailer,
	AddList,
	GroupWatch,
	SubTitle,
	Description
} from "./styles/style.js"
export default function Detail({children}){
	return <Container>{children}</Container>
}
Detail.Background = function DetailBack({children}){
	return <Background>{children}</Background>
}
Detail.ImageTitle = function DetailImage({children}){
	return <ImageTitle>{children}</ImageTitle>
}
Detail.ContentMeta = function DetailContent({children}){
	return <ContentMeta>{children}</ContentMeta>
}
Detail.Controls = function DetailControl({children}){
	return <Controls>{children}</Controls>
}
Detail.Player = function DetailPlayer({children}){
	return <Player>{children}</Player>
}
Detail.Trailer = function DetailTrailer({children}){
	return <Trailer>{children}</Trailer>
}
Detail.AddList = function DetailAdd({children}){
	return <AddList>{children}</AddList>
}
Detail.GroupWatch = function DetailGroup({children}){
	return <GroupWatch>{children}</GroupWatch>
}
Detail.SubTitle = function DetailSubTitle({children}){
	return <SubTitle>{children}</SubTitle>
}
Detail.Description = function DetailDesc({children}){
	return <Description>{children}</Description>
}