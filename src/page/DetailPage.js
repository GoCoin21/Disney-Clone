import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "../components/Detail/styles/style";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import { Detail } from "../components";
import { getDoc } from "firebase/firestore";
export default function DetailPage(){
	const {id} = useParams()
	const [detailData,setDetailData] = useState({})

	useEffect(() => {
		db.collection("movies")
		.doc(id)
		.get()
		.then((doc) => {
			if(doc.exists){
				setDetailData(doc.data())
			}else{
				console.log("no such document in firebase");
			}
		}).catch((error) => {
			console.log("Error getting document : ",error);
		})
	},[id])
	return (
		<Container>
          <Detail.Background>
			  <img alt={detailData.title} src={detailData.backgroundImg}/>
		  </Detail.Background>

		  <Detail.ImageTitle>
			  <img alt={detailData.title} src={detailData.titleImg}/>
		  </Detail.ImageTitle>
		  <Detail.ContentMeta>
			  <Detail.Controls>
				  <Detail.Player>
					  <img src="../images/play-icon-black.png" alt=""/>
				  </Detail.Player>
				  <Detail.Trailer>
					  <img src="../images/play-icon-white.png" alt=""/>
					  <span>Trailer</span>
				  </Detail.Trailer>
				  <Detail.AddList>
					  <span/>
					  <span/>
				  </Detail.AddList>
				  <Detail.GroupWatch>
					  <div>
						  <img src="../images/group-icon.png" alt=""/>
					  </div>
				  </Detail.GroupWatch>
			  </Detail.Controls>
			  <Detail.SubTitle>{detailData.subTitle}</Detail.SubTitle>
			  <Detail.Description>{detailData.description}</Detail.Description>
		  </Detail.ContentMeta>
		</Container>
	)
}