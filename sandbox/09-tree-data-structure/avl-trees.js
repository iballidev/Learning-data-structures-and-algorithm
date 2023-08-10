/**
An AVL tree is a self-balancing binary search tree where the heights of the two child subtrees of any node differ by at most one. This balancing property ensures that the tree remains relatively balanced, which leads to efficient operations like insertion, deletion, and searching. In an AVL tree, whenever an insertion or deletion operation is performed, the tree is adjusted to maintain the balance property.

Here's an example of how to implement an AVL tree in JavaScript: */

class AVLTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1; // Height of the subtree rooted at this node
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  getHeight(node) {
    return node ? node.height : 0;
  }

  getBalanceFactor(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  rotateRight(y) {
    const x = y.left;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

    return x;
  }

  rotateLeft(x) {
    const y = x.right;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

    return y;
  }

  insert(node, value) {
    if (!node) {
      return new AVLTreeNode(value);
    }

    if (value < node.value) {
      node.left = this.insert(node.left, value);
    } else if (value > node.value) {
      node.right = this.insert(node.right, value);
    } else {
      // Duplicate values not allowed in AVL tree
      return node;
    }

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    const balance = this.getBalanceFactor(node);

    // Left Heavy
    if (balance > 1 && value < node.left.value) {
      return this.rotateRight(node);
    }

    // Right Heavy
    if (balance < -1 && value > node.right.value) {
      return this.rotateLeft(node);
    }

    // Left Right Heavy
    if (balance > 1 && value > node.left.value) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    // Right Left Heavy
    if (balance < -1 && value < node.right.value) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  insertValue(value) {
    this.root = this.insert(this.root, value);
  }
}

// Usage
const avlTree = new AVLTree();
avlTree.insertValue(10);
avlTree.insertValue(20);
avlTree.insertValue(30);
avlTree.insertValue(40);
avlTree.insertValue(50);
avlTree.insertValue(25);

console.log(avlTree);

/**In this example, the AVLTreeNode class represents a node in the AVL tree, similar to previous binary search tree implementations. The AVLTree class represents the AVL tree structure and includes methods to get height, calculate balance factor, and perform rotation operations.

The rotateRight and rotateLeft methods are used to perform single rotation operations to maintain the balance of the tree. The insert method handles the insertion of nodes while ensuring the AVL tree property is maintained. Depending on the balance factor of nodes, different types of rotations are performed.

This example provides a basic introduction to AVL trees. In a real-world implementation, you would also need to handle deletion, traversals, and additional features that a balanced binary search tree offers. */
