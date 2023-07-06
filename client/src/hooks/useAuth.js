import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectPromo,
} from '../redux/authSlise/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const activeUserPromo = useSelector(selectPromo);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    activeUserPromo,
  };
};
