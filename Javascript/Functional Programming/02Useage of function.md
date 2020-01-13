# Useage of function

## 값으로서의 함수

JS에서는 함수도 객체이며 일종의 값으로 표현한다

우리는 함수를 `function a(){...}`이라는 형식으로 표현을 하는데 `var a = function(){...}`이란 형식으로 변수 a에 담긴 값이라는 것을 알 수 있다

또한 함수는 객체의 값으로 포함될 수 있다

```
a = {
    b: function(){...}
}
```

a라는 객체 안에 b라는 key에 함수라는 value가 들어가있다

위처럼 해석을 할 수도 있고 더 나은 해석은 a라는 객체에 b라는 `property`가 존재하는데 그 안에 함수가 존재하므로 그 함수를 `method`라고 부른다

함수는 값이기 때문에 다른 함수의 인자로 전달할 수도 있다

```
function cal(func, num){
    return func(num)
}

function increase(num){
    return num+1
}

function decrease(num){
    return num-1
}

console.log(cal(increase, 1));
console.log(cal(decrease, 1));
```

cal이라는 함수는 인자값으로 함수와 숫자를 받고 받은 함수의 인자값으로 받은 숫자를 넣어서 실행한 결과값을 리턴을 하게 된다

cal(increase, 1)을 실행 -> increse(1)을 실행 -> increase(1)의 결과값인 2를 리턴하면서 increase함수 종료 -> 그 값을 리턴하면서 cal 함수 종료

## 값으로서의 함수와 콜백 - 함수의 용도

리턴값으로의 함수의 사용

```
function cal(mode) {
    var funcs = {
        plus: function(left, right) {
            return left + right;
        },
        minus: function(left, right) {
            return left - right;
        }
    };
    return funcs[mode];
}

console.log(cal("plus")(1, 2));
console.log(cal("minus")(2, 2));
```

함수를 활용하여 리턴 값으로 다른 함수를 리턴해서 사용할 수 있다

cal이라는 함수는 mode라는 인자값을 받는다 - 함수 내부에는 객체가 존재하는데 객체 내부에 함수(메소드)가 존재한다 - 따라서 메소드를 반환하게 된다 - cal(plus)의 실행 결과로 더하는 메소드를 반환하면 인자 값으로 1, 2를 받아서 실행 결과값을 리턴하게 된다

배열의 값으로도 활용할 수 있다

```
var process = [
    function(input) {
        return input + 10;
    },
    function(input) {
        return input * input;
    },
    function(input) {
        return input / 2;
    }
];

var input = 1;

for (var i = 0; i < process.length; i++) {
    input = process[i](input);
}

console.log(input);
```

초기 input 값은 1이고 for문이 돌면서 input의 값이 수정되는 코드이다

첫번째 루프에서 1 + 10, 두번째 루프에서 11 \* 11 그리고 세번째 루프에서 121 / 2로 console.log에 60.5의 결과가 남게 된다

변수, 매개변수, 리턴값으로 될 수 있는 데이터를 first-class citizen,first-class object, first-class entity라고 부르며 함수는 바로 이것에 해당된다

## 값으로서의 함수와 콜백 - 콜백이란?

콜백은 어떠한 함수가 수신하는 인자가 함수인 경우를 콜백이라 한다

```
var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];

numbers.sort();
```

위 코드를 살펴보면 numbers는 객체이고 sort는 해당 객체를 정렬해주는 메소드이다. 하지만 결과값을 보면 이상하게 나올 것이다

`[1, 10, 2, 20, 3, 4, 5, 6, 7, 8, 9]`

왜 이런 결과가 나온것일까? MDN에 들어가서 살펴보면 sort()메서드는 기본적으로 정렬을 유니코드 코드 포인트를 따르므로 위와 같은 결과가 나온 것이다

그렇다면 다른 정렬 방식으로 하기 위해서는 어떻게 해야할까

밑에 보면 구문에 대한 설명이 나와았다.

`arr.sort([compareFunction])` 으로 compareFunction은 정렬 순서를 정의하는 함수를 의미한다 바로 저것이 `콜백 함수`가 된다

그리고 밑에 설명을 더 읽어보면 compareFunction은 인자값으로 a와 b를 받고 음수일때 a를 b보다 낮은 위치로 정렬한다 양수는 물론 그 반대가 된다

따라서 콜백함수를 정의하는 방식으로 코드를 정의한다면

```
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

var compareFunc = function(a, b) {
    return a - b;
};

numbers.sort(compareFunc);
```

다음과 같은 코드가 생성되게 되고 결과값은 1부터 오름차순으로 정렬하게 된다
