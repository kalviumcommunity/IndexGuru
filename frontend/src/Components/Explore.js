import React, { useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Typewriter from "typewriter-effect";
import "./Explore.css";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 20
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
    FontFace: 300
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Explore = () => {
  const [activeFunds, setActiveFunds] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  const handleClick = async (e) => {
    await axios.get(process.env.REACT_APP_API_URL).then((resp) => {
      setActiveFunds(
        resp.data.filter((item) => {
          return item.sub_category === e.target.innerText;
        })
      );
    });
  };
  const handleSearch = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const handleSort = (sortBy) => {
    let sortedFunds;
    if (sortOrder === "asc") {
      sortedFunds = activeFunds.sort((a, b) =>
        a[sortBy] > b[sortBy] ? 1 : -1
      );
      setSortOrder("desc");
    } else {
      sortedFunds = activeFunds.sort((a, b) =>
        a[sortBy] < b[sortBy] ? 1 : -1
      );
      setSortOrder("asc");
    }
    setActiveFunds(sortedFunds);
  };

  return (
    <div className="abc">
      <div className="explorer-container">
        <div className="targets">
        <div className="but-container">
            <button onClick={handleClick} className="sub-buttons">
              Medium Duration Fund
            </button>
            <button onClick={handleClick} className="sub-buttons">
              Sectoral/Thematic
            </button>
            <button onClick={handleClick} className="sub-buttons">
              Small Cap Fund
            </button>
            <button onClick={handleClick} className="sub-buttons">
              Large Cap Fund
            </button>
            <button onClick={handleClick} className="sub-buttons">
              Mid Cap Fund
            </button>
            <button onClick={handleClick} className="sub-buttons">
              Dynamic Bond
            </button>
          </div>
          <div className="but-container2">
            <button onClick={handleClick} className="sub-buttons">
              Medium to Long
              <br /> Duration Fund
            </button>
            <button onClick={handleClick} className="sub-buttons">
              Focused Fund
            </button>
            <button onClick={handleClick} className="sub-buttons"> Fund of Funds </button>
             
                    <button onClick={handleClick} className="sub-buttons">
              Flexi Cap Fund
            </button>
            <button onClick={handleClick} className="sub-buttons">
              Index Funds
            </button>
            <button onClick={handleClick} className="sub-buttons">
              Contra Fund
            </button>
          </div>
        </div>

        {activeFunds.length > 0 ? (
          <div className="explore-table">
            <div className="search3_holder">
              <TextField
                className="search3"
                label="Search"
                variant="outlined"
                value={searchText}
                onChange={handleSearch}
              />
            </div>

            <TableContainer className="TableContainer">
              <Table style={{ width: "80%", marginLeft: "210px" }}>
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell
                      align="left"
                      onClick={() => handleSort("name")}
                    >
                      Name
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={() => handleSort("category")}
                    >
                      Category
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={() => handleSort("sub_category")}
                    >
                      Sub-Category
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={() => handleSort("one_year_return")}
                    >
                      One Year Return
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={() => handleSort("three_year_return")}
                    >
                      Three Year Return
                    </StyledTableCell>
                  </StyledTableRow>
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
                      <StyledTableRow key={fund.id}>
                        <StyledTableCell align="left">
                          {fund.name}
                        </StyledTableCell>
                        <StyledTableCell>{fund.category}</StyledTableCell>
                        <StyledTableCell>
                          {fund.sub_category}
                        </StyledTableCell>
                        <StyledTableCell>
                          {fund.one_year_return}%
                        </StyledTableCell>
                        <StyledTableCell>
                          {fund.three_year_return}%
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ) : (
          <div className="noactive">
            <span className="typewriter">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "No Active Funds Found...",
                    "Click on the other categories to explore more",
                  ],
                }}
              />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;

