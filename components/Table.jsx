import { GoDotFill } from "react-icons/go"
import {useState } from "react";
import { FaRegCalendar, FaRegDotCircle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { LuHash } from "react-icons/lu";
import { Pagination } from "./Pagination";

export default function Table({filterData,selectedColumns ,currentPage,setCurrentPage}) {
 
  const [perPage, setPerPage] = useState(5);

 
    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const currentData = filterData.slice(indexOfFirst, indexOfLast);
 
  const totalPages = Math.ceil(filterData.length / perPage);

  return (
    <div className="flex flex-col h-full">
      <div className="overflow-auto h-[90%]">
      <div className="px-0 ">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {selectedColumns.includes("Created On")&&(<th className="border-y p-4">
                <p className="antialiased ml-2 font-sans text-center text-sm text-gray-600 flex items-center gap-2 font-normal">
                  <FaRegCalendar /> Created On{" "}
                </p>
              </th>)}
              {selectedColumns.includes("Payer")&&(<th className="border-y p-4">
              <p className="antialiased ml-2 font-sans text-center  text-sm text-gray-600 flex items-center gap-2 font-normal">
                  <FaRegUser /> Payer{" "}
                </p>
              </th>)}
              {selectedColumns.includes("Status")&&(<th className="border-y p-4">
              <p className="antialiased ml-2 font-sans text-center  text-sm text-gray-600 flex items-center gap-2 font-normal">
                  <FaRegDotCircle /> Status{" "}
                </p>
              </th>)}
              {selectedColumns.includes("Email")&&(<th className="border-y p-4">
              <p className="antialiased ml-2 font-sans text-center  text-sm text-gray-600 flex items-center gap-2 font-normal">
                  <LuHash /> Email{" "}
                </p>
              </th>)}
              {selectedColumns.includes("Payer Phone")&&(<th className="border-y p-4">
                <p className="antialiased ml-2 font-sans text-center  text-sm text-gray-600 flex items-center gap-2 font-normal">
                  <LuHash /> Payer Phone{" "}
                </p>
              </th>)}
              {selectedColumns.includes("Services")&&( <th className="border-y p-4">
              <p className="antialiased ml-2 font-sans text-center  text-sm text-gray-600 flex items-center gap-2 font-normal">
                  <LuHash /> Services
                </p>
              </th>)}
              {selectedColumns.includes("Scheduled")&&(<th className="border-y p-4">
                <p className="antialiased ml-2 font-sans text-center  text-sm text-gray-600 flex items-center gap-2 font-normal">
                  <FaRegCalendar /> Scheduled
                </p>
              </th>)}
            </tr>
          </thead>
          <tbody>
            {currentData?.map((el) => {
              return (
                <tr key={el.id}>
                  {selectedColumns.includes("Created On")&&(<td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center gap-3">
                        <p className="text-center block antialiased font-sans text-sm text-blue-gray-900 font-normal">
                          {el.createdOn}
                        </p>
                    </div>
                  </td>)}
                  {selectedColumns.includes("Payer")&&(<td className="p-4 border-b border-blue-gray-50">
                      <p className="text-center block antialiased font-sans text-sm text-blue-gray-900 font-normal">
                        {el.payer}
                      </p>
                    
                  </td>)}
                  {selectedColumns.includes("Status")&&(<td className="p-4 border-b border-blue-gray-50">
                    <div className="w-max">
                      <div className={`flex flex-row items-center font-sans select-none ${el.status=="Inactive"?"bg-slate-100 text-black":el.status=="Active"?"bg-green-100 text-green-700":"bg-blue-100 text-blue-700"} py-1 px-2 text-xs rounded-md`}>
                        <GoDotFill/><span className="">{el.status}</span>
                      </div>
                    </div>
                  </td>)}
                  {selectedColumns.includes("Email")&&(<td className="p-4 border-b border-blue-gray-50">
                      <p className="text-center block antialiased font-sans text-sm text-blue-gray-900 font-normal">
                        {el.email}
                      </p>
                     
                  </td>)}
                  {selectedColumns.includes("Payer Phone")&&(<td className="p-4 border-b border-blue-gray-50">
                    <p className="text-center block antialiased font-sans text-sm text-blue-gray-900 font-normal">
                      {`+91 +${el.payerPhone}`}
                    </p>
                  </td>)}

                  {selectedColumns.includes("Services")&&( <td className="p-4 border-b border-blue-gray-50">
                    <p className="text-center block antialiased font-sans text-sm text-blue-gray-900 font-normal">
                      {el.service}
                    </p>
                  </td>)} 
                  {selectedColumns.includes("Scheduled")&&(<td className="p-4 border-b border-blue-gray-50">
                    <p className="text-center block antialiased font-sans text-sm text-blue-gray-900 font-normal">
                      {el.scheduled}
                    </p>
                  </td>)}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    <Pagination perPage={perPage} setPerPage={setPerPage} totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage} totalC={filterData.length}/>
    </div>
  );
}
