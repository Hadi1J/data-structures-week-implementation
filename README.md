# Data Structures Implementation

## Overview
This repository contains implementations of fundamental data structures as part of the OppoTrain One-Week Intensive Training Program. Each data structure is designed to solve specific problems efficiently, and this document provides clear descriptions, complexity analyses, and practical examples to help you understand their use.

## Description of Each Data Structure

### Dynamic Array
A dynamic array is a flexible list that can grow or shrink as needed, making it ideal for storing data when the size isn’t fixed.

### Singly Linked List
A singly linked list is a chain of nodes, where each node holds data and points to the next node, allowing sequential access.

### Stack (Array & Linked List Implementation)
A stack is a linear data structure that follows a First-In, Last-Out (FILO) approach, like a stack of plates where you add or remove from the top.

### Doubly Linked List
A doubly linked list is a chain of nodes where each node holds data and points to both the next and previous nodes, enabling two-way traversal.

### Circular Linked List
A circular linked list is a chain of nodes where each node points to the next, and the last node loops back to the first, forming a continuous cycle.

### Queue
A queue is a linear data structure that mimics real-world queues, using enqueue (add to the back) and dequeue (remove from the front) operations.

### Binary Tree
A binary tree is a tree-like structure where each node has up to two children (left and right), used for hierarchical data.

### Binary Search Tree
A binary search tree (BST) is a tree where each node has up to two children, with all left subtree values less than the node’s value and all right subtree values greater than or equal to it. This ordering makes searching and inserting data efficient.

### Tree Traversal Algorithms
Tree traversal algorithms are methods to visit all nodes in a binary tree in specific orders. These include inorder (left-root-right), preorder (root-left-right), postorder (left-right-root), and level-order (visiting nodes level by level), useful for processing or analyzing tree data.

### Hash Table
A hash table stores key-value pairs using a hash function to map keys to array indices. Collisions are handled with linked lists (chaining), enabling fast insertion and lookup.

### Min Heap
A min heap is a complete binary tree where each node’s value is less than or equal to its children’s values, stored as an array. It ensures the smallest value is always at the top.

### Basic Graph (Adjacency List)
A graph is a set of vertices connected by edges, represented as a mapping of each vertex to a list of its neighbors. It models relationships like networks or connections.

## Time/Space Complexity Analysis

### Dynamic Array
| Method       | Time Complexity    | Space Complexity |
|--------------|--------------------|------------------|
| add()        | O(1)Am/worst O(n)  | O(n)             |
| get()        | O(1)               | O(1)             |
| set()        | O(1)               | O(1)             |
| removeAt()   | O(n)               | O(1)             |
| remove()     | O(n)               | O(1)             |
| indexOf()    | O(n)               | O(1)             |

### Singly Linked List
| Method     | Time Complexity  | Space Complexity |
|------------|------------------|------------------|
| search()   | O(n)             | O(n)             |
| addFirst() | O(1)             | O(1)             |
| addAtEnd   | O(1)             | O(1)             |

### Stack (Array & Linked List Implementation)
| Method    | Array Time    | Linked List Time   | Space Complexity   |
|-----------|---------------|--------------------|--------------------|
| push()    | O(1)          | O(1)               | O(n)               |
| pop()     | O(1)          | O(1)               | O(n)               |
| peek()    | O(1)          | O(1)               | O(n)               |
| search()  | O(n)          | O(1)               | O(n)               |
| size()    | O(1)          | O(1)               | O(n)               |

### Doubly Linked List
| Method      | Time Complexity        | Space Complexity |
|-------------|------------------------|------------------|
| search()    | O(n)                   | O(n)             |
| addFirst()  | O(1)                   | O(1)             |
| addAtEnd()  | O(1) tail O(n) no-tail | O(1)             |

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
| Is Empty | O(1)            | O(1)             |

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
| Method          | Time Complexity    | Space Complexity |
|-----------------|--------------------|------------------|
| addValue()      | O(1)               | O(1)             |
| search()        | O(V + E)           | O(V)             |
| getNodesCount() | O(1)               | O(1)             |


## Usage Example

### Dynamic Array
Holding items in a shopping cart, where items can be added or removed dynamically.

### Singly Linked List
Streaming music playlists, where songs are played in sequence.

### Doubly Linked List
Undo and redo functionality in drawing apps or code editors, allowing navigation in both directions.

### Circular Linked List
Buffering audio or video streams in a loop, such as in media players.

### Stack (Array & Linked List Implementation)
UI navigation in video games, where you push new screens and pop back to previous ones.

### Queue
Processing messages in a messaging app or email server, handling them in the order received.

### Binary Tree
Organizing hierarchical data, like file systems or company org charts.

### Binary Search Tree
Autocomplete features in search bars.

### Tree Traversal Algorithms
Generating a sorted list of contacts from a BST or evaluating mathematical expressions stored in a tree.

### Hash Table
Storing user profiles in a social media app, where usernames map to user data for fast retrieval.

### Min Heap
Managing tasks in a to-do app, where the highest-priority task (smallest value) is always at the top.

### Basic Graph (Adjacency List)
Modeling a social network, where users are vertices and friendships are edges, for finding connections.

## How to Run Tests