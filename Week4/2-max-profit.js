/**
 * @url https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/description/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    for(let i = 1; i < prices.length; i++) {
        const diff = profit[i] - profit[i - 1];
        if(diff > 0) {
            profit += diff;
        }
    }
    return profit;
};
