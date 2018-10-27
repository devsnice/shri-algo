var bubbleSort = array => {
  let isSorted = false;
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
