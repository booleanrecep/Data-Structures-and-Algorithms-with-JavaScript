function bubbleSort(arr) {
    var numElements =arr.length ;
    for (let o =0;o<arr.length;o++) {
        for (let i = 0; i < o; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp

            }
        }
    }
     console.log(arr.toString());

}
a=Math.floor(performance.now())

bubbleSort([1,2,74,5,9])
b=Math.floor(performance.now())

// console.log(b-a)