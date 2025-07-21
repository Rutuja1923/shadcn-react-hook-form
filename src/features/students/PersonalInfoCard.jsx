import { useFormContext } from "react-hook-form";
import FormFieldWrapper from "@/components/common/FormFieldWrapper";
import TextInputField from "@/components/common/TextInputField";
import SelectInputField from "@/components/common/SelectInputField";
import DatePickerField from "@/components/common/DatePickerField";
import {
  GENDER_OPTIONS,
  CATEGORY_OPTIONS,
} from "@/constants/students/inputOptions";

function PersonalInfoCard() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <FormFieldWrapper
        control={control}
        name="first_name"
        label="First Name"
        rules={{ required: "First name is required" }}
        required
      >
        {(field) => (
          <TextInputField
            {...field}
            id="first_name"
            placeholder="Enter first name"
            error={errors.first_name?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="last_name"
        label="Last Name"
        rules={{ required: "Last name is required" }}
        required
      >
        {(field) => (
          <TextInputField
            {...field}
            id="last_name"
            placeholder="Enter last name"
            error={errors.last_name?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="name_of_parent_or_guardian"
        label="Parent/Guardian Name"
        rules={{ required: "Parent or Guardian name is required" }}
        required
      >
        {(field) => (
          <TextInputField
            {...field}
            id="name_of_parent_or_guardian"
            placeholder="Enter name of parent/guardian"
            error={errors.name_of_parent_or_guardian?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="dob"
        label="Date of Birth"
        rules={{ required: "Date of Birth is required" }}
        required
      >
        {(field) => (
          <DatePickerField
            {...field}
            placeholder="Pick a DOB"
            error={errors.dob?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="gender"
        label="Gender"
        rules={{ required: "Gender is required" }}
        required
      >
        {(field) => (
          <SelectInputField
            {...field}
            options={GENDER_OPTIONS}
            placeholder="Select gender"
            error={errors.gender?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="category"
        label="Category"
        rules={{ required: "Category is required" }}
        required
      >
        {(field) => (
          <SelectInputField
            {...field}
            options={CATEGORY_OPTIONS}
            placeholder="Select category"
            error={errors.category?.message}
          />
        )}
      </FormFieldWrapper>
    </div>
  );
}

export default PersonalInfoCard;
