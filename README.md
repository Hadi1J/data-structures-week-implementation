# Data Structures Implementation

## Overview
This repository contains implementations of fundamental data structures as part of the OppoTrain One-Week Intensive Training Program. Each data structure is designed to solve specific problems efficiently. This document provides clear descriptions, complexity analyses, and practical examples to enhance understanding of their applications.

## Data Structure Descriptions

### Dynamic Array
A dynamic array is a flexible list that can grow or shrink as needed, ideal for storing data when the size is not fixed.

### Singly Linked List
A singly linked list is a chain of nodes where each node holds data and points to the next node, enabling sequential access.

### Stack (Array & Linked List Implementation)
A stack is a linear data structure following a First-In, Last-Out (FILO) approach, similar to a stack of plates where items are added or removed from the top.

### Doubly Linked List
A doubly linked list consists of nodes where each node holds data and points to both the next and previous nodes, allowing bidirectional traversal.

### Circular Linked List
A circular linked list is a chain of nodes where each node points to the next, with the last node looping back to the first, forming a continuous cycle.

### Queue
A queue is a linear data structure that mimics real-world queues, using enqueue (add to the back) and dequeue (remove from the front) operations.

### Binary Tree
A binary tree is a tree-like structure where each node has up to two children (left and right), used for hierarchical data representation.

### Binary Search Tree
A binary search tree (BST) is a tree where each node has up to two children, with all left subtree values less than the node’s value and all right subtree values greater than or equal to it, enabling efficient searching and insertion.

### Tree Traversal Algorithms
Tree traversal algorithms visit all nodes in a binary tree in specific orders: inorder (left-root-right), preorder (root-left-right), postorder (left-right-root), and level-order (level by level), useful for processing or analyzing tree data.

### Hash Table
A hash table stores key-value pairs using a hash function to map keys to array indices, handling collisions with linked lists (chaining) for fast insertion and lookup.

### Min Heap
A min heap is a complete binary tree where each node’s value is less than or equal to its children’s values, stored as an array, ensuring the smallest value is always at the top.

### Basic Graph (Adjacency List)
A graph is a set of vertices connected by edges, represented as a mapping of each vertex to a list of its neighbors, modeling relationships like networks or connections.

### Trie
A trie (prefix tree) is a tree where each node represents a character, and paths from root to leaf form words, used for efficient word or prefix lookup.

### Union-Find (Disjoint Set)
A union-find (disjoint set) tracks elements in separate sets, enabling quick merging of sets and checking if elements are in the same set, useful for grouping related items.

### Graph Traversal (BFS/DFS)
Graph traversal algorithms visit all vertices in a graph using Breadth-First Search (BFS, level by level) or Depth-First Search (DFS, exploring as far as possible along each branch), used to explore or analyze graph structures.

## Time and Space Complexity Analysis

### Dynamic Array
| Method       | Time Complexity       | Space Complexity |
|--------------|-----------------------|------------------|
| add()        | O(1) avg, O(n) worst  | O(n)             |
| get()        | O(1)                  | O(1)             |
| set()        | O(1)                  | O(1)             |
| removeAt()   | O(n)                  | O(1)             |
| remove()     | O(n)                  | O(1)             |
| indexOf()    | O(n)                  | O(1)             |

### Singly Linked List
| Method     | Time Complexity | Space Complexity |
|------------|-----------------|------------------|
| search()   | O(n)            | O(n)             |
| addFirst() | O(1)            | O(1)             |
| addAtEnd() | O(1)            | O(1)             |

### Stack (Array & Linked List Implementation)
| Method    | Array Time | Linked List Time | Space Complexity |
|-----------|------------|------------------|------------------|
| push()    | O(1)       | O(1)             | O(n)             |
| pop()     | O(1)       | O(1)             | O(n)             |
| peek()    | O(1)       | O(1)             | O(n)             |
| search()  | O(n)       | O(1)             | O(n)             |
| size()    | O(1)       | O(1)             | O(n)             |

### Doubly Linked List
| Method      | Time Complexity          | Space Complexity |
|-------------|--------------------------|------------------|
| search()    | O(n)                     | O(n)             |
| addFirst()  | O(1)                     | O(1)             |
| addAtEnd()  | O(1) tail, O(n) no-tail  | O(1)             |

### Circular Linked List
| Method     | Time Complexity | Space Complexity |
|------------|-----------------|------------------|
| search()   | O(n)            | O(n)             |
| addFirst() | O(1)            | O(1)             |
| addAtEnd() | O(1)            | O(1)             |

### Queue
| Method   | Time Complexity | Space Complexity |
|----------|-----------------|------------------|
| Enqueue  | O(1)            | O(1)             |
| Dequeue  | O(1)            | O(1)             |
| Peek     | O(1)            | O(1)             |
| Contains | O(n)            | O(n)             |
| Removal  | O(n)            | O(n)             |

### Binary Search Tree
| Method             | Time Complexity | Space Complexity |
|--------------------|-----------------|------------------|
| addValue()         | O(h)            | O(h)             |
| search()           | O(h)            | O(h)             |
| getHeightOfTree()  | O(n)            | O(h)             |
| getNodesCount()    | O(1)            | O(1)             |

