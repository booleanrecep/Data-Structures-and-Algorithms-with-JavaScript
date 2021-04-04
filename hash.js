class HashTable {
    constructor() {
        this.table = new Array(137);
        this.simpleHash = this.simpleHash;
        this.showDistro = this.showDistro;
        this.put = this.put;
        this.betterHash = this.betterHash;
        //        this.get = get;
    }

    get(data) {
    }

    put(data) {
        //        let pos = this.simpleHash(data);
        let pos = this.betterHash(data)
        this.table[pos] = data
    }

    betterHash(string) {
        const H = 37;
        let total = 0;
        for (let i = 0; i < string.length; ++i) {
            total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        return parseInt(total)

    }

    simpleHash(data) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }

    showDistro() {
        let n = 0;
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] != undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    }

}

aa= new HashTable()
aa.put("recep")
aa.put("pecer")
// aa.showDistro()