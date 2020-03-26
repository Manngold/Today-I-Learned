# Array Of JS

가장 많이 사용되는 자료구조로 다양한 방법의 연산이 존재한다

## 삽입

`.push(element)` 메소드로 배열에 요소를 삽입할 수 있다

해당 메소드는 배열의 끝에 요소를 삽입할 수 있다

```
var arr = [1,2,3,4];

arr.push(5);
```

시간 복잡도는 이론상 O(1)이지만 자바스크립트 엔진에 따라 달라진다는 것을 유념해야한다

## 삭제

`.pop()` 메소드를 사용하여 배열의 마지막 요소를 삭제할 수 있다

또한 삭제된 요소를 반환한다

```
var arr = [1,2,3,4,5];

arr.pop(); // 5가 제거되고 반환한다
```

`.shift()` 메소드는 앞에 요소를 삭제하는 메소드이다

```
var arr = [1,2,3,4];

arr.shift(); // 1이 제거되고 반환한다
```

## 접근

배열에 대한 접근은 인덱스로 이루어진다

메모리의 주소로부터 직접 값을 얻기 때문에 시간 복잡도는 O(1)이 된다

```
var arr = [1,2,3,4];

arr[1] // 2
```

## 반복

반복은 자료 구조 내에 담긴 항목들을 하나씩 접근하는 과정이다

여러 방법들이 존재하고 모든 방법은 O(n)의 시간 복잡도를 갖게 된다

### for(변수; 조건; 수정)

for문은 가장 많이 사용되는 방법이다

```
var arr = [1,2,3,4,5];

for(var i = 0; i < arr.length; i++){
    console.log(arr[i])
}
```

### for( in )

인덱스를 하나씩 호출하는 방법으로 in 앞에 지정된 변수에 배열의 인덱스를 순차적으로 넣어준다

```
var arr = [1, 2, 3, 4, 5];

for (let idx in arr) {
    console.log(arr[idx]);
}
```

idx의 값은 0부터 4까지 들어가고 해당 값을 활용하여 arr의 요소값에 접근하면서 기본 for문과 같은 값을 값을 반환한다

### for( of )

for( of )는 for( in )과 다르게 element를 반환한다

```
var arr = [1, 2, 3, 4, 5];

for (let ele of arr) {
    console.log(ele);
}
```

## 배열 메소드

### .slice(begin, end)

`.slice()`는 기존 배열을 수정하지 않고 일부를 반환한다

```
var arr = [1, 2, 3, 4, 5];

arr.slice(1, 3);
```

start index는 포함하지만 end index는 포함하지 않는다는 것을 주의하자

빈 파라미터일때는 배열 전체를 반환한다.

이 때 반환되는 값의 메모리 주소는 다르므로 비교를 했을 때, false가 출력된다

### .splice(begin, size, ele1, ele2)

기존 항목을 제거하거나 신규 항목을 추가함으로써 배열의 내용을 반환하고 변경한다

`.slice()`와 마찬가지로 두번째 파라미터까지 시작, 끝에 대한 정보가 들어가고 이후에는 삽입 할 요소값이 들어간다

```
var arr = [1, 2, 3, 4, 5];

arr.splice(1, 3, 6, 7, 8, 9);
```

반환되는 값은 2, 3이고 6, 7, 8, 9가 기존 배열에 추가된다

### .concat()

신규 항목을 배열의 맨 뒤에 추가한 다음 해당 배열을 반환한다

```
var arr = [1, 2, 3, 4, 5];

arr.concat([6, 7, 8, 9]);
```

### Spread operator

`...`으로 표현된다 인자값을 확장하는데 사용된다

```
function addNum(a, b, c, d) {
    return a + b + c + d;
}
nums = [1, 2, 3, 4, 5, 6];
addNum(...nums);
```

앞에서부터 1, 2, 3, 4가 인자값으로 들어가고 초과된 5, 6은 버려지게 된다

## 문제1

어떤 수가 주어졌을 때, 배열 내의 어떤 항목 두 개를 합쳐야 해당 수가 되는지 찾아라

-   시간 복잡도 O(n^2)의 풀이법

