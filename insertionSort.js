function insertionSort() {
    var temp, inner;
    for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
        temp = this.dataStore[outer];
        inner = outer;
        while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
            this.dataStore[inner] = this.dataStore[inner - 1];
            --inner;
        }
        this.dataStore[inner] = temp;
    }
}

class CArray {
    constructor() {
        this.dataStore = []
        this.getArr=this.getArr.bind(this)
    }
    getArr() {

        for (let i = 0; i < 50; i++) {
            this.dataStore[i] = Math.floor((Math.random()) * 100)+1
        }
    }

}
l=new CArray()
l.getArr()
console.log(l.dataStore)
insertionSort.apply(l,l.dataStore)