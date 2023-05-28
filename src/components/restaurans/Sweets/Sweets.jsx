import { useSelector, useDispatch } from 'react-redux';
import { selectMenu } from 'redux/selectors';
import { addOrder } from 'redux/operations';

export const Sweets = () => {
  const dispatch = useDispatch();
  const menu = useSelector(selectMenu);
  const sweetsMenu = menu.filter(rest => rest.shop === 'sweets');

  return (
    <>
      {menu && (
        <div>
          <ul>
            {sweetsMenu.map(position => {
              return (
                <li key={position._id}>
                  <img src={position.logo} alt={position.name} />
                  <h3>{position.name}</h3>
                  <p>{position.price} ₴</p>
                  {position.kcal && <p>{position.kcal}</p>}
                  <p>{position.description}</p>
                  <button
                    onClick={() => {
                      dispatch(addOrder(position));
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
