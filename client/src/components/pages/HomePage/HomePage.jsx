import {
  RestLink,
  RestContainer,
  Img,
  LinkContainer,
  ImgDominos,
  Container,
  ProposeLink,
  BannerBox,
  BannerImg,
  DiscontImg,
} from './HomePage.styled';

import banner from '../../../img/banner.jpeg';
import discontBanner from '../../../img/discont-banner.jpg';
// import { useState, useCallback } from 'react';
// import { useJsApiLoader } from '@react-google-maps/api';
// import { Map, MODES } from 'components/Map/Map';
// import { Autocomplite } from 'components/Autocomplite/Autocomplite';

// const defCenter = {
//   lat: 50.4501,
//   lng: 30.5234,
// };

// const libraries = ['places'];

export const HomePage = () => {
  // const [center, setCenter] = useState(defCenter);
  // const [mode, setMode] = useState(MODES.MOVE);
  // const [marker, setMarker] = useState(null);
  // const [adress, setAdress] = useState(null);

  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: 'AIzaSyCzpvGD2TMrrs1zAtqq5RsydgIJMJmfD4Y',
  //   libraries,
  // });

  // const onPlaceSelect = useCallback(cordinates => {
  //   setCenter(cordinates);
  //   setMarker(cordinates);
  // }, []);

  // const toggleMode = () => {
  //   switch (mode) {
  //     case MODES.MOVE:
  //       setMode(MODES.SET_MARKER);
  //       break;
  //     case MODES.SET_MARKER:
  //       setMode(MODES.MOVE);
  //       break;
  //     default:
  //       setMode(MODES.MOVE);
  //   }
  // };

  // const onMarcerAdd = coordinates => {
  //   setMarker(coordinates);
  // };

  // const onAdressAdd = adr => {
  //   setAdress(adr);
  // };

  // const clearMarker = () => {
  //   setMarker(null);
  //   setAdress(null);
  // };

  return (
    <Container>
      {/* <div>
        <Autocomplite
          isLoaded={isLoaded}
          onSelect={onPlaceSelect}
          adress={adress}
        />
        <button onClick={toggleMode}>set markers</button>
        <button onClick={clearMarker}>clear</button>
      </div>
      {isLoaded ? (
        <Map
          center={center}
          mode={mode}
          marker={marker}
          onMarcerAdd={onMarcerAdd}
          onAdressAdd={onAdressAdd}
        />
      ) : (
        <h2>Load...</h2>
      )} */}
      <RestContainer>
        {/* <Title>Choose</Title> */}
        <LinkContainer>
          <RestLink to="shop/mcDonalds">
            <Img
              src="https://assets.turbologo.ru/blog/ru/2021/05/24060504/mcdonalds-logo-2018.png"
              alt="Mc. Donalds"
            />
          </RestLink>
          <RestLink to="shop/dominos">
            <ImgDominos
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/2048px-Dominos_pizza_logo.svg.png"
              alt="Dominos"
            />
          </RestLink>
          <RestLink to="shop/sushi">
            <Img
              src="data:image/png;base64,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"
              alt="Sushi"
            />
          </RestLink>
          <RestLink to="shop/sweets">
            <Img
              src="https://i.pinimg.com/736x/34/24/22/3424229a2247bd49d2b37ef45ef57386.jpg"
              alt="Sweets"
            />
          </RestLink>
        </LinkContainer>
      </RestContainer>

      <BannerBox>
        <BannerImg src={banner} alt="Restaurant banner" />
      </BannerBox>

      <ProposeLink to="/register">
        <DiscontImg src={discontBanner} alt="Discont banner" />
      </ProposeLink>
    </Container>
  );
};
