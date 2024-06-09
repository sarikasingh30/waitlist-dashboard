import { useEffect, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { PiSquareHalfFill } from "react-icons/pi";
import { GoArrowSwitch } from "react-icons/go";
import { IoEarthSharp } from "react-icons/io5";
import { CgSandClock } from "react-icons/cg";
import { MdDashboard, MdOutlineCalendarMonth, MdOutlineHelpOutline } from "react-icons/md";
import { TbCopyCheck } from "react-icons/tb";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { BsGrid1X2 } from "react-icons/bs";
export default function Sidebar({ SlideisOpen, setSlideisOpen }) {
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
      hours = date.getHours() % 12 || 12;
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
      } bg-gray-100 h-full hidden border-3px border-black lg:block md:block lg:h-screen md:h-screen`} aria-label="Sidebar"
    >
      {SlideisOpen ? (
        <aside
          className="flex flex-col justify-between items-center h-full p-5 bg-slate-100 "
          
        >
          <div className="flex flex-row px-2 justify-start mt-2">
            <button aria-label="sidebar_logo">
              <BiLoaderCircle size={40} />
            </button>
            <h3
              className="md:text-lg lg:text-2xl text-md text-center text-black font-bold"
              aria-label="appname"
            >
              Front-Desk
            </h3>
          </div>
          <div className="w-full flex flex-row justify-end">
            <PiSquareHalfFill />
          </div>
          <div
            className="w-full flex flex-row justify-between bg-white rounded-lg shadow-2xl mt-2 px-2"
            aria-label="location"
          >
            <h3>Location Name </h3>
            <div className="flex justify-center items-center" onClick={() => setSlideisOpen(!SlideisOpen)} aria-label="Sidebar_collapse or Sidebar_Expand">
              <GoArrowSwitch size={30} />
            </div>
          </div>

          <div className="m-auto mt-1 flex flex-col p-1 rounded-lg bg-slate-200" aria-label="current Time and Date">
            <div className="flex flex-col lg:flex-row justify-between items-end">
              <h2 className="text-md md:text-lg lg:text-xl font-bold " aria-label="Current Time">
                {dataDate.timeD}
              </h2>
              <h3 className="text-md" aria-label="Current Date in Day/Date/Month format">
                {dataDate.dayD} {dataDate.dateD} {dataDate.monthD}
              </h3>
            </div>
            <div className="flex flex-row items-center">
              <IoEarthSharp size={15} />{" "}
              <span className="text-sm" aria-label="time zone">UTC: +5 hours</span>
            </div>
          </div>

          <div className=" flex flex-col flex-1 mt-6" >
            <nav className="space-y-6 h-full flex flex-col justify-between items-center">
              <div className="space-y-3 ">
                <div className="flex items-center text-left px-1 py-1 text-gray-600 rounded-lg" aria-label="Orders">
                  <HiOutlineRectangleStack />
                  <span className="mx-2 text-sm font-medium">Orders</span>
                </div>

                <div className="flex items-center text-left px-1 py-1 text-gray-600 rounded-lg" aria-label="Subscriptions">
                  <TbCopyCheck />

                  <span className="mx-2 text-sm font-medium">
                    Subscriptions
                  </span>
                </div>
                <div className="flex items-center text-left px-1 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg" aria-label="Calendar">
                  <MdOutlineCalendarMonth />

                  <span className="mx-2 text-sm font-medium">Calendar</span>
                </div>
                <div className="flex items-center text-left px-1 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg" aria-label="WaitList">
                  <CgSandClock />

                  <span className="mx-2 text-sm font-medium">Waitlist</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-left px-1 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg" aria-label="Dashboard">
                  <BsGrid1X2 />
                  <span className="mx-2 text-sm font-medium">Dashboard</span>
                </div>

                <div className="flex items-center text-left px-1 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg" aria-label="Help">
                  <MdOutlineHelpOutline />

                  <span className="mx-2 text-sm font-medium">Help</span>
                </div>
              </div>
            </nav>
          </div>
        </aside>
      ) : (
        <aside className="flex flex-col justify-between p-2 h-[100%]" aria-label="sidebar">
          <nav className="flex flex-col space-y-6">
            <div className="h-[15%] ">
              <button className="text-black">
                <BiLoaderCircle size={30} />
              </button>
            </div>
            <div onClick={() => setSlideisOpen(!SlideisOpen)} className="flex items-center justify-center text-gray-700 bg-white rounded-lg">
              <GoArrowSwitch size={20}/>
            </div>

           <div className=" text-gray-700 rounded-lg m-auto " aria-label="location">
              <IoEarthSharp />
            </div>
            <div className=" text-gray-700 m-auto rounded-lg" aria-label="orders">
              <HiOutlineRectangleStack />
            </div>
            <div className=" text-gray-700 m-auto rounded-lg " aria-label="subscriptions">
              <TbCopyCheck />
            </div>
            <div className=" text-gray-700 m-auto rounded-l" aria-label="calendar">
              <MdOutlineCalendarMonth/>
            </div>
            
          </nav>

          <div className="flex flex-col mt-9 space-y-6">
          <div className=" text-gray-700 m-auto rounded-lg" aria-label="dashboard">
              <MdDashboard/>
            </div>
            <div className=" text-gray-700 m-auto rounded-lg" aria-label="help">
              <MdOutlineHelpOutline/>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}
