import { SET_ALERT, REMOVE_ALERT } from "./types";
//creates unique ids
import uuid from "uuid";

//alerts will last 5 seconds by default, passing timeout parameter can change this
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  //generate random id
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
