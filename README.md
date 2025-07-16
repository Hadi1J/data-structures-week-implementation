# Data Structures Implementation
## overview
This repository contains implementations of fundamental data structures as part of the OppoTrain One-Week Intensive Training Program.
## Description of Each Data Structure
### Dynamic Array

The dynamic array can grow & shrink in size.

### Singly Linked List
sequential list of nodes that hold data which point to other nodes also containing data.

### Stack (Array & Linked List Implementation)

First-in Last-out linear Data Structure.

### Doubly Linked List

Sequential list of nodes that hold data and contain pointers to both the next node and the previous node in the sequence.

### Circular Linked List

Sequential list of nodes that hold data, where each node points to the next node, and the last node points back to the first node, forming a continuous loop.


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
## Usage Example


### Dynamic Array

Holding items in a shooping cart. 

### Singly Linked List

Streaming 
### Doubly Linked List 

Undo & Redo in drawing apps or code editors

### Circular Linked List

Buffering audio/video streams in a loop.

### Stack (Array & Linked List Implementation)
UI Navigation in video Games.


## How to Run Tests
