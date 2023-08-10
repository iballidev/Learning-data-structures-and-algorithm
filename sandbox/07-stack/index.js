/**A stack is a fundamental data structure in computer science that follows the Last-In-First-Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed. Think of it like a stack of plates – you add plates to the top and remove them from the top. Stacks are commonly used in programming for various tasks, such as managing function calls, expression evaluation, and undo functionality.

In JavaScript, you can implement a stack using arrays or custom objects. Here's a basic implementation using arrays: */

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
    return undefined; // Stack underflow
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
    return undefined; // Stack is empty
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false

stack.clear();
console.log(stack.isEmpty()); // Output: true

/**In this example, the Stack class provides methods for pushing, popping, peeking (viewing the top element without removing it), checking if the stack is empty, getting the stack's size, and clearing the stack.

Keep in mind that JavaScript has a built-in Array object that you can also use as a stack with push and pop methods, but using a custom class allows you to encapsulate stack-specific operations and add more methods if needed. */
