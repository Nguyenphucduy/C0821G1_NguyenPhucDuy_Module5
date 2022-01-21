function fibonacci(num: number): number {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}
let sum = 0;
for(let i = 0; i < 5; i++) {
    console.log( "dãy số fibonacci là : " + i + " : " + fibonacci(i));
    sum += i;
}

console.log("sum fibonacci là : " + sum);
