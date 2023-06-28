import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import { Container, Suggestions, ListItem, Input } from './Autocomplite.styled';
import { useEffect } from 'react';

export const Autocomplite = ({
  isLoaded,
  onSelect,
  adress,
  addAddressForm,
}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    init,
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: 'YOUR_CALLBACK_NAME',
    initOnMount: false,
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = e => {
    setValue(e.target.value);
    addAddressForm(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      clearSuggestions();

      addAddressForm(description);

      getGeocode({ address: description }).then(results => {
        const { lat, lng } = getLatLng(results[0]);
        // console.log('📍 Coordinates: ', { lat, lng });
        onSelect({ lat, lng });
      });
    };

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <ListItem key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </ListItem>
      );
    });

  useEffect(() => {
    if (isLoaded) {
      init();
    }
  }, [isLoaded, init]);

  return (
    <Container ref={ref}>
      {adress ? (
        <Input
          type="text"
          value={adress}
          onChange={handleInput}
          disabled={!ready}
        />
      ) : (
        <Input
          type="text"
          value={value}
          onChange={handleInput}
          disabled={!ready}
        />
      )}

      {status === 'OK' && <Suggestions>{renderSuggestions()}</Suggestions>}
    </Container>
  );
};
