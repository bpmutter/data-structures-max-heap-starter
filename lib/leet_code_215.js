// Use this file as a scratch pad to complete the problem at
// https://leetcode.com/problems/kth-largest-element-in-an-array/

// Find the kth largest element in an unsorted array. Note that it is the kth
// largest element in the sorted order, not the kth distinct element.

const { MaxHeap } = require('./max_heap');

class MaxHeapifier extends MaxHeap{
    constructor(array){
        super(array)
    }
    static heapify(nums){
        const maxHeap = new MaxHeap();
        nums.forEach(num => maxHeap.insert(num));
        return maxHeap;
    }
}
function findKthLargest(nums,k){
    const heap = MaxHeapifier.heapify(nums);
    
    let kMax;
    for(let i = 0; i<k; i++){
        kMax = heap.deleteMax();
    }
    return kMax;
}


const arr = [3, 2, 1, 5, 6, 4]
// console.log(quickSort(arr));
console.log(findKthLargest(arr,2));