### Tree Traversal Algorithms
| Method                | Time Complexity | Space Complexity |
|-----------------------|-----------------|------------------|
| inorderTraversal()    | O(n)            | O(h)             |
| preorderTraversal()   | O(n)            | O(h)             |
| postorderTraversal()  | O(n)            | O(h)             |
| levelOrderTraversal() | O(n)            | O(w)             |
| searchNodeInorder()   | O(n)            | O(h)             |
| getNodesCount()       | O(1)            | O(1)             |

### Hash Table
| Method          | Time Complexity         | Space Complexity |
|-----------------|-------------------------|------------------|
| addValue()      | O(1) avg, O(n) worst    | O(1)             |
| search()        | O(1) avg, O(n) worst    | O(1)             |
| getNodesCount() | O(1)                    | O(1)             |

### Min Heap
| Method          | Time Complexity | Space Complexity |
|-----------------|-----------------|------------------|
| addValue()      | O(log n)        | O(1)             |
| search()        | O(n)            | O(1)             |
| getNodesCount() | O(1)            | O(1)             |

### Basic Graph (Adjacency List)
| Method          | Time Complexity | Space Complexity |
|-----------------|-----------------|------------------|
| addValue()      | O(1)            | O(1)             |
| search()        | O(V + E)        | O(V)             |
| getNodesCount() | O(1)            | O(1)             |

### Trie
| Method          | Time Complexity | Space Complexity |
|-----------------|-----------------|------------------|
| addValue()      | O(m)            | O(m)             |
| search()        | O(m)            | O(1)             |
| getNodesCount() | O(1)            | O(1)             |

### Union-Find (Disjoint Set)
| Method          | Time Complexity | Space Complexity |
|-----------------|-----------------|------------------|
| addValue()      | O(1)            | O(1)             |
| find()          | O(α(n)) avg     | O(1)             |
| union()         | O(α(n)) avg     | O(1)             |
| search()        | O(1)            | O(1)             |
| getNodesCount() | O(1)            | O(1)             |

### Graph Traversal (BFS/DFS)
| Method          | Time Complexity | Space Complexity |
|-----------------|-----------------|------------------|
| addValue()      | O(1)            | O(1)             |
| bfsTraversal()  | O(V + E)        | O(V)             |
| dfsTraversal()  | O(V + E)        | O(V)             |
| search()        | O(V + E)        | O(V)             |
| getNodesCount() | O(1)            | O(1)             |

## Usage Examples

### Dynamic Array
- **Use Case**: Managing items in a shopping cart, where items can be added or removed dynamically.

### Singly Linked List
- **Use Case**: Organizing streaming music playlists, where songs are played sequentially.

### Stack (Array & Linked List Implementation)
- **Use Case**: Handling UI navigation in video games, pushing new screens and popping back to previous ones.

### Doubly Linked List
- **Use Case**: Implementing undo and redo functionality in drawing apps or code editors, enabling navigation in both directions.

### Circular Linked List
- **Use Case**: Buffering audio or video streams in a loop, such as in media players.

### Queue
- **Use Case**: Processing messages in a messaging app or email server, handling them in the order received.

### Binary Tree
- **Use Case**: OrganizingW organizing hierarchical data, such as file systems or company organizational charts.

### Binary Search Tree
- **Use Case**: Powering autocomplete features in search bars.

### Tree Traversal Algorithms
- **Use Case**: Generating a sorted list of contacts from a BST or evaluating mathematical expressions stored in a tree.

### Hash Table
- **Use Case**: Storing user profiles in a social media app, mapping usernames to user data for fast retrieval.

### Min Heap
- **Use Case**: Managing tasks in a to-do app, ensuring the highest-priority task (smallest value) is always at the top.

### Basic Graph (Adjacency List)
- **Use Case**: Modeling a social network, where users are vertices and friendships are edges, for finding connections.

### Trie
- **Use Case**: Suggesting words in a text editor or search engine, where prefixes lead to valid word completions.

### Union-Find (Disjoint Set)
- **Use Case**: Grouping users in a social network into friend circles or detecting connected components in a graph.

### Graph Traversal (BFS/DFS)
- **Use Case**: Exploring a social network to find friends within a certain degree of separation or analyzing website link structures.

## How to Run Tests
To run the tests for the data structures implemented in JavaScript, follow these steps:

1. **Clone the Repository**:
    - Open a terminal and run the following command to clone the repository to your local machine:
      ```
      git clone <repository-url>
      ```
      Replace `<repository-url>` with the URL of the repository (e.g., from GitHub, GitLab, or another hosting service).

2. **Install Node.js**:
    - Download and install Node.js from [nodejs.org](https://nodejs.org). Choose the latest LTS (Long Term Support) version suitable for your operating system.
    - Verify the installation by running the following commands in your terminal:
      ```
      node --version
      npm --version
      ```
      These commands should display the installed versions of Node.js and npm, respectively.

3. **Navigate to the Project Folder**:
    - Change to the directory containing the cloned repository using the `cd` command:
      ```
      cd path/to/repository
      ```
      Replace `path/to/repository` with the actual path to the cloned repository folder.

4. **Install Dependencies**:
    - If the project includes a `package.json` file, install the required dependencies by running:
      ```
      npm install
      ```
      This command installs any necessary libraries or testing frameworks specified in the project.

5. **Run the Tests**:
    - Execute the test file (e.g., `test.js`) using Node.js by running:
      ```
      node test.js
      ```
      Replace `test.js` with the actual name of the test file if it differs. This command runs the JavaScript test file and outputs the results to the terminal.


