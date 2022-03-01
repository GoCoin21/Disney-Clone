import React, { useEffect,useRef} from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import RecommendPage from "./RecommendPage";
import Viewer from "./Viewer";
import {useDispatch,useSelector} from "react-redux";
import {selectUserName} from "../features/user/userSlice"
import {db} from "../firebase"
import { setMovies } from "../features/movie/movieSlice";
import {collection,onSnapshot,doc} from "firebase/firestore";
import NewDisney from "./NewDisney";
import OriginalPage from "./OriginalPage";
import Trending from "./Trending";

export default function Home(){
	const dispatch = useDispatch()
	const userName = useSelector(selectUserName)
	let recommends = []
	let newDisneys = [];
	let originals = [];
	let trending = [];
  
   // const storage = getStorage(firebaseApp)
   
	useEffect(() => {
		console.log("hello");
		//const dbmovies = collection(db,"movies")
		
		db.collection("movies").onSnapshot((snapshot) => {
			snapshot.docs.map((doc) => {
			  console.log(recommends);
			  switch (doc.data().type) {
				case "recommend":
				  recommends = [...recommends, { id: doc.id, ...doc.data() }];
				  break;
	  
				case "new":
				  newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
				  break;
	  
				case "original":
				  originals = [...originals, { id: doc.id, ...doc.data() }];
				  break;
	  
				case "trending":
				  trending = [...trending, { id: doc.id, ...doc.data() }];
				  break;
			  }
			});

		dispatch(
			setMovies({
			  recommend: recommends,
			  newDisney: newDisneys,
			  original: originals,
			  trending: trending,
			})
		  );
		
		})
	  }, [userName]);
	return (
		<Container>
		
		<ImgSlider/>
		<Viewer/>
		<RecommendPage/>
		<NewDisney/>
		<OriginalPage/>
		<Trending/>
		</Container>
	)
	
}
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("../images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
  `
