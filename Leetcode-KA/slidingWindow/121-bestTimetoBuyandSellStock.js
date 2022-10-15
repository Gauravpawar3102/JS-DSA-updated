// ?Brute force By Gaurav
// function maxProfit(prices) {
//   let object = {};
//   for (i = 0; i < prices.length; i++) {
//     let n = i + 1;
//     if (prices[i] < prices[n]) {
//       for (j = i + 1; j < prices.length; j++) {
//         let diff = prices[j] - prices[i];
//         object[diff] = j;
//         console.log(diff);
//         console.log(prices[i]);
//         console.log(object);
//       }
//     }
//   }
//   console.log(Math.max(...Object.values(object)));
//   console.log(Math.max(...Object.keys(object)));
//   console.log(object);
// }
// ?Optimal By Love Babbar
function maxProfit(prices) {
  let mini = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    let diff = prices[i] - mini;
    profit = Math.max(diff, profit);
    mini = Math.min(mini, prices[i]);
  }
  return profit;
}

maxProfit([7, 1, 5, 3, 6, 4]);
