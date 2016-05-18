'use strict';

function double_to_one(collection) {
  
  var array = [];

  collection.forEach(function (item) {

    if (typeof(item) === "number") {
      array.push(item);
    } else {
      item.forEach(function (i_item) {
        array.push(i_item);
      });
    }
  });

  return array;
}

module.exports = double_to_one;
