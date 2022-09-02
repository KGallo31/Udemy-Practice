/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    let arr1 = []
    let arr2 = []
    
    const dfs = (node,arr) => {
        if(node === null) return arr.push("null")
        arr.push(node.val)
        return dfs(node.left,arr),dfs(node.right,arr)
    }
    dfs(p,arr1)
    dfs(q,arr2)
    if(arr1.length !== arr2.length) return false
    for(let i = 0;i<arr1.length;i++){
        if(arr1[i] !== arr2[i]) return false
    }
    return true
};