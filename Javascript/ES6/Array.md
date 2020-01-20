# Array

## for of

순회를 하는 방법은 여러 가지가 존재한다

```
list = [1, 2, "hi", null, NaN];

for(var i = 0; i < list.length; i++){
    console.log(list[i]);
}
```

다른 방식은 object에서 사용하는거지만 `for in`이 존재한다

```
list = [1, 2, "hi", null, NaN];

for (let idx in list) {
    console.log(list[idx]);
}
```

값이 이전 기본 for문과 동일하게 출력이 된다

하지만 for in 구문은 치명적인 단점이 존재하는데 그건 바로 prototype chain상에 존재하는 속성들 또한 반환을 한다는 점이다

```
list = [1, 2, "hi", null, NaN];

Array.prototype.trap = function() {};
Array.prototype.boom = "this is trap";

for (let idx in list) {
    console.log(list[idx]);
}
```

이전 결과에 함수와 this is trap이 출력되는 것을 확인할 수 있다

이러한 문제는 for of를 활용해서 극복이 가능하다

```
list = [1, 2, "hi", null, NaN];

Array.prototype.trap = function() {};
Array.prototype.boom = "this is trap";

for (let value of list) {
    console.log(value);
}
```

함수와 this is trap을 출력하지 않는 것을 확인할 수 있다

## spread operator

spread operator로 배열의 복제가 가능하다

```
arr = ["apple", "banana", "grape"];

referArr = arr;

copyArr = [...arr];

console.log(referArr);
console.log(copyArr);

```

referArr와 copyArr의 차이는 무엇일까

바로 참조, 비참조의 차이이다

referArr는 메모리상에 올라와 arr이 바라보는 데이터를 함께 바라보는 것이고

copyArr은 메모리에 새로운 데이터를 올리고 그 값을 바라보는 것이다

다음 코드를 보면 확인이 가능하다

```
arr = ["apple", "banana", "grape"];

referArr = arr;

copyArr = [...arr];

console.log(referArr === arr); // true
console.log(copyArr === arr); // false
```

## spread operator - 응용

spread operator를 활용하여 여러 작업이 가능하다

```
arr = ["apple", "banana", "grape"];

newArr = ["hi", "hello", ...arr, "bye"];

console.log(newArr);
```

기존에 복잡했던 특정 인덱스에 배열 삽입을 spread operator로 쉽게 가능하다

```
numArr = [30, 100, 200];

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(...numArr));
```

기존에는 apply 메소드를 활용한 방식으로 배열을 인자로 전달했지만

위처럼 배열로 인자값을 한번에 전달할 수 있다

## from method

JS 안에는 유사배열이라는 것이 존재한다. queryselectorAll로 가져온 NodeList, 함수에서 arguments 등 배열의 형태를 띄지만 배열이 아닌 것들이다

그래서 배열 메소드들을 사용할 수 없다

```
function addMark() {
    let newData = arguments.map(function(value) {
        return value + "!";
    });
    console.log(newData);
}

addMark(1, 2, 3, 4, 5, 6, 7);
```

다음은 에러가 발생한다 왜냐하면 arguments는 배열이 아니기 때문에 배열 메소드인 map을 사용할 수 없기 때문이다

하지만 ES6에서는 이런 유사배열들을 배열로 만들어주는 메소드가 존재한다

```
function addMark() {
    let newArr = Array.from(arguments);
    let newData = newArr.map(function(value) {
        return value + "!";
    });
    console.log(newData);
}

addMark(1, 2, 3, 4, 5, 6, 7);
```

값들이 정상적으로 출력되는 것을 확인할 수 있다
