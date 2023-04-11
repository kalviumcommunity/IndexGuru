import React, { useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import TextField from "@mui/material/TextField";
import "./Explore.css";

const Explore = () => {
  const [activeFunds, setActiveFunds] = useState([]);
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [searchText, setSearchText] = useState("");

  const handleClick = async (e) => {
    await axios.get("http://localhost:8000/apis/v1/funds").then((resp) => {
      setActiveFunds(
        resp.data.filter((item) => {
          return item.sub_category === e.target.innerText;
        })
      );
    });
  };

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrderBy(property);
    setOrder(isAsc ? "desc" : "asc");
    setActiveFunds((prevActiveFunds) =>
      [...prevActiveFunds].sort((a, b) => {
        if (isAsc) {
          return a[property].localeCompare(b[property]);
        } else {
          return b[property].localeCompare(a[property]);
        }
      })
    );
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  return (
    <>
      <div className="explorer-container">
        <div className="targets">
        <div className="but-container">
          <button onClick={handleClick} className="sub-buttons">Medium Duration Fund</button>
        <button onClick={handleClick} className="sub-buttons">Sectoral/Thematic</button>
        <button onClick={handleClick} className="sub-buttons">Small Cap Fund</button>
        <button onClick={handleClick} className="sub-buttons">Large Cap Fund</button>
        <button onClick={handleClick} className="sub-buttons">Mid Cap Fund</button>
        <button onClick={handleClick} className="sub-buttons">Dynamic Bond</button>
        </div>
        <div className="but-container2">
        <button onClick={handleClick} className="sub-buttons">Medium to Long<br/> Duration Fund</button>
        <button onClick={handleClick} className="sub-buttons">Focused Fund</button>
        <button onClick={handleClick} className="sub-buttons">Fund of Funds</button>
        <button onClick={handleClick} className="sub-buttons">Flexi Cap Fund</button>
        <button onClick={handleClick} className="sub-buttons">Index Funds</button>
        <button onClick={handleClick} className="sub-buttons">Contra Fund</button>
        </div>
        </div>
        
       
        {activeFunds.length > 0 ? (
          <div className="explore-table">
            <TextField
              label="Search"
              variant="outlined"
              value={searchText}
              onChange={handleSearch}
            />
        
            <TableContainer className="TableContainer">
              
              <Table>

                <TableHead>
                  <TableRow>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "name"}
                        direction={orderBy === "name" ? order : "asc"}
                        onClick={() => handleSort("name")}
                      >
                        Name
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Sub-Category</TableCell>
                    <TableCell>one_year_return</TableCell>
                    <TableCell>three_year_return</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {activeFunds
                    .filter(
                      (fund) =>
                        fund.name.toLowerCase().includes(searchText) ||
                        fund.category.toLowerCase().includes(searchText) ||
                        fund.sub_category.toLowerCase().includes(searchText)
                    )
                    .map((fund) => (
                      <TableRow key={fund.id}>
                        <TableCell>{fund.name}</TableCell>
                        <TableCell>{fund.category}</TableCell>
                        <TableCell>{fund.sub_category}</TableCell>
                        <TableCell>{fund.one_year_return}</TableCell>
                        <TableCell>{fund.three_year_return}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ) : (
          <div>No active funds found.</div>
        )}
      </div>
    </>
  );
};

export default Explore
