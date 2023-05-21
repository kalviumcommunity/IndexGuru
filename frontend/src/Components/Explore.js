
import React, { useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Typewriter from "typewriter-effect";
import "./Explore.css";
import TableSortLabel from "@mui/material/TableSortLabel";
import { RingLoader } from "react-spinners";
import { css } from '@emotion/react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: "#004e92",
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
    color: "#2196f3",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Explore = () => {
  const [activeFunds, setActiveFunds] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortColumn, setSortColumn] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const handleClick = async (e) => {
    setIsFetching(true);

    // Show loader for 2 seconds
    setTimeout(() => {
      setIsFetching(false);
    }, 2500);

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
    if (sortColumn === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(sortBy);
      setSortOrder("asc");
    }
  };

  const sortedFunds = activeFunds.sort((a, b) => {
    let comparison = 0;
    if (sortColumn === "name") {
      comparison = a.name.localeCompare(b.name);
    } else if (sortColumn === "category") {
      comparison = a.category.localeCompare(b.category);
    } else if (sortColumn === "sub_category") {
      comparison = a.sub_category.localeCompare(b.sub_category);
    } else if (sortColumn === "one_year_return") {
      comparison = a.one_year_return - b.one_year_return;
    } else if (sortColumn === "three_year_return") {
      comparison = a.three_year_return - b.three_year_return;
    }
    return sortOrder === "asc" ? comparison : -comparison;
  });

  const override = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

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
            <button onClick={handleClick} className="sub-buttons"> Fund of Funds  </button>

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
        <div className="search3_container">
        <TextField
            id="search"
            label="Search"
            variant="outlined"
            size="small"
            onChange={handleSearch}
            className="search-field"
          />
        </div>
        {isFetching ? (
          <div  className="loader_div">
            <RingLoader
              color={"#2196f3"}
              loading={isFetching}
              css= {override}
              size={200}
            />
          </div>
        ) : sortedFunds.length === 0 ? (
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
        ) : (
          <TableContainer
            className="table-container"
            style={{ width: "80%", marginLeft: "150px" }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    <TableSortLabel
                      active={sortColumn === "name"}
                      direction={sortOrder}
                      onClick={() => handleSort("name")}
                    >
                      Name
                    </TableSortLabel>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <TableSortLabel
                      active={sortColumn === "category"}
                      direction={sortOrder}
                      onClick={() => handleSort("category")}
                    >
                      Category
                    </TableSortLabel>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <TableSortLabel
                      active={sortColumn === "sub_category"}
                      direction={sortOrder}
                      onClick={() => handleSort("sub_category")}
                    >
                      Sub-Category
                    </TableSortLabel>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <TableSortLabel
                      active={sortColumn === "one_year_return"}
                      direction={sortOrder}
                      onClick={() => handleSort("one_year_return")}
                    >
                      1-Year Return
                    </TableSortLabel>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <TableSortLabel
                      active={sortColumn === "three_year_return"}
                      direction={sortOrder}
                      onClick={() => handleSort("three_year_return")}
                    >
                      3-Year Return
                    </TableSortLabel>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedFunds
                  .filter((fund) => fund.name.toLowerCase().includes(searchText))
                  .map((fund) => (
                    <StyledTableRow key={fund.name}>
                      <StyledTableCell component="th" scope="row">
                        {fund.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {fund.category}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {fund.sub_category}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {fund.one_year_return}%
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {fund.three_year_return}%
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
};

export default Explore;
