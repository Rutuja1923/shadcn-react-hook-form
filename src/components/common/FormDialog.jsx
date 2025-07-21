import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { XIcon } from "@phosphor-icons/react";

export function FormDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  onSubmit,
  onCancel,
  isProcessing = false,
  saveButtonText = "Save",
  cancelButtonText = "Cancel",
  showFooter = true,
  showCloseButton = true,
  className = "",
}) {
  const handleCancel = () => {
    onOpenChange(false);
    onCancel?.();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`
          max-w-[90vw] 
          sm:max-w-[500px] 
          md:max-w-[700px] 
          h-[70vh] 
          overflow-hidden 
          [&>button:last-child]:hidden 
          ${className}
        `}
      >
        {showCloseButton && (
          <DialogClose asChild>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-4 h-8 w-8 p-0 bg-transparent text-secondary shadow-none hover:text-secondary hover:bg-secondary/10 rounded-md cursor-pointer"
              onClick={handleCancel}
            >
              <XIcon className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        )}

        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        <div className="h-full overflow-y-auto scrollbar-hide scroll-smooth space-y-4">
          {children}
        </div>

        {showFooter && (
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                onClick={handleCancel}
                disabled={isProcessing}
                className={"cursor-pointer"}
              >
                {cancelButtonText}
              </Button>
            </DialogClose>
            <Button
              type={onSubmit ? "button" : "submit"}
              onClick={onSubmit}
              disabled={isProcessing}
              className={"cursor-pointer"}
            >
              {isProcessing ? "Processing..." : saveButtonText}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
