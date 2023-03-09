import axios from "axios";
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
  // const options = {
  //   method: "GET",
  //   url: "https://crypto-news16.p.rapidapi.com/news/coindesk",
  //   headers: {
  //     "X-RapidAPI-Key": "aa7a7253cfmsh3ac90f0fedea971p10c2d8jsn25bcf218516f",
  //     "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data, "newsss");
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
};
//
//   const options = {
//     method: "GET",
//     url: "https://bing-news-search1.p.rapidapi.com/news/search",
//     params: {
//       q: "news",
//       freshness: "Day",
//       textFormat: "Raw",
//       safeSearch: "Off",
//     },
//     headers: {
//       "X-BingApis-SDK": "true",
//       "X-RapidAPI-Key": "aa7a7253cfmsh3ac90f0fedea971p10c2d8jsn25bcf218516f",
//       "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
//     },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//       return response.data;
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };
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
export { getNewsData, getCryptoData, getExchangesData };
