// import { Button } from "@/components/ui/button";
// import TextInputField from "./TextInputField";
// import SelectInputField from "./SelectInputField";
// import DatePickerField from "./DatePickerField";
// import FormFieldWrapper from "./FormFieldWrapper";
// import { Form } from "@/components/ui/form";
// import { useForm } from "react-hook-form";

// function SimpleForm() {
//   const form = useForm({
//     defaultValues: {
//       name: "",
//       gender: "",
//       dob: null,
//     },
//   });

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = form;

//   const onSubmit = (data) => {
//     console.log("Submitted:", data);
//     reset();
//   };

//   const genderOptions = [
//     { label: "Male", value: "male" },
//     { label: "Female", value: "female" },
//     { label: "Other", value: "other" },
//   ];
//   return (
//     <Form {...form}>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="space-y-4 w-64 border p-4 rounded-md shadow bg-primary/5"
//       >
//         <FormFieldWrapper
//           control={control}
//           name="name"
//           label="Full Name"
//           rules={{ required: "Name is required" }}
//           required
//           error={errors.name?.message}
//         >
//           {(field) => (
//             <TextInputField
//               {...field}
//               id="name"
//               placeholder="Enter your name"
//               error={errors.name?.message}
//             />
//           )}
//         </FormFieldWrapper>

//         <FormFieldWrapper
//           control={control}
//           name="gender"
//           label="Select Gender"
//           rules={{ required: "Gender is required" }}
//           required
//           error={errors.gender?.message}
//         >
//           {(field) => (
//             <SelectInputField
//               value={field.value}
//               onChange={field.onChange}
//               options={genderOptions}
//               placeholder="Select your gender"
//               error={errors.gender?.message}
//             />
//           )}
//         </FormFieldWrapper>

//         <FormFieldWrapper
//           control={control}
//           name="dob"
//           label="Date of Birth"
//           rules={{ required: "DOB is required" }}
//           required
//           error={errors.dob?.message}
//         >
//           {(field) => (
//             <DatePickerField
//               value={field.value}
//               onChange={field.onChange}
//               placeholder="Pick a date"
//               error={errors.dob?.message}
//             />
//           )}
//         </FormFieldWrapper>

//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// }

// export default SimpleForm;

import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { XIcon } from "@phosphor-icons/react";
import TextInputField from "./TextInputField";
import SelectInputField from "./SelectInputField";
import DatePickerField from "./DatePickerField";
import FormFieldWrapper from "./FormFieldWrapper";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";

function SimpleForm({ onClose }) {
  const form = useForm({
    defaultValues: {
      name: "",
      gender: "",
      dob: null,
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const onSubmit = (data) => {
    console.log("Submitted:", data);
    reset();
    onClose?.();
  };

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
        <DialogClose asChild>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-4 h-8 w-8 p-0 bg-transparent text-secondary shadow-none hover:text-secondary hover:bg-secondary/10 rounded-md cursor-pointer"
            onClick={() => reset()}
          >
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogClose>
        <DialogHeader>
          <DialogTitle>Add New Student</DialogTitle>
          <DialogDescription>Enter student details below</DialogDescription>
        </DialogHeader>

        <FormFieldWrapper
          control={control}
          name="name"
          label="Full Name"
          rules={{ required: "Name is required" }}
          required
          error={errors.name?.message}
        >
          {(field) => (
            <TextInputField
              {...field}
              id="name"
              placeholder="Enter your name"
              //   error={errors.name?.message}
            />
          )}
        </FormFieldWrapper>

        <FormFieldWrapper
          control={control}
          name="gender"
          label="Select Gender"
          rules={{ required: "Gender is required" }}
          required
        //   error={errors.gender?.message}
        >
          {(field) => (
            <SelectInputField
              value={field.value}
              onChange={field.onChange}
              options={genderOptions}
              placeholder="Select your gender"
              error={errors.gender?.message}
            />
          )}
        </FormFieldWrapper>

        <FormFieldWrapper
          control={control}
          name="dob"
          label="Date of Birth"
          rules={{ required: "DOB is required" }}
          required
          //   error={errors.dob?.message}
        >
          {(field) => (
            <DatePickerField
              value={field.value}
              onChange={field.onChange}
              placeholder="Pick a date"
              error={errors.dob?.message}
            />
          )}
        </FormFieldWrapper>

        <DialogFooter className="pt-4">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className={"cursor-pointer"}
            >
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" className={"cursor-pointer"}>
            Add
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
}

export default SimpleForm;
