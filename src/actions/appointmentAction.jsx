import physiomaticApi from "../api/physiomaticApi";
import {
  ADD_APPOINTMENT,
  ERROR,
  GET_ALL_APPOINTMENTS,
  // GET_APPOINTMENT,
  EDIT_APPOINTMENT,
  DELETE_APPOINTMENT,
} from "./types";

export const addApointment = (appointmentData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.post(
      "/api/appointment/add",
      appointmentData
    );
    dispatch({
      type: ADD_APPOINTMENT,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};
export const getAllApointments = () => async (dispatch) => {
  try {
    const response = await physiomaticApi.get("/api/appointment/appointments");
    const appointments = response.data.appointments;
    dispatch({
      type: GET_ALL_APPOINTMENTS,
      payload: appointments,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};

export const deleteAppointment = (id) => async (dispatch) => {
  try {
    const response = await physiomaticApi.delete(
      `/api/appointment/delete/${id}`
    );
    dispatch({
      type: DELETE_APPOINTMENT,
      payload: response.data.appointment,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};

export const editAppointment = (id, appointmentData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.put(
      `/api/appointment/delete/${id}`,
      appointmentData
    );
    dispatch({
      type: EDIT_APPOINTMENT,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};
