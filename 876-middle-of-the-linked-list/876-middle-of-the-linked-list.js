/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    
    let currentNode = head
    let arr = []
    while(currentNode){
        arr.push(currentNode.val)
        currentNode = currentNode.next
    }
    let mid = Math.floor(arr.length / 2)
    let dummy = new ListNode(1)
    let newHead = dummy
    for(let i= mid;i<arr.length;i++){
        dummy.next = new ListNode(arr[i])
        dummy = dummy.next
    }
    return newHead.next
    
};