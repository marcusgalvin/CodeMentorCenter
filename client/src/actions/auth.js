import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  AUTH_ERROR,
  USER_LOADED
} from "./types";
import setAuthToken from "../utils/setAuthToken";


//load logged in user
export const loadUser = () => async dispatch => {
    
}