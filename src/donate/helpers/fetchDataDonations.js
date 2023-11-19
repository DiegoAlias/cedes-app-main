

 export const fetchDataDonations = async (token) => {
    const response = await fetch("http://localhost:3000/find-subscripcion", {
        headers: {
          token: token,
        },
      });
      const data = await response.json();
      return data;             
 }


