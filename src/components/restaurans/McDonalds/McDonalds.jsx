import { useSelector, useDispatch } from 'react-redux';
import { selectMenu } from 'redux/selectors';
import { addOrder } from 'redux/operations';

export const McDonalds = () => {
  const dispatch = useDispatch();
  const menu = useSelector(selectMenu);
  const macMenu = menu.filter(rest => rest.shop === 'mc-donalds');

  return (
    <>
      {menu && (
        <div>
          <ul>
            {macMenu.map(position => {
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
