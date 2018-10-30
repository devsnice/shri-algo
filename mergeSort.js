const mergeArrays = (leftArray, rightArray) => {
  let mergedArray = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] > rightArray[0]) {
      mergedArray.push(leftArray.shift());
    } else {
      mergedArray.push(rightArray.shift());
    }
  }

  if (leftArray.length) {
    mergedArray = mergedArray.concat(leftArray);
  }

  if (rightArray.length) {
    mergedArray = mergedArray.concat(rightArray);
  }

  return mergedArray;
};

const mergeSort = (array, left, right) => {
  // base case
  if (left === right) {
    return [array[left]];
  }

  const middle = left + Math.ceil((right - left) / 2);

  const sortedLeftSide = mergeSort(array, left, middle - 1);
  const sortedRightSide = mergeSort(array, middle, right);

  return mergeArrays(sortedLeftSide, sortedRightSide);
};

const testArray = [0, 1, 6, 10, 12, 4, 2];

// console.log(mergeSort(testArray, 0, testArray.length - 1));
