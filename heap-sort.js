/**
 * @file 堆排序
 */

function heapSort(arr) {
    // 从第一个非叶子节点开始
    for (let i = ~~(arr.length / 2) - 1; i >= 0; i--) {
        adjustHeap(arr, i, arr.length);
    }

    for (let j = arr.length - 1; j > 0; j--) {
        swap(arr, j, 0);
        adjustHeap(arr, 0, j); // 第二次都是在现有的构建树上调整，所以从0开始
    }
    console.log(arr);
}
// 调整堆
function adjustHeap(arr, i, len) {
    let tmp = arr[i];
    // 判断左右节点
    for (let k = 2 * i + 1; k < len; k = k * 2 + 1) {
        if (k + 1 < len && arr[k] < arr[k + 1]) {
            k++;
        }

        if (arr[k] > tmp) {
            arr[i] = arr[k];
            i = k;
        } else {
            break;
        }
    }
    arr[i] = tmp;
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

let arr = [2,3,4,5,7,8,12,9];
heapSort(arr);