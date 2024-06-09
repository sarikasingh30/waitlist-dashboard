import axios from "axios";
import React, { useEffect, useState } from "react";

export const Filter3 = () => {
  const [serviceData, setServiceData] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState("name");
  const [searchSInput, setSearchSInput] = useState("");
  const [filteredSResults, setFilteredSResults] = useState([]);
  const [searchCond, setSearchCond] = useState({});
  const [filteredTResults, setFilteredTResults] = useState([]);

  useEffect(() => {
    const fetchSData = async () => {
      try {
        await axios.get(`https://sarikasingh30.github.io/data-api-agent/services.json`).then((res) => {
          setServiceData(res.data.services);
        });
      } catch (error) {
        console.error("Error fetching single product:", error);
        throw error;
      }
    };
    fetchSData();
  }, []);

  
  // Set the Search by Name searchInput ..................................................................
  const handleSearch = (e) => {
    const input = e.target.value.toLowerCase();
    setSearchSInput(input);
  };

  // Set the Tag based Criteria........................................................................
  const handleSetCond = (e, x) => {
    let newS = { [x]: e.target.value };

    setSearchCond({ ...searchCond, ...newS });
  };

  useEffect(() => {
    if (filterCriteria == "name") {
      if (searchSInput.length > 0) {
        const results = serviceData
          .filter((item) => item.name.toLowerCase().startsWith(searchSInput))
          .slice(0, 10);
        setFilteredSResults(results);
      } else {
        setFilteredSResults([]);
      }
    } else {
      if (searchCond.type !== "show" || searchCond.status !== "show") {
        let results = serviceData.filter(
          (item) => item.type == searchCond.type
        );
        let fullData = results
          .filter((item) => item.status == searchCond.status).slice(0, 10);
        setFilteredTResults(fullData);
      } else {
        setFilteredTResults([]);
      }
    }
  }, [searchSInput, searchCond]);

  return (
    <div>
      <div>
        <div className="filter-options flex flex-row items-center">
          <input
            type="radio"
            id="search-by-name"
            name="search-option"
            defaultChecked={true}
            onChange={() => setFilterCriteria("name")}
            className="mx-2"
          />
          <label htmlFor="search-by-name">Search by name</label>
          <input
            type="radio"
            id="search-by-tags"
            name="search-option"
            onChange={() => setFilterCriteria("tag")}
            className="mx-2"
          />
          <label htmlFor="search-by-tags">Search by tags</label>
        </div>
        {filterCriteria == "name" ? (
          <div>
            <input
              type="text"
              value={searchSInput}
              placeholder="Search service by name"
              className="w-full px-3 py-2 border rounded mb-4"
              onChange={handleSearch}
            />
            {filteredSResults.length > 0 && (
              <div className="results">
                <h4>
                  Showing {filteredSResults.length} results matching "
                  {searchSInput}":
                </h4>
                {filteredSResults.map((el) => (
                  <div
                    key={el.id}
                    className="flex flex-row justify-between m-0.5"
                  >
                    <label>
                      <input type="checkbox" />
                      {el.name}
                    </label>
                    <div className="flex flex-row justify-end">
                      {" "}
                      <div className="font-sans ml-2 bg-slate-100 text-black p-1 text-xs rounded-md">
                        <span className="">{el.type}</span>
                      </div>
                      <div
                        className={`font-sans ml-2 bg-slate-100 ${
                          el.status == "Private"
                            ? "text-green-700"
                            : el.status == "Public"
                            ? "text-amber-600"
                            : el.status == "Disable"
                            ? "text-red-600"
                            : el.status == "Draft"
                            ? "text-blue-500"
                            : ""
                        } text-green p-1 text-xs rounded-md`}
                      >
                        <span className="">{el.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col">
            <label>Service type</label>
            <select
              value={searchCond.type}
              onChange={(e) => handleSetCond(e, "type")}
              className="w-full px-3 py-2 border rounded"
              style={{ maxHeight: "232px", overflowY: "auto" }}
            >
              <option value="show">Show All</option>
              <option value="Class">Class</option>
              <option value="Appointment">Appointment</option>
              <option value="Facility">Facility</option>
              <option value="Class Pack">Class Pack</option>
              <option value="Membership">Membership</option>
              <option value="General Items">General Items</option>
            </select>

            <label>Status</label>

            <select
              id="status"
              value={searchCond.status}
              onChange={(e) => handleSetCond(e, "status")}
              className="w-full px-3 py-2 border rounded"
              style={{ maxHeight: "232px", overflowY: "auto" }}
            >
              <option value="show">Show All</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
              <option value="Disable">Disable</option>
              <option value="Draft">Draft</option>
            </select>

            
              <div className="results">
                <h4>
                  Showing {filteredTResults.length} results matching " type =
                  {searchCond.type} and status = {searchCond.status}" :
                </h4>
                {filteredTResults.map((el) => (
                  <div
                    key={el.id}
                    className="flex flex-row justify-between m-0.5"
                  >
                    <label>
                      <input type="checkbox" />
                      {el.name}
                    </label>
                    <div className="flex flex-row justify-end">
                      {" "}
                      <div className="font-sans ml-2 bg-slate-100 text-black p-1 text-xs rounded-md">
                        <span className="">{el.type}</span>
                      </div>
                      <div
                        className={`font-sans ml-2 bg-slate-100 ${
                          el.status == "Private"
                            ? "text-green-700"
                            : el.status == "Public"
                            ? "text-amber-600"
                            : el.status == "Disable"
                            ? "text-red-600"
                            : el.status == "Draft"
                            ? "text-blue-500"
                            : ""
                        } text-green p-1 text-xs rounded-md`}
                      >
                        <span className="">{el.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            
          </div>
        )}
      </div>
    </div>
  );
};
