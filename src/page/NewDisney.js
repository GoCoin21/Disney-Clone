import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../features/movie/movieSlice";
import { Container } from "../components/Disney/styles/style";
import { Disney } from "../components";

export default function NewDisney(){
	const movies = useSelector(selectNewDisney)
	return (
		<Container>
		<Disney.Header>New to Disney+</Disney.Header>
			<Disney.Content>
               {movies && 
			     movies.map((movie,key) => (
					 <Disney.Wrap key={key}>
						 {movie.id}
						 <Link to={`/detail/` + movie.id}>
							 <img src={movie.cardImg} alt={movie.title}/>
						 </Link>
					 </Disney.Wrap>
				 ))}
			</Disney.Content>
		</Container>
	)
}