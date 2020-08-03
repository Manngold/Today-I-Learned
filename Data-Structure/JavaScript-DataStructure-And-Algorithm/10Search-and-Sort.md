# Search and Sort

자료를 검색하고 해당 자료를 정렬하는 것은 근간이 되는 알고리즘이다.

탐색 : 데이터를 얻기 위해서 자료 구조의 항목들을 반복적으로 접근한다

정렬 : 자료 구조의 항목들을 순서대로 위치시키는 것

## 탐색

탐색에는 두 가지 주요 기법이 존재한다.

1. 선형 탐색 - 배열의 각 항목을 한 인덱스씩 순차적으로 접근하면서 동작한다(정렬된 배열, 정렬되지 않은 배열 모두 사용 가능)

```
function linearSearch(arr, n) {
    for (const i of arr) {
        if (i == n) return true;
    }
    return false;
}

linearSearch([1, 3, 4, 2, 6, 9, 0, 7], 6); // true
```

코드를 보면 알겠지만 첫번째 인덱스부터 인덱스가 1씩 증가하면서 n의 값을 찾는다

따라서 시간 복잡도는 O(n)을 갖게된다. 왜냐하면 10과 같이 존재하지 않는 값을 조회하는 최악의 경우에서 배열의 모든 데이터 값에 접근해야 하기 때문이다.

2. 이진 탐색 - 정렬된 자료를 바탕으로 중간 값을 활용해서 원하는 값에 도달하는 방법이다.

```
function binarySearch(arr, t) {
    let lowIndex = 0,
        highIndex = arr.length - 1;

    while (lowIndex <= highIndex) {
        const midIndex = Math.floor((lowIndex + highIndex) / 2);
        if (arr[midIndex] == t) {
            return true;
        } else if (arr[midIndex] < t) {
            lowIndex = midIndex + 1;
        } else {
            highIndex = midIndex - 1;
        }
    }

    return false;
}

binarySearch([1, 2, 3, 4], 4); // true
binarySearch([1, 2, 3, 4], 5); // false
```

정렬된 배열이라는 가정 하에 중간 값을 활용해서 우리가 찾는 타겟이 중간값보다 큰지 작은지를 판단한다.

이후 작다면 lowIndex를 midIndex + 1을 해주고 다시 탐색을 하고, 크다면 highIndex를 midIndex - 1로 주고 탐색을 진행한다

+1 과 -1을 midIndex에 해주는 이유는 midIndex의 값이 타겟과 일치하지 않기 때문에 다음 값으로 넘어가는 것이다.

따라서 O(logN)의 시간복잡도를 갖게 된다.

## 정렬

### 거품 정렬

전체 배열을 순회하면서 항목이 다른 항목보다 큰 경우 두 항목을 교환한다.

```
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (arr[i] < arr[j]) {
                swap(arr, i, j);
            }
        }
    }
    return arr;
}

bubbleSort([6, 1, 2, 3, 4, 5]);
```

모든 짝을 비교하기 때문에 최악의 정렬이라고 볼 수 있따

시간복잡도 : O(N^2)

### 선택 정렬

선택 정렬은 가장 작은 요소를 찾아서 현 위치에 삽입하는 방식으로 동작한다.

```
function swap(arr, i, min) {
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        if (i != min) swap(arr, i, min);
    }

    return arr;
}

selectionSort([6, 1, 23, 4, 2, 3]);
```

가장 작은 요소의 인덱스 값을 기억하고 탐색을 할 때마다 더 작은 값을 발견하면 인덱스 값을 바꿔준다

그리고 배열의 순회가 끝나면 처음 인덱스 값과 최솟값의 인덱스 값을 확인한 뒤, 다르다면 swap 함수를 통해서 두 값을 바꿔준다

시간복잡도 : O(N^2)

### 삽입정렬

삽입정렬은 배열을 순회하면서 정렬되지 않은 항목들을 이동시켜서 정렬한다.

```
function insertionSort(arr) {
    let i, j, temp;

    for (i = 0; i < arr.length - 1; i++) {
        j = i;
        while (arr[j] > arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            j--;
        }
    }

    return arr;
}

insertionSort([6, 1, 23, 4, 2, 3]);
```

현재 인덱스에서 값이 다음 인덱스 값 보다 크다면 작은 값을 만날 때까지 이동시킨다.

시간복잡도 : O(N^2)

### 계수정렬

계수 정렬은 값을 비교하지 않고 숫자에 대해서만 동작하고 등장 횟수를 활용한다.

```
function countSort(arr) {
    let hash = {},
        countArr = [];
    for (const i of arr) {
        if (!hash[i]) hash[i] = 1;
        else hash[i]++;
    }

    for (const key in hash) {
        console.log(key);
        countArr.push(parseInt(key));
    }

    return countArr;
}

countSort([6, 1, 23, 2, 3, 2, 1, 2, 2, 3, 3, 1, 123, 123, 4, 2, 3]);
```

제한된 범위 내에서 정수를 정렬 할 때에는 계수 정렬이 유용하다.
