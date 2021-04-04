function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    //     this.size = size;
    this.union = union;
    this.intersect = intersect;
    //     this.subset = subset;
        this.difference = difference;
    this.show = show;
    this.contains = contains;

    function intersect(set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }
     function difference(set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (!set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }

    function add(data) {
        if (this.dataStore.indexOf(data) < 0) {
            this.dataStore.push(data);
            return true;
        }
        return false;
    }

    function remove(data) {
        const pos = this.dataStore.indexOf(data)
        if (pos > -1) {
            this.dataStore.splice();
            return true;
        } else {
            return false;
        }

    }

    function show() {
        return this.dataStore;
    }

    function contains(data) {
        if (this.dataStore.indexOf(data) > -1) {
            return true;
        } else {
            return false;
        }

    }

    function union(set) {
        const tempSet = new Set();
        for (let i = 0; i < this.dataStore.length; i++) {
            tempSet.add(this.dataStore[i])
        }
        for (let i = 0; i < set.dataStore.length; i++) {
            if (!tempSet.contains(set.dataStore[i])) {
                tempSet.dataStore.push(set.dataStore[i]);
            }
        }
        return tempSet;
    }
}

s1 = new Set()
s1.add("r")
s1.add("e")
s2 = new Set()
s2.add("c")
s2.add("e")
s1.show()
s2.show()
