function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
};

function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };

    
    this.isPresent = function(root, val) {
        if (!root) return 0;
        if (root.val === val) return 1;

        let leftCheck = this.isPresent(root.left, val);
        let rightCheck = this.isPresent(root.right, val);
        if (leftCheck || rightCheck) return 1;
        return 0;
	};

};