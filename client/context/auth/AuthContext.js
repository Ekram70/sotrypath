import axios from 'axios';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { SET_AUTHENTICATED } from './actionTypes';
import initialState from './initialState';
import reducer from './reducer';

const AuthContext = createContext(initialState);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
        dispatch({
          type: SET_AUTHENTICATED,
          payload: { isAuthenticated: false, user: null },
        });
      }
    };

    checkAuth();
  }, []);

  const values = {
    dispatch,
    isAuthenticated: state.isAuthenticated,
    user: state.user,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthDetails = () => useContext(AuthContext);
