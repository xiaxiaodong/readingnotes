/**
 * name : 二叉查找树
 * effect : 
 * describe: 
 * author: xiaxiaxiaodong
 * mail: 441658311@qq.com
*/
class Node{
    constructor(key,value){
        this.key = key;
        this.value = value;
    }
    setLeft(node){
        this.left = node;
    }
    setRight(node){
        this.right = node;
    }
}
class BST{
    constructor(){
        this.length = 0;
    }
    put(key,value){
        if( !this.root ){
            this.root = new Node(key,value);
            this.length++;
            return 
        }
        let node = this.root;
        while(true){
            if( key > node.key ){
                if( node.right ){
                    node = node.right;
                }else{
                    node.right = new Node(key,value);
                    this.length++;
                    break
                }
            }else if( key == node.key ){
                node.key = key;
                break
            }else{
                if( node.left ){
                    node = node.left;
                }else{
                    node.left = new Node(key,value);
                    this.length++;
                    break
                }
            }
        }
    }
    get(key){
        let node = this._getFromNode(this.root,key);
        return node.value;
    }
    _getFromNode(node,key){
        if(!node){ return }
        let diff = key - node.value;
        if( diff > 0 ){
            return this._getFromNode(node.right,key)
        }else if( diff < 0 ){
            return this._getFromNode(node.left,key)
        }else{
            return node;
        }
    }
    min(){
        if( this.isEmpty() ){
            return
        }
        this._getLeft(this.root);
    }
    _getLeft(node){
        if( node.left ){
            return this._getLeft(node.left);
        }else{
            return node.key
        }
    }
    max(){
        if( this.isEmpty() ){
            return
        }
        this._getRight(this.root);
    }
    _getRight(node){
        if( node.right ){
            return this._getRight(node.right);
        }else{
            return node.key
        }
    }
    floor(key){
        let node = this._floorNode(this.root,key)
        if( !node ){
            return 
        }
        return node.key
    }
    _floorNode( node ,key ){
        let floorNode
        if( !node ){ return }
        if( node.key > key ){
            return this._floorNode(node.left,key)
        }else if( node.key == key ){
            return node;
        }
        floorNode = this._floorNode(node.right,key)
        if( floorNode ){
            return floorNode
        }else{
            return node
        }
    }
    delete(key){
        let node = this._getFromNode(this.root,key);
        if( !node ){
            return
        }
        if( node.right ){
            let n = node.right,n_root = node;

            if( n.left ){
                n_root = n;
                n = n.left;
                while(true){
                    if( n.left ){
                        n_root = n
                        n = n.left
                    }else{
                        // 删除左树后,右树应该取代root节点的位置
                        node.key = n.key;
                        node.value = n.value;
                        if( n_root.right ){
                            n_root.key = n.right.key
                            n_root.value = n.right.value
                            n_root.left = n.right.left
                            n_root.right = n.right.right
                        }else{
                            delete n_root.right;
                        }
                        break
                    }
                }
            }else{
                node.key = n.key;
                node.value = n.value;
                if( n.right ){
                    n_root.left = n.right;
                }else{
                    delete n_root.right;
                }
            }
            
        }else{
            node = node.left
        }
        this.length--
    }
    
    size(){
        return this.length
    }
    isEmpty(){
        return this.size() == 0 ? true : false;
    }
}

module.exports = BST;
