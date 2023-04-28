import axios from "axios";
import { Cryptodatacontext } from "./Context";
import { useEffect, useState } from "react";
const getNewsData = async () => {
  try {
    const { data } = await axios.get(
      "https://crypto-news16.p.rapidapi.com/news/coindesk",
      {
        headers: {
          "X-RapidAPI-Key":
            "aa7a7253cfmsh3ac90f0fedea971p10c2d8jsn25bcf218516f",
          "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
const getCryptoData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`https://coinranking1.p.rapidapi.com/coins`, {
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "50",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": "aa7a7253cfmsh3ac90f0fedea971p10c2d8jsn25bcf218516f",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
const getExchangesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges`,
      {
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          limit: "50",
          offset: "0",
          orderBy: "24hVolume",
          orderDirection: "desc",
        },
        headers: {
          "X-RapidAPI-Key":
            "aa7a7253cfmsh3ac90f0fedea971p10c2d8jsn25bcf218516f",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
// context

function Store({ children }) {
  const [stats, setstats] = useState({});
  const [coins, setcoins] = useState([]);
  const [news, setNews] = useState([]);
  const [exchanges, setExchanges] = useState([]);
  useEffect(() => {
    getCryptoData().then((data) => {
      console.log(data, "data");
      setstats(data.stats);
      setcoins(data.coins);
    });
    getNewsData().then((News) => {
      setNews(News);
    });
    getExchangesData().then((exchanges) => {
      setExchanges(exchanges.exchanges);
    });
  }, []);
  return (
    <Cryptodatacontext.Provider value={[stats, coins, news, exchanges]}>
      {children}
    </Cryptodatacontext.Provider>
  );
}
export { getNewsData, getCryptoData, getExchangesData, Store };
