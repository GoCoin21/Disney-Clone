import React from "react";
import { Container } from "../components/loginComp/styles/style";
import { LoginComp } from "../components";
import background from "../images/login-background.jpg";

export default function Login(){
	return (
		<Container>
         <LoginComp.Content>
			 <LoginComp.CTA>
				 <LoginComp.CTALogo src={require("../images/cta-logo-one.png")} alt=""/>
				 <LoginComp.SignUp>GET ALL THERE</LoginComp.SignUp>
				 <LoginComp.Desc>
					 Get Premier Access to Raya and the Last Dragon for an additional fee
					 with Disney+ subscription. As of 03/26/22, the price of Disney+
					 and The Disney Bundle will increase by Rs1.
				 </LoginComp.Desc>
				 <LoginComp.CTATwo src={require("../images/cta-logo-two.png")} alt=""/>
			 </LoginComp.CTA>
			 <LoginComp.BgImage style={{backgroundImage: `url(${background})` }}/>
		 </LoginComp.Content>
		</Container>
	)
}