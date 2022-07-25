function oddIndices (arr) {
  // Return an array containing all the odd indices in the array
  // Your code here
  let newArray = []
  for (let index = 1; index < arr.length; index += 2) {
    newArray.push(arr[index])
  }
  return newArray
}

function oddReverse (arr) {
  // Return an array containing all the odd indices starting from the end
  // Your code here
  let newArray = []
  if (arr.length <= 3) {
    for (let index = arr.length - 2; index >= 0; index -= 2) {
      newArray.push(arr[index])
    }
    return newArray
  } else {
    for (let index = arr.length - 1; index >= 0; index -= 2) {
      newArray.push(arr[index])
    }
    return newArray
  }
}

function secondPower (arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here
  let newArray = []
  for (let index = 1; index < arr.length; index *= 2) {
    newArray.push(arr[index])
  }
  return newArray
}

function nthPower (arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here
  let newArray = []
  for (let index = 1; index < arr.length; index *= n) {
    newArray.push(arr[index])
  }
  return newArray
}

// MY FLEXIBLE ARRAY SPLITTER//

function firstHalf (arr) {
  console.log(arr.length) //test array length on load!
  if (arr.length == 0) {
    return [] //return nothing on empty!
  } else if (arr.length == 1) {
    return [1] //should be inclusive first half, return [] || this is not neccesary
  } else if (arr.length > 1) {
    let middle = Math.ceil(arr.length / 2) //start main thread, runs all logic
    let firstHalf = arr.slice(0, middle)
    return firstHalf
  }
}

function secondHalf (arr) {
  if (arr.length == 0) {
    return [] //return nothing on empty
  } else {
    let middle = Math.ceil(arr.length / 2)
    let secondHalf = arr.slice(middle)
    return secondHalf
  }
}

// console.log('First Half of the array: ', firstHalf([1, 2]))
// console.log('Second Half of the array: ', secondHalf([1]))

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf
}
