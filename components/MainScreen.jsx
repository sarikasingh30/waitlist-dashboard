import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Table from './Table'
import SummaryBoxes from './SummaryBoxes'
import Filters from './Filters'
import axios from 'axios'

export const MainScreen = ({SlideisOpen}) => {
  const [waitlistData, setWaitlistData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`https://sarikasingh30.github.io/data-api-agent/waitlistdata.json`).then((res) => {
          setWaitlistData(res.data.waitlistData) 
          setFilterData(res.data.waitlistData)

        });
      } catch (error) {
        console.error("Error fetching single product:", error);
        throw error;
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className={`transition-all ${SlideisOpen? "w-4/5" : "w-[95%]"} flex flex-col justify-around m-auto h-screen`}>
   
    <SummaryBoxes/>
    <Filters filterData={filterData} setFilterData={setFilterData} waitlistData={waitlistData}/>
    
      <div className="h-[70%]">

        <Table filterData={filterData}/>
      </div>
    </div>
  )
}
