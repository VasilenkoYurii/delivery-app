import { useSelector } from 'react-redux';
import { selectMenu } from 'redux/selectors';

export const McDonalds = () => {
  const menu = useSelector(selectMenu);
  const macMenu = menu.filter(rest => rest.shop === 'mc-donalds');

  console.log(macMenu);

  return (
    <>
      {menu && (
        <div>
          <ul>
            {macMenu.map(({ _id, name, logo, price, description, kcal }) => {
              return (
                <li key={_id}>
                  <img src={logo} alt={name} />
                  <h3>{name}</h3>
                  <p>{price} ₴</p>
                  {kcal && <p>{kcal}</p>}
                  <p>{description}</p>
                  <button
                    onClick={() => {
                      console.log(
                        `Добавлено в покупки ${_id} ${name} ${logo} ${price} ${description} ${kcal}`
                      );
                    }}
                  >
                    add to Cart
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
