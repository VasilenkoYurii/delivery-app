import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { selectOrder } from 'redux/selectors';
import { decrementQuantityOrder } from 'redux/operations';
import {
  ShoppingCartContainer,
  OutletBox,
  OrderFormContainer,
  OrderForm,
  OrderLabel,
  OrderInput,
} from './ShoppingCart.styled';

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [phone, setPhone] = useState(localStorage.getItem('phone') || '');
  const [address, setAddress] = useState(localStorage.getItem('address') || '');
  const [comment, setComment] = useState(localStorage.getItem('comment') || '');
  const [submitted, setSubmitted] = useState(false);
  const orders = useSelector(selectOrder);

  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('address', address);
    localStorage.setItem('comment', comment);
  }, [name, email, phone, address, comment]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, email, phone, address, comment);
    resetForm();
    setSubmitted(true);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setComment('');
  };

  return (
    <ShoppingCartContainer>
      <OrderFormContainer>
        <OrderForm
          onSubmit={e => {
            handleSubmit(e);
          }}
        >
          <OrderLabel>
            Name:
            <OrderInput
              required
              type="name"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </OrderLabel>
          <OrderLabel>
            Email:
            <OrderInput
              required
              type="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </OrderLabel>
          <OrderLabel>
            Phone:
            <OrderInput
              required
              type="phone"
              value={phone}
              onChange={e => {
                setPhone(e.target.value);
              }}
            />
          </OrderLabel>
          <OrderLabel>
            Address:
            <OrderInput
              required
              type="text"
              value={address}
              onChange={e => {
                setAddress(e.target.value);
              }}
            />
          </OrderLabel>
          <OrderLabel>
            Comment to the order:
            <OrderInput
              type="text"
              value={comment}
              onChange={e => {
                setComment(e.target.value);
              }}
            />
          </OrderLabel>
          <button type="submit">Submit</button>
        </OrderForm>
      </OrderFormContainer>

      {orders && (
        <ul>
          {orders.map(order => {
            return (
              <li key={order._id}>
                <img src={order.logo} alt={order.name} />
                <h3>{order.name}</h3>
                <p>{order.price} ₴</p>
                {order.kcal && <p>{order.kcal}</p>}
                <p>{order.description}</p>
                <p>Quantity {order.quantity}</p>
                <button
                  onClick={() => {
                    dispatch(decrementQuantityOrder(order));
                  }}
                >
                  ++++
                </button>
                <button
                // onClick={() => {
                //   // console.log(mcMenu);
                //   dispatch(addOrder(mcMenu));
                // }}
                >
                  add to Cart
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {/* {submitted ? (
        <OutletBox>
          <div>Hello</div>
        </OutletBox>
      ) : (
        <OutletBox></OutletBox>
      )} */}
    </ShoppingCartContainer>
  );
};

export default ShoppingCart;
