const cansum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (cansum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
};


console.log(cansum(7, [2, 3]));        
console.log(cansum(7, [5, 3, 4, 7]));  
console.log(cansum(7, [2, 4]));
console.log(cansum(8, [2, 3, 5]));     
console.log(cansum(300, [7, 14]));     
