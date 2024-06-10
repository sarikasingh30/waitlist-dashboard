import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Table from "./Table";
import SummaryBoxes from "./SummaryBoxes";
import Filters from "./Filters";
import axios from "axios";
import { Pagination } from "./Pagination";

export const MainScreen = ({ SlideisOpen }) => {
  const [waitlistData, setWaitlistData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [showTModal, setShowTModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedColumns, setSelectedColumns] = useState([
    "Created On",
    "Payer",
    "Status",
    "Email",
    "Payer Phone",
    "Services",
    "Scheduled"
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(
            `https://sarikasingh30.github.io/data-api-agent/waitlistdata.json`
          )
          .then((res) => {
            setWaitlistData(res.data.waitlistData);
            setFilterData(res.data.waitlistData);
          });
      } catch (error) {
        console.error("Error fetching single product:", error);
        throw error;
      }
    };
    fetchData();
  }, []);

  

  return (
    <div
      className={`transition-all ${
        SlideisOpen ? "w-4/5" : "w-[98%]"
      } flex flex-col justify-around m-auto h-screen`}
    >
      <div className="p-2">
        <h2 className="text-3xl font-bold">Waitlist</h2>
      </div>
      <SummaryBoxes waitlistData={waitlistData} />
      <Filters
        filterData={filterData}
        setFilterData={setFilterData}
        waitlistData={waitlistData}
        setShowTModal={setShowTModal}
        showTModal={showTModal}
        selectedColumns={selectedColumns}
        setSelectedColumns={setSelectedColumns}
        setCurrentPage={setCurrentPage}
      />

      <div className="h-[70%]">
        <Table filterData={filterData} showTModal={showTModal} selectedColumns={selectedColumns} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  );
};
