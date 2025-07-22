import { useFormContext } from "react-hook-form";

/*
 * A generic form validation hook that can be used across multiple forms
 * @param {Array} [defaultFields] - Optional default fields to validate
 * @returns {Object} Validation methods
 */
export const useFormValidation = (defaultFields = []) => {
  const { trigger, getValues, formState } = useFormContext();

  /*
   * Validates specific fields or all form fields
   * @param {Array} [fields] - Fields to validate (defaults to all form fields)
   * @returns {Promise<{isValid: boolean, missingFields: Array}>}
   */
  const validateFields = async (fields = null) => {
    const fieldsToValidate =
      fields || defaultFields || Object.keys(formState.defaultValues || {});

    const isValid = await trigger(fieldsToValidate);
    const currentValues = getValues();

    const missingFields = fieldsToValidate.filter((field) => {
      const value = currentValues[field];
      return value === undefined || value === null || value === "";
    });

    return { isValid, missingFields };
  };

  /*
   * Validates specific tabs/sections of a form
   * @param {Object} tabFields - Object with tab names as keys and field arrays as values
   * @returns {Promise<{isValid: boolean, missingFields: Array, invalidTabs: Array}>}
   */
  const validateTabs = async (tabFields) => {
    const tabNames = Object.keys(tabFields);
    const results = await Promise.all(
      tabNames.map((tab) => validateFields(tabFields[tab]))
    );

    const isValid = results.every((r) => r.isValid);
    const missingFields = results.flatMap((r) => r.missingFields);
    const invalidTabs = tabNames.filter((_, index) => !results[index].isValid);

    return { isValid, missingFields, invalidTabs };
  };

  return {
    validateFields,
    validateTabs,
    isFormValid: formState.isValid,
  };
};
