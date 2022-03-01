import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {selectRecommend} from "../features/movie/movieSlice"
import { Container } from "../components/Recommend/styles/style";
import { Recommend } from "../components";

export default function RecommendPage(){
	const movies = useSelector(selectRecommend)
	return (
		<Container>
			<Recommend.Header>Recommend for You</Recommend.Header>
			<Recommend.Content>
				{movies && 
				  movies.map((movie,key) => (
					<Recommend.Wrap key={key}>
					  {movie.id}
						<Link to={`/detail/` + movie.id}>
							<img src={movie.cardImg} alt={movie.title}/>
						</Link>
					</Recommend.Wrap>
				))}
			</Recommend.Content>
		</Container>
	)
}