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

var traverseInDeep = tree => {
  tree.forEach(node => {
    console.log(node.val);

    traverseInDeep(node.ch);
  });
};

traverseInDeep(tempTree);
