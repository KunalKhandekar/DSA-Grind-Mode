// Leetcode 121 -> Best time to buy and sell stock

// const prices = [7, 1, 5, 3, 6, 4];
// const prices = [7,6,4,3,1];
const prices = [2, 4, 1];

function maxProfit(prices) {
    let profit = 0;
    let minimumPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if(prices[i] < minimumPrice) {
            minimumPrice = prices[i];
        }
        if((prices[i] - minimumPrice) > profit) {
           profit = prices[i] - minimumPrice;
        }
    }
    return profit;
}

console.log(maxProfit(prices));