//冒泡排序
function bubbleSort(arr) {
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for (let j = 0; j < len - 1 - i; j++){
            if (arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log(arr);
}
//选择排序
function selectSort(arr){
    let len = arr.length;
    for (let i = 0; i < len - 1; i++){
        let minIndex = i;
        // 往后选择最小值
        for (let j = i+1; j < len; j++){
            if (arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    console.log(arr)
}
//快速排序
function partition(arr, left, right) {
    let pivot = arr[left];
    while(left < right){
        while(left < right && arr[right] > pivot){
            right --;
        }
        arr[left] = arr[right];
        while(left < right && arr[left] <= pivot){
            left ++;
        }
        arr[right] = arr[left];
    }
    arr[left] = pivot;
    return left;
}
function quickSort(arr, left, right){
    if (left < right){
        let pos = partition(arr, left, right);
        quickSort(arr, left, pos-1);
        quickSort(arr, pos+1, right);
    }
    return arr;
}
//归并排序
function mergeSort(arr){
    if (arr.length < 2){
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right){
    let res = [];
    while(left.length && right.length){
        if (left[0] > right[0]){
            res.push(right.shift());
        }else{
            res.push(left.shift());
        }
    }
    if (left.length){
        res = res.concat(left);
    }
    if (right.length){
        res = res.concat(right);
    }
    return res;
}
//直接插入排序
function insertSelect(arr){
    let len = arr.length;
    for (let i = 1; i < len; i++){
        let tmp = arr[i];
        j = i - 1;
        while(j >= 0 && arr[j] > tmp){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = tmp;
    }
    console.log(arr);
}
//希尔排序
function shellSort(arr){
    let len = arr.length;
    let d = Math.floor(len / 2);  //增量为 增量/2
    while(d >= 1){
        for (let i = 0; i < d; i++){
            // 内部为插入排序
            for (let j = i + d; j < len; j += d){
                let tmp = arr[j];  // 赋值待进行插入排序的元素
                let z = j - d;  //往前比较
                while(z >= i && arr[z] > tmp){
                    arr[z + d] = arr[z];
                    z -= d;
                }
                arr[z + d] = tmp;
            }
        }
        d = Math.floor(d / 2);
    }
    console.log(arr);
}

let arr1 = [8, 2, 4, 1, 3, 6, 7, 5, 9, 0];
let arr2 = [8, 2, 4, 1, 3, 6, 7, 5, 9, 0];
let arr3 = [8, 2, 4, 1, 3, 6, 7, 5, 9, 0];
let arr4 = [8, 2, 4, 1, 3, 6, 7, 5, 9, 0];

insertSelect(arr1);
shellSort(arr2);