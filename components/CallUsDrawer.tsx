import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Mail, Smartphone, X } from "lucide-react";

type CallUsDrawerProps = {};

const CallUsDrawer = (props: CallUsDrawerProps) => {
  return (
    <div>
      <Drawer direction="right">
        <DrawerTrigger>Call Us</DrawerTrigger>
        <DrawerContent className="h-full mt-0 w-full lg:w-2/4 inset-y-0 inset-x-auto right-0">
          <div className="p-10 lg:p-28 space-y-8">
            <div className="flex justify-between items-center">
              <p className="text-lg">Call Us</p>
              <DrawerClose>
                <X size={20} strokeWidth={1.5} />{" "}
              </DrawerClose>
            </div>
            <p className="text-sm">
              Wherever you are, Louis Vuitton Client, Advisors will be delighted
              to assist you.
            </p>
            <div className="flex gap-3">
              <Smartphone size={20} strokeWidth={1.5} />
              <p>+1.866.VUITTON</p>
            </div>
            <div className="flex gap-3">
              <Mail size={20} strokeWidth={1.5} />
              <p>Send an Email</p>
            </div>
            <p className="text-lg">Need Help?</p>
            <p className="text-sm">FAQ</p>
            <p className="text-sm">Care Services</p>
            <p className="text-sm">Find a Store</p>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CallUsDrawer;
