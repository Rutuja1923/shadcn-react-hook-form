// import { useState } from "react";
// import { format } from "date-fns";
// import { CalendarBlankIcon, XIcon } from "@phosphor-icons/react";
// import { Button } from "@ui/button";
// import { Input } from "@ui/input";
// import { Popover, PopoverContent, PopoverTrigger } from "@ui/popover";

// function DateInput({
//   value,
//   placeholder = "Select date",
//   onChange,
//   showClearButton = true,
//   className,
//   children,
//   isOpen,
//   onOpenChange,
//   error,
// }) {
//   const [open, setOpen] = useState(false);
//   const isControlled = typeof onOpenChange === "function";
//   const isOpenState = isControlled ? isOpen : open;
//   const setIsOpenState = isControlled ? onOpenChange : setOpen;

//   return (
//     <Popover open={isOpenState} onOpenChange={setIsOpenState}>
//       <PopoverTrigger asChild>
//         <div
//           className={`relative flex items-center w-full rounded-md border px-2 bg-primary/10
//             ${error ? "border-destructive" : "border-primary/50 "}
//             ${className}`}
//           onClick={() => setIsOpenState(true)}
//         >
//           <CalendarBlankIcon
//             size={18}
//             className="text-muted-foreground" //absolute left-2.5 top-1/2 transform -translate-y-1/2
//             // weight="fill"
//           />
//           <Input
//             type="text"
//             value={value ? format(value, "dd/MM/yyyy") : ""}
//             placeholder={placeholder}
//             readOnly
//             className="flex-1 bg-transparent text-sm placeholder:text-sm placeholder:font-normal font-normal text-black outline-none border-none shadow-none focus:ring-0 focus-visible:ring-0 cursor-pointer"
//             onClick={() => setIsOpenState(true)}
//           />
//           {showClearButton && value && (
//             <Button
//               variant="primary"
//               size="icon"
//               type="button"
//               className="h-8 w-8 p-0 bg-transparent text-primary shadow-none hover:text-primary hover:bg-primary/10 rounded-md cursor-pointer"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onChange(null);
//                 setIsOpenState(false);
//               }}
//             >
//               <XIcon size={16} weight="bold" />
//               <span className="sr-only">Close</span>
//             </Button>
//           )}
//         </div>
//       </PopoverTrigger>
//       <PopoverContent className="w-auto p-2 m-2 border border-primary/50">
//         {children}
//       </PopoverContent>
//     </Popover>
//   );
// }

// export default DateInput;

import { useState } from "react";
import { format } from "date-fns";
import { CalendarBlankIcon, XIcon } from "@phosphor-icons/react";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@ui/popover";

function DateInput({
  value,
  placeholder = "Select date",
  onChange,
  showClearButton = true,
  className = "",
  children,
  isOpen,
  onOpenChange,
  error,
  disabled = false,
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = typeof onOpenChange === "function";
  const openState = isControlled ? isOpen : internalOpen;
  const setOpenState = isControlled ? onOpenChange : setInternalOpen;

  const handleClear = (e) => {
    e.stopPropagation();
    onChange(null);
    setOpenState(false);
  };

  return (
    <Popover open={openState} onOpenChange={setOpenState}>
      <PopoverTrigger asChild>
        <div
          className={`relative flex items-center  rounded-md border px-2 bg-primary/10
            ${error ? "border-destructive" : "border-primary/50"} 
            ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            ${className}`}
          onClick={() => !disabled && setOpenState(true)}
          aria-disabled={disabled}
        >
          <CalendarBlankIcon
            size={18}
            className="text-muted-foreground"
            aria-hidden="true"
            // weight="fill"
          />
          <Input
            type="text"
            value={value ? format(value, "dd/MM/yyyy") : ""}
            placeholder={placeholder}
            readOnly
            disabled={disabled}
            className="w-auto flex-1 bg-transparent text-sm placeholder:text-sm placeholder:font-normal font-normal text-black outline-none border-none shadow-none focus:ring-0 focus-visible:ring-0 cursor-pointer"
            onClick={() => !disabled && setOpenState(true)}
            aria-label={
              value
                ? `Selected date: ${format(value, "MMMM d, yyyy")}`
                : placeholder
            }
          />
          {showClearButton && value && !disabled && (
            <Button
              variant="primary"
              size="icon"
              type="button"
              className="h-8 w-8 p-0 bg-transparent text-primary shadow-none hover:text-primary hover:bg-primary/10 rounded-md cursor-pointer"
              onClick={handleClear}
              aria-label="Clear date"
            >
              <XIcon size={16} weight="bold" aria-hidden="true" />
              <span className="sr-only">Close</span>
            </Button>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-2 m-2 border border-primary/50"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
}

export default DateInput;
