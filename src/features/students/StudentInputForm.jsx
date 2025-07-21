import { useForm, FormProvider } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { FormDialog } from "@/components/common/FormDialog";
import StudentInputTabs from "./StudentInputTabs";
import { DEFAULT_VALUES } from "@/constants/students/formOptions";

function StudentInputForm({ open, onOpenChange }) {
  const form = useForm({
    defaultValues: DEFAULT_VALUES,
  });

  const { handleSubmit, reset, trigger, getValues } = form;

  const onSubmit = async () => {
    const isValid = await trigger();
    console.log(isValid);
    const data = getValues();
    console.log("Submitted:", data);
    reset();
    onOpenChange(false);
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <FormDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Add New Student"
      description="Enter student details below"
      onSubmit={handleSubmit(onSubmit)}
      onCancel={handleCancel}
      size="md"
    >
      <FormProvider {...form}>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 w-full max-w-full overflow-x-hidden"
          >
            <StudentInputTabs />
          </form>
        </Form>
      </FormProvider>
    </FormDialog>
  );
}

export default StudentInputForm;
