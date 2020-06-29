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
