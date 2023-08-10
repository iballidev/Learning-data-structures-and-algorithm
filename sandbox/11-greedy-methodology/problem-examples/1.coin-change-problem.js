/**
 * 1. Coin Change Problem:
 * 

Problem: Given a set of coin denominations and a target amount, find the minimum number of coins needed to make up that amount.
Greedy Choice: Always pick the largest coin denomination that is less than or equal to the remaining amount.
JavaScript Code: */

function coinChange(coins, amount) {
  coins.sort((a, b) => b - a); // Sort coins in descending order
  let count = 0;
  for (const coin of coins) {
    console.log("coin: ", coin);
    while (amount >= coin) {
      amount -= coin;
      count++;
    }
  }
  return count;
}

const exercise = coinChange([23, 5], 251);
console.log("exercise: ", exercise);
console.log(250 / 23); //10.869565217391305
console.log(20 / 5); // 4
