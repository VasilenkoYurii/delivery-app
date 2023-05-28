import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { selectOrder } from 'redux/selectors';
import {
  decrementQuantityOrder,
  incrementQuantityOrder,
  makeAnOrder,
} from 'redux/operations';
import {
  ShoppingCartContainer,
  OutletBox,
  OrderFormContainer,
  OrderForm,
  OrderLabel,
  OrderInput,
  List,
  ListItem,
  ItemImg,
  ItemTitle,
  OrderPricePrg,
  MessegeBeforeOrder,
  SubmitFormButton,
  ItemPrice,
  QuantityContainer,
  MainQuantityContainer,
  PlusIcon,
  ButtonQuantity,
  MinusIcon,
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

    if (orders.length === 0) {
      toast.error('You need to add something from the menu to the order!', {
        style: {
          width: '300px',
          height: '50px',
          borderRadius: '10px',
          fontSize: '20px',
        },
      });
      return;
    }

    const newUserOrder = {
      name,
      email,
      phone,
      address,
      comment,
      price: price(orders),
      orders,
    };

    dispatch(makeAnOrder(newUserOrder));

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

  const price = arrOrder => {
    const arrPrice = arrOrder.map(order => {
      return order.price * order.quantity;
    });

    return arrPrice.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
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
          <SubmitFormButton type="submit">Make an order</SubmitFormButton>
        </OrderForm>
        {orders.length !== 0 && (
          <OrderPricePrg>Order price: {price(orders)}</OrderPricePrg>
        )}
      </OrderFormContainer>

      {submitted ? (
        <OutletBox>
          <MessegeBeforeOrder>
            Thank you for your order, we will contact you soon!
          </MessegeBeforeOrder>
        </OutletBox>
      ) : orders.length === 0 ? (
        <OutletBox>
          <MessegeBeforeOrder>Cart is currently empty</MessegeBeforeOrder>
        </OutletBox>
      ) : (
        <OutletBox>
          <List>
            {orders.map(order => {
              return (
                <ListItem key={order._id}>
                  <ItemImg src={order.logo} alt={order.name} />
                  <ItemTitle>{order.name}</ItemTitle>
                  <ItemPrice>{order.price} ₴</ItemPrice>

                  <MainQuantityContainer>
                    <ButtonQuantity
                      onClick={() => {
                        dispatch(incrementQuantityOrder(order));
                      }}
                    >
                      <MinusIcon />
                    </ButtonQuantity>
                    <QuantityContainer>
                      <p>Quantity:</p>
                      <p>{order.quantity}</p>
                    </QuantityContainer>

                    <ButtonQuantity
                      onClick={() => {
                        dispatch(decrementQuantityOrder(order));
                      }}
                    >
                      <PlusIcon />
                    </ButtonQuantity>
                  </MainQuantityContainer>
                </ListItem>
              );
            })}
          </List>
        </OutletBox>
      )}
    </ShoppingCartContainer>
  );
};

export default ShoppingCart;
