// import { useState } from "react";
// import DatePicker from "./DatePicker";
// import DateInput from "./DateInput";

// function DatePickerField({ value, onChange,error, ...props }) {
//   const [month, setMonth] = useState(new Date());
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <DateInput
//       value={value}
//       onChange={onChange}
//       isOpen={isOpen}
//       onOpenChange={setIsOpen}
//       error={error}
//       {...props}
//     >
//       <DatePicker
//         month={month}
//         onMonthChange={setMonth}
//         selected={value}
//         onSelect={(date) => {
//           onChange(date);
//           setIsOpen(false);
//         }}
//       />
//     </DateInput>
//   );
// }

// export default DatePickerField;

import { useState } from "react";
import DatePicker from "./DatePicker";
import DateInput from "./DateInput";

function DatePickerField({
  value,
  onChange,
  error = false,
  disabled = false,
  minDate,
  maxDate,
  ...props
}) {
  const [month, setMonth] = useState(value || new Date());
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DateInput
      value={value}
      onChange={onChange}
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      error={error}
      disabled={disabled}
      {...props}
    >
      <DatePicker
        month={month}
        onMonthChange={setMonth}
        selected={value}
        onSelect={(date) => {
          onChange(date);
          setIsOpen(false);
        }}
        minDate={minDate}
        maxDate={maxDate}
      />
    </DateInput>
  );
}

export default DatePickerField;
