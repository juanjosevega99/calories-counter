const compose = (...functions) => (data) =>
  functions.reduceRight((value, func) => func(value), data);

const $DESCRIPTION = document.getElementById("description");
const $CALORIES = document.getElementById("calories");
const $CARBOHYDRATES = document.getElementById("carbohydrates");
const $PROTEIN = document.getElementById("protein");

const itemsList = [];

const attrToString = (obj = {}) =>
  Object.keys(obj)
    .map((key) => `${key}="${obj[key]}"`)
    .join(" ");

const add = (list) => {
  const newItem = {
    description: $DESCRIPTION.value,
    calories: parseInt($CALORIES.value),
    carbs: parseInt($CARBOHYDRATES.value),
    protein: parseInt($PROTEIN.value),
  };

  list.push(newItem);
  console.log(list);
};

const clearInputs = () => {
  $DESCRIPTION.value = "";
  $CALORIES.value = "";
  $CARBOHYDRATES.value = "";
  $PROTEIN.value = "";
};
