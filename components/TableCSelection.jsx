import React from "react";
const columns = [
  "Created On",
  "Payer",
  "Status",
  "Payer Phone",
  "Services",
  "Scheduled",
];
export const TableCSelection = ({
  showTModal,
  setShowTModal,
  selectedColumns,
  setSelectedColumns,

}) => {

    
  const handleToggleColumn = (column) => {
    setSelectedColumns((prevSelected) =>
      prevSelected.includes(column)
        ? prevSelected.filter((col) => col !== column)
        : [...prevSelected, column]
    );
  };

  return (
    <>
      {showTModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-end items-center">
          <div className="bg-white p-2 rounded-lg shadow-lg w-full max-w-lg">
            <div className="max-w-sm mx-auto bg-white shadow-md rounded p-2 mb-2">
              <h2 className="text-xl font-bold mb-4">Edit Columns</h2>
              <p className="text-sm text-gray-600 mb-4">
                Select the columns to rearrange
              </p>
              <ul className="mb-4">
                {columns.map((column) => (
                  <li
                    key={column}
                    className="w-full flex items-center p-2 mb-2 border border-xl border-slate-300"
                  >
                    <input
                      type="checkbox"
                      id={column}
                      checked={selectedColumns.includes(column)}
                      onChange={() => handleToggleColumn(column)}
                      className="form-checkbox h-4 w-4 text-black border-2xl" aria-label={`${column}_input`}
                    />
                    <label htmlFor={column} className="ml-2 text-gray-800">
                      {column}
                    </label>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between">
                <button
                  onClick={() => setSelectedColumns(columns)}
                  className="bg-gray-200 text-gray-800 py-2 px-4 rounded"
                >
                  Reset to Default
                </button>
                <button
                  className="bg-blue-600 text-white py-2 px-4 rounded"
                  onClick={() => setShowTModal(false)}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
