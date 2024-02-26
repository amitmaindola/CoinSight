
import axios from "axios";

const getCoinMarketChart = async () => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1704823444&to=1704909844&precision=2`)
      console.log(response.data)
      return response.data;
    } catch (e) {
      console.log(e)
    }
  }

  getCoinMarketChart()
