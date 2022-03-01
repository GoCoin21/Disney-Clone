import React from "react";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";
import { Link } from "react-router-dom";
import { Container } from "../components/Trends/styles/style";
import Trends from "../components/Trends";


export default function Trending(){
	const movies = useSelector(selectTrending)
	return (
		<Container>
			<Trends.Header>Trending</Trends.Header>
			<Trends.Content>
				{movies && 
				 movies.map((movie,key) => (
					 <Trends.Wrap key={key}>
						 {movie.id}
						 <Link to={`/detail/` + movie.id}>
							 <img src={movie.cardImg} alt={movie.title}/>
						 </Link>
					 </Trends.Wrap>
				 ))}
			</Trends.Content>
		</Container>
	)
}