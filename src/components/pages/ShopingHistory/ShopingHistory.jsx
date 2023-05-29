import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ShoppingHistoryContainer,
  ResponsContainer,
  HisrotyFormContainer,
  HisrotyForm,
  HisrotyLabel,
  HisrotyInput,
  SearchButton,
  HistoryFormTitle,
  HistoryFormDescription,
  OrdersList,
  OrdersListItem,
  ItemSpan,
  ItemPrg,
  UserDescriptionContainer,
  UserOrderContainer,
  UserOrderList,
  UserOrderListItem,
  UserOrderItemImg,
  UserOrderDescriptionContainer,
  UserOrderDescriptionSpan,
} from './ShopingHistory.styled';
import { findOrdersByEmail, findOrdersByPhone } from 'redux/operations';
import { selectHistory } from 'redux/selectors';

export const ShopingHostoryPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectHistory);

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (type === 'email') {
      dispatch(findOrdersByEmail(email));
    } else if (type === 'phone') {
      dispatch(findOrdersByPhone(phone));
    }
  };

  return (
    <ShoppingHistoryContainer>
      <HisrotyFormContainer>
        <HistoryFormTitle>Your order history</HistoryFormTitle>

        <HisrotyForm
          onSubmit={e => {
            handleSubmit(e, 'email');
          }}
        >
          <HisrotyLabel>
            Email
            <HisrotyInput
              type="email"
              required
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </HisrotyLabel>
          <SearchButton type="submit">Search</SearchButton>
        </HisrotyForm>

        <HisrotyForm
          onSubmit={e => {
            handleSubmit(e, 'phone');
          }}
        >
          <HisrotyLabel>
            Phone
            <HisrotyInput
              type="phone"
              required
              value={phone}
              onChange={e => {
                setPhone(e.target.value);
              }}
            />
          </HisrotyLabel>
          <SearchButton type="submit">Search</SearchButton>
        </HisrotyForm>
      </HisrotyFormContainer>

      <ResponsContainer>
        {orders.length === 0 ? (
          <HistoryFormDescription>
            Enter the phone or email from which the order was made
          </HistoryFormDescription>
        ) : (
          <OrdersList>
            {orders.map(order => {
              return (
                <OrdersListItem key={order._id}>
                  <UserDescriptionContainer>
                    <ItemPrg>
                      <ItemSpan>Name:</ItemSpan>
                      {order.name}
                    </ItemPrg>
                    <ItemPrg>
                      <ItemSpan>Email:</ItemSpan>
                      {order.email}
                    </ItemPrg>
                    <ItemPrg>
                      <ItemSpan>Phone:</ItemSpan>
                      {order.phone}
                    </ItemPrg>
                    {order.comment && (
                      <ItemPrg>
                        <ItemSpan>Comment:</ItemSpan>
                        {order.comment}
                      </ItemPrg>
                    )}
                    <ItemPrg>
                      <ItemSpan>Price:</ItemSpan>
                      {order.price}₴
                    </ItemPrg>
                    <ItemPrg>
                      <ItemSpan>Order time:</ItemSpan>
                      {order.createdAt}
                    </ItemPrg>
                  </UserDescriptionContainer>

                  <UserOrderContainer>
                    <UserOrderList>
                      {order.orders.map(userOrder => {
                        return (
                          <UserOrderListItem key={userOrder._id}>
                            <UserOrderItemImg
                              src={userOrder.logo}
                              alt={userOrder.name}
                            />
                            <p>{userOrder.name}</p>
                            <UserOrderDescriptionContainer>
                              <p>
                                <UserOrderDescriptionSpan>
                                  Quantity:
                                </UserOrderDescriptionSpan>{' '}
                                {userOrder.quantity}
                              </p>
                              <p>
                                <UserOrderDescriptionSpan>
                                  Price:
                                </UserOrderDescriptionSpan>{' '}
                                {userOrder.price}
                              </p>
                            </UserOrderDescriptionContainer>
                          </UserOrderListItem>
                        );
                      })}
                    </UserOrderList>
                  </UserOrderContainer>
                </OrdersListItem>
              );
            })}
          </OrdersList>
        )}
      </ResponsContainer>
    </ShoppingHistoryContainer>
  );
};
