import {
  GET_ALL_APPOINTMENTS,
  ADD_APPOINTMENT,
  DELETE_APPOINTMENT,
  EDIT_APPOINTMENT,
} from "../actions/types";

export const appointments = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_APPOINTMENTS:
      return [...action.payload];
    case ADD_APPOINTMENT:
      const appointments = state.map((appointment) => appointment);
      appointments.push(action.payload);
      return appointments;
    case DELETE_APPOINTMENT:
      return state.filter((appointment) => {
        if (appointment._id === action.payload._id) return false;
        else return true;
      });

    case EDIT_APPOINTMENT:
      return state.map((appointment) => {
        if (appointment._id === action.payload._id) return action.payload;
        return appointment;
      });

    default:
      return state;
  }
};