```
function findSum(arr, dest) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == dest) {
                return [arr[i], arr[j]];
            }
        }
    }
    return -1;
}

findSum([1, 2, 3, 4, 5], 9);
```

for문이 두 번 돌면서 시간복잡도는 O(n^2)으로 커지게 된다.

-   시간 복잡도 O(n)의 풀이법(해시 테이블 활용)

```
function findSum(arr, dest) {
    var hashTable = {};

    for (var i in arr) {
        var diff = dest - arr[i];

        if (hashTable[arr[i]] != undefined) {
            return [arr[i], dest - arr[i]];
        } else {
            hashTable[diff] = i;
        }
    }
    return -1;
}

findSum([1, 2, 3], 5);
```

배열의 요소와 목표값의 차를 해쉬테이블에 저장하면서 새로 등장하는 배열 요소가 해쉬 테이블에 있으면 그 값을 리턴해주는 것이다

## 문제 2

배열의 공통된 요소 찾기

```
var arr1 = [1, 5, 5, 10];
var arr2 = [3, 4, 5, 5, 10];
var arr3 = [5, 5, 10, 20];

function commonElements(kArr) {
    var hashTable = {};
    var answer = [];

    for (var i in kArr) {
        var currentArr = kArr[i];
        for (var j in currentArr) {
            if (currentArr[j] in hashTable) {
                hashTable[currentArr[j]] += 1;
            } else {
                hashTable[currentArr[j]] = 1;
            }
        }
    }

    for (var i in hashTable) {
        if (hashTable[i] > 1) {
            answer.push(i);
        }
    }
    return answer;
}

commonElements([arr1, arr2, arr3]);

```

## JS 함수형 배열 메소드

JS는 특정 부분을 함수형 프로그래밍 언어처럼 작성할 수 있다.

### map

매개변수로 전달된 함수 변환을 배열의 모든 항목에 적용한 뒤, 신규 배열을 반환한다

```
//ES5

var arr = [1, 2, 3, 4, 5];

arr.map(function(value) {
    return value * 10;
});

//ES6

var arr = [1, 2, 3, 4, 5];

arr.map(value => value * 10);

```

ES6의 Arrow Function을 활용하면 깔끔한 코드가 나오게 된다

### filter

filter 함수는 매개변수로 전달된 조건을 충족시키는 배열들을 반환하고 기존 배열은 변경되지 않는다

```
//ES5
var arr = [1, 2, 3, 4, 5];

arr.filter(function(value) {
    return value % 2 == 0;
});

//ES6
arr.filter(value => value % 2 == 0);

console.log(arr);
```

### reduce

매개변수로 전달된 변환 함수를 사용해 배열의 모든 항목을 하나의 값으로 결합한다

```
var sum = [0, 1, 2, 3, 4].reduce(function(prev, curr){
    return prev + curr;
});

console.log(sum) // 10
```

배열을 순회하면서 실행되는 로직은 prev에 담기고 curr와 prev가 다시 로직을 수행한다

첫번째 매개변수인 함수 외에도 두번째로 initialvalue가 들어갈 수 있는데 initValue를 시작으로 로직이 수행된다

```
var sum = [0, 1, 2, 3, 4].reduce(function(prev, curr){
    return prev + curr;
},1);

console.log(sum) // 11
```

### 다차원 배열

JS에는 다차원 배열이 없지만 가변 배열이 있다.

> 가변 배열 : 항목이 배열인 배열

```
function matrix(row, col) {
    var arr = new Array(row);
    for (var i = 0; i < col; i++) {
        arr[i] = new Array(row);
    }
    return arr;
}

var newArr = matrix(3, 3);
```

3 \* 3 배열을 생성한다

조건문을 활용한 1 ~ 9까지의 값을 할당

```
var cnt = 1;
for (var i = 0; i < newArr.length; i++) {
    for (var j = 0; j < newArr[0].length; j++) {
        newArr[i][j] = cnt;
        cnt += 1;
    }
}
```

[[1,2,3],[4,5,6],[7,8,9]]를 구성하는 배열이 된다
