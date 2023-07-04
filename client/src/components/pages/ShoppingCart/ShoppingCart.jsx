import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { selectOrder } from 'redux/restSlise/selectors';
import {
  decrementQuantityOrder,
  incrementQuantityOrder,
  makeAnOrder,
} from 'redux/restSlise/operations';
import { Helmet } from 'react-helmet';

import { Map } from 'components/Map/Map';
import { useJsApiLoader } from '@react-google-maps/api';

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
  ButtonMap,
  ButtonMapContainer,
} from './ShoppingCart.styled';

const defCenter = {
  lat: 50.4501,
  lng: 30.5234,
};
const libraries = ['places'];

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [phone, setPhone] = useState(localStorage.getItem('phone') || '');
  const [address, setAddress] = useState(localStorage.getItem('address') || '');
  const [comment, setComment] = useState(localStorage.getItem('comment') || '');
  const [submitted, setSubmitted] = useState(false);
  const [modal, setModal] = useState(false);
  const [marker, setMarker] = useState(null);
  const orders = useSelector(selectOrder);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCzpvGD2TMrrs1zAtqq5RsydgIJMJmfD4Y',
    libraries,
  });

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

    console.log(newUserOrder);

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
    setModal(false);
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

  const addAddressForm = address => {
    setAddress(address);
    console.log(address);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const onMarcerAdd = coordinates => {
    setMarker(coordinates);
  };

  const clearMarker = () => {
    setMarker(null);
    setAddress('');
  };

  return (
    <ShoppingCartContainer>
      <Helmet>
        <title>SHOPPING CART</title>
      </Helmet>

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
            <div>
              <OrderInput
                required
                type="text"
                value={address}
                onChange={e => {
                  setAddress(e.target.value);
                }}
              />

              <ButtonMapContainer>
                <ButtonMap type="button" onClick={toggleModal}>
                  {modal ? 'Close map' : 'Open map'}
                </ButtonMap>
                {marker && (
                  <ButtonMap type="button" onClick={clearMarker}>
                    Clear marker
                  </ButtonMap>
                )}
              </ButtonMapContainer>
            </div>
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

      {modal ? (
        <OutletBox>
          {isLoaded ? (
            <Map
              center={defCenter}
              marker={marker}
              onMarcerAdd={onMarcerAdd}
              addAddressForm={addAddressForm}
            />
          ) : (
            <h2>Loading...</h2>
          )}
        </OutletBox>
      ) : submitted ? (
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
