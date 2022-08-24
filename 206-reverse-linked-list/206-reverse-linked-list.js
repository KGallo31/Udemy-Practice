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
var reverseList = function(head) {
    let arr = []
    
    let currentNode = head
    while(currentNode){
        arr.push(currentNode.val)
        currentNode = currentNode.next
    }
    let dummy = new ListNode(1)
    let newHead = dummy
    for(let i = arr.length-1;i>-1;i--){
        dummy.next = new ListNode(arr[i])
        dummy = dummy.next
    }
    return newHead.next
    
};