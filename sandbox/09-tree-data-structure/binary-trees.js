/**A binary tree is a specific type of tree data structure in which each node has at most two children, referred to as the left child and the right child. Binary trees are commonly used in various algorithms and applications, such as binary search trees, heaps, and expression trees. Here's an overview of how to implement a binary tree in JavaScript: */

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new BinaryTreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertRecursively(this.root, newNode);
    }
  }

  _insertRecursively(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertRecursively(node.left, newNode);
      }
    } else if (newNode.value > node.value) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertRecursively(node.right, newNode);
      }
    }
  }
}

// Usage
const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);

console.log(binaryTree);

/**In this example, we have the BinaryTreeNode class representing a node in a binary tree. 
 Each node has a value, left, and right property to store the node's value, and references to its left and right children.

The BinaryTree class represents the entire binary tree structure. It has a root property that holds the root node of the tree. 
The insert method allows you to insert new values into the binary tree by recursively traversing the tree and finding the appropriate position for the new node.

Please note that this example is a basic introduction to binary trees. Depending on your needs, you might want to implement other features such as tree traversals (in-order, pre-order, post-order), 
searching, deleting nodes, balancing, and more. Additionally, binary search trees (BSTs) are a type of binary tree where the left child of a node has a value less than the node's value, and the right 
child has a value greater than the node's value. This property makes BSTs useful for efficient searching and sorting operations. */
