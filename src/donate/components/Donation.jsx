

export const Donation = ({ donations }) => {
  return (
          
      <div className="table-row-group">
        <div className="table-row">
          <div className="table-cell px-4 py-2" >{donations.id}</div>
          <div className="table-cell px-4 py-2" >
            {donations.auto_recurring.transaction_amount}
          </div>
          <div className="table-cell px-4 py-2">
            {donations.auto_recurring.start_date}
          </div>
          <div className="table-cell px-4 py-2">
            {donations.auto_recurring.end_date}
          </div>
        </div>
      </div>    
  );
};
