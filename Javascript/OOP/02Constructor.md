# Constructor

생성자라고 한다. 이전에 우리는 객체를 생성할 때 해당 객체에 직접 데이터를 입력하는 방식으로 진행했다

단순히 적은 양의 데이터, 메소드를 생성한다면 귀찮지만 불가능한 일은 아니지만 만약 이렇게 생성해야되는 데이터가 몇백 몇천 몇만개가 된다면 불가능한 일이 될 것이다.

따라서 우리는 Constructor라는 새로운 방식으로 편리하게 객체를 생성한다면 적은 양의 코드로 여러 객체를 생성할 수 있다

이때 constructor를 `설계도`라고 생각을 하면 된다. 더 구체적으로 예를 든다면 아이언맨을 양산하기 위한 설계도인 셈이다

여러 객체를 생성하는 단순한 방식을 먼저 본다면

```
var kim = {
    name: "kim",
    first: 10,
    seconds: 20,
    sum: function() {
        return this.first + this.seconds;
    }
};
var paul = {
    name: "paul",
    first: 20,
    seconds: 10,
    sum: function() {
        return this.first + this.seconds;
    }
};
......필요한만큼 계속 생성
```

이런 작업을 constructor를 활용한다면 이렇게 코드가 바뀐다

```
function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.sum = function() {
        return this.first + second;
    };
} //이 부분을 초기화 한다고 한다

var kim = new Person("kim", 20, 30);
var paul = new Person("paul", 10, 15);
```

이렇게 한번 constructor function(설계도)를 만들어 놓으면 생성자를 이용해서 객체를 간단하게 만들 수 있다

결국 우리는 객체 지향 프로그래밍을 배워서`좋은 부품`을 만들어야한다

## 전역객체

Global object는 특수한 객체이고 모든 객체는 이 전역객체의 속성이다

코드로 확인해보자

```
function func(){
    alert("hi");
}

func();
window.func();
```

두 개의 함수 호출은 모두 같은 함수를 호출하는 것이다

func 함수는 window라는 전역객체의 속성이자 메소드이며 편의를 위해서 `window.`을 적지 않아도 func()로 함수 호출이 가능하다

하지만 ECMAScript에서 전역객체의 API는 웹브라우저 전체에서 `window`, node.js에서는 `global`로 정의되어있다 따라서 node.js상에서는 `global.func()`로 실행이 되는 것이다
