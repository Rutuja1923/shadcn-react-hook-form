// import { Button } from "./components/ui/button";
// import DemoForm from "./components/custom/DemoForm";
// import DatePickerField from "./components/custom/DatePickerField";
// import SimpleForm from "./components/custom/SimpleForm";
// // import { useState } from "react";

// function App() {
//   // const [date, setDate] = useState(null);
//   return (
//     <div className="text-3xl font-semibold py-2 px-3">
//       {/* <div className="flex items-center justify-center bg-gray-100 p-6">
//         <DemoForm />
//       </div> */}

//       <div className="flex items-center justify-center bg-gray-100 p-6">
//         <SimpleForm />
//       </div>

//       {/* <form>
//         <DatePickerField
//           value={date}
//           onChange={setDate}
//           showClearButton={true}
//           className="my-4"
//         />
//       </form> */}

//       {/* <h1 className="text-primary">Primary Color (Orange)</h1>
//       <h2 className="text-secondary">Secondary Color (Teal)</h2>
//       <p className="text-sm text-primary/80">Primary with 80% opacity</p>
//       <p className="text-sm text-secondary/80">Secondary with 80% opacity</p>
//       <Button>Primary Button</Button>
//       <br />
//       <Button className="bg-secondary text-secondary-foreground hover:bg-secondary-dark">
//         Secondary Button
//       </Button> */}
//       {/* <p className="text-[var(--primary-dark)]">Darker Primary</p>
//       <p className="text-[var(--primary-light)]">
//         Lighter Secondary Background
//       </p>

//       <p className="text-[var(--primary-dark)]/80">
//         Darker Primary with 80% opacity
//       </p>
//       <p className="text-[var(--secondary-light)]/80">
//         Lighter Secondary with 80% opacity
//       </p> */}
//       {/* <p className="text-primary-dark">Darker Primary</p> Works! */}
//       {/* <p className="bg-secondary-light">Lighter Secondary</p> Works! */}
//       {/* <p className="text-primary-dark">With opacity</p> Works! */}
//       {/* <Button className="hover:bg-primary-dark">Hover</Button> */}

//       {/* <p className="text-primary-dark">Darker Orange</p>
//       <p className="bg-secondary-light">Lighter Teal</p>
//       <p className="text-primary-dark/50">Darker Orange with 50% opacity</p>
//       <p className="bg-secondary-light/80">Lighter Teal with 80% opacity</p> */}
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import SimpleForm from "./components/common/SimpleForm";
import StudentInputForm from "./features/students/StudentInputForm";

function App() {
  const [open, setOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleAddNewStudent = () => {
    console.log("add new student!");
    setIsDialogOpen(true);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Add</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto [&>button:last-child]:hidden">
          <SimpleForm onClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>

      <br></br>
      <br></br>

      <Button onClick={handleAddNewStudent}>Add Student</Button>


      <StudentInputForm open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}

export default App;
