## let

let에서는 블록단위 스코프를 지원한다

```
function home() {
    var homevar = "homevar";
    for (var i = 0; i < 100; i++) {
        console.log(i); // 0 ~ 99
    }
    console.log(i); // 100
}
home();
```

기존 es5에서 var를 사용했을 때, for문의 초기값을 선언했을때, 전역 값으로 사용되었다(함수 내에서 for문의 초기값을 선언하면 함수 범위 내에서만 적용)

그런데 es6의 let을 사용하면 for문 스코프가 설정된다

```
function home() {
    var homevar = "homevar";
    for (let i = 0; i < 100; i++) {
        console.log(i);
    }
    console.log(i); // undefined error
}
home();
```

## let과 closure

html의 li태그로 구성된 리스트가 있다고 하자

리스트마다 이벤트를 추가하기 위해서 다음과 같이 코드를 작성한다

```
var list = document.querySelectorAll("li");

for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function() {
        console.log(i + "번째 리스트 입니다");
    });
}
```

이제 요소를 클릭할 때마다 "i번째 리스트 입니다" 라는 결과가 나올것이라 예상했지만

모든 결과값들이 끝번째 인덱스 값 리스트라는 결과만 나온다

이것은 addEventListener의 콜백함수와 클로저에서 나온 문제이다 따라서 해결방법은 외부 함수를 하나 더 생성해서 지역변수화 시키는 방법이다

```
var list = document.querySelectorAll("li");

for (var i = 0; i < list.length; i++) {
    function external(i) {
        return list[i].addEventListener("click", function() {
            console.log(i + "번째 리스트 입니다");
        });
    }
    external(i);
}
```

위 코드처럼 함수 스코프를 하나 더 생성해서 지역변수화 시키고 i 값을 변경시켜준다

하지만 es6의 등장으로 이런 번거로운 과정들이 사라졌다

```
var list = document.querySelectorAll("li");

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function() {
        console.log(i + "번째 리스트 입니다");
    });
}
```

## const

const는 재할당이 불가능한 값을 선언할 수 있다

```
function myFunc() {
    const foo = "hello";
    foo = "hi";
}

myFunc(); // error
```

변수와 마찬가지로 배열 또한 재할당이 불가능하다

```
function myFunc() {
    const foo = [1,2,3,4];
    foo = ["1", "2", "3"];
}

myFunc(); // error
```

따라서 변수는 let, 상수는 const를 사용하고 var는 사용하지 않는다

## const and immutable array

앞서 const로 선언한 배열은 재할당이 불가능하다고 했다. 그렇다면 immutable array일까?

아니다 재할당만 불가능하고 추가, 변경, 삭제를 할 수 있다

```
function myFunc(){
    const list = ["apple", "orange", "grape"];
    list.push("banana");
    console.log(list);
}

myFunc();
```

바나나 요소가 추가된 리스트가 로그에 찍히는 것을 확인할 수 있다

따라서 immutable array 기능을 위해서 새로운 리스트를 활용하는 방식으로 활용이 가능하다

```
const list = ["apple", "orange", "grape"];

list2 = [].concat(list, "banana");

console.log(list); // 원본 출력
console.log(list2); // 바나나가 추가된 배열 출력
```
