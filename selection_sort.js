function selecetionSort(arr) {
    let nArr=[]
    let l = arr.length;
    for (let o=0;o<l;o++) {
        for(let i=0;i<l;i++) {
            if(arr[o] < arr[i]) {
                    nArr[o]=arr[o]
            }
//             nArr[o]=i
        }
    }
    return nArr
}

