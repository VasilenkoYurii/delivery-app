import { useAuth } from 'hooks/useAuth';
import { DataListItem, ItemPrg, ItemSpan } from './UserData.styled';

export const UserData = () => {
  const { user } = useAuth();

  return (
    <DataListItem>
      <ItemPrg>
        <ItemSpan>Email:</ItemSpan>
        {user.email}
      </ItemPrg>
      <ItemPrg>
        <ItemSpan>Name:</ItemSpan>
        {user.name}
      </ItemPrg>
      <ItemPrg>
        <ItemSpan>Phone:</ItemSpan>
        {user.phone}
      </ItemPrg>
      <ItemPrg>
        <ItemSpan>Address:</ItemSpan>
        {user.address}
      </ItemPrg>
      <ItemPrg>
        <ItemSpan>Password:</ItemSpan>
        ***************
      </ItemPrg>
    </DataListItem>
  );
};
