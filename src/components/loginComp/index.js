import React from "react";
import { Container,Content,CTA,CTALogoOne,SignUp,Description,CTALogoTwo,BgImage} from "./styles/style";
export default function LoginComp({children}){
	return (
		<Container>{children}</Container>
	)
}

LoginComp.Content = function LoginContent({children}){
	return <Content>{children}</Content>
}
LoginComp.CTA = function LoginCTA({children}){
	return <CTA>{children}</CTA>
}
LoginComp.CTALogo = function LoginLogo({...restProps}){
	return <CTALogoOne {...restProps} />
}
LoginComp.SignUp = function LoginSign({children}){
	return <SignUp>{children}</SignUp>
}
LoginComp.Desc = function LoginDesc({children}){
	return <Description>{children}</Description>
}
LoginComp.CTATwo =function LoginCTATwo({...restProps}){
	return <CTALogoTwo {...restProps}/>
}
LoginComp.BgImage = function LoginImg({...restProps}){
	return <BgImage {...restProps}/>
}