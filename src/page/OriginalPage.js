import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOriginal } from "../features/movie/movieSlice";
import { Container } from "../components/Original/styles/style";
import { Originals } from "../components";

export default function OriginalPage(){
	const movies = useSelector(selectOriginal)
	return(
		<Container>
			<Originals.Header>Originals</Originals.Header>
			<Originals.Content>
				{movies && 
				  movies.map((movie,key) => (
					  <Originals.Wrap key={key}>
						  {movie.id}
						  <Link to={`/detail/` + movie.id}>
							  <img src={movie.cardImg} alt={movie.title}/>
						  </Link>
					  </Originals.Wrap>
				  ))}
			</Originals.Content>
		</Container>
	)
}