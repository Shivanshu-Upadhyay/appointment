import React, { Component } from "react";
import NavBar from "./components/NavBar";
import { connect } from "react-redux";
import { closeSideBar, closeDropDown } from "./actions/sideBarAction";
import LeftSideBar from "./components/SideBar/Left";
import DashboardContainer from "./components/Container/Container";
import SettingContainer from "./components/Container/SettingContainer";
import ScheduleContainer from "./components/Container/ScheduleManagment";
import TopDrawer from "./components/SideBar/TopDrawer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HistoryIcon from "@material-ui/icons/History";
import { walletData } from "./db";
import AddApointment from "./components/Container/AddApointmentContainer";
import Plan from "./components/Plan/Plan";
import EhrMngmnt from "./components/EhrComponent/EhrMngmnt";
import AddPatientDetails from "./components/Forms/AddPatientDetails";
import Feedback from "./components/Feedback/Feedback";
import FeedbackForm from "./components/Feedback/FeedbackForm";
import { getAllPatients } from "./actions/patientAction";
import { getAllApointments } from "./actions/appointmentAction";
import Examination from "./components/Forms/Assessments/Examination";
import Patient from "./components/Container/Patient";
import Assessment from "./components/Container/Assessment";
import DemographicData from "./components/Forms/Assessments/DemographicData";
import History from "./components/Forms/Assessments/History";
import Pain from "./components/Forms/Assessments/Pain";
import Sensory from "./components/Forms/Assessments/Sensory";
import Intervention from "./components/Container/Intervention";

import ExercisePrescription from "./components/Forms/Exercise_Prescription/ExercisePrescription";
import ProgramBuilder from "./components/Forms/Exercise_Prescription/ProgramBuilder";
import Exercise from "./components/Forms/Exercise_Prescription/Exercise";

class App extends Component {
  state = { isOpenDialog: false, popup: false };

  closeSideBarHandler = () => {
    if (this.props.isDrawerOpen) {
      if (this.props.isDropDownOpen) this.props.closeDropDown();
      this.props.closeSideBar();
    }
  };
  setpopup = (value) => {
    console.log(value);
    this.setState({ popup: value });
  };

  onBodyClick = () => {
    if (this.state.popup) this.setState({ popup: false });
  };

  walletPopup = () => {
    if (this.state.popup)
      return (
        <div
          class="ui cards"
          style={{
            position: "absolute",
            zIndex: "5",
            marginTop: "-50px",
            marginLeft: "80%",
            marginBottom: "-65px",
          }}
        >
          <div className="card">
            <div className="content">
              <div className="header">Amount: ₹ {walletData.balance}</div>
              <div
                className="description"
                style={{
                  backgroundColor: "rgb(200,200,200)",
                  cursor: "pointer",
                  padding: "5px",
                }}
              >
                <HistoryIcon /> Transaction History
              </div>
            </div>
            <div className="ui bottom attached button">
              {walletData.remainingDays} days Remaining
            </div>
          </div>
        </div>
      );
    else return undefined;
  };
  render() {
    return (
      <div onClick={this.onBodyClick}>
        <BrowserRouter>
          <div onClick={this.closeSideBarHandler}>
            <NavBar
              setWalletDialog={this.setWalletDialog}
              setPopup={this.setpopup}
            />
            {this.walletPopup()}

            <TopDrawer />
          </div>
          <Switch>
            <Route exact path="/" component={DashboardContainer} />
            {/* <Route exact path="/login" component={Divider} /> */}
            <Route path="/settings" component={SettingContainer} />
            <Route
              path="/appointmentmanagement"
              component={ScheduleContainer}
            />
            <Route exact path="/add-appointment" component={AddApointment} />
            <Route exact path="/assessment" component={Assessment} />
            <Route exact path="/patients/:id" component={Intervention} />
            <Route exact path="/patients " component={EhrMngmnt} />
            <Route exact path="/add-patient" component={AddPatientDetails} />
            <Route exact path="/feedback" component={Feedback} />
            <Route exact path="/add-new-feedback" component={FeedbackForm} />
            <Route exact path="/test" component={Patient} />
            <Route exact path="/billing" component={Intervention} />
            <Route exact path="/exercise" component={ExercisePrescription} />
            <Route exact path="/programBuilder" component={ProgramBuilder} />
            <Route exact path="/programBuilder/:id" component={Exercise} />

            <Route path="*" exact={true} component={Plan} />
          </Switch>
          <LeftSideBar />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDrawerOpen: state.sideBarState,
    isDropDownOpen: state.dropDownState,
  };
};

export default connect(mapStateToProps, {
  closeSideBar,
  closeDropDown,
  getAllApointments,
  getAllPatients,
})(App);
