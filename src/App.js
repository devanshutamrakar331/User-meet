import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./App.css";
import { ApiContext } from "./context/apicontext";
import Axios from "axios";
const App = () => {
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    await Axios.get("https://randomuser.me/api/")
      .then(async (response) => {
        const result = await response.data.results[0];
        setDetails({
          name: result.name,
          email: result.email,
          address: {
            street: result.location.street.name,
            city: result.location.city,
            postcode: result.location.postcode,
            country: result.location.country,
          },
          photo: result.picture?.large,
          contact: result.phone,
        });
        console.log(details);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <ApiContext.Provider value={details}>
      <div id="main">
        <Card />
      </div>
    </ApiContext.Provider>
  );
};

export default App;
