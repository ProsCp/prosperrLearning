import React, { useEffect, useState } from "react";

const GETallSPEC = () => {
  const [first, SetFirst] = useState({
    loading: false,
    data: [],
  });
  useEffect(() => {
    const url = "https://stage-apis.prosperr.io/specializations/v1/all";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const items = await response.json();
        console.log(items);
        SetFirst({
          loading: true,
          data: items,
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  console.log(first);
  if (first.loading) {
    console.log(first.data.map((d, i) => d.specialization));
  } else {
    console.log("abhi time hai");
  }
  if (first.loading) {
    return (
      <div>
        <form action="/action_page.php">
          <label htmlFor="cars">Choose a car:</label>
          <select name="cars" id="cars">
            {first.data.map((d, i) => (
              <option key={i} value="volvo">
                {d.specialization}
              </option>
            ))}
          </select>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  } else {
    return <h1>ruko bhai</h1>;
  }
};

export default GETallSPEC;
