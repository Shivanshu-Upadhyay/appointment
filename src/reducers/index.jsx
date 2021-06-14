import { combineReducers } from "redux";
import { auth } from "./userReducer";
import { patients, selectedPatient } from "./patientReducer";

import { sideBarState, dropDownState, topDrawerState } from "./SideBarReducer";
import { tableHeading } from "./tableReducer";
import { ERROR } from "../actions/types";
import { treatments } from "./treatmentReducer";
import { appointments } from "./appointmentReducer";
import { feedbacks } from "./feedbackReducer";
import { invoices } from "./invoiceReducer";
import {demographicData } from './demographicDataReducer';
import {motorData} from './motorExaminationReducer';
import { exercises, selectedExercises } from "./exerciseReducer";

const errors = (state = {}, action) => {
  switch (action.payload) {
    case ERROR:
      return { ...state, ...action.payload };

    default:
      return {};
  }
};

export default combineReducers({
  sideBarState,
  dropDownState,
  tableHeading,
  auth,
  topDrawerState,
  patients,
  errors,
  treatments,
  appointments,
  feedbacks,
  invoices,
  selectedPatient,
  exercises,
  selectedExercises,
  demographicData,
  motorData
});
