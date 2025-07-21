export const TAB_FIELDS = {
  personal_info: [
    "first_name",
    "last_name",
    "name_of_parent_or_guardian",
    "dob",
    "gender",
    "category",
    "status",
    "assigned_to",
  ],
  address_info: [
    "address",
    "state",
    "district",
    "city",
    "medha_area",
    "pincode",
  ],
  contact_info: ["phone", "email", "registered_by"],
  income_source: [
    "income_level",
    "family_annual_income",
    "how_did_you_hear_about_us",
  ],
  education_plan: [
    "course_type_latest",
    "your_plan_after_current_course",
    "medha_champion",
    "interested_in_employment_opportunities",
  ],
};

export const DEFAULT_VALUES = {
  address: "",
  alternate_phone: "",
  assigned_to: "",
  category: "",
  city: "",
  course_type_latest: "",
  district: "",
  dob: null,
  email: "",
  family_annual_income: "",
  first_name: "",
  gender: "",
  how_did_you_hear_about_us: "",
  how_did_you_hear_about_us_other: "",
  income_level: "",
  interested_in_employment_opportunities: "",
  last_name: "",
  medha_area: "",
  medha_champion: "",
  name: "",
  name_of_parent_or_guardian: "",
  phone: "",
  pincode: "",
  registered_by: "",
  state: "",
  status: "",
  your_plan_after_current_course: "",
};

export const TAB_OPTIONS = [
  { value: "personal_info", label: "Personal Info" },
  { value: "address_info", label: "Address" },
  { value: "contact_info", label: "Contact Details" },
  { value: "income_source", label: "Income & Source" },
  { value: "education_plan", label: "Education & Plan" },
];

export const TAB_NAMES = {
  personal_info: "Personal Information",
  address_info: "Address Information",
  contact_info: "Contact Details",
  income_source: "Income Source",
  education_plan: "Education Plan",
};
