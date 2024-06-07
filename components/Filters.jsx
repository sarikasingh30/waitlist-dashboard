import { useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LuFilter } from "react-icons/lu";
import { Filter3 } from "./Filter3";

const Filters = ({ filterData, setFilterData, waitlistData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("scheduledDate");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [timeRange, setTimeRange] = useState("All time");
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPeople, setSelectedPeople] = useState([]);

  const resetFilters = () => {
    setStartDate(null);
    setEndDate(null);
    setTimeRange("All time");
    setSearchInput("");
    setSearchResults([]);
    setSelectedPeople([]);
  };

 



  //  Time Filter..........................................................................
  const handleChange = (e) => {
    const selectedTimeRange = e.target.value;
    setTimeRange(selectedTimeRange);
  };
  const filterDataFn = (selectedTimeRange) => {
    let filtered = [];
    const currentDate = new Date();
    switch (selectedTimeRange) {
      case "All time":
        filtered = filterData;
        break;
      case "Last 30 days":
        console.log(selectedTimeRange, currentDate, filterData);
        filtered = waitlistData.filter((item) => {
          const itemDate = new Date(item.createdOn);
          console.log(itemDate);
          if ((currentDate - itemDate) / (1000 * 60 * 60 * 24) <= 30)
            return item;
        });
        break;
      case "This month":
        filtered = waitlistData.filter((item) => {
          const itemDate = new Date(item.createdOn);
          if (
            itemDate.getMonth() === currentDate.getMonth() &&
            itemDate.getFullYear() === currentDate.getFullYear()
          )
            return item;
        });
        break;
      case "Last month":
        // console.log(filterData,selectedTimeRange)

        const lastMonth = new Date(
          currentDate.setMonth(currentDate.getMonth() - 1)
        );
        filtered = waitlistData.filter((item) => {
          const itemDate = new Date(item.createdOn);
          if (
            itemDate.getMonth() == lastMonth.getMonth() &&
            itemDate.getFullYear() === lastMonth.getFullYear()
          )
            return item;
        });
        break;
      case "This quarter":
        const currentQuarter = Math.floor((currentDate.getMonth() + 3) / 3);
        filtered = waitlistData.filter((item) => {
          const itemDate = new Date(item.createdOn);
          const itemQuarter = Math.floor((itemDate.getMonth() + 3) / 3);
          return (
            itemQuarter === currentQuarter &&
            itemDate.getFullYear() === currentDate.getFullYear()
          );
        });
        break;
      case "2 quarter ago":
        // console.log(filterData,selectedTimeRange)

        const previousQuarter =
          Math.floor((currentDate.getMonth() + 3) / 3) - 2;
        filtered = waitlistData.filter((item) => {
          const itemDate = new Date(item.createdOn);
          const itemQuarter = Math.floor((itemDate.getMonth() + 3) / 3);
          return (
            itemQuarter === previousQuarter &&
            itemDate.getFullYear() === currentDate.getFullYear()
          );
        });
        break;
      case "This year":
        filtered = waitlistData.filter((item) => {
          const itemDate = new Date(item.createdOn);
          return itemDate.getFullYear() === currentDate.getFullYear();
        });
        break;
      case "Last year":
        // console.log(filterData,selectedTimeRange)

        filtered = waitlistData.filter((item) => {
          const itemDate = new Date(item.createdOn);
          return itemDate.getFullYear() === currentDate.getFullYear() - 1;
        });
        break;
      case "Custom":
        if (startDate && endDate) {
          const startVal = new Date(startDate);
          const endVal = new Date(endDate);
          filtered = waitlistData.filter((item) => {
            const itemDate = new Date(item.createdOn);
            return itemDate >= startVal && itemDate <= endVal;
          });
        }
        break;
      default:
        filtered = filterData;
    }
    setFilterData(filtered);
    console.log("set ", filterData);
  };


  // Search People Filter ...................................................................

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchInput(query);
  };



  useEffect(() => {
    if (searchInput.length > 0) {
      const filteredPResults = waitlistData
        .filter((person) =>
          person.payer.toLowerCase().startsWith(searchInput.toLowerCase())
        )
        .slice(0, 10)
        .sort((a, b) => a.payer.localeCompare(b.payer));

      setSearchResults(filteredPResults);
    } else {
      setSearchResults([]);
    }
  }, [searchInput]);

  const handleSelectPerson = (id) => {
    const selectedPerson = waitlistData.find((person) => person.id === id);
    if (selectedPerson) {
      if (!selectedPeople.some((person) => person.id === id)) {
        setSelectedPeople([...selectedPeople, selectedPerson]);
      } else {
        setSelectedPeople(selectedPeople.filter((person) => person.id !== id));
      }
    }
  };

  const isSelected = (id) => selectedPeople.some((person) => person.id === id);

  const handleRemovePerson = (person) => {
    setSelectedPeople(selectedPeople.filter((p) => p.id !== person));
  };
  const applyFilters = () => {
    // Apply filter logic here
    filterDataFn(timeRange);
    setIsOpen(false);
  };

  return (
    <>
      <div className="px-3 h-[5%]">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          <LuFilter />
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-4xl">
              <div className="flex">
                <div className="w-1/4 border-r pr-4">
                  <button
                    className={`block w-full text-left px-4 py-2 ${
                      selectedTab === "scheduledDate" ? "bg-gray-200" : ""
                    }`}
                    onClick={() => setSelectedTab("scheduledDate")}
                  >
                    Scheduled Date
                  </button>
                  <button
                    className={`block w-full text-left px-4 py-2 ${
                      selectedTab === "people" ? "bg-gray-200" : ""
                    }`}
                    onClick={() => setSelectedTab("people")}
                  >
                    People
                  </button>
                  <button
                    className={`block w-full text-left px-4 py-2 ${
                      selectedTab === "servicesProducts" ? "bg-gray-200" : ""
                    }`}
                    onClick={() => setSelectedTab("servicesProducts")}
                  >
                    Services / Products
                  </button>
                </div>
                <div className="w-3/4 pl-4">
                  {selectedTab === "scheduledDate" && (
                    <div>
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="timeRange"
                      >
                        Show orders for
                      </label>
                      <div className="relative mb-4">
                        <select
                          id="timeRange"
                          value={timeRange}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded"
                          style={{ maxHeight: "232px", overflowY: "auto" }}
                        >
                          <option value={"All time"}>All time</option>
                          <option value="C">Custom</option>
                          <option value={"Last 30 days"}>Last 30 days</option>
                          <option value={"This month"}>This month</option>
                          <option value={"Last month"}>Last month</option>
                          <option value={"This quarter"}>This quarter</option>
                          <option value={"2 quarter ago"}>2 quarter ago</option>
                          <option value={"This year"}>This year</option>
                          <option value={"Last year"}>Last year</option>
                        </select>
                      </div>
                      <div className="flex space-x-4">
                        <div>
                          <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="fromDate"
                          >
                            From
                          </label>
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="w-full px-3 py-2 border rounded"
                            placeholderText="Pick a date"
                            disabled={timeRange !== "Custom"}
                          />
                        </div>
                        <div>
                          <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="toDate"
                          >
                            To
                          </label>
                          <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            className="w-full px-3 py-2 border rounded"
                            placeholderText="Pick a date"
                            disabled={timeRange !== "Custom"}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedTab === "people" && (
                    <div>
                      
                      <input
                        type="text"
                        id="peopleFilter"
                        value={searchInput}
                        onChange={handleSearch}
                        className="w-full px-3 py-2 border rounded mb-4"
                        placeholder="Search for people or clients' name"
                      />
                      <div>
                        <div className="search-results">
                          {selectedPeople.length > 0 && (
                            <div className="selected-people">
                              <h4>Selected:</h4>
                              {selectedPeople.map((person) => (
                                <div key={person.id} className="person">
                                  <label>
                                    <input
                                      type="checkbox"
                                      checked={isSelected(person.id)}
                                      onChange={() =>
                                        handleRemovePerson(person.id)
                                      }
                                    />
                                    {person.payer}
                                  </label>
                                </div>
                              ))}
                            </div>
                          )}
                          {searchResults.length>0 && (<div className="results">
                            <h4>Showing {searchResults.length} results matching "{searchInput}":</h4>
                            {searchResults.map((person) => (
                              <div key={person.id} className="flex flex-row m-0.5">
                                <label>
                                  <input
                                    type="checkbox"
                                    checked={isSelected(person.id)}
                                    onChange={() =>
                                      handleSelectPerson(person.id)
                                    }
                                  />
                                  {person.payer}
                                </label>
                                <div className="flex flex-row font-sans ml-2 bg-slate-100 text-black p-1 text-xs rounded-md">
                        <span className="">payer</span>
                      </div>
                              </div>
                            ))}
                          </div>)}
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedTab === "servicesProducts" && <Filter3/>}
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                >
                  Reset to Default
                </button>
                <button
                  onClick={applyFilters}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Filters;
