// init a dynamic array
class DynamicArray {
  constructor(capacity = 0) {
    this.arr = new Array(capacity);
    this.len = 0;
    this.capacity = capacity;
  }

//returnning the size of the array
  size() {
    return this.len; 
  }
// return bolean false or true if the the array is empty or not 
  isEmpty() {
    return this.len === 0; 
  }

// return the element of an index with checking if the array is out of bound
  get(index) {
    if (index < 0 || index >= this.len) {
      throw new Error("Index out of bounds"); 
    }
    return this.arr[index];
  }

  // updating the element in the passed index
  set(index, element) {
    if (index < 0 || index >= this.len) { 
      throw new Error("Index out of bounds"); 
    }
    this.arr[index] = element;
  }

  //adding element to the end of the array
  add(element) { 
    if (this.len >= this.capacity) { //adding a space for added element if needed and double it 
      this.capacity = this.capacity === 0 ? 1 : this.capacity * 2;
      const newArr = new Array(this.capacity);
      for (let i = 0; i < this.len; i++) {
        newArr[i] = this.arr[i];
      }
      this.arr = newArr;
    }
    this.arr[this.len++] = element;
  }

  // removing element that is located in the index passed
  removeAt(index) {
    if (index < 0 || index >= this.len) {
      throw new Error("Index out of bounds");
    }
    const removedElement = this.arr[index];
    for (let i = index; i < this.len - 1; i++) {
      this.arr[i] = this.arr[i + 1];
    }
    this.len--;
    return removedElement;
  }

  // removing the first element that matches the element passed 
  remove(element) {
    const index = this.indexOf(element);
    if (index === -1) {
      return false;
    }
    this.removeAt(index);
    return true;
  }

// finding the index of an element and return -1 if not found
  indexOf(element) {
    for (let i = 0; i < this.len; i++) {
      if (this.arr[i] === element) {
        return i;
      }
    }
    return -1;
  }
}

// testing 

function testEmptyList() {
  const list = new DynamicArray();
  console.assert(list.isEmpty() === true);
}

function testRemovingEmpty() {
  const list = new DynamicArray();
  try {
    list.removeAt(0);
    throw new Error("Expected exception");
  } catch (e) {
  }
}

function testIndexOutOfBounds() {
  const list = new DynamicArray();
  list.add(-56);
  list.add(-53);
  list.add(-55);
  try {
    list.removeAt(3);
    throw new Error("Expected exception");
  } catch (e) {
    
  }
}

function testIndexOutOfBounds2() {
  const list = new DynamicArray();
  for (let i = 0; i < 1000; i++) list.add(789);
  try {
    list.removeAt(1000);
    throw new Error("Expected exception");
  } catch (e) {
   
  }
}

function testIndexOutOfBounds3() {
  const list = new DynamicArray();
  for (let i = 0; i < 1000; i++) list.add(789);
  try {
    list.removeAt(-1);
    throw new Error("Expected exception");
  } catch (e) {
    
  }
}

function testIndexOutOfBounds4() {
  const list = new DynamicArray();
  for (let i = 0; i < 15; i++) list.add(123);
  try {
    list.removeAt(-66);
    throw new Error("Expected exception");
  } catch (e) {
    
  }
}

function testRemoving() {
  const list = new DynamicArray();
  const strs = ["a", "b", "c", "d", "e", null, "g", "h"];
  for (const s of strs) list.add(s);

  let ret = list.remove("c");
  console.assert(ret === true);

  ret = list.remove("c");
  console.assert(ret === false);

  ret = list.remove("h");
  console.assert(ret === true);

  ret = list.remove(null);
  console.assert(ret === true);

  ret = list.remove("a");
  console.assert(ret === true);

  ret = list.remove("a");
  console.assert(ret === false);

  ret = list.remove("h");
  console.assert(ret === false);

  ret = list.remove(null);
  console.assert(ret === false);
}

