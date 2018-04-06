var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // Returns the first element of an array.
_.first = function(array) {
  return array[0];
};

 // Returns the first n number of elements in an array.
_.take = function(array, n) {
  if ( !n ) { return array.slice(0,1) };
  return array.slice(0,n);
};

// Returns the last element of an array.
_.last = function(array) {
  return array[array.length-1]
};

// Returns the last n number of elements in an array.
_.takeRight = function(array, n) {
  let length = (array === null) ? 0: array.length;
  if ( !length ) { return [] };
  n = n || 1;

  // n = length - n;
  // console.log("default 2 n>>",n);

  return array.slice(length-n);

  // console.log("this is array>>>",array);
  // console.log("this is n>>>",n);
  // let startIndex;
  //
  // n = n || 1;
  //
  // console.log("array.slice(n) >>>>",array.slice(n))
  //
  // // if ( n >= array.length ){
  // //   return array;
  // // }
  //
  // return array.slice(startIndex);
};

// Returns a new array with all falsey values removed.
// falsy values: false, null, 0, "", undefined, and NaN.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(array) {
	// let output = [];

  return array.filter((element)=>{
    if ( element ) {
      return element;
    }
    // return element ? element :
  })

  // array.forEach((element)=>{
  //   if ( element ) {
  //     output.push(element);
  //   }
  // })

  // _.forEach(array, (element)=>{
  //   if ( element ) {
  //     output.push(element);
  //   }
  // })

  // for ( let i = 0; i < array.length; i++ ) {
  //   if ( array[i] ) {
  //     output.push(array[i]);
  //   }
  // }

  return output;
};

// Returns a new array of elements in the first argument, but
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(arrayOne, arrayTwo) {
	let output = [];

  for ( let i = 0; i < arrayOne.length; i++ ) {
    let element = arrayOne[i];

    if ( arrayTwo.indexOf(element) === -1 ) {
      output.push(element);
    }
  }

  return output;
};

// Returns element with minimum
// value in an array.
_.min = function(array) {
  let lowest = array[0]

  for ( let i = 1; i < array.length; i++ ) {
    if ( array[i] < lowest ) {
      lowest = array[i];
    }
  }

  return lowest;
};

// Returns element with maximum
// value in an array.
_.max = function(array) {
  let highest = array[0]

  for ( let i = 1; i < array.length; i++ ) {
    if ( array[i] > highest ) {
      highest = array[i];
    }
  }

  return highest;
};

// Returns either index of matched element or
// -1.
_.indexOf = function(array, el) {
	let notFound = -1;

  for ( let i = 0; i < array.length; i++ ) {
    if ( array[i] === el ) {
      return i;
    }
  }

  return notFound;
};

/*************** BONUS ***************/
// Retuns a new array with elements in shuffled order.
_.shuffle = function(array) {
	// Place your solution here
};

/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of a collection.
_.size = function(collection) {
	if ( Array.isArray(collection) || typeof collection === "string" ) {
    return collection.length;
  }
  return Object.keys(collection).length;
};

// Iterates on each element of a collection and
// then returns the original collection.
_.forEach = function(collection, callback) {
	if ( Array.isArray(collection) || typeof collection === "string" ) {
    for ( let i = 0; i < collection.length; i++ ) {
      callback(collection[i]);
    }
  } else {
    for ( let key in collection ) {
      callback(collection[key]);
    }
  }

  return collection;
};

// Iterates on each element of a collection and
// then returns a new array.
_.map = function(collection, callback) {
  let output = [];

  _.forEach(collection, (element) =>{
    output.push(callback(element));
  })

  return output;
};

// Returns a new collection with filtered elements.
_.filter = function(collection, callback) {
	let output = [];

  _.forEach(collection, (element,index) =>{
    // let filteredVal = callback(element,index,collection);
    if ( callback(element,index,collection) ) {
      output.push(element);
    }
  })
  return output;
};

// Returns a new collection with unfiltered elements.
_.reject = function(collection, callback) {
	let output = [];

  _.forEach(collection, (element,index) =>{
    // let filteredVal = callback(element,index,collection);
    if ( !callback(element,index,collection) ) {
      output.push(element);
    }
  })
  return output;
};

/*************** BONUS ***************/
 // Returns n number of elements in a collection.
_.sample = function(collection, n) {
	// Place your solution here
};

module.exports = _;
