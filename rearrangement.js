const Cache = new Map();

const createKey = numbers => numbers.join(",");

const getFromCache = numbers => {
  const key = createKey(numbers);

  return Cache.get(key);
};

const setInCache = (numbers, result) => {
  const key = createKey(numbers);

  Cache.set(key, result);
};

/**
 * Все перестановки чисел из массива
 */
const rearrangement = numbers => {
  const numberLength = numbers.length;

  const inCache = getFromCache(numbers);

  if (inCache) {
    return inCache;
  }

  // два элемента - это базовый случай, для него мы знаем, что можно составить две разные перестановки
  if (numberLength === 2) {
    return [`${numbers[0]}, ${numbers[1]}`, `${numbers[1]}, ${numbers[0]}`];
  }

  const allVariations = [];

  // на первое место ставим каждый элемент и рекурсивно запускаем алгоритм для оставшихся элементов
  for (let i = 0; i < numberLength; i++) {
    const onFirstPlace = numbers[i];
    const restNumbers = numbers.filter((number, index) => index !== i);

    // получаем все варианты перестановок для всех элементов за исключением поставленого на первое место
    const variations = rearrangement(restNumbers);

    // составляем перестановки
    variations.forEach(variation => allVariations.push(`${onFirstPlace}, ${variation}`));
  }

  setInCache(numbers, allVariations);

  return allVariations;
};

/**
 * Все перестановки чисел от 1 до N,
 * работает до 10 :)
 */
const rearrangementElementsToN = n => {
  const elementsArray = [];

  for (i = 1; i <= n; i++) {
    elementsArray.push(i);

    const variationsForI = rearrangement(elementsArray);

    console.log(`Result for ${i}:`, variationsForI);
  }
};

rearrangementElementsToN(10);
