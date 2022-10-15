function maxProfit(prices) {
  let object = {};
  for (i = 0; i < prices.length; i++) {
    let n = i + 1;
    if (prices[i] < prices[n]) {
      for (j = i + 1; j < prices.length; j++) {
        let diff = prices[j] - prices[i];
        object[diff] = j;
        console.log(diff);
        console.log(prices[i]);
        console.log(object);
      }
    }
  }
  console.log(Math.max(...Object.values(object)));
  console.log(Math.max(...Object.keys(object)));
  console.log(object);
}
maxProfit([7, 1, 5, 3, 6, 4]);
