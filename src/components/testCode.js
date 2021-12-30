var findKthLargest = function(nums, k) {
  if(!nums.length) return -1
  // 调堆
  let heapSort = function(arr, start, end) {
      let temp = arr[start]
      for(let j=2*start+1; j<=end; j=2*j+1) {
          if(j<end && arr[j] < arr[j+1]) j++
          if(temp > arr[j]) break
          arr[start] = arr[j]
          start = j
      }
      arr[start] = temp
  }
  let len = nums.length
  for(let i=Math.floor(len/2-1); i>=0; i--)
      heapSort(nums, i, len-1)
  for(let i=len-1; i>0; i--) {
      let temp = nums[0]
      nums[0] = nums[i]
      nums[i] = temp
      heapSort(nums, 0, i-1) 
  }
  return nums[len-k]
};


export default function () {
  findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)
  console.log('findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4): ', findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
}
