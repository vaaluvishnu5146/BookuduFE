import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL_DEVELOPMENT}/mahal/`, {
      headers: {
        Authorization: sessionStorage.getItem("Authorization"),
      },
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }, []);

  return <div>Home</div>;
}

export default Home;
