import axios from 'axios';
import { LOGIN, LOGOUT, REGISTER, SET_AUTHENTICATED } from './actionTypes';

export const checkAuth = () => async (dispatch) => {
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

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/login`,
      credentials,
      {
        withCredentials: true,
      }
    );
    dispatch({ type: LOGIN, payload: { user: response.data.user } });
  } catch (error) {
    console.error('Login failed', error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/logout`);
    if (response.status === 204) {
      const deleteCookie = (name) => {
        document.cookie =
          name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      };
      deleteCookie('token');
      dispatch({ type: LOGOUT });
    }
  } catch (error) {
    console.error('Logout failed', error);
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/register`,
      userData,
      {
        withCredentials: true,
      }
    );
    dispatch({ type: REGISTER, payload: { user: response.data.user } });
  } catch (error) {
    console.error('Registration failed', error);
  }
};
