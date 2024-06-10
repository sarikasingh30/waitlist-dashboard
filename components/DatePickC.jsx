import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const DatePickC = ({
  timeRange,
  startDate,
  endDate,
  handleChange,
  setStartDate,
  setEndDate,
}) => {
  return (
    <div>
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
            disabled={timeRange == "All" || timeRange == "Last Month"}
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
            // disabled={timeRange != "Custom"}
          />
        </div>
      </div>
    </div>
  );
};
