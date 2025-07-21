import { useFormContext } from "react-hook-form";
import FormFieldWrapper from "@/components/common/FormFieldWrapper";
import TextInputField from "@/components/common/TextInputField";
import SelectInputField from "@/components/common/SelectInputField";
import {
  INCOME_LEVEL_OPTIONS,
  REFERRAL_SOURCE_OPTIONS,
} from "@/constants/students/inputOptions";

function IncomeSourceCard() {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  const referralSource = watch("how_did_you_hear_about_us");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <FormFieldWrapper
        control={control}
        name="income_level"
        label="Income Level"
        rules={{ required: "Income level is required" }}
        required
      >
        {(field) => (
          <SelectInputField
            {...field}
            options={INCOME_LEVEL_OPTIONS}
            placeholder="Select income level"
            error={errors.income_level?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="family_annual_income"
        label="Family Annual Income"
        rules={{
          required: "Family annual income is required",
          validate: (value) => {
            if (isNaN(Number(value.replace(/[^0-9.]/g, "")))) {
              return "Please enter a valid number";
            }
            return true;
          },
        }}
        required
      >
        {(field) => (
          <TextInputField
            {...field}
            id="family_annual_income"
            type="number"
            placeholder="Enter annual income (numbers only)"
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9.]/g, "");
              field.onChange(value);
            }}
            error={errors.family_annual_income?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="how_did_you_hear_about_us"
        label="How did you hear about us?"
        rules={{ required: "Referral source is required" }}
        required
      >
        {(field) => (
          <SelectInputField
            {...field}
            options={REFERRAL_SOURCE_OPTIONS}
            placeholder="Select referral source"
            error={errors.how_did_you_hear_about_us?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="how_did_you_hear_about_us_other"
        label="Referral Details"
        rules={{
          required:
            referralSource === "other"
              ? "Referral details are required"
              : false,
        }}
        required={referralSource === "other"}
      >
        {(field) => (
          <TextInputField
            {...field}
            id="how_did_you_hear_about_us_other"
            placeholder={
              referralSource === "other"
                ? "Please specify"
                : "Select 'Other' to enable"
            }
            disabled={referralSource !== "other"}
            error={errors.how_did_you_hear_about_us_other?.message}
          />
        )}
      </FormFieldWrapper>
    </div>
  );
}

export default IncomeSourceCard;
