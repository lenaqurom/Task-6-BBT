/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 /**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkHight = function(node) {
    if(node==null){
        return 0;
    }
    let leftHight = checkHight(node.left);
    let rightHight = checkHight(node.right);

    if(leftHight==-1 || rightHight==-1 || Math.abs(leftHight-rightHight)>1){
        return -1;
    }
    return Math.max(leftHight,rightHight)+1;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return checkHight(root)!= -1;
};

