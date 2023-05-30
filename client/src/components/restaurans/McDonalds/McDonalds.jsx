import { useSelector, useDispatch } from 'react-redux';
import { selectMenu } from 'redux/selectors';
import { addOrder } from 'redux/operations';
import {
  List,
  ListItem,
  ItemImg,
  ItemTitle,
  DescriptionContainer,
  SubmitButton,
} from './McDonalds.styled';

export const McDonalds = () => {
  const dispatch = useDispatch();
  const menu = useSelector(selectMenu);
  const macMenu = menu.filter(rest => rest.shop === 'mc-donalds');

  return (
    <>
      {menu && (
        <List>
          {macMenu.map(position => {
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
