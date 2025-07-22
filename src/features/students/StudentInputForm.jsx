// import { useForm, FormProvider } from "react-hook-form";
// import { Form } from "@/components/ui/form";
// import { FormDialog } from "@/components/common/FormDialog";
// import StudentInputTabs from "./StudentInputTabs";
// import { DEFAULT_VALUES } from "@/constants/students/formOptions";

// function StudentInputForm({ open, onOpenChange }) {
//   const form = useForm({
//     defaultValues: DEFAULT_VALUES,
//   });

//   const { handleSubmit, reset, trigger, getValues } = form;

//   const onSubmit = async () => {
//     const isValid = await trigger();
//     console.log(isValid);
//     const data = getValues();
//     console.log("Submitted:", data);
//     reset();
//     onOpenChange(false);
//   };

//   const handleCancel = () => {
//     reset();
//   };

//   return (
//     <FormDialog
//       open={open}
//       onOpenChange={onOpenChange}
//       title="Add New Student"
//       description="Enter student details below"
//       onSubmit={handleSubmit(onSubmit)}
//       onCancel={handleCancel}
//       size="md"
//     >
//       <FormProvider {...form}>
//         <Form {...form}>
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="space-y-4 w-full max-w-full overflow-x-hidden"
//           >
//             <StudentInputTabs />
//           </form>
//         </Form>
//       </FormProvider>
//     </FormDialog>
//   );
// }

// export default StudentInputForm;

import { useForm, FormProvider } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { FormDialog } from "@/components/common/FormDialog";
import StudentInputTabs from "./StudentInputTabs";
import {
  DEFAULT_VALUES,
  TAB_FIELDS,
  TAB_NAMES,
} from "@/constants/students/formOptions";
import { toast } from "sonner";

function StudentInputForm({ open, onOpenChange }) {
  const formMethods = useForm({
    defaultValues: DEFAULT_VALUES,
    mode: "onChange", // Validate on change for better UX
  });

  const { handleSubmit, reset } = formMethods;

  const handleCancel = () => {
    reset();
    onOpenChange(false);
  };

  const onSubmit = async (data) => {
    // Manually validate all fields before submission
    const allFields = Object.values(TAB_FIELDS).flat();
    const isValid = allFields.every((field) => {
      const value = formMethods.getValues(field);
      return value !== undefined && value !== null && value !== "";
    });

    if (!isValid) {
      // Find which tabs have incomplete fields
      const invalidTabs = Object.entries(TAB_FIELDS)
        .filter(([, fields]) =>
          fields.some((field) => {
            const value = formMethods.getValues(field);
            return value === undefined || value === null || value === "";
          })
        )
        .map(([tab]) => tab);

      const invalidTabNames = invalidTabs.map((tab) => TAB_NAMES[tab] || tab);
      toast.error(
        `Please complete these sections: ${invalidTabNames.join(", ")}`,
        { duration: 5000 }
      );
      return;
    }

    console.log("Submitted:", data);
    reset();
    onOpenChange(false);
    toast.success("Student information saved successfully!");
  };

  return (
    <FormDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Add New Student"
      description="Enter student details below"
      onSubmit={handleSubmit(onSubmit)}
      onCancel={handleCancel}
    >
      <FormProvider {...formMethods}>
        <Form {...formMethods}>
          <form className="space-y-4 w-full max-w-full overflow-x-hidden">
            <StudentInputTabs />
          </form>
        </Form>
      </FormProvider>
    </FormDialog>
  );
}

export default StudentInputForm;
