/**A queue is a linear data structure in computer science that follows the "first-in, first-out" (FIFO) principle. This means that the element that is added to the queue first will be the first one to be removed. Queues are commonly used to implement scenarios where elements need to be processed in the order they are received, such as task scheduling, breadth-first search algorithms, and more.

In JavaScript, you can implement a queue data structure using various approaches. One common way is to use an array to simulate a queue: */

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }
}

/**In this example, the enqueue method adds an item to the end of the array (representing the back of the queue), and the dequeue method removes an item from the front of the array (representing the front of the queue).

Here's how you can use this Queue class: */

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2
console.log(queue.size()); // Output: 1
console.log(queue.front()); // Output: 3

/**Remember that JavaScript arrays are not the most efficient way to implement queues, especially if the queue becomes large, due to the shifting of elements when using shift() for dequeueing. For more performance-critical scenarios, you might consider using a linked list-based approach to implement a queue. */
