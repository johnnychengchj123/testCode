// 链表相交
// 自己写的时候用的是Array，答案是Set
var getIntersectionNode = function(headA, headB) {
  const visited = new Set();
  let temp = headA;
  while (temp !== null) {
      visited.add(temp);
      temp = temp.next;
  }
  temp = headB;
  while (temp !== null) {
      if (visited.has(temp)) {
          return temp;
      }
      temp = temp.next;
  }
  return null;
}; 