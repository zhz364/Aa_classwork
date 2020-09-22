function sum(...nums){
    
    let total = 0;
    // console.log(nums);
    nums.forEach(ele => {
        total += ele;
    })
    return total;
}

console.log(sum(1, 2, 3, 4) === 10);
console.log(sum(1, 2, 3, 4, 5) === 15);