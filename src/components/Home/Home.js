import React, { useEffect } from 'react'
import ImgSlider from '../ImgSlider/ImgSlider'
import Movies from '../Movies/Movies'
import Viewers from '../Viewers/Viewers'
import db from '../../firebase';
import { useDispatch } from "react-redux";
import { setMovies } from "../../features/movie/movieSlice"

import { Container } from './homeStyle'


function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) => {
                return {id: doc.id, ...doc.data()}
            })
            dispatch(setMovies(tempMovies));
        })
    }, [])


    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home
