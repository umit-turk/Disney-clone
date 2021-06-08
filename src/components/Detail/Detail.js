import React, { useEffect, useState } from "react";
import {
  AddButton,
  Background,
  Container,
  Description,
  Controls,
  GroupWatchButton,
  ImageTitle,
  PlayButton,
  Subtitle,
  TrailerButton,
} from "./detailStyles";
import { useParams } from "react-router-dom";
import db from "../../firebase";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    // Grab the movie info from DB
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          // save the movie data
          setMovie(doc.data());
        } else {
          // redirect to home page
        }
      });
  }, []);
  console.log(movie);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-black.png" />
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src="/images/group-icon.png" />
            </GroupWatchButton>
          </Controls>
          <Subtitle>{movie.subTitle}</Subtitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
}

export default Detail;
