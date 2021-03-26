const mergeSort = (input) => {
    const output = [...input]

    const middle = Math.floor(input.length / 2)
    if (!middle) return output

    const left = mergeSort(output.slice(0, middle))
    const right = mergeSort(output.slice(middle))

    let index = 0
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        output[index++] = left[leftIndex] < right[rightIndex] ? left[leftIndex++] : right[rightIndex++]
    }

    while (leftIndex < left.length) {
        output[index++] = left[leftIndex++]
    }

    while (rightIndex < right.length) {
        output[index++] = right[rightIndex++]
    }

    return output
}

console.log(mergeSort(
    [4, 2, 1, 10, 43, 23, 321, 5],
))