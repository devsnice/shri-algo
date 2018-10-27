var bubbleSort = array => {
  const length = array.length;

  // n обходов, можно заменить на while is not sorted
  for (let i = 0; i < length - 1; i++) {
    // сравниваем все элементы попарно
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const swapTemp = array[j];

        array[j] = array[j + 1];
        array[j + 1] = swapTemp;
      }
    }
    console.log(array);
  }

  return array;
};

var selectSort = array => {
  const length = array.length - 1;

  for (let i = length; i > 0; i--) {
    let max = array[0];
    let maxIndex = 0;

    // find max
    for (let j = 0; j <= i; j++) {
      if (max < array[j]) {
        max = array[j];
        maxIndex = j;
      }
    }

    array[maxIndex] = array[i];
    array[i] = max;

    console.log(array);
  }

  return array;
};

var insertionSort = array => {
  const length = array.length - 1;

  for (let i = length - 1; i >= 0; i--) {
    const element = array[i];

    let j = i + 1;

    while (array[j] > element && j < length) {
      array[j] = array[j + 1];

      j++;
    }

    array[j] = element;

    console.log(array);
  }

  return array;
};

const tempTree = [
  {
    val: 1,
    ch: [
      {
        val: 2,
        ch: [
          {
            val: 5,
            ch: []
          },
          {
            val: 6,
            ch: []
          }
        ]
      },
      {
        val: 3,
        ch: []
      },
      {
        val: 4,
        ch: [
          {
            val: 7,
            ch: []
          },
          {
            val: 8,
            ch: []
          }
        ]
      }
    ]
  }
];

/**
 * Traverse in deep
 * @param {*} tree
 */
var traverseInDeep = tree => {
  tree.forEach(node => {
    console.log(node.val);

    traverseInDeep(node.ch);
  });
};

class Queue {
  constructor() {
    this.elements = [];
  }

  push(element) {
    this.elements.push(element);

    return this;
  }

  get() {
    return this.elements.shift();
  }

  empty() {
    return this.elements.length === 0;
  }
}

/**
 * traverseInBreadth
 * @param {*} tree
 */
var traverseInBreadth = tree => {
  const nodeQueue = new Queue();

  const rootNode = tree[0];

  nodeQueue.push(rootNode);

  while (!nodeQueue.empty()) {
    const node = nodeQueue.get();

    // show element
    console.log(node.val);

    // add elements to tree
    node.ch.forEach(childNode => {
      nodeQueue.push(childNode);
    });
  }
};

/**
 * Correct brackets
 */

class Stack {
  constructor() {
    this.elements = [];
  }

  push(element) {
    this.elements.push(element);

    return this;
  }

  pop() {
    return this.elements.pop();
  }

  empty() {
    return this.elements.length === 0;
  }
}

var isCorrectBrackets = str => {
  const bracketsStack = new Stack();

  const bracketOpenTypes = ["{", "[", "("];
  const bracketCloseTypes = ["}", "]", ")"];

  const bracketsMatch = {
    "{": "}",
    "[": "]",
    "(": ")"
  };

  for (let i = 0; i < str.length; i++) {
    const symbol = str[i];

    if (bracketOpenTypes.includes(symbol)) {
      bracketsStack.push(symbol);
    } else if (bracketCloseTypes.includes(symbol)) {
      const lastOpenBracketInString = bracketsStack.pop();

      // it's incorrect if close bracket doesn't match open bracket
      if (bracketsMatch[lastOpenBracketInString] !== symbol) {
        return false;
      }
    }
  }

  // it's incorrect if there's open brackets
  if (!bracketsStack.empty()) {
    return false;
  }

  return true;
};

/**
 * Simple numbers
 */

var getSimpleNumbersUntilN = n => {
  const simpleNumbers = [];

  function isSimpleNumber(n) {
    const isSimple = simpleNumbers.every(number => number === 1 || n % number !== 0);

    return isSimple;
  }

  for (let i = 1; i < n; i++) {
    const isSimple = isSimpleNumber(i);

    if (isSimple) {
      simpleNumbers.push(i);
    }
  }

  return simpleNumbers;
};

var binarySearch = (array, number, left, right) => {
  if (!left) {
    left = 0;
  }

  if (!right) {
    right = array.length - 1;
  }

  if (left === right) {
    if (array[left] === number) {
      return left;
    } else {
      return -1;
    }
  }

  const middle = Math.ceil((right - left) / 2);

  if (array[middle] > number) {
    return binarySearch(array, number, 0, middle - 1);
  } else if (array[middle] < number) {
    return binarySearch(array, number, middle + 1, right);
  } else {
    return middle;
  }
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4));
