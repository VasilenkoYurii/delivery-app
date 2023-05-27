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
            {macMenu.map(mcMenu => {
              return (
                <li key={mcMenu._id}>
                  <img src={mcMenu.logo} alt={mcMenu.name} />
                  <h3>{mcMenu.name}</h3>
                  <p>{mcMenu.price} ₴</p>
                  {mcMenu.kcal && <p>{mcMenu.kcal}</p>}
                  <p>{mcMenu.description}</p>
                  <button
                    onClick={() => {
                      // console.log(mcMenu);
                      dispatch(addOrder(mcMenu));
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
