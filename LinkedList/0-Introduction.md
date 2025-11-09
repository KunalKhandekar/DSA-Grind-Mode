# Linked List

## Overview
A **Linked List** is a **linear data structure** where elements (called *nodes*) are linked together using references (pointers).

Unlike arrays, elements in a linked list are **stored at different memory locations**.

---

## Structure of a Node
Each node in a linked list has two parts:
1. **Value** – The actual data.
2. **Reference (Pointer)** – A link to the next node.

The **last node’s reference** is always `null`.

A linked list is always referenced by its **HEAD** (starting node).

---

## Types of Linked Lists

### 1. Singly Linked List
- Each node has:
  - Value  
  - Reference to the next node  

### 2. Doubly Linked List
- Each node has:
  - Reference to the previous node  
  - Value  
  - Reference to the next node  

---

## Difference Between Array and Linked List

| Feature | Linked List | Array |
|----------|--------------|--------|
| **Memory Storage** | Non-contiguous memory locations | Contiguous memory locations |
| **Size** | Dynamic | Fixed (can be dynamic in some languages) |
| **Structure** | Each node = Value + Reference | Each element = Value only |
| **Accessing Elements** | Hard (must traverse) | Easy (direct access) |
| **Insertion / Deletion** | Easy | Hard |
| **Fetching Time Complexity** | O(n) | O(1) *(e.g., arr[2] returns 3rd element)* |
| **Memory Usage** | Requires extra memory for references | More memory efficient |

---

✅ **Summary:**  
- Use **Linked List** when frequent insertions/deletions are needed.  
- Use **Array** when frequent access to elements is required.
