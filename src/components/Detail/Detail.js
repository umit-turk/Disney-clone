import React from "react";
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

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A0knvX7rlwTyZSKj8H5NiARb45.jpg" />
      </Background>
      <ImageTitle>
        <img src="https://lumiere-a.akamaihd.net/v1/images/en_crl-1_logo_r_6ba1b560.png?region=0,0,1000,320" />
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
      <Subtitle>05/28/2021 (US)Komedi, Suç 2h 14m</Subtitle>
      <Description>
        1970’li yıllarda Londra’sında asi ve kendine has genç bir kadın olan
        Estella, zeki olduğu kadar yaratıcıdır ve en büyük hayali kendi adına
        bir moda markası yaratmaktır
      </Description>
    </Container>
  );
}

export default Detail;
