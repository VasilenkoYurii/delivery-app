import { useSelector, useDispatch } from 'react-redux';
import { selectMenu } from 'redux/restSlise/selectors';
import { addOrder } from 'redux/restSlise/operations';
import { Helmet } from 'react-helmet';
import {
  List,
  ListItem,
  ItemImg,
  ItemTitle,
  DescriptionContainer,
  SubmitButton,
} from './Dominos.styled';

export const Dominos = () => {
  const dispatch = useDispatch();
  const menu = useSelector(selectMenu);
  const domMenu = menu.filter(rest => rest.shop === 'dominos');

  return (
    <>
      {menu && (
        <List>
          <Helmet>
            <title>Dominos</title>
          </Helmet>
          {domMenu.map(position => {
            return (
              <ListItem key={position._id}>
                <ItemImg src={position.logo} alt={position.name} />
                <ItemTitle>{position.name}</ItemTitle>
                {position.kcal ? (
                  <>
                    <DescriptionContainer>
                      <p>{position.price} ₴</p>
                      <p>{position.kcal}</p>
                    </DescriptionContainer>
                    <SubmitButton
                      onClick={() => {
                        dispatch(addOrder(position));
                      }}
                    >
                      Add to Cart
                    </SubmitButton>
                  </>
                ) : (
                  <>
                    <DescriptionContainer>
                      <p>{position.price} ₴</p>
                    </DescriptionContainer>
                    <SubmitButton
                      onClick={() => {
                        dispatch(addOrder(position));
                      }}
                    >
                      Add to Cart
                    </SubmitButton>
                  </>
                )}
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
};
