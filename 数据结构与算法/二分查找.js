/*
* 二分查找
* 查找数组必须是有序的
* */

// 递归形式
let arr = [1, 2, 4, 5, 8, 10, 12, 18];
function binarySearch_digui(left, right, target){
    if (left > right){
        return -1
    }
    let mid = Math.ceil((left + right) / 2);
    if (arr[mid] === target){
        return mid;
    }else if (arr[mid] > target){
        // return 函数（...）
        return binarySearch_digui(left, mid-1, target)
    }else {
        return binarySearch_digui(mid + 1, right, target);
    }
}
let res1 = binarySearch_digui(0, arr.length-1, 12);
console.log(res1);

// 非递归形式
function binarySearch_feldigui(left, right, target){
    while (left <= right){
        let mid = Math.ceil((left + right) / 2);
        if (arr[mid] === target){
            return mid;
        }else if (arr[mid] > target){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return -1;
}
let res2 = binarySearch_feldigui(0, arr.length-1, 12);
console.log(res2);