import axios from 'axios';
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { SET_AUTHENTICATED } from './actionTypes';
import initialState from './initialState';
import reducer from './reducer';

const AuthContext = createContext(initialState);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${process.env.BASE_URL}/verify`, {
          withCredentials: true,
        });

        if (response.status === 200) {
          dispatch({
            type: SET_AUTHENTICATED,
            payload: { isAuthenticated: true, user: response.data.user },
          });
        } else {
          dispatch({
            type: SET_AUTHENTICATED,
            payload: { isAuthenticated: false, user: null },
          });
        }
      } catch (error) {
        console.log(error);
        dispatch({
          type: SET_AUTHENTICATED,
          payload: { isAuthenticated: false, user: null },
        });
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const values = {
    dispatch,
    isAuthenticated: state.isAuthenticated,
    user: state.user,
  };

  if (loading) return null;

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthDetails = () => useContext(AuthContext);
