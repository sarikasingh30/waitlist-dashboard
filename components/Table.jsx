import { GoDotFill } from "react-icons/go"
import {useState } from "react";
import { FaRegCalendar, FaRegDotCircle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { LuHash } from "react-icons/lu";

export default function Table({filterData}) {
  const [columns, setColumns] = useState([
    "CreatedOn",""
  ]);
 
  const handleColumnChange = (column) => {
    setColumns(
      columns.includes(column)
        ? columns.filter((c) => c !== column)
        : [...columns, column]
    );
  };

  return (
    <div className="overflow-auto p-2 h-full">
      {/* <div className="flex justify-between">
        <div>
          <label className="block">
            <input
              type="checkbox"
              checked={columns.includes("Email")}
              onChange={() => handleColumnChange("Email")}
            />
            Email
          </label>
          <label className="block">
            <input
              type="checkbox"
              checked={columns.includes("Phone")}
              onChange={() => handleColumnChange("Phone")}
            />
            Phone
          </label>
        
        </div>
        <button className="p-2 bg-blue-500 text-white">Add Row</button>
      </div> */}
      {/* <table className="min-w-full bg-white">
        <thead>
          <tr>
            {columns.includes("Name") && <th className="py-2 px-4">Name</th>}
            {columns.includes("Email") && <th className="py-2 px-4">Email</th>}
            {columns.includes("Phone") && <th className="py-2 px-4">Phone</th>}
            {columns.includes("Company") && (
              <th className="py-2 px-4">Company</th>
            )}
            {columns.includes("Position") && (
              <th className="py-2 px-4">Position</th>
            )}
          </tr>
        </thead>
        
      </table> */}
      <div className="overflow-scroll px-0 scroll-smooth">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="border-y p-4">
                <p className="antialiased ml-2 font-sans text-sm text-gray-600 flex items-center gap-2 font-normal">
                  <FaRegCalendar /> Created On{" "}
                </p>
              </th>
              <th className="border-y p-4">
              <p className="antialiased ml-2 font-sans text-sm text-gray-600 flex items-center gap-2 font-normal">
                  <FaRegUser /> Payer{" "}
                </p>
              </th>
              <th className="border-y p-4">
              <p className="antialiased ml-2 font-sans text-sm text-gray-600 flex items-center gap-2 font-normal">
                  <FaRegDotCircle /> Status{" "}
                </p>
              </th>
              <th className="border-y p-4">
              <p className="antialiased ml-2 font-sans text-sm text-gray-600 flex items-center gap-2 font-normal">
                  <LuHash /> Email{" "}
                </p>
              </th>
              <th className="border-y p-4">
                <p className="antialiased ml-2 font-sans text-sm text-gray-600 flex items-center gap-2 font-normal">
                  <LuHash /> Payer Phone{" "}
                </p>
              </th>
              <th className="border-y p-4">
              <p className="antialiased ml-2 font-sans text-sm text-gray-600 flex items-center gap-2 font-normal">
                  <LuHash /> Services
                </p>
              </th>
              <th className="border-y p-4">
                <p className="antialiased ml-2 font-sans text-sm text-gray-600 flex items-center gap-2 font-normal">
                  <FaRegCalendar /> Scheduled
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {filterData?.map((el) => {
              return (
                <tr key={el.id}>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center gap-3">
                        <p className="text-center block antialiased font-sans text-sm text-blue-gray-900 font-normal">
                          {el.createdOn}
                        </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                      <p className="text-center block antialiased font-sans text-sm text-blue-gray-900 font-normal">
                        {el.payer}
                      </p>
                    
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="w-max">
                      <div className={`flex flex-row font-sans select-none ${el.status=="Inactive"?"bg-slate-100 text-black":el.status=="Active"?"bg-green-100 text-green-700":"bg-blue-100 text-blue-700"} py-1 px-2 text-xs rounded-md`}>
                        <GoDotFill/><span className="">{el.status}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                      <p className="text-center block antialiased font-sans text-sm text-blue-gray-900 font-normal">
                        {el.email}
                      </p>
                     
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="text-center block antialiased font-sans text-sm text-blue-gray-900 font-normal">
                      {`+91 +${el.payerPhone}`}
                    </p>
                  </td>

                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="text-center block antialiased font-sans text-sm text-blue-gray-900 font-normal">
                      {el.service}
                    </p>
                  </td> 
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="text-center block antialiased font-sans text-sm text-blue-gray-900 font-normal">
                      {el.scheduled}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