function testRemoving2() {
  const list = new DynamicArray();
  const strs = ["a", "b", "c", "d"];
  for (const s of strs) list.add(s);

  console.assert(list.remove("a") === true);
  console.assert(list.remove("b") === true);
  console.assert(list.remove("c") === true);
  console.assert(list.remove("d") === true);

  console.assert(list.remove("a") === false);
  console.assert(list.remove("b") === false);
  console.assert(list.remove("c") === false);
  console.assert(list.remove("d") === false);
}

function testIndexOfNullElement() {
  const list = new DynamicArray();
  const strs = ["a", "b", null, "d"];
  for (const s of strs) list.add(s);
  console.assert(list.indexOf(null) === 2);
}

function testAddingElements() {
  const list = new DynamicArray();
  const elems = [1, 2, 3, 4, 5, 6, 7];

  for (let i = 0; i < elems.length; i++) list.add(elems[i]);

  for (let i = 0; i < elems.length; i++) {
    console.assert(list.get(i) === elems[i]);
  }
}

function testAddAndRemove() {
  const list = new DynamicArray(0);

  for (let i = 0; i < 55; i++) list.add(44);
  for (let i = 0; i < 55; i++) list.remove(44);
  console.assert(list.isEmpty() === true);

  for (let i = 0; i < 55; i++) list.add(44);
  for (let i = 0; i < 55; i++) list.removeAt(0);
  console.assert(list.isEmpty() === true);

  for (let i = 0; i < 155; i++) list.add(44);
  for (let i = 0; i < 155; i++) list.remove(44);
  console.assert(list.isEmpty() === true);

  for (let i = 0; i < 155; i++) list.add(44);
  for (let i = 0; i < 155; i++) list.removeAt(0);
  console.assert(list.isEmpty() === true);
}

function testAddSetRemove() {
  const list = new DynamicArray(0);

  for (let i = 0; i < 55; i++) list.add(44);
  for (let i = 0; i < 55; i++) list.set(i, 33);
  for (let i = 0; i < 55; i++) list.remove(33);
  console.assert(list.isEmpty() === true);

  for (let i = 0; i < 55; i++) list.add(44);
  for (let i = 0; i < 55; i++) list.set(i, 33);
  for (let i = 0; i < 55; i++) list.removeAt(0);
  console.assert(list.isEmpty() === true);

  for (let i = 0; i < 155; i++) list.add(44);
  for (let i = 0; i < 155; i++) list.set(i, 33);
  for (let i = 0; i < 155; i++) list.remove(33);
  console.assert(list.isEmpty() === true);

  for (let i = 0; i < 155; i++) list.add(44);
  for (let i = 0; i < 155; i++) list.removeAt(0);
  console.assert(list.isEmpty() === true);
}

function testSize() {
  const list = new DynamicArray();
  const elems = [-76, 45, 66, 3, null, 54, 33];
  
  for (let i = 0, j = 1; i < elems.length; i++, j++) {
    list.add(elems[i]);
    console.assert(list.size() === j);
  }
}

const MODE = "benchmark"; // or "benchmark"



// testing using fn intead of making try for each 
console.log("running tests");

function tryTesting(test, name) {
  try {
    test();
    console.log("✓ " + name + " passed");
  } catch (error) {
    console.log("✗ " + name + " failed: " + error.message);
  }
}

tryTesting(testEmptyList, "test Empty List");
tryTesting(testRemovingEmpty, "test Removing Empty");
tryTesting(testIndexOutOfBounds, "test Index Out Of Bounds");
tryTesting(testIndexOutOfBounds2, "test Index Out Of Bounds 2");
tryTesting(testIndexOutOfBounds3, "test Index Out Of Bounds 3");
tryTesting(testIndexOutOfBounds4, "test Index Out Of Bounds 4");
tryTesting(testRemoving, "test Removing");
tryTesting(testRemoving2, "test Removing2");
tryTesting(testIndexOfNullElement, "test Index Of Null Element");
tryTesting(testAddingElements, "test Adding Elements");
tryTesting(testAddAndRemove, "test Add And Remove");
tryTesting(testAddSetRemove, "test Add Set Remove");
tryTesting(testSize, "test Size");

console.log("tests complete");



