/**
 * 3. Fractional Knapsack Problem:

Problem: Given a set of items with weights and values, and a maximum weight capacity, determine the maximum value that can be obtained by filling the knapsack.
Greedy Choice: Select items with the highest value-to-weight ratio first.
JavaScript Code: */

function fractionalKnapsack(items, capacity) {
    console.log("items: ", items);
  items.sort((a, b) => b.value / b.weight - a.value / a.weight);
  console.log("items: ", items);
  let totalValue = 0;
  for (const item of items) {
    if (capacity >= item.weight) {
      totalValue += item.value;
      capacity -= item.weight;

      console.log("capacity: ", capacity)
    } else {
      totalValue += (item.value / item.weight) * capacity;
      break;
    }
  }
  return totalValue;
}

/**Remember that while greedy algorithms are powerful and can solve certain types of problems optimally, 
   they may not always guarantee the globally optimal solution for all problems. It's important to carefully 
   analyze the problem and ensure that the greedy choice property holds. */

const jugs = [
  {
    weight: 13,
    value: 24,
  },
  {
    weight: 8,
    value: 18,
  },
  {
    weight: 20,
    value: 31,
  },
];
const knapsack = 74;
const exercise = fractionalKnapsack(jugs, knapsack);

console.log("exercise: ", parseInt(exercise));
