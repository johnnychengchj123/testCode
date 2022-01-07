import { ListNode } from '../leetcode/list' // TreeNode

const myReverse = (head, tail) => {
  let prev = tail.next
  let p = head
  while (prev !== tail) {
    const nex = p.next
    p.next = prev
    prev = p
    p = nex
  }
  return [tail, head]
}

var reverseKGroup = function (head, k) {
  const hair = new ListNode(0)
  hair.next = head // 存储原数组
  let pre = hair

  while (head) {
    let tail = pre
    // 1.查看剩余部分长度是否大于等于 k, 长度不够直接返回原数组
    for (let i = 0; i < k; ++i) {
      tail = tail.next
      if (!tail) {
        return hair.next
      }
    }
    // 长度足够
    const nex = tail.next
    // 反转k个
    ;[head, tail] = myReverse(head, tail)
    // 把子链表重新接回原链表
    pre.next = head
    tail.next = nex
    pre = tail
    head = tail.next
  }
  hair.visualShow()

  return hair.next
}

export default function () {  
  ListNode.show(reverseKGroup(ListNode.create([1, 2, 3, 4, 5]), 2))
}
