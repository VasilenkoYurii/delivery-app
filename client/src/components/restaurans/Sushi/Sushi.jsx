import { useDispatch, useSelector } from 'react-redux';
import { selectMenu } from 'redux/selectors';
import { addOrder } from 'redux/operations';
import { Helmet } from 'react-helmet';
import {
  List,
  ListItem,
  ItemImg,
  ItemTitle,
  DescriptionContainer,
  SubmitButton,
} from './Sushi.styled';

export const Sushi = () => {
  const dispatch = useDispatch();

  const menu = useSelector(selectMenu);
  const sushiMenu = menu.filter(rest => rest.shop === 'suchi');

  return (
    <>
      {menu && (
        <List>
          <Helmet>
            <title>Sushi</title>
          </Helmet>
          {sushiMenu.map(position => {
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
