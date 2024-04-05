import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { User, X } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Link from "next/link";
import { Button } from "./ui/button";

type LoginDrawerProps = {};

const LoginDrawer = (props: LoginDrawerProps) => {
  return (
    <div>
      <Drawer direction="right">
        <DrawerTrigger>
          {" "}
          <User size={20} strokeWidth={1.5} />
        </DrawerTrigger>
        <DrawerContent className="h-full mt-0 w-full lg:w-2/4 inset-y-0 inset-x-auto right-0 overflow-y-scroll overflow-x-hidden">
          <div className="px-10 lg:px-28 pt-10 lg:pt-28 pb-14 space-y-8">
            <div className="flex justify-between items-center">
              <p className="text-lg">Identification</p>
              <DrawerClose>
                <X size={20} strokeWidth={1.5} />{" "}
              </DrawerClose>
            </div>
            <p>I already have an account</p>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email" className="text-sm">
                Login*
              </Label>
              <Input
                type="email"
                id="email"
                placeholder=""
                className=" focus-visible:ring-1 focus-visible:ring-offset-0"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password" className="text-sm">
                Password*
              </Label>
              <Input
                type="password"
                id="password"
                placeholder=""
                className=" focus-visible:ring-1 focus-visible:ring-offset-0"
              />
              <p className="text-sm underline underline-offset-4 hover:opacity-70 cursor-pointer">
                Forgot your Password?
              </p>
            </div>
            <Button className=" rounded-full w-full py-6">Sign In</Button>
          </div>
          <div className="px-28 pt-14 pb-28 space-y-8 border-t">
            <p>{"I don't have an account"}</p>
            <p className="text-sm">
              Access your My LV account to discover your wishlist and order
              history.
            </p>
            <div>
              <Link href={"/registration"}>
                <Button
                  variant={"outline"}
                  className=" hover:bg-transparent border-black hover:border-2 rounded-full w-full py-6"
                >
                  Create a My LV Account
                </Button>
              </Link>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default LoginDrawer;
