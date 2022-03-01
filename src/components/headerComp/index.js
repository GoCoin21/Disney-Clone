import React from "react";
import { Nav,Logo,Login,NavMenu,NavLink,SignOut,DropDown} from "./styles/style";

export default function HeaderComp({children}){

	 return (
		 <Nav>{children}</Nav>
	 )
}
HeaderComp.Logo = function HeaderLogo({children,...restProps}){
	return <Logo {...restProps}>{children}</Logo>
}
HeaderComp.Image = function HeaderImg({...restProps}){
	return <img {...restProps} alt=""/>
}

HeaderComp.Login = function HeaderLogin({children,...restProps}){
	return <Login {...restProps}>{children}</Login>
}
HeaderComp.NavMenu = function HeaderNavMenu({children}){
	return <NavMenu>{children}</NavMenu>
}
HeaderComp.Link = function HeaderLink({children,...restProps}){
	return <NavLink {...restProps}>{children}</NavLink>
}
HeaderComp.Logout = function HeaderLogut({children}){
	return <SignOut>{children}</SignOut>
}
HeaderComp.UserImg = function UserImage({...restProps}){
	return <img {...restProps} alt=""/>
}
HeaderComp.DropDown = function HeaderDrop({children}){
	return <DropDown>{children}</DropDown>
}
