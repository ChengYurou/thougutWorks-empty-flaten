'use strict';

function double_to_one(collection) {

  var one_array = convert_one_Array(collection);

  return clear_same(one_array);
}

function clear_same(array) {
  var clear_array = [];

  array.forEach(function (item) {

    if (clear_array.indexOf(item) === -1) {
      clear_array.push(item);
    }
  });

  return clear_array;
}

function convert_one_Array(collection) {
  var array = [];

  collection.forEach(function (item) {

    item.forEach(function (i_item) {
      array.push(i_item);
    });
  });

  return array;
}

module.exports = double_to_one;
