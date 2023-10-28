import { useEffect, useState } from "react";
  
import { Donation } from "./Donation";
import { fetchDataDonations } from "../helpers/fetchDataDonations";

export const DonationsList = ({token}) => {

  const [donationsData, setDonationsData] = useState([]);
  
  useEffect(() => {    
    const getData = async () => {
      const donations = await fetchDataDonations(token);      
      setDonationsData(donations);
    }    
    getData();
  }, []);

  return (
    <>
      <div className="table-container w-full border border-gray-300">
      <div className="table-header-group">
        <div className="table-row bg-gray-100">
          <div className="table-cell font-bold px-4 py-2">ID</div>
          <div className="table-cell font-bold px-4 py-2">Monto</div>
          <div className="table-cell font-bold px-4 py-2">Fecha de Inicio</div>
          <div className="table-cell font-bold px-4 py-2">Fecha de Fin</div>
        </div>
      </div>
      {donationsData.map((donations) => {
        return <Donation key={donations.id} donations={donations} />;
      })}
    </div>
    </>
  );
};
