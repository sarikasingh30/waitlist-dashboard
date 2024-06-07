import { useEffect, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { GoArrowSwitch } from "react-icons/go";
import { IoEarthSharp } from "react-icons/io5";
import { CgSandClock } from "react-icons/cg";
import { MdOutlineCalendarMonth, MdOutlineHelpOutline } from "react-icons/md";
import { TbCopyCheck } from "react-icons/tb";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { BsGrid1X2 } from "react-icons/bs";
export default function Sidebar({SlideisOpen, setSlideisOpen}) {
  
  const [dataDate, setDataDate] = useState({});

  useEffect(() => {
    function getCurrentDateTime12Hour() {
      const date = new Date();
      const year = date.getFullYear();
      let day = date.getDate();
      // Convert the numerical value (0-11) to the month name
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      // Convert the numerical value (0-6) to the day name
      const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
      const dayName = days[date.getDay()];
      const monthName = months[date.getMonth()];
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours=date.getHours() % 12 || 12
      // Format the time string with leading zeros for single digits
      const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")} ${ampm}`;
      return {
        timeD: formattedTime,
        monthD: monthName,
        dateD: day,
        yearD: year,
        dayD: dayName,
      };
    }

    const currentTime = getCurrentDateTime12Hour();
    setDataDate(currentTime);
  }, []);

  return (
    <div
      className={`transition-all ${
        SlideisOpen ? "w-1/5" : "w-[5%]"
      } bg-gray-100 h-full hidden p-5 border-3px border-black rounded-lg lg:block md:block lg:h-screen md:h-screen`}
    >
      {SlideisOpen ? (
        <nav className=" h-full flex flex-col justify-between items-center">
          <div className="flex flex-row px-2 justify-start mt-2">
            <button>
              <BiLoaderCircle size={40} />
            </button>
            <h3 className="md:text-xl lg:text-2xl text-center text-black font-bold">
              Front-Desk
            </h3>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-end">
              <div
                className="bg-white rounded-lg shadow-2xl"
                onClick={() => setSlideisOpen(!SlideisOpen)}
              >
                <GoArrowSwitch size={30} />
              </div>
            </div>
            <div className="flex flex-row justify-center items-end">
              <h2 className="text-2xl font-bold pr-2">{dataDate.timeD}</h2>
              <h3 className="text-md">
                {dataDate.dayD} {dataDate.dateD} {dataDate.monthD}
              </h3>
            </div>
          </div>
          <div className="">
            <ul className="flex flex-col justify-between mt-2">
              <li className="flex flex-row justify-center items-center text-black">
                <HiOutlineRectangleStack />
                <p className="p-1">Orders</p>
              </li>
              <li className="flex flex-row justify-center items-center text-black">
                <TbCopyCheck />
                <p className="p-1">Subscription</p>
              </li>
              <li className="flex flex-row justify-center items-center text-black">
                <MdOutlineCalendarMonth />
                <p className="p-1">Calender</p>
              </li>
              <li className="flex flex-row justify-center items-center text-black">
                <CgSandClock />
                <p className="p-3">Waitlist</p>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col justify-between mt-2">
              <li className="flex flex-row justify-center items-center text-black">
                <BsGrid1X2 />
                <p className="p-1">Dashboard</p>
              </li>
              <li className="flex flex-row justify-center items-center text-black">
                <MdOutlineHelpOutline />
                <p className="p-3">help</p>
              </li>
              {/* <li className="text-black">Settings</li> */}
            </ul>
          </div>
        </nav>
      ) : (
        <nav className="h-full flex flex-col items-center">
          <div className="h-[15%]">
            <button className="text-black">
              <BiLoaderCircle size={40} />
            </button>
          </div>
          <div className="h-[85%] flex flex-col justify-between">
            <div className="flex flex-col">
              <div
                className="bg-white rounded-lg shadow-2xl"
                onClick={() => setSlideisOpen(!SlideisOpen)}
              >
                <GoArrowSwitch size={30} />
              </div>
              <ul className="flex flex-col justify-between pt-3 mt-5">
              <li className="flex flex-row justify-center items-center text-black mb-2">
                  <IoEarthSharp />
                </li>
                <li className="flex flex-row justify-center items-center text-black mb-2">
                  <HiOutlineRectangleStack />
                </li>
                <li className="flex flex-row justify-center items-center text-black mb-2">
                  <TbCopyCheck />
                </li>
                <li className="flex flex-row justify-center items-center text-black mb-2">
                  <MdOutlineCalendarMonth />
                </li>
                <li className="flex flex-row justify-center items-center text-black mb-2">
                  <CgSandClock />
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col justify-between mt-2">
                <li className="flex flex-row justify-center items-center text-black mb-2">
                  <BsGrid1X2 />
                </li>
                <li className="flex flex-row justify-center items-center text-black">
                  <MdOutlineHelpOutline />
                </li>
                {/* <li className="text-black">Settings</li> */}
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
