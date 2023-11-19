

export const fetchToken = async (data) => {
    
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const tokenData = await response.json();
    const userToken = tokenData.token;    
    return userToken;

}

