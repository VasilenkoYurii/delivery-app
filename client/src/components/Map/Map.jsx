import { useRef, useCallback } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { defaultTheme } from './Theme';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clicableIcons: false,
  keyboardShortcuts: false,
  scrollwhel: false,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: defaultTheme,
};

export const MODES = {
  MOVE: 0,
  SET_MARKER: 1,
};

export function Map({
  center,
  onMarcerAdd,
  marker,
  onAdressAdd,
  addAddressForm,
}) {
  const mapRef = useRef(undefined);

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  const onClick = loc => {
    const lat = loc.latLng.lat();
    const lng = loc.latLng.lng();
    onMarcerAdd({ lat, lng });

    const geocoder = new window.google.maps.Geocoder();
    const latLng = new window.google.maps.LatLng(lat, lng);

    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          onAdressAdd(results[0].formatted_address);
          addAddressForm(results[0].formatted_address);
        } else {
          alert('wrong');
        }
      } else {
        alert('wrong');
      }
    });
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={defaultOptions}
      onClick={onClick}
    >
      {marker && <Marker position={marker} />}
    </GoogleMap>
  );
}
