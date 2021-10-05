const localStorage = window.localStorage;

export const getLocalStorage = (key) => {
  try {
    let result = localStorage.getItem(key);
    if (!result) {
      // throw new Error(`${key} NOT EXIST!`);
      return null;
    }
    return JSON.parse(result);
  } catch (error) {
    console.error(`[getLocalStorage]: ${error.message}`);
  }
};

export const setLocalStorage = (key, value) => {
  try {
    let stringifyValue = JSON.stringify(value);
    localStorage.setItem(key, stringifyValue);
    // else throw new Error(`${key} HAS ALREADY EXIST`);
  } catch (error) {
    console.error(`[setLocalStorage]: ${error.message}`);
  }
};
