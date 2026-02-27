import React, { useEffect, useState } from "react";

function Pagination() {
  const [showData, setShowData] = useState([]);

  async function fetchData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await data.json();
    setShowData(res);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Pagination</h1>
      {showData.map((elem, index) => {
        return (
          <div key={index}>
            <h3>{elem.title}</h3>
            <p>{elem.body}</p>
          </div>
        );
      })}
    </>
  );
}

export default Pagination;
