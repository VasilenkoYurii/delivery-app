import promo20 from '../img/promo/20%.png';

export const PromoImageHelper = promo => {
  switch (promo) {
    case '20%':
      return promo20;

    default:
      break;
  }
};
