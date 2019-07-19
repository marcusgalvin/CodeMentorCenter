import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  AUTH_ERROR,
  USER_LOADED,
  LOGOUT
} from "./types";
import setAuthToken from "../utils/setAuthToken";

//load logged in user
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    //set token to global header
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

//register user
export const register = ({
  name,
  email,
  password,
  password2
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({
    name,
    email,
    password,
    password2
  });
  try {
    const res = await axios.post("/api/register", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (error) {
    //will be an array of errors
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(element => {
        //set a danger alert box with the error message
        dispatch(setAlert(element.msg, "danger"));
      });
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

//login user
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({
    email,
    password
  });

  try {
    const res = await axios.post("/api/auth", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (error) {
    //will be an array of errors
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(element => {
        //set a danger alert box with the error message
        dispatch(setAlert(element.msg, "danger"));
      });
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

//logout
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
