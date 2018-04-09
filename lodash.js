var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // Returns the first element of an array.
_.first = function(array) {
  return array[0];
};

 // Returns the first n number of elements in an array.
_.take = function(array, n=1) {
		return array.slice(0, n);
};

// Returns the last element of an array.
_.last = function(array) {
	return array.pop();
};

// Returns the last n number of elements in an array.
_.takeRight = function(array, n=1) {
		return array.slice(Math.max(array.length - n, 1));
}

// Returns a new array with all falsey values removed.
// falsy values: false, null, 0, "", undefined, and NaN.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(array) {
  //declare new array
  // let output = [];
  //
  // //loop throw whole array
  // for (let i=0; i<array.length; i++){
  //   //conditional that checks for truthy-ness
  //   //push into new array
  //   if(array[i]){
  //   output.push(array[i]);
  //   }
  // }
  // return output;
return array.filter(Boolean);
};

// Returns a new array of elements in the first argument, but
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(arrayOne, arrayTwo) {
  let newArr = [];

  for(let i=0; i<arrayOne.length; i++){
    if (arrayTwo.indexOf(arrayOne[i]) === -1){
      newArr.push(arrayOne[i]);
    }
  }
  return newArr;
};

// Returns element with minimum
// value in an array.
_.min = function(array) {
	return Math.min(...array);
};

// Returns element with maximum
// value in an array.
_.max = function(array) {
	return Math.max(...array);
};

// Returns either index of matched element or
// -1.
_.indexOf = function(array, el) {
    for (let i=0; i<array.length; i++){
      if(array[i] === el){
        return i;
      }
    }
    return -1;
};

/*************** BONUS ***************/
// Retuns a new array with elements in shuffled order.
_.shuffle = function(array) {
  let shuffled = [];
  for (let i=array.length-1; i>=0; i--){
    let roll = Math.floor(Math.random()*(i));
    shuffled.push(array[roll]);
    array[roll] = array[array.length-1];
    array.pop();
  }
  return shuffled;
};

/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of a collection.
_.size = function(collection) {
  if(typeof collection === "object"){
    // console.log(collection);
    collection = Object.values(collection);
    // console.log(collection);
  }
  return collection.length;
};

// Iterates on each element of a collection and
// then returns the original collection.
_.forEach = function(collection, callback) {
  if (typeof collection === "string" || Array.isArray(collection)){
    for(let i =0; i<collection.length; i++){
      callback(collection[i]);
    }
  } else {
    for (let key in collection){
      callback(collection[key]);
    }
  }
};

// Iterates on each element of a collection and
// then returns a new array.
_.map = function(collection, callback) {
  let mapped = [];
    _.forEach(collection, function(element){
      mapped.push(callback(element));
    })
  return mapped;
 };

// Returns a new collection with filtered elements.
_.filter = function(collection, callback) {
 let filtered = [];
   _.forEach(collection, function(element){
     if (callback(element))
     filtered.push(element);
   })
 return filtered;
};

// Returns a new collection with unfiltered elements.
_.reject = function(collection, callback) {
	let unfiltered = [];
  _.forEach(collection, function(element){
    if (!callback(element)){
      unfiltered.push(element);
    }
  })
  return unfiltered;
};

/*************** BONUS ***************/
 // Returns n number of elements in a collection.
_.sample = function(collection, n) {
	// Place your solution here
};

module.exports = _;
