import { useDispatch } from 'react-redux';
import { PromoImageHelper } from 'helpers/promoImageHelper';
import { addUserPromo } from 'redux/authSlise/operations';
import { useAuth } from 'hooks/useAuth';
import {
  PromoListItem,
  UserPromoListItem,
  UserPromoItemImg,
  PromoDescription,
  UseButton,
  UserPromoList,
} from './UserPromo.styled';

export const UserPromo = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const hendleUsePromo = promo => {
    dispatch(addUserPromo(promo));
  };

  return (
    <PromoListItem>
      {user.promo.length !== 0 ? (
        <UserPromoList>
          {user.promo.map(promo => {
            return (
              <UserPromoListItem key={promo.id}>
                <UserPromoItemImg
                  src={PromoImageHelper(promo.value)}
                  alt="image promo"
                />
                <UseButton onClick={() => hendleUsePromo(promo)}>
                  Use promo {promo.value}
                </UseButton>
              </UserPromoListItem>
            );
          })}
        </UserPromoList>
      ) : (
        <PromoDescription>You don't have any active promos</PromoDescription>
      )}
    </PromoListItem>
  );
};
