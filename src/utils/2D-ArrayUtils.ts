const findMinMaxInColumn = (arr: number[][], columnIndex: number): { min: number, max: number } => {
    if (arr.length === 0) {
        // Handle empty array case
        return { min: NaN, max: NaN };
    }
    let min = arr[0][columnIndex];
    let max = arr[0][columnIndex];
    for (let i = 1; i < arr.length; i++) {
        const currentNumber = arr[i][columnIndex];
        if (currentNumber < min) {
        min = currentNumber;
        }
        if (currentNumber > max) {
        max = currentNumber;
        }
    }
    return { min, max };
};
  

export default findMinMaxInColumn