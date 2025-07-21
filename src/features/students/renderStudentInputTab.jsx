import PersonalInfoCard from "./PersonalInfoCard";
import ContactInfoCard from "./ContactInfoCard";
import AddressInfoCard from "./AddressInfoCard";
import IncomeSourceCard from "./IncomeSourceCard";
import EducationPlanCard from "./EducationPlanCard";

export const renderStudentInputTab = (activeTab) => {
  switch (activeTab) {
    case "personal_info":
      return <PersonalInfoCard />;
    case "contact_info":
      return <ContactInfoCard />;
    case "address_info":
      return <AddressInfoCard />;
    case "education_plan":
      return <EducationPlanCard />;
    case "income_source":
      return <IncomeSourceCard />;
    default:
      return null;
  }
};
