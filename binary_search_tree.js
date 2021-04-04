function NNode(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = function() {
        return this.data;
    }

}

    

class BST {

    constructor() {
        this.root = null;
        this.insert = this.insert.bind(this);
        this.inOrder = this.inOrder.bind(this);
        this.postOrder = this.postOrder.bind(this);
        this.preOrder = this.preOrder.bind(this);

    }
    getMin() {
        let current = this.root;
        while (!(current.left == null)) {
            current = current.left
        }
        return current.data
    }

    getMax() {
        let current = this.root;
        while(!(current.right==null)) {
            current= current.right
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (current.data != data) {
            if(data<current.data){
                current=current.left;
            }else{
                current = current.right;
            }
            if(current == null) {
                return null
            }
        }
        return current;
    }
    inOrder(node=this.root) {
        if (!(node == null)) {
            this.inOrder(node.left);
            console.log(node.show() + " ");
            this.inOrder(node.right)
        }
    }

    preOrder(node=this.root) {
        if (!(node == null)) {
            console.log(node.show() + " ");
            this.inOrder(node.left);
            this.inOrder(node.right)
        }
    }
    postOrder(node=this.root) {
        if (!(node == null)) {
            this.inOrder(node.left);
            this.inOrder(node.right)
            console.log(node.show() + " ");

        }
    }
    insert(data) {
        const n = new NNode(data,null,null);
        if (this.root == null) {
            this.root = n;
        } else {
            let current = this.root;
            let parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current == null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current == null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }
}

nums = new BST()
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.find(22)
