import { useFormContext } from "react-hook-form";
import FormFieldWrapper from "@/components/common/FormFieldWrapper";
import TextInputField from "@/components/common/TextInputField";
import SelectInputField from "@/components/common/SelectInputField";
import { ASSIGNED_TO_OPTIONS } from "@/constants/common/assignees";

function ContactInfoCard() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      {/* <FormFieldWrapper
        control={control}
        name="phone"
        label="Phone Number"
        rules={{ required: "Phone number is required" }}
        required
      >
        {(field) => (
          <TextInputField
            {...field}
            id="phone"
            placeholder="Enter phone number"
            error={errors.phone?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="alternate_phone"
        label="Alternate Phone Number"
      >
        {(field) => (
          <TextInputField
            {...field}
            id="alternate_phone"
            placeholder="Enter alternate phone number"
            error={errors.alternate_phone?.message}
          />
        )}
      </FormFieldWrapper> */}

      <FormFieldWrapper
        control={control}
        name="phone"
        label="Phone Number"
        rules={{
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Phone number must be 10 digits",
          },
          minLength: {
            value: 10,
            message: "Phone number must be 10 digits",
          },
          maxLength: {
            value: 10,
            message: "Phone number must be 10 digits",
          },
        }}
        required
      >
        {(field) => (
          <TextInputField
            {...field}
            id="phone"
            type="tel" // Using type="tel" for better mobile keyboard
            placeholder="Enter 10-digit phone number"
            onChange={(e) => {
              // Remove any non-digit characters
              const value = e.target.value.replace(/\D/g, "");
              // Limit to 10 characters
              field.onChange(value.slice(0, 10));
            }}
            error={errors.phone?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="alternate_phone"
        label="Alternate Phone Number"
        rules={{
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Phone number must be 10 digits",
          },
          minLength: {
            value: 10,
            message: "Phone number must be 10 digits",
          },
          maxLength: {
            value: 10,
            message: "Phone number must be 10 digits",
          },
        }}
      >
        {(field) => (
          <TextInputField
            {...field}
            id="alternate_phone"
            type="tel"
            placeholder="Enter 10-digit alternate number"
            onChange={(e) => {
              // Remove any non-digit characters
              const value = e.target.value.replace(/\D/g, "");
              // Limit to 10 characters
              field.onChange(value.slice(0, 10));
            }}
            error={errors.alternate_phone?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="email"
        label="Email"
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
        required
      >
        {(field) => (
          <TextInputField
            {...field}
            id="email"
            placeholder="Enter email address"
            error={errors.email?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="registered_by"
        label="Registered By"
        rules={{ required: "Registered by is required" }}
        required
      >
        {(field) => (
          <SelectInputField
            {...field}
            options={ASSIGNED_TO_OPTIONS}
            placeholder="Select registered by"
            error={errors.registered_by?.message}
          />
        )}
      </FormFieldWrapper>
    </div>
  );
}

export default ContactInfoCard;
