import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import DetailPage from "./page/DetailPage";
import Header from "./page/Header";
import Home from "./page/Home";
import Login from "./page/Login";
export default function App(){
	return (
       <Router>
	     <Header/>
		   <Routes>
            <Route exact path="/" element={<Login/>}></Route>
             <Route exact path="/home" element={<Home/>}></Route>
			 <Route exact path="/detail/:id" element={<DetailPage/>}></Route>
		   </Routes>
		
	   </Router>
	)
}