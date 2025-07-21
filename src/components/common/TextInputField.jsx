// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { cn } from "@/lib/utils"; // optional helper if you have it

// const TextInputField = ({
//   id,
//   label,
//   name,
//   error = "",
//   required = false,
//   placeholder = "",
//   className = "",
//   inputClassName = "",
//   labelClassName = "",
//   type = "text",
//   disabled = false,
//   ...rest
// }) => {
//   return (
//     <div className={cn("space-y-2", className)}>
//       {label && (
//         <Label htmlFor={id} className={labelClassName}>
//           {label}
//           {required && <span className="text-destructive">*</span>}
//         </Label>
//       )}

//       <Input
//         id={id}
//         name={name}
//         type={type}
//         placeholder={placeholder}
//         disabled={disabled}
//         className={cn(
//           "rounded-md font-normal border bg-primary/10 border-primary/50 focus-visible:border-none focus-visible:ring-1 focus-visible:ring-primary/60 placeholder:text-sm placeholder:font-normal text-sm outline-none transition-colors",
//           error && "border-destructive focus-visible:ring-destructive",
//           inputClassName
//         )}
//         {...rest}
//       />
//     </div>
//   );
// };

// export default TextInputField;

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { InfoIcon, AlertCircle } from "lucide-react";

const TextInputField = ({
  id,
  label,
  name,
  error = "",
  helperText = "",
  required = false,
  placeholder = "",
  className = "",
  inputClassName = "",
  labelClassName = "",
  type = "text",
  disabled = false,
  leftIcon,
  rightIcon,
  ...rest
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

      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            {leftIcon}
          </div>
        )}
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "rounded-md font-normal border bg-primary/10 text-sm",
            "border-primary/50 focus-visible:border-none",
            "focus-visible:ring-1 focus-visible:ring-primary/60",
            "placeholder:text-muted-foreground placeholder:font-normal",
            "outline-none transition-colors",
            error && "!border-destructive focus-visible:!ring-destructive/60",
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            inputClassName
          )}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${id}-error` : helperText ? `${id}-helper` : undefined
          }
          {...rest}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInputField;
