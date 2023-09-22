import { Inter } from "next/font/google";

import { ITwitterSidebarMenu } from "@/interface/twitter.interface";
import { BsBookmarkCheck, BsTwitter } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { CiCircleMore } from "react-icons/ci";

const inter = Inter({ subsets: ["latin"] });

const sidebarMenuItems: ITwitterSidebarMenu[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <IoMdNotificationsOutline />,
  },
  {
    title: "Messages",
    icon: <TiMessages />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmarkCheck />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More",
    icon: <CiCircleMore />,
  },
];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-52">
        <div className="col-span-3 pt-4 px-4">
          <div className="text-5xl transition-all w-16 h-16 p-2 text-blue-400 hover:text-white hover:bg-blue-400 cursor-pointer hover:rounded-full">
            <BsTwitter />
          </div>
          <div className="mt-2 text-lg pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  key={item.title}
                  className="flex justify-start items-center text-gray-700 gap-2 w-fit font-bold hover:bg-blue-300 px-5 py-2 mb-1 rounded-3xl cursor-pointer"
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <button className="bg-blue-400 w-full py-2 mt-4 rounded-full font-semibold hover:bg-blue-500 text-white">
              Tweet
            </button>
          </div>
        </div>
        <div className="col-span-6 border-l-[1px] border-r-[1px] border-slate-300"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
