var bubbleSort = array => {
  for (let i = 0, length = array.length; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (array[i] > array[j]) {
        const swapTemp = array[i];

        array[i] = array[j];
        array[j] = swapTemp;
      }
    }
  }

  return array;
};
