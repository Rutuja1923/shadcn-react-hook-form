// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

// function FormFieldWrapper({
//   control,
//   name,
//   label,
//   rules,
//   required,
//   children,
// }) {
//   return (
//     <FormField
//       control={control}
//       name={name}
//       rules={rules}
//       render={({ field }) => (
//         <FormItem>
//           {label && (
//             <FormLabel className="text-sm font-normal text-black data-[error=true]:text-black">
//               {label}
//               {required && <span className="text-destructive"> *</span>}
//             </FormLabel>
//           )}
//           <FormControl>
//             {typeof children === "function" ? children(field) : children}
//           </FormControl>
//           <FormMessage className="font-normal" />
//         </FormItem>
//       )}
//     />
//   );
// }

// export default FormFieldWrapper;

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { InfoIcon, AlertCircle } from "lucide-react";

function FormFieldWrapper({
  control,
  name,
  label,
  description,
  rules,
  required,
  className,
  children,
}) {
  return (
    <FormField
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <FormItem className={className}>
          {label && (
            <div className="flex items-center gap-1">
              <FormLabel className="text-sm font-normal text-foreground data-[error=true]:text-black">
                {label}
                {required && <span className="text-destructive"> *</span>}
              </FormLabel>
              {description && (
                <span
                  className="text-muted-foreground cursor-help"
                  title={description}
                >
                  <InfoIcon size={14} />
                </span>
              )}
            </div>
          )}

          <FormControl>
            {typeof children === "function" ? children(field) : children}
          </FormControl>

          {description && !fieldState.error && (
            <FormDescription className="text-xs flex items-start gap-1">
              <InfoIcon size={14} className="flex-shrink-0" />
              <span>{description}</span>
            </FormDescription>
          )}

          {fieldState.error && (
            <FormMessage className="text-xs flex items-start gap-1">
              <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
              <span>{fieldState.error.message}</span>
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  );
}

export default FormFieldWrapper;
