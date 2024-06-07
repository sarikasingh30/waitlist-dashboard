const SummaryBoxes = () => {
    return (
      <div className="h-[10%] grid gap-2 grid-cols-3 p-4">
        <div className="bg-white rounded-lg shadow p-2">
          <p className="lg:mt-2 text-gray-600 text-sm lg:text-md">{`All Waitlists {100}`}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-2">
          <p className="lg:mt-2 text-gray-600 text-sm lg:text-md">{`Newly Added {100}`}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-2">
          <p className="lg:mt-2 text-gray-600 text-sm lg:text-md">{`Leads {100}`}</p>
        </div>
        {/* Repeat for other summary boxes */}
      </div>
    );
  };
  export default SummaryBoxes;
  