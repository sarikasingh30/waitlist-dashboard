const SummaryBoxes = ({waitlistData}) => {
    const LeadD=waitlistData.filter((el)=>el.status=="Lead")
    const NewlyD=waitlistData.filter((el)=>el.status=="Inactive")
    let LeadCount=LeadD.length
    let NewlyCount=NewlyD.length

    return (
      <div className="h-[5%] w-full grid gap-1 grid-cols-3 px-2" aria-label="summary-box">
        <div className="bg-white rounded-lg shadow p-2" aria-label="Waitlist Count">
          <p className=" text-gray-600 text-sm lg:text-md">{`All Waitlists ${waitlistData.length}`}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-2" aria-label="Newly Added Count">
          <p className=" text-gray-600 text-sm lg:text-md">{`Newly Added ${NewlyCount}`}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-2" aria-label="Leads Count">
          <p className=" text-gray-600 text-sm lg:text-md">{`Leads ${LeadCount}`}</p>
        </div>
      </div>
    );
  };
  export default SummaryBoxes;
  