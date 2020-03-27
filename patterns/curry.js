const add = (a, b) => {
  return a + b;
};
const addCurry = a => {
  return b => {
    return a + b;
  };
};
