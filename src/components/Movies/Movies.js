import React from 'react'
import { Container, Content, Wrap } from './moviesStyle'
import {useSelector} from "react-redux"
import { selectMovies } from '../../features/movie/movieSlice';

function Movies() {

    const movies = useSelector(selectMovies);
    console.log(movies);

    return (
        <Container>
            <h4>Recomended for You</h4>
            <Content>
                {movies && 
                    movies.map((movie) => (
                        <Wrap key={movie.id}>
                            <img src={movie.cardImg}/>
                        </Wrap>
                    ))
                }
              
            </Content>
        </Container>
    )
}

export default Movies
