import React from "react";
import BasicContainer from "../Container/BasicContainer";
import CenteredTabs from "../Tabs/CenteredTab";
import AppointmentTable from "../Tables/AppointmentTable";
import { ehrTableData, ehrmngmntTableHeading } from "../../db";
import AddPatientDetails from "../Forms/AddPatientDetails";
import { connect } from "react-redux";
import FaceIcon from "@material-ui/icons/Face";
import { Link } from "react-router-dom";
import { getPatientById } from "../../actions/patientAction";

const EhrMngmnt = (props) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const table1Data = [];
  const table2Data = [];

  props.patients &&
    props.patients.forEach((patient, index) => {
      if (patient.patientType === "home") {
        const data = {
          image: <FaceIcon />,
          patientId: patient._id,
          date: new Date(patient.date).toDateString(),
          name: (
            <Link
              to={`patients/${patient._id}`}
              onClick={() => {
                props.getPatientById(patient._id);
              }}
            >
              {`${patient.firstName} ${patient.lastName}`}
            </Link>
          ),

          mobileNumber: `${patient.mobile}`,
          email: `${patient.firstName}`,

          actions: "Pending",
        };
        table1Data.push(data);
      }

      if (patient.patientType === "op") {
        const data = {
          image: <FaceIcon />,
          patientId: patient._id,
          date: new Date(patient.date).toDateString(),

          name: (
            <Link
              to={`patients/${patient._id}`}
              onClick={() => {
                props.getPatientById(patient._id);
              }}
            >
              {`${patient.firstName} ${patient.lastName}`}
            </Link>
          ),

          mobileNumber: `${patient.mobile}`,
          email: `${patient.firstName}`,

          actions: "Pending",
        };
        table2Data.push(data);
      }
    });

  const headings = [
    "Home Patients List",
    "Out Patients List",
    "List Of Patients Request",
  ];

  let tableHeading = [];
  let tableData = [];
  if (activeTab === 0) {
    tableHeading = ehrmngmntTableHeading;
    tableData = table1Data;
  }
  if (activeTab === 1) {
    tableHeading = ehrmngmntTableHeading;
    tableData = table2Data;
  }
  if (activeTab === 2) {
    tableHeading = ehrmngmntTableHeading;
    tableData = [];
  }

  const renderTable = () => {
    return <AppointmentTable headings={tableHeading} rows={tableData} />;
  };

  return (
    <BasicContainer>
      <CenteredTabs headings={headings} changeActiveTab={setActiveTab} />
      <div>{renderTable()}</div>
    </BasicContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    patients: state.patients,
  };
};

export default connect(mapStateToProps, { getPatientById })(EhrMngmnt);
