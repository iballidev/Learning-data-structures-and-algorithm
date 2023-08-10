/**A binary search tree (BST) is a type of binary tree in which each node has a value, and the values of nodes in the left subtree are less than the node's value, while the values of nodes in the right subtree are greater than the node's value. This property makes binary search trees well-suited for efficient searching and sorting operations. Here's how you can implement a binary search tree in JavaScript: */

class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new BinarySearchTreeNode(value);

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

  search(value) {
    return this._searchRecursively(this.root, value);
  }

  _searchRecursively(node, value) {
    if (node === null) {
      return false;
    }

    if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return this._searchRecursively(node.left, value);
    } else {
      return this._searchRecursively(node.right, value);
    }
  }
}

// Usage
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);

console.log(bst.search(4)); // Output: true
console.log(bst.search(6)); // Output: false



/**In this example, the BinarySearchTreeNode class represents a node in a binary search tree. Each node has a value, left, and right property, similar to the previous binary tree example.

The BinarySearchTree class represents the entire binary search tree structure. It has methods for inserting values (insert) and searching for values (search). The insert method maintains the binary search tree property by placing nodes appropriately. The search method allows you to search for a specific value within the tree.

This is a simplified example, and you can extend it to include other operations like tree traversals (in-order, pre-order, post-order), deleting nodes, finding the minimum or maximum value, and balancing the tree if needed. */
