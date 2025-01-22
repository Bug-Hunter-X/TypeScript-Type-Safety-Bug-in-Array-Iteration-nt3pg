function printAllNumbers(numbers: number[]): void {
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
      console.log(numbers[i]);
    } else {
      console.error(`Element at index ${i} is not a number`);
    }
  }
}

const myNumbers: (number | string)[] = [1, 2, 3, "four", 5];

printAllNumbers(myNumbers); 