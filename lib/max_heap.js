class MaxHeap {
  constructor(){
    this.array = [null];
  }

  getParent(idx){
    return Math.floor(idx/2);
  }
  getLeftChild(idx){
    return idx*2;
  }
  
  getRightChild(idx){
    return idx*2 +1;
  }

  siftUp(idx){
    if(idx === 0) return;
    let item = this.array[idx];
    let parent = this.array[this.getParent(idx)];
     while(item>parent && parent !== null){
       this.array[this.getParent(idx)] = item;
       this.array[idx] = parent;
      // [parent, item] = [item, parent]; //swap vals

      idx = this.getParent(idx);
      item = this.array[idx];
      parent = this.array[this.getParent(idx)];
     }
  }

  insert(val){
    this.array.push(val);
    this.siftUp(this.array.indexOf(val));
  }

  siftDown(idx){
    if (idx === 0) return;
    let item = this.array[idx];
    let leftChild = this.array[this.getLeftChild(idx)] || - Infinity;
    let rightChild = this.array[this.getRightChild(idx)] || -Infinity;

    while(item < leftChild || item < rightChild ){
      if(leftChild>rightChild){
        //swap
        [this.array[idx], this.array[this.getLeftChild(idx)]] = [leftChild, item];
      
        idx = this.getLeftChild(idx);
        item = this.array[idx];
        leftChild = this.array[this.getLeftChild(idx)] || -Infinity ;
        rightChild = this.array[this.getRightChild(idx)] || -Infinity;
      }
      else{
        [this.array[idx], this.array[this.getRightChild(idx)]] = [rightChild, item];      

        idx = this.getRightChild(idx);
        item = this.array[idx];
        leftChild = this.array[this.getLeftChild(idx)] || -Infinity;
        rightChild = this.array[this.getRightChild(idx)] || -Infinity;
      }
    }
  }
  deleteMax(){
    if(this.array.length<=1) return null;
    if(this.array.length === 2) return this.array.pop();
    const last = this.array.pop();
    let max = this.array.splice(1,1,last);
    this.siftDown(1);
    return max[0];
  }
}

// const heap = new MaxHeap();
// heap.array = [null,  40, 30, 5, 20, 25, 16]
// heap.siftDown(3);
// console.log(heap.array)
module.exports = {
  MaxHeap
};
