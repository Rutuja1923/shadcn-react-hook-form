import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { renderStudentInputTab } from "./renderStudentInputTab";
import { TAB_OPTIONS } from "@/constants/students/formOptions";

function StudentInputTabs() {
  const [activeTab, setActiveTab] = useState(TAB_OPTIONS[0].value);
  const content = renderStudentInputTab(activeTab);

  return (
    <div className="space-y-4">
      <Card className="rounded-none p-0 overflow-x-auto max-w-full w-full scrollbar-hide scroll-smooth">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="flex gap-0.5 justify-start bg-transparent p-0">
            {TAB_OPTIONS.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-xs sm:text-sm font-medium text-muted-foreground rounded-none border-b-2 border-transparent data-[state=active]:text-foreground data-[state=active]:border-b-teal-500 focus-visible:outline-none cursor-pointer hover:text-foreground transition-colors"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </Card>

      <div className={`p-4 bg-white border rounded-md shadow-sm`}>
        {content}
      </div>
    </div>
  );
}

export default StudentInputTabs;
