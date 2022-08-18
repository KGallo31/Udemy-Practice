/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const minimum = Math.ceil(arr.length / 2)
    let hash = {}
    let counter = 0
    let digitsRemoved = 0
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = (hash[arr[i]] || 0) + 1
    }
    const freq = Object.values(hash)
    const sorted = freq.sort((a, b) => a - b)
    while (digitsRemoved < minimum) {
        digitsRemoved += sorted.pop()
        counter++
    }
    return counter
};