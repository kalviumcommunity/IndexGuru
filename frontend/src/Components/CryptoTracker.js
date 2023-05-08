import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CryptoTracker.css";
import { Input } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { registerables } from "chart.js";

function CryptoTracker() {
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items to display per page
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false`
        );

        setCryptoData(response.data);
        if (response.data) {
          setTimeout(() => {
            setIsLoading(false);
          }, 1500);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${selectedCrypto}/market_chart?vs_currency=usd&days=30&interval=daily`
        );
        const chartData = {
          labels: response.data.prices.map((data) =>
            new Date(data[0]).toLocaleDateString()
          ),
          datasets: [
            {
              label: `${selectedCrypto.toUpperCase()} Price (USD)`,
              data: response.data.prices.map((data) => data[1]),
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        };
        setChartData(chartData);
      } catch (error) {
        console.log(error);
      }
    };

    if (selectedCrypto) {
      fetchChartData();
    }
  }, [selectedCrypto]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCryptoClick = (id) => {
    setSelectedCrypto(id);
  };

  const filteredCryptoData = cryptoData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCryptoData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="cryptoContainer">
      <h1 className="future">Invest in the future with IndexGuru</h1>

      <div className="container">
        <div className="search-bar-holder">
          <Input
            color="tomato"
            placeholder="Cryptos at your fingertips..."
            _placeholder={{ opacity: 1, color: "tomato" }}
            onChange={handleSearch}
            className="search2"
          />
        </div>
        {isLoading ? (
          <div className="spinner">
            <Spinner
              thickness="100"
              speed="0.65s"
              emptyColor="gray.200"
              color="tomato"
              size="xl"
            />
          </div>
        ) : (
          <div className="cryptoList">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Symbol</th>
                  <th>Price</th>
                  <th>24h %</th>
                  <th>Market Cap</th>
                  <th>Volume</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => handleCryptoClick(item.id)}
                    className="cryptoItem"
                  >
                    <td>{item.name}</td>
                    <td>{item.symbol.toUpperCase()}</td>
                    <td>{item.current_price.toLocaleString()} USD</td>
                    <td
                      className={
                        item.price_change_percentage_24h < 0
                          ? "negative"
                          : "positive"
                      }
                    >
                      {item.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td>{item.market_cap.toLocaleString()} USD</td>
                    <td>{item.total_volume.toLocaleString()} USD</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              {filteredCryptoData.length > 0 && (
                <div>
                  <button
                    onClick={() =>
                      setCurrentPage((currentPage) =>
                        currentPage === 1 ? 1 : currentPage - 1
                      )
                    }
                    disabled={currentPage === 1}
                  >
                    Prev
                  </button>
                 
               
                  <button
                    onClick={() =>
                      setCurrentPage((currentPage) =>
                        currentPage ===
                        Math.ceil(filteredCryptoData.length / itemsPerPage)
                          ? currentPage
                          : currentPage + 1
                      )
                    }
                    disabled={
                      currentPage ===
                      Math.ceil(filteredCryptoData.length / itemsPerPage)
                    }
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        {selectedCrypto && chartData && (
          <div className="chart">
            <Line data={chartData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CryptoTracker;
