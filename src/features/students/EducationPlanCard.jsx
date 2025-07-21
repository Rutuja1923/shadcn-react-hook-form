import { useFormContext } from "react-hook-form";
import FormFieldWrapper from "@/components/common/FormFieldWrapper";
import SelectInputField from "@/components/common/SelectInputField";
import {
  FUTURE_PLAN_OPTIONS,
  BOOLEAN_OPTIONS,
  COURSE_OPTIONS,
} from "@/constants/students/inputOptions";

function EducationPlanCard() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <FormFieldWrapper
        control={control}
        name="course_type_latest"
        label="Current Course"
        rules={{ required: "Current course is required" }}
        required
      >
        {(field) => (
          <SelectInputField
            {...field}
            id="course_type_latest"
            options={COURSE_OPTIONS}
            placeholder="Select current course"
            error={errors.course_type_latest?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="your_plan_after_current_course"
        label="Plan After Current Course"
        rules={{ required: "Future plan is required" }}
        required
      >
        {(field) => (
          <SelectInputField
            {...field}
            options={FUTURE_PLAN_OPTIONS}
            placeholder="Select your future plan"
            error={errors.your_plan_after_current_course?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="medha_champion"
        label="Medha Champion"
        rules={{ required: "Medha champion selection is required" }}
        required
      >
        {(field) => (
          <SelectInputField
            {...field}
            options={BOOLEAN_OPTIONS}
            placeholder="Are you a Medha champion?"
            error={errors.medha_champion?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="interested_in_employment_opportunities"
        label="Interested in Employment Opportunities"
        rules={{ required: "Employment interest selection is required" }}
        required
      >
        {(field) => (
          <SelectInputField
            {...field}
            options={BOOLEAN_OPTIONS}
            placeholder="Interested in employment opportunities?"
            error={errors.interested_in_employment_opportunities?.message}
          />
        )}
      </FormFieldWrapper>

      {/*TODO: add a input field to accept a file - for CV*/}
    </div>
  );
}

export default EducationPlanCard;
