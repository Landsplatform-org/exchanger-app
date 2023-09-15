export const checkCurrencies = (firstCur: string, secondCur: string, { ...args }) => {
  switch (true) {
    case ((firstCur === "1" && secondCur === "2") || (firstCur === "2" && secondCur === "1")): 
      return countUSDtoUSD({ ...args })
    case ((firstCur === "1" && secondCur === "5")):
      return countUSDtoRUB({ ...args })
    case (((firstCur === ("5") || (firstCur === ("3"))) && secondCur !== "5")):
      return countRUBtoUSD({ ...args })   
  }
}

const countUSDtoUSD = ({ ...args }) => {
  let fee;

  switch (args.type) {
    case "send":
      return (+args.sum * args.sendfee + +args.sum).toFixed(2);
    case "receive": {
       fee = +args.sum * args.receivefee
       const result = (+args.sum - fee).toFixed(3).toString()
       return result
      };
  }
}

const countUSDtoRUB= ({ ...args }) => {
  let resWOFee;
  let fee;

  switch (args.type) {
    case "send":
      return (+args.sum * args.sendfee + +args.sum).toFixed(2);
    case "receive": {
      resWOFee = ((+args.sum * args.rate))
      fee = +resWOFee * args.receivefee
      const result = (resWOFee - fee).toFixed(3).toString()
      return result
    }
  }
}


const countRUBtoUSD = ({ ...args }) => {
  let resWOFee;
  let fee;

  switch (args.type) {
    case "send":
      return (+args.sum * args.sendfee + +args.sum).toFixed(2);
    case "receive": {
      resWOFee = ((+args.sum / args.rate))
      fee = +resWOFee * args.receivefee
      const result = (resWOFee - fee).toFixed(3).toString()
      return result
    };
  }
};
