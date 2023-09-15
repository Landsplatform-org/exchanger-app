import axios from "axios";

// export const getRate = async () => {
//   const url = `https://www.cbr-xml-daily.ru/daily_json.js`;

//   try {
//     const response = await fetch(url, {
//       mode: "cors",

//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "http://localhost:3000",
//       },
//     });

//     if (response.ok) {
//       const { data } = await response.json();

//       console.log({ data });

//       const { USD } = data.Valute;
//       return USD;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

export const getRate = async () => {
  const url = `https://www.cbr-xml-daily.ru/daily_json.js`;

  try {
    const response = await axios.get(url);

    const { USD } = response.data.Valute;
    
    return USD.Value;
  } catch (error) {
    console.error(error);
  }
};
