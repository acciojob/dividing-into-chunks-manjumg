const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (currentSum + num <= n) {
      currentSubarray.push(num);
      currentSum += num;
    } else {
      if (currentSubarray.length > 0) {
        result.push(currentSubarray);
      }
      currentSubarray = [num];
      currentSum = num;
    }
  }

  // Push the last subarray if not empty
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));
