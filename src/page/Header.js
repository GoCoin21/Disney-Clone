import React,{useEffect} from "react";
import { HeaderComp } from "../components";
import { Nav } from "../components/headerComp/styles/style";

import {getAuth,signInWithPopup,onAuthStateChanged,signOut,GoogleAuthProvider} from "firebase/auth";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	selectUserName,
	selectUserPhoto,
	setUserLoginDetails,
	setSignOutState,
  } from "../features/user/userSlice";
import store from "../app/store";

export default function Header(props){
      const dispatch = useDispatch();
	  const auth = getAuth();
	  const provider = new GoogleAuthProvider();
	  const history = useNavigate();
	  const userName = useSelector(selectUserName);
      const userPhoto = useSelector(selectUserPhoto);
      useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if(user){
				setUser(user);
				history("/home");
				
			}
		}); 
	},[userName])

	  
	const handleAuth = () => {
		if(!userName){
			signInWithPopup(auth,provider)
			.then((result) => {
				console.log(result);
			}).catch((error) => {
				alert(error.message);
			})
		}else if(userName){
          signOut(auth)
		  .then(() => {
			  store.dispatch(setSignOutState())
			  history("/")
		  })
		  .catch((error) => alert(error.message))
		}
	
	}
	const setUser = (user) => {
		store.dispatch(
			setUserLoginDetails({
				name : user.displayName,
				email : user.email,
				photo : user.photoURL
			})
		)
	}
	
	return (
		
		<Nav>
			<HeaderComp.Logo to="/home">
				<HeaderComp.Image src={require("../images/disney-plus.png")} alt="Disney+"/>
			</HeaderComp.Logo>

			{!userName ? (
				<HeaderComp.Login  onClick={handleAuth}>Login</HeaderComp.Login>
			) : (
                <>
                
				<HeaderComp.NavMenu>
				 <HeaderComp.Link to="/home">
					 <HeaderComp.Image src={require("../images/home.png")} alt="HOME"/>
					 <span>HOME</span>
				 </HeaderComp.Link>

				 <HeaderComp.Link to="/search">
					 <HeaderComp.Image src={require("../images/search.jpg")} alt="SEARCH"/>
					 <span>SEARCH</span>
				 </HeaderComp.Link>
				 
				 <HeaderComp.Link to="/watchlist">
					 <HeaderComp.Image src={require("../images/plus.png")} alt="WATCHLIST"/>
					 <span>WATCHLIST</span>
				 </HeaderComp.Link>

				 <HeaderComp.Link to="/originals">
					 <HeaderComp.Image src={require("../images/star.jpg")} alt="ORIGINALS"/>
					 <span>ORIGINALS</span>
				 </HeaderComp.Link>

				 <HeaderComp.Link to="/movies">
					 <HeaderComp.Image src={require("../images/movieroll.jpg")} alt="MOVIES"/>
					 <span>MOVIES</span>
				 </HeaderComp.Link>

				 <HeaderComp.Link to="/series">
					 <HeaderComp.Image src={require("../images/series.jpg")} alt="SERIES"/>
					 <span>SERIES</span>
				 </HeaderComp.Link>
			 </HeaderComp.NavMenu>
               <HeaderComp.Logout>
				   <HeaderComp.UserImg src={userPhoto} alt={userName}/>
				   <HeaderComp.DropDown>
					   <span onClick={handleAuth}>Sign Out</span>
				   </HeaderComp.DropDown>
			   </HeaderComp.Logout>
			   
				</>



			)}
            
			
		</Nav>
	)
}