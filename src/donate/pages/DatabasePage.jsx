// import { Navbar } from "../../ui";
import { DonationsList } from "../components/DonationsList";
import { useLocation } from "react-router-dom";
// import { SearchPages } from "./searchPages";

export const DatabasePage = () => {

  const location = useLocation();
  const token = location.state.token;

  return (
    <div>
      {/* <Navbar buttonAction="logout" /> */}
      {/* <SearchPages /> */}
      <DonationsList token={token} />
    </div>
  );
};
