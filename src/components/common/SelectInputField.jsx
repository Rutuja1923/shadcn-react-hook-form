// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Label } from "../ui/label";
// import { cn } from "@/lib/utils";

// const SelectInputField = ({
//   name,
//   label,
//   options,
//   value,
//   onChange,
//   placeholder = "Select an option",
//   disabled = false,
//   error = "",
//   required = "false",
//   labelClassName = "",
//   triggerClassName = "",
//   contentClassName = "",
// }) => {
//   return (
//     <div className="flex flex-col gap-1">
//       {label && (
//         <Label htmlFor={name} className={labelClassName}>
//           {label}
//           {required && <span className="text-red-500">*</span>}
//         </Label>
//       )}

//       <Select value={value} onValueChange={onChange} disabled={disabled}>
//         <SelectTrigger
//           className={cn(
//             "rounded-md border bg-primary/10 text-sm transition-colors mt-1",
//             "border-primary/50",
//             "focus-visible:border-none focus-visible:ring-1 focus-visible:ring-primary/60",
//             "cursor-pointer font-normal",
//             error && "border-destructive focus-visible:ring-destructive/60",
//             triggerClassName
//           )}
//         >
//           <SelectValue placeholder={placeholder} />
//         </SelectTrigger>

//         <SelectContent
//           className={cn(
//             "text-sm bg-white border border-primary/50 shadow-md rounded-md",
//             contentClassName
//           )}
//         >
//           {options.map((option) => (
//             <SelectItem key={option.value} value={option.value}>
//               {option.label}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//     </div>
//   );
// };

// export default SelectInputField;

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { InfoIcon, WarningCircleIcon } from "@phosphor-icons/react";

const SelectInputField = ({
  id,
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  error = "",
  helperText = "",
  required = false,
  className = "",
  labelClassName = "",
  triggerClassName = "",
  contentClassName = "",
}) => {
  return (
    <div className={cn("space-y-1", className)}>
      {label && (
        <div className="flex items-center gap-1">
          <Label
            htmlFor={id}
            className={cn("text-sm font-medium", labelClassName)}
          >
            {label}
          </Label>
          {required && <span className="text-destructive">*</span>}
          {helperText && (
            <span
              className="text-muted-foreground cursor-help"
              title={helperText}
            >
              <InfoIcon size={14} />
            </span>
          )}
        </div>
      )}

      <Select
        value={value}
        onValueChange={onChange}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={
          error ? `${id}-error` : helperText ? `${id}-helper` : undefined
        }
      >
        <SelectTrigger
          id={id}
          className={cn(
            "w-full rounded-md border bg-primary/10 text-sm",
            "border-primary/50 focus-visible:border-none",
            "focus-visible:ring-1 focus-visible:ring-primary/60",
            "cursor-pointer font-normal text-left",
            error && "border-destructive focus-visible:ring-destructive/60",
            triggerClassName
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent
          className={cn(
            "text-sm bg-white border border-primary/50 shadow-md rounded-md",
            "max-h-[var(--radix-select-content-available-height)]",
            contentClassName
          )}
        >
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              className={cn(
                "cursor-pointer",
                option.disabled && "opacity-50 cursor-not-allowed"
              )}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectInputField;
