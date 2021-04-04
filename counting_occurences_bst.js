function Node(data,left,right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.count = 1;
    this.show = show;
}

function update(data) {
    let grade = this.find(data);
    grade.count++;
    return grade;
}

function prArray(arr) {
    console.log(arr[0].toString() + ' ');
    for (let i = 1;i < arr.length;++i) {
        console.log(arr[i].toString() + ' ');
        if(i % 10 == 0) {
            console.log("\n");
        }
    }
}

function genArray(length) {
    const arr = [];
    for(let i = 0;i < length;++i) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}