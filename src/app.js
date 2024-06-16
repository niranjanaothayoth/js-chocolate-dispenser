var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

function addChocolates(chocolates, color, count) {
  if (count <= 0) {
    return 'Number cannot be zero/negative';
  }
  for (let i = 0; i < count; i++) {
    chocolates.unshift(color);
  }
  return chocolates.length;
}

function removeChocolates(chocolates, number) {
  if (number <= 0) {
    return 'Number cannot be zero/negative';
  }
  if (number > chocolates.length) {
    return 'Insufficient chocolates in the dispenser';
  }
  let removedChocolates = [];
  for (let i = 0; i < number; i++) {
    removedChocolates.push(chocolates.shift());
  }
  return removedChocolates;
}

function dispenseChocolates(chocolates, number) {
  if (number <= 0) {
    return 'Number cannot be zero/negative';
  }
  if (number > chocolates.length) {
    return 'Insufficient chocolates in the dispenser';
  }
  let dispensedChocolates = [];
  for (let i = 1; i <= number; i++) {
    dispensedChocolates.push(chocolates[chocolates.length - i]);
  }
  chocolates.splice(-number, number);
  return dispensedChocolates;
}

function dispenseChocolatesOfColor(chocolates, number, color) {
  if (number <= 0) {
    return 'Number cannot be zero/negative';
  }
  let dispensedChocolates = [];
  for (let i = chocolates.length - 1; i >= 0; i--) {
    if (chocolates[i] === color && dispensedChocolates.length < number) {
      dispensedChocolates.push(chocolates[i]);
      chocolates.splice(i, 1);
    }
  }
  if (dispensedChocolates.length === 0) {
    return 'Insufficient chocolates of ' + color + ' color in the dispenser';
  }
  return dispensedChocolates;
}

function noOfChocolates(chocolates) {
  let count = [0, 0, 0, 0, 0, 0, 0];
  chocolates.forEach((chocolate) => {
    switch (chocolate) {
      case 'green':
        count[0]++;
        break;
      case 'silver':
        count[1]++;
        break;
      case 'blue':
        count[2]++;
        break;
      case 'crimson':
        count[3]++;
        break;
      case 'purple':
        count[4]++;
        break;
      case 'red':
        count[5]++;
        break;
      case 'pink':
        count[6]++;
        break;
      default:
        break;
    }
  });
  return count;
}

function sortChocolateBasedOnCount(chocolates) {
  let countMap = new Map();
  chocolates.forEach((chocolate) => {
    if (countMap.has(chocolate)) {
      countMap.set(chocolate, countMap.get(chocolate) + 1);
    } else {
      countMap.set(chocolate, 1);
    }
  });
  let sortedChocolates = Array.from(countMap.keys()).sort(
    (a, b) => countMap.get(b) - countMap.get(a)
  );
  return sortedChocolates;
}

function changeChocolateColor(chocolates, number, color, finalColor) {
  if (number <= 0) {
    return 'Number cannot be zero/negative';
  }
  let count = 0;
  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] === color && count < number) {
      chocolates[i] = finalColor;
      count++;
    }
  }
  if (count === 0) {
    return 'Insufficient chocolates of ' + color + ' color in the dispenser';
  }
  return chocolates;
}

function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
  let count = 0;
  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] === color) {
      chocolates[i] = finalColor;
      count++;
    }
  }
  return [count, chocolates];
}

// Exporting functions for testing purposes
module.exports = {
  addChocolates,
  removeChocolates,
  dispenseChocolates,
  dispenseChocolatesOfColor,
  noOfChocolates,
  sortChocolateBasedOnCount,
  changeChocolateColor,
  changeChocolateColorAllOfxCount,
};
