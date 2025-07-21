// import { useForm, Controller } from "react-hook-form";
// import SelectInput from "./SelectInput";
// import TextInput from "./TextInput";
// import { Button } from "../ui/button";

// const DemoForm = () => {
//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//     reset,
//   } = useForm({
//     defaultValues: {
//       name: "",
//       gender: "",
//     },
//   });

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
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="space-y-4 w-64 border p-4 rounded-md shadow bg-primary/5"
//     >
//       <Controller
//         name="name"
//         control={control}
//         rules={{ required: "Name is required" }}
//         render={({ field }) => (
//           <TextInput
//             id="name"
//             label="Full Name"
//             required
//             placeholder="Enter your name"
//             {...field}
//             error={errors.name?.message}
//           />
//         )}
//       />
//       <Controller
//         name="gender"
//         control={control}
//         rules={{ required: "Gender is required" }}
//         render={({ field }) => (
//           <SelectInput
//             label="Select Gender"
//             value={field.value}
//             onChange={field.onChange}
//             options={genderOptions}
//             placeholder="Select your gender"
//             error={errors.gender?.message}
//             required
//           />
//         )}
//       />

//       <Button type="submit">Submit</Button>
//     </form>
//   );
// };

// export default DemoForm;

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import TextInputField from "./TextInputField";
import SelectInputField from "./SelectInputField";
import DatePickerField from "./DatePickerField";

const DemoForm = () => {
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
  };

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-64 border p-4 rounded-md shadow bg-primary/5"
      >
        <FormField
          control={control}
          name="name"
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-normal text-black data-[error=true]:text-black">
                Full Name <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <TextInputField
                  {...field}
                  id="name"
                  placeholder="Enter your name"
                  error={errors.name?.message}
                />
              </FormControl>
              <FormMessage className={"font-normal"} />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="gender"
          rules={{ required: "Gender is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-normal data-[error=true]:text-black">
                Select Gender <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <SelectInputField
                  value={field.value}
                  onChange={field.onChange}
                  options={genderOptions}
                  placeholder="Select your gender"
                  error={errors.gender?.message}
                />
              </FormControl>
              <FormMessage className={"font-normal"} />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="dob"
          rules={{ required: "DOB is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-normal text-black data-[error=true]:text-black">
                Date of Birth <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <DatePickerField
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Pick a date"
                  error={errors.dob?.message}
                />
              </FormControl>
              <FormMessage className="font-normal" />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default DemoForm;
