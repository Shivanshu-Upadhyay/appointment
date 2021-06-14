import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import CenteredTabs from "../Tabs/CenteredTab";
import CustomizedTables from "../Tables/Table";
import CenteredGrid from "../Grid/CenteredGrid";
import JumboButton from "../JumboButton/JumboButton";
import { changeHeading } from "../../actions/tableAction";
import { Dialog, Typography } from "@material-ui/core";
import BarCharts from "../Charts/BarChart";
import FaceIcon from "@material-ui/icons/Face";
import AppointmentTable from "../Tables/AppointmentTable";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import CreateIcon from "@material-ui/icons/Create";
import {
  headings,
  headings1,
  headings2,
  headings3,
  rows,
  rows1,
  rows2,
  rows3,
} from "../../db";
import Divider from "../LandingPage/Dividers/VerticalDivider";
import { getAllPatients, deletePatient } from "../../actions/patientAction";
import {
  getAllApointments,
  deleteAppointment,
} from "../../actions/appointmentAction";
import FormDialog from "../Forms/FormLayout";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 300,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 75,
  },
}));

function SimpleContainer(props) {
  React.useEffect(() => {
    props.getAllPatients();
    props.getAllApointments();
  }, []);

  const [openAddAppointment, setOpenAddAppointment] = React.useState(false);
  const [startStr, setStartStr] = React.useState("");
  const [endStr, setEndStr] = React.useState("");

  const handleClose = () => {
    setOpenAddAppointment(false);
  };

  const totalAppointments = props.appointments ? props.appointments.length : 0;
  const totalPatients = props.patients ? props.patients.length : 0;
  const todaysData = [
    {
      heading: "APPOINTMENTS",
      data: { count: totalAppointments },
    },
    { heading: "PATIENTS", data: { count: totalPatients } },
    { heading: "INCOME", data: { count: `₹ ${0}` } },
    { heading: "EXPENSES", data: { count: `₹ ${0}` } },
  ];

  const tabs = ["Today's Task", "Clinical Stats"];
  const classes = useStyles();
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const changeActiveTab = (index) => {
    setActiveTab(tabs[index]);
  };

  const headingArray = ["APPOINTMENTS", "PATIENTS", "INCOME", "EXPENSES"];
  if (!props.isLogedIn) {
    return <Divider />;
  }

  const appointmentTableHeading = [
    { id: "name", label: "Name" },
    { id: "time", label: "Time & Date" },
    { id: "visitStatus", label: "Visit Status" },
    { id: "billStatus", label: "Bill Status" },
    { id: "treatment", label: "Treatment" },
    { id: "consultant", label: "Consultant" },
    { id: "action", label: "Actions" },
  ];

  const appointmentData = [];

  const deleteAppointmentHandler = (id) => {
    console.log(id);
    props.deleteAppointment(id);
  };

  // name: string;
  //   time: string;
  //   visitStatus: string;
  //   billStatus: string;
  //   treatment: string;
  //   consultant: string;
  //   action: string;

  props.appointments &&
    props.appointments.forEach((appointment, index) => {
      let visitStatus = "";
      if (appointment.status === 0) visitStatus = "Scheduled";
      else if (appointment.status === 1) visitStatus = "Visited";
      else if (appointment.status === -1) visitStatus = "Missed";
      else if (appointment.status === 2) visitStatus = "Cancelled";
      const data = {
        name: `${appointment.formData.patient.firstName} ${appointment.formData.patient.lastName} `,
        time: `${new Date(appointment.start).toLocaleTimeString()} : ${new Date(
          appointment.start
        ).toDateString()}`,
        visitStatus,
        billStatus: "Pending",
        treatment: `${appointment.formData.treatment.name}`,
        consultant: props.user.name,
        action: (
          <div className="ui compact menu">
            <div className="item">
              <CreateIcon
                onClick={() => {
                  setStartStr(appointment.start);
                  setEndStr(appointment.end);
                  setOpenAddAppointment(true);
                }}
              />
            </div>
            <div className="item">
              <DeleteSweepIcon
                onClick={() => {
                  deleteAppointmentHandler(appointment._id);
                }}
              />
            </div>
          </div>
        ),
      };
      appointmentData.push(data);
    });

  const patientTableHeading = [
    { id: "image", label: "Image" },
    { id: "date", label: "Date" },
    { id: "patientId", label: "Patient Id" },
    { id: "name", label: "Name" },
    { id: "mobileNumber", label: "Mobile Number" },
    { id: "email", label: "Email" },
    { id: "actions", label: "Actions" },
  ];

  // image: JSX.Element;
  // date: string;
  // patientId: string;
  // name: string;
  // mobileNumber: string;
  // email: string;
  // actions: string;
  const patientData = [];

  const deletePatientHandler = (id) => {
    console.log(id);
    props.deletePatient(id);
  };

  props.patients &&
    props.patients.forEach((patient, index) => {
      const data = {
        image: <FaceIcon />,
        date: new Date(patient.date).toDateString(),
        patientId: patient._id,
        name: `${patient.firstName} ${patient.lastName} `,
        mobileNumber: `${patient.mobile}`,
        email: `${patient.firstName}`,
        actions: (
          <DeleteSweepIcon
            onClick={() => {
              deletePatientHandler(patient._id);
            }}
          />
        ),
      };
      patientData.push(data);
    });

  const renderTable = () => {
    const i = headingArray.indexOf(props.heading);

    if (i === 0) {
      return (
        <AppointmentTable
          title={headingArray[i]}
          headings={appointmentTableHeading}
          rows={appointmentData}
        />
      );
    }
    if (i === 1) {
      return (
        <AppointmentTable
          title={headingArray[i]}
          headings={patientTableHeading}
          rows={patientData}
        />
      );
    }
    if (i === 2) {
      return (
        <AppointmentTable
          title={headingArray[i]}
          headings={headings2}
          rows={appointmentData}
        />
      );
    }
    if (i === 3) {
      return (
        <AppointmentTable
          title={headingArray[i]}
          headings={headings3}
          rows={appointmentData}
        />
      );
    }
  };

  const renderTodaysTask = () => {
    return (
      <div>
        <JumboButton count={4} width={3} data={todaysData} showBox={true} />

        <CenteredGrid />

        <CssBaseline />
        {renderTable()}
      </div>
    );
  };
  const renderClinicalStats = () => {
    return (
      <div>
        <div style={{ paddingTop: "10px" }}>
          <Typography display="initial" variant="h3">
            Clinical Stats
          </Typography>
        </div>
        <div style={{ paddingTop: "10px" }}>
          <JumboButton
            count={4}
            width={6}
            data={todaysData}
            arrowIcon={true}
          ></JumboButton>
        </div>

        <div style={{ paddingTop: "30px" }}>
          <Typography display="initial" variant="h4">
            New Patient Entry [ Per Day ]
          </Typography>
          <div style={{ paddingTop: "20px" }}>
            <BarCharts />
          </div>
        </div>
        <Divider />
        <div style={{ paddingTop: "30px" }}>
          <Typography display="initial" variant="h4">
            Number Of Patients Treated Per Day [ Derived From Session Reporting
            ]
          </Typography>
          <div style={{ paddingTop: "20px" }}>
            <BarCharts />
          </div>
        </div>
        <Divider />
        <div style={{ paddingTop: "30px" }}>
          <Typography display="initial" variant="h4">
            Income Analytics [ Only For Month Wise ]
          </Typography>
          <div style={{ paddingTop: "20px" }}>
            <BarCharts />
          </div>
        </div>
        <Divider />
        <div style={{ paddingTop: "30px" }}>
          <Typography display="initial" variant="h4">
            Conditions Analytics [ Only For Month Wise ]
          </Typography>
          <div style={{ paddingTop: "20px" }}>
            <BarCharts />
          </div>
        </div>
        <Divider />
        <div style={{ paddingTop: "30px" }}>
          <Typography display="initial" variant="h4">
            Appointment Analytics
          </Typography>
          <div style={{ paddingTop: "20px" }}>
            <BarCharts />
          </div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Container
        maxWidth="lg"
        className={clsx(classes.content, {
          [classes.contentShift]: !props.isOpen,
        })}
      >
        {openAddAppointment && (
          <Dialog
            maxWidth="md"
            open={openAddAppointment}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <FormDialog
              onClose={handleClose}
              startStr={startStr}
              endStr={endStr}
            />
          </Dialog>
        )}
        <CenteredTabs headings={tabs} changeActiveTab={changeActiveTab} />
        {activeTab === tabs[0] ? renderTodaysTask() : renderClinicalStats()}
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.sideBarState,
    heading: state.tableHeading,
    appointments: state.appointments,
    patients: state.patients,
    isLogedIn: state.auth.isLogedIn,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, {
  getAllApointments,
  getAllPatients,
  deletePatient,
  deleteAppointment,
})(SimpleContainer);
