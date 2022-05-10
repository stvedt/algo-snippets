console.log("test");

const linearSearch = (array, find) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element === find) {
      return index;
    }
  }
  return -1;
};

console.log(linearSearch([1, 4, 2, 5, 3, 7, 6], 7));
