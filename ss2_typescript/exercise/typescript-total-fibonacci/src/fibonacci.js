function fibonacci(num) {
    if (num < 2) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
var sum = 0;
for (var i = 0; i < 5; i++) {
    console.log( "số fibonacci thứ  : " + i +   " : " + fibonacci(i));
    sum += i;
}
console.log("tổng dãy số trên là  : " + sum);
