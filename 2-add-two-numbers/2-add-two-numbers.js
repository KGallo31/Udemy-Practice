/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let currentL1 = l1
    let currentL2 = l2
    let strL1 = ''
    let strL2 = ''
//  getting the two list turning them into strings until one reaches its end
    while(currentL1 && currentL2){
        strL1 += currentL1.val
        strL2 += currentL2.val
        currentL1 = currentL1.next
        currentL2 = currentL2.next
    }
//  getting the rest of a list 
    if(currentL1){
        while(currentL1){
            strL1 += currentL1.val
            currentL1 = currentL1.next
        }
    }
    if(currentL2){
        while(currentL2){
            strL2 += currentL2.val
            currentL2 = currentL2.next
        }
    }
    strL1 = reverse(strL1)
    strL2 = reverse(strL2)
    // console.log(strL1)
    // console.log(BigInt(strL1))
    let num1 = BigInt(strL1)
    let num2 = BigInt(strL2)
    // let num1 = parseInt(strL1)
    // let num2 = parseInt(strL2)
    let sum = ((num1 + num2)).toString()
    console.log(sum)
    sum = reverse(sum)
    let dummy = new ListNode(1)
    let newHead = dummy
    for(let digit of sum){
        dummy.next = new ListNode(digit)
        dummy = dummy.next
    }
    return newHead.next  
};

const reverse = (s) => {
    if(s.length === 1) return s
    let char = s.substring(0,1)
    s = s.substring(1)
    return reverse(s) + char
}

// l1 = 3 => 2 => 1
// l2 = 2 => 1 => 4
