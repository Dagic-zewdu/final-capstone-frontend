/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const getRandomNumberBetween = (num) => Math.floor(Math.random() * num);
export const removeDuplicates = (originalArray, prop) => {
  const newArray = [];
  const lookupObject = {};

  for (var i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for (i in lookupObject) {
    newArray.push(lookupObject[i]);
  }
  return newArray;
};

export default getRandomNumberBetween;
