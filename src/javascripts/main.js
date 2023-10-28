//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

function getMax(x, y, z) {
    return Math.max(x, y, z);
  }
  
  function getMin(x, y, z) {
    return Math.min(x, y, z);
  }
  
  function getMean(x, y, z) {
    return (x + y + z) / 3;
  }
  
  function compare(word1, word2) {
    if (word1 === word2) {
      return 0;
    } else if (word1 > word2) {
      return 1;
    } else {
      return -1;
    }
  }
  
  function getCharPerLine(str, indent) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        if (indent) {
          result += ' '.repeat(i) + str[i] + '\n';
        } else {
          result += str[i] + '\n';
        }
      }
    }
    return result;
  }
  
  function arrow(size) {
    let result = '';
    for (let i = 1; i <= size; i++) {
      result += '*'.repeat(i) + '\n';
    }
    for (let i = size - 1; i > 0; i--) {
      result += '*'.repeat(i) + '\n';
    }
    return result;
  }
  
  // Test the functions
  console.log(getMax(5, 10, 3));
  console.log(getMin(5, 10, 3));
  console.log(getMean(5, 10, 3));
  console.log(compare("apple", "banana"));
  console.log(getCharPerLine("Hello World!", false));
  console.log(getCharPerLine("Hello World!", true));
  console.log(arrow(3));
  console.log(arrow(7));
  
  