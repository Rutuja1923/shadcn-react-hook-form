// import { setYear, setMonth } from "date-fns";
// import { Calendar } from "@ui/calendar";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@ui/select";

// function DatePicker({ month, onMonthChange, selected, onSelect, className }) {
//   const years = Array.from({ length: 41 }, (_, i) => 1990 + i);
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   return (
//     <div className={`${className}`}>
//       <div className="flex justify-between gap-4 pb">
//         <Select
//           value={month.getFullYear().toString()}
//           onValueChange={(value) =>
//             onMonthChange(setYear(new Date(month), parseInt(value)))
//           }
//         >
//           <SelectTrigger className="w-[80px] rounded-md border bg-primary/10 text-sm transition-colors border-primary/50 focus-visible:border-none focus-visible:ring-1 focus-visible:ring-primary/60 cursor-pointer">
//             <SelectValue placeholder="Year" />
//           </SelectTrigger>
//           <SelectContent className="max-h-[200px] text-sm bg-white border border-primary/50 shadow-md rounded-md">
//             {years.map((year) => (
//               <SelectItem
//                 key={year}
//                 value={year.toString()}
//                 className={"cursor-pointer"}
//               >
//                 {year}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>

//         <Select
//           value={months[month.getMonth()]}
//           onValueChange={(value) => {
//             const monthIndex = months.indexOf(value);
//             onMonthChange(setMonth(new Date(month), monthIndex));
//           }}
//         >
//           <SelectTrigger className="w-[120px] rounded-md border bg-primary/10 text-sm transition-colors border-primary/50 focus-visible:border-none focus-visible:ring-1 focus-visible:ring-primary/60 cursor-pointer">
//             <SelectValue placeholder="Month" />
//           </SelectTrigger>
//           <SelectContent className="max-h-[200px] text-sm bg-white border border-primary/50 shadow-md rounded-md">
//             {months.map((month) => (
//               <SelectItem key={month} value={month}>
//                 {month}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       <Calendar
//         mode="single"
//         month={month}
//         onMonthChange={onMonthChange}
//         selected={selected}
//         onSelect={onSelect}
//         classNames={{
//           day: "focus-visible:ring-0 focus-visible:ring-offset-0",
//         }}
//       />
//     </div>
//   );
// }

// export default DatePicker;

import { setYear, setMonth } from "date-fns";
import { Calendar } from "@ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/select";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function DatePicker({
  month,
  onMonthChange,
  selected,
  onSelect,
  className = "",
  minDate,
  maxDate,
}) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 41 }, (_, i) => currentYear - 20 + i);

  const handleYearChange = (value) => {
    onMonthChange(setYear(new Date(month), parseInt(value)));
  };

  const handleMonthChange = (value) => {
    const monthIndex = MONTHS.indexOf(value);
    onMonthChange(setMonth(new Date(month), monthIndex));
  };

  return (
    <div className={className}>
      <div className="flex justify-between gap-4">
        <Select
          value={month.getFullYear().toString()}
          onValueChange={handleYearChange}
        >
          <SelectTrigger
            className="w-[80px] rounded-md border bg-primary/10 text-sm transition-colors border-primary/50 focus-visible:border-none focus-visible:ring-1 focus-visible:ring-primary/60 cursor-pointer"
            aria-label="Select year"
          >
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent className="max-h-[200px] text-sm bg-white border border-primary/50 shadow-md rounded-md">
            {years.map((year) => (
              <SelectItem
                key={year}
                value={year.toString()}
                className="cursor-pointer"
              >
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={MONTHS[month.getMonth()]}
          onValueChange={handleMonthChange}
        >
          <SelectTrigger
            className="w-[120px] rounded-md border bg-primary/10 text-sm transition-colors border-primary/50 focus-visible:border-none focus-visible:ring-1 focus-visible:ring-primary/60 cursor-pointer"
            aria-label="Select month"
          >
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent className="max-h-[200px] text-sm bg-white border border-primary/50 shadow-md rounded-md">
            {MONTHS.map((month) => (
              <SelectItem key={month} value={month} className="cursor-pointer">
                {month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Calendar
        mode="single"
        month={month}
        onMonthChange={onMonthChange}
        selected={selected}
        onSelect={onSelect}
        fromDate={minDate}
        toDate={maxDate}
        classNames={{
          day: "focus-visible:ring-0 focus-visible:ring-offset-0",
          day_disabled: "text-muted-foreground opacity-50",
        }}
      />
    </div>
  );
}

export default DatePicker;

