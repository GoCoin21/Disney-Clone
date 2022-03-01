import React from "react";
import { View } from "../components";
import { Container } from "../components/View/styles/style";

export default function Viewer()
{
  return (
	  <Container>
		  <View.Wrap>
			  <View.Image src={require("../images/viewers-disney.png")} alt="view1"/>
		  </View.Wrap>

		  <View.Wrap>
			  <View.Image src={require("../images/viewers-pixar.png")} alt="view2"/>
		  </View.Wrap>

		  <View.Wrap>
			  <View.Image src={require("../images/viewers-marvel.png")} alt="view3"/>
		  </View.Wrap>

		  <View.Wrap>
			  <View.Image src={require("../images/viewers-starwars.png")} alt="view4"/>
		  </View.Wrap>

		  <View.Wrap>
			  <View.Image src={require("../images/viewers-national.png")} alt="view4"/>
		  </View.Wrap>
	  </Container>
  )
}