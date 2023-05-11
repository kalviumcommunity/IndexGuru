import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CryptoTracker.css";
import { Input } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import TicketViewWidget from "./ticketTape";
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
          `https://api.coingecko.com/api/v3/coins/${selectedCrypto}/market_chart?vs_currency=usd&days=30&interval=daily`,
          { crossDomain: true }
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

      <TicketViewWidget />

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
              thickness="10"
              emptyColor="black"
              speed="0.85s"
              color="red"
              size="xl"
              height={65}
              width={65}
            />
          </div>
        ) : (
          <>
            <ul className="crypto-list">
              {currentItems.map((item) => (
                <li
                  key={item.id}
                  className="crypto-item"
                  onClick={() => handleCryptoClick(item.id)}
                >
                  <div className="crypto-item-symbol">
                    <img
                      src={item.image}
                      alt={`${item.name} logo`}
                      width="20"
                      height="20"
                    />
                    {item.symbol.toUpperCase()}
                  </div>
                  <div className="crypto-item-details">
                    <div className="crypto-item-name">{item.name}</div>
                    <div className="crypto-item-price">
                      Price: ${item.current_price.toLocaleString()}
                    </div>
                    <div
                      className={
                        item.price_change_percentage_24h > 0
                          ? "crypto-item-change positive"
                          : "crypto-item-change negative"
                      }
                    >
                      24h Change: {item.price_change_percentage_24h.toFixed(2)}%
                    </div>
                    <div className="crypto-item-market-cap">
                      Market Cap: ${item.market_cap.toLocaleString()}
                    </div>
                  </div>
                </li>
              ))}
              <div className="crypto_graph">
                {selectedCrypto && chartData && (
                  <div className="chart">
                    <Line data={chartData} />
                  </div>
                )}
              </div>
            </ul>
            <div className="pagination">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastItem >= filteredCryptoData.length}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
      <div className="footerz"></div>
    </div>
  );
}

export default CryptoTracker;
