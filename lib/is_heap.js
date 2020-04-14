// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
  for(let i = array.length-1; i>1; i--){
    const child = array[i];
    const parent = array[Math.floor(i/2)];
    if(parent<child) return false;
  }
  return true;
}


module.exports = {
  isMaxHeap
};
