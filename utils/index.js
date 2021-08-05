export const sort = (array) => {
  if (Array.isArray(array)) {
    array.sort();
  } else {
    console.warn(
      'Called sort with wrong parameter type! Expected array, got: ',
      typeof array
    );
    return false;
  }
};

export const shuffle = (array) => {
  if (Array.isArray(array)) {
    var currentIndex = array.length,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  } else {
    console.warn(
      'Called shuffle with wrong parameter type! Expected array, got: ',
      typeof array
    );
    return false;
  }
};
