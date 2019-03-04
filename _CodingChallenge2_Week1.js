challenge.fibonacci = function (n) {
    if (n < 2) {
        return n
    }
    return challenge.fibonacci(n - 1) + challenge.fibonacci(n - 2)
};