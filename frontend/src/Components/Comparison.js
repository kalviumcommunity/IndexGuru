import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Comparison = () => {
    const [comparison, setComparison] = useState({
        funds1: "",
        funds2: "",
      });
    
      const [fundsData, setFundsData] = useState([]);
    
      useEffect(() => {
        axios.get("http://localhost:8000/apis/v1/funds").then((resp) => {
          setFundsData(resp.data);
          console.log(resp.data);
        });
      }, []);
  return (
    <div> <div>
    <h1>comparison</h1>
    <input
      placeholder="fund1"
      value={comparison.funds1}
      onChange={(e) =>
        setComparison({ ...comparison, funds1: e.target.value })
      }
    />
    <div className="kkk">
      {fundsData &&
        fundsData
          .filter((e) => {
            const searchedTerm = comparison.funds1.toLowerCase().trim();
            const fullName = e.name.toLowerCase();

            return searchedTerm && fullName.startsWith(searchedTerm);
          })
          .map((funds) => {
            return <p key={funds._id}>{funds.name}</p>;
          })}
    </div>
    <input
      placeholder="fund2"
      value={comparison.funds2}
      onChange={(e) =>
        setComparison({ ...comparison, funds2: e.target.value })
      }
    />
    <div className="jjj">
      {fundsData &&
        fundsData
          .filter((e) => {
            const searchedTerm = comparison.funds2.toLowerCase().trim();
            const fullName = e.name.toLowerCase();

            return searchedTerm && fullName.startsWith(searchedTerm);
          })
          .map((funds) => {
            return <p key={funds._id}>{funds.name}</p>;
          })}
    </div>
  </div></div>
  )
}

export default Comparison