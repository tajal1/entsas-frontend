import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { AlignJustify, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { data } from "../public/json/MenuData.json";

type MenuDrawerProps = {};

const MenuDrawer = (props: MenuDrawerProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [openLastMenu, setOpenLastMenu] = useState<number | null>(null);

  const handleSubMenuClick = (index: number) => {
    setOpenSubMenu((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleLastMenuClick = (index: number) => {
    setOpenLastMenu((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="relative">
      <Drawer direction="left">
        <DrawerTrigger>
          <div className="cursor-pointer flex gap-2 items-center">
            <AlignJustify size={20} strokeWidth={1.5} /> <p>Menu</p>
          </div>
        </DrawerTrigger>
        <DrawerContent className="h-full w-1/4">
          <div className="p-8 space-y-8">
            <DrawerClose>
              <div
                onClick={() => {
                  setOpenSubMenu(null);
                  setOpenLastMenu(null);
                }}
                className="flex justify-start gap-3 items-center"
              >
                <X size={20} strokeWidth={1.5} />{" "}
                <p className="text-sm">Close</p>
              </div>
            </DrawerClose>
            <div className="space-y-3 text-xl">
              {data.map((item, idx) => (
                <div key={idx + item.id} className="group">
                  <div
                    className="cursor-pointer hover:underline underline-offset-4 flex justify-between items-center"
                    onClick={() => handleSubMenuClick(idx)}
                  >
                    <p>{item.title ?? ""}</p>
                    <ChevronRight
                      size={20}
                      strokeWidth={1.5}
                      className={`text-white ${
                        openSubMenu === idx ? "transform rotate-90" : ""
                      } group-hover:text-black`}
                    />
                  </div>

                  {item.subMenuList && (
                    <div
                      className={`bg-white top-0 absolute border-l h-full  ${
                        openSubMenu === idx
                          ? "w-full p-6"
                          : "w-0 p-0 overflow-hidden"
                      } left-[100%]  space-y-3 transition-all duration-500 ease-in-out pt-24 `}
                    >
                      {item.subMenuList.map((subItem, subIdx) => {
                        return (
                          <div key={subIdx} className="group">
                            <div
                              className="cursor-pointer hover:underline underline-offset-4 flex justify-between items-center"
                              onClick={() => handleLastMenuClick(subIdx)}
                            >
                              <p>{subItem.title ?? ""}</p>
                              <ChevronRight
                                size={20}
                                strokeWidth={1.5}
                                className={`text-white ${
                                  openLastMenu === subIdx
                                    ? "transform rotate-90"
                                    : ""
                                } group-hover:text-black`}
                              />
                            </div>

                            {subItem.lastMenuList && (
                              <div
                                className={`bg-white top-0 absolute border-l h-full  ${
                                  openLastMenu === subIdx
                                    ? "w-full p-6"
                                    : "w-0 p-0 overflow-hidden"
                                } left-[100%]  space-y-3 transition-all duration-500 ease-in-out pt-24 `}
                              >
                                {subItem.lastMenuList.map(
                                  (lastItem, lastIdx) => (
                                    <div
                                      key={lastIdx}
                                      className="flex justify-between items-center"
                                    >
                                      <p>{lastItem.title ?? ""}</p>
                                    </div>
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 space-y-2 border-t text-sm">
            <p className="">Need Help</p>
            <p className="">Need Help</p>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
