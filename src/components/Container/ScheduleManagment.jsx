import React from "react";
import BasicContainer from "./BasicContainer";
import AppointmentTable from "../Tables/AppointmentTable";
import CenteredTabs from "../Tabs/CenteredTab";
import {
  appointmentsTableData,
  missedAppointmentsTableData,
  cancelledAppointmentsTableData,
  appointmentsTableHeading,
  missedAppointmentsTableHeadings,
  cancelledAppointmentsTableHeadings,
} from "../../db";
import { connect } from "react-redux";

const ScheduleManagment = (props) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const table1Data = [];
  const table2Data = [];
  const table3Data = [];

  props.appointments &&
    props.appointments.forEach((appointment, index) => {
      let visitStatus = "";


      if (appointment.status === 0) {
        visitStatus = "Scheduled";
        const data = {
          date: new Date(appointment.start).toDateString(),
          ptName: `${appointment.formData.patient.firstName} ${appointment.formData.patient.lastName} `,
          time: new Date(appointment.start).toLocaleTimeString(),
          visitStatus,
          billStatus: "Pending",
          ctName: props.auth.user.name,
          actions: "Pending",
        };
        table1Data.push(data);
      }

      if (appointment.status === 1) {
        visitStatus = "Visited";
        const data = {
          date: new Date(appointment.start).toDateString(),
          ptName: `${appointment.formData.patient.firstName} ${appointment.formData.patient.lastName} `,
          time: new Date(appointment.start).toLocaleTimeString(),
          visitStatus,
          billStatus: "Pending",
          ctName: props.auth.user.name,
          actions: "Pending",
        };
        table1Data.push(data);
      }

      if (appointment.status === -1) {
        visitStatus = "Missed";
        const data = {
          date: new Date(appointment.start).toDateString(),
          ptName: `${appointment.formData.patient.firstName} ${appointment.formData.patient.lastName} `,
          time: new Date(appointment.start).toLocaleTimeString(),
          visitStatus,
          billStatus: "Pending",
          ctName: props.auth.user.name,
          actions: "Pending",
        };
        table2Data.push(data);
      }

      if (appointment.status === 2) {
        visitStatus = "Cancelled";
        const data = {
          date: new Date(appointment.start).toDateString(),
          ptName: `${appointment.formData.patient.firstName} ${appointment.formData.patient.lastName} `,
          time: new Date(appointment.start).toLocaleTimeString(),
          visitStatus,
          billStatus: "Pending",
          ctName: props.auth.user.name,
          actions: "Pending",
        };
        table3Data.push(data);
      }
    });

  const headings = [
    "Appointments",
    "Appointment Requests",
    "Cancelled Appointments",
  ];

  let tableHeading = [];
  let tableData = [];
  if (activeTab === 0) {
    tableHeading = appointmentsTableHeading;
    tableData = table1Data;
  }
  if (activeTab === 1) {
    tableHeading = missedAppointmentsTableHeadings;
    tableData = table2Data;
  }
  if (activeTab === 2) {
    tableHeading = cancelledAppointmentsTableHeadings;
    tableData = table3Data;
  }

  const renderTable = () => {
    return <AppointmentTable headings={tableHeading} rows={tableData} />;
  };

  return (
    <BasicContainer>
      <CenteredTabs headings={headings } changeActiveTab={setActiveTab} />
      <div>{renderTable()}</div>
    </BasicContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    appointments: state.appointments,
  };
};

export default connect(mapStateToProps)(ScheduleManagment);
