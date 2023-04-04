import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CryptoTracker.css";
import { Input } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

function CryptoTracker() {
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        );

        setCryptoData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (event) => {
    setCurrentPage(Number(event.target.value));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * 20;
  const endIndex = startIndex + 20;
  const filteredCryptoData = cryptoData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentCryptoData = filteredCryptoData.slice(startIndex, endIndex);

  return (
    <>
      <h1 className="future">Invest in the future with IndexGuru</h1>

      <div className="container">
        <div className="search-bar-holder">
          <Input
            color="tomato"
            placeholder="Crytos at your tip..."
            _placeholder={{ opacity: 1, color: "tomato" }}
            onChange={handleSearch}
            className="search"
          />
        </div>
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.88s"
            emptyColor="gray"
            color="green"
            size="Xl"
          />
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Symbol</th>
                  <th>Price</th>
                  <th>24h Change</th>
                  <th>Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {currentCryptoData.map((item, index) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={`${item.name} logo`}
                        width="20"
                        height="20"
                      />
                    </td>

                    <td>{startIndex + index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.symbol.toUpperCase()}</td>
                    <td>${item.current_price.toLocaleString()}</td>
                    <td
                      className={
                        item.price_change_percentage_24h > 0
                          ? "positive"
                          : "negative"
                      }
                    >
                      {item.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td>${item.market_cap.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <button
                onClick={handlePageChange}
                value={currentPage - 1}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                onClick={handlePageChange}
                value={currentPage + 1}
                disabled={endIndex >= cryptoData.length}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CryptoTracker;
