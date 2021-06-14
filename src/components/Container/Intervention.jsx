import React from "react";
import BasicContainer from "./BasicContainer";
import AddDiagnosis from "../Forms/AddDiagnosis";
import CenteredTabs from "../Tabs/CenteredTab";
import Goals from "../Forms/Goals";
import TreatmentProtocol from "../Forms/TreatmentProtocol";
import AddNewTreatmentCategory from "../Forms/AddNewTreatmentCategory";

function Intervention() {
  const [activeTab, setActiveTab] = React.useState(0);

  const headingsIntervention = [
    "Diagnosis",
    "Goals",
    "Treatment Protocol",
    "Treatment Visits",
  ];

  const renderForm = () => {
    if (activeTab === 0) return <AddDiagnosis />;
    if (activeTab === 1) return <Goals />;
    if (activeTab === 2) return <TreatmentProtocol />;
    if (activeTab === 3) return <AddNewTreatmentCategory />;
  };

  return (
    <BasicContainer>
      <CenteredTabs
        headings={headingsIntervention}
        changeActiveTab={setActiveTab}
      />
      {renderForm()}
    </BasicContainer>
  );
}

export default Intervention;
