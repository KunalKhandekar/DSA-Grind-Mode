const arr = [2, 45, 7, 9, 32, 7, 99, 3, 2, 10];

function insertionSort(arr) {
    // Start from the second element (index 1) and iterate through the array
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be positioned correctly
        let curr = arr[i];
        // Set the index of the previous element
        let prev = i - 1;

        // Shift elements that are greater than 'curr' one position to the right
        while (arr[prev] > curr && prev >= 0) {
            arr[prev + 1] = arr[prev]; // Move the larger element to the right
            prev--; // Move to the previous element
        }

        // Insert 'curr' at its correct position
        arr[prev + 1] = curr;
    }

    return arr;
}

console.log(insertionSort(arr));