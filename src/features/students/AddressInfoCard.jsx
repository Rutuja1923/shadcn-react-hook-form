import { useFormContext } from "react-hook-form";
import FormFieldWrapper from "@/components/common/FormFieldWrapper";
import SelectInputField from "@/components/common/SelectInputField";
import TextInputField from "@/components/common/TextInputField";
import {
  INDIA_STATES,
  DISTRICT_CITIES,
  STATE_DISTRICTS,
} from "@/constants/common/adressOptions";
import { AREA_OPTIONS } from "@/constants/common/medhaArea";

function AddressInfoCard() {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  // Watch state and district values for conditional rendering
  const selectedState = watch("state");
  const selectedDistrict = watch("district");

  // Get districts based on selected state
  const filteredDistricts = selectedState
    ? STATE_DISTRICTS[selectedState] || []
    : [];

  // Get cities based on selected district
  const filteredCities = selectedDistrict
    ? DISTRICT_CITIES[selectedDistrict] || []
    : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <FormFieldWrapper
        control={control}
        name="address"
        label="Full Address"
        rules={{ required: "Address is required" }}
        required
      >
        {(field) => (
          <TextInputField
            {...field}
            placeholder="Enter full address"
            error={errors.address?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="state"
        label="State"
        rules={{ required: "State is required" }}
        required
      >
        {(field) => (
          <SelectInputField
            {...field}
            options={INDIA_STATES}
            placeholder="Select state"
            error={errors.state?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="district"
        label="District"
        rules={{ required: "District is required" }}
        required
      >
        {(field) => (
          <SelectInputField
            {...field}
            options={filteredDistricts}
            placeholder={
              selectedState ? "Select district" : "First select state"
            }
            disabled={!selectedState}
            error={errors.district?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="city"
        label="City"
        rules={{ required: "City is required" }}
        required
      >
        {(field) => (
          <SelectInputField
            {...field}
            options={filteredCities}
            placeholder={
              selectedDistrict ? "Select city" : "First select district"
            }
            disabled={!selectedDistrict}
            error={errors.city?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="medha_area"
        label="Medha Area"
        rules={{ required: "Medha area is required" }}
        required
      >
        {(field) => (
          <SelectInputField
            {...field}
            options={AREA_OPTIONS}
            placeholder={
              selectedDistrict ? "Select Medha area" : "First select district"
            }
            disabled={!selectedDistrict}
            error={errors.medha_area?.message}
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        control={control}
        name="pincode"
        label="Pincode"
        rules={{
          required: "Pincode is required",
          pattern: {
            value: /^[1-9][0-9]{5}$/,
            message: "Enter a valid 6-digit pincode",
          },
        }}
        required
      >
        {(field) => (
          <TextInputField
            {...field}
            type="number"
            placeholder="Enter 6-digit pincode"
            onChange={(e) => {
              // Limit to 6 digits
              const value = e.target.value.slice(0, 6);
              field.onChange(value);
            }}
            error={errors.pincode?.message}
          />
        )}
      </FormFieldWrapper>
    </div>
  );
}

export default AddressInfoCard;
