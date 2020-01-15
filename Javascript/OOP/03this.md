# this

## 함수와 this

`this`는 함수 호출 맥락을 의미한다 함수와 객체의 관계가 느슨한 자바스크립트에서 this는 이 둘을 연결시켜주는 실질적인 연결점의 역할을 한다

다음은 this의 역할을 보여주는 코드이다

```
function func(){
    if(window===this){
        console.log("this is window")
    }
}

func() // this is window
```

저번에 자바스크립트에는 전역객체라는것이 존재하고 우리가 작성한 코드는 그 전역객체 안에 담긴다고 배웠다

그렇다면 위 코드에서 함수 func는 전역객체의 속성이자 메소드이고 this의 의미는 window이므로 함수를 실행했을때 정상적으로 콘솔에 값이 찍히게 된다

> 위는 웹브라우저 환경에서 적용한 것이고 node.js는 global로 바꿔주면 된다

## 메소드와 this

객체의 소속인 메소드의 this는 그 객체를 가르킨다

```
var o = {
    func: function(){
        if(o === this){
            console.log("this is o");
        }
    }
}

o.func();
```

## 생성자와 this

함수에서 this와 생성자에서 this에 대한 차이를 구분할줄 알아야 한다

코드를 보면서 확인해보자

```
var funcThis = null;

function Func() {
    funcThis = this;
}

var o1 = Func();

if (funcThis === window) {
    console.log("funcThis is window");
}

var o2 = new Func();

if (funcThis === o2) {
    console.log("funcThis is o2");
}
```

위 코드는 함수로 할당할 때, 생성자로 할 때마다 funcThis의 값을 설정하고 조건문으로 funcThis의 값을 확인하여 로그를 찍는 코드이다

우선 함수를 선언하고 `var o1 = Func();`를 하면 funcThis에 this를 할당하게 된다 이 시점에서 this는 Func 함수의 this 값인 `window`가 된다

이후 조건문이 통과할 수 있게 된다.

그 다음 `var o2 = new Func()`가 중요하다.

생성자를 통해서 함수를 호출하면 비어있는 객체를 형성하게 되고, 그 안에서 this의 값이 결정이 된다.

이 경우 o2라는 객체가 형성이 되고, this는 o2가 되는 것이다. 따라서 이후 조건문을 통과할 수 있는 것이다

(추가)

```
var funcThis = null;

function Func(){
    funcThis = this;
    if(o2 === this){
        console.log("this is o2");
    } else{
        console.log("this is not o2");
    }
}

var o2 = new Func();
```

이 코드에서 어떤 결과 값이 나올까

바로 this is not o2가 나온다

o2라는 객체는 만들어져 있지만 new Func()가 할당이 되어있지 않기 때문에 this는 o2를 참조할 수 없게 된다 즉, 함수 안에서는 undefined가 된다

## 객체로서 함수

함수는 객체이다 하지만 객체의 생성 방식은 생성자를 통하여 생성을 해야 한다고 알고 있다 하지만 함수의 생성 방식은 다음과 같다

```
function sum(x,y){
    return x + y;
}
```

이렇기 때문에 함수가 객체라는것이 크게 와닿지 않는다 하지만 원래 함수의 생성 방식은 다음과 같다

```
var sum = new Function('x', 'y', 'return x+y;');
```

인자값, 함수의 몸체가 매개변수로 들어가면서 가독성과 생성이 매우 힘들다 배열, 객체 또한 마찬가지이다

```
var myObj = new Object({developer: "manngold"});

var arr = new Array(1,2,3);
```

그래서 개발자들이 개발하기 편하도록 다른 함수,객체,배열 생성방식을 제공하는것이다. 이것을 바로 `리터럴`이라고한다

따라서 이런 리터럴 때문에 함수, 객체, 배열을 쉽게 생성할 수 있게 된다

```
function sum(x,y){
    return x + y;
}

var obj = {developer: "manngold"};

var arr = [1,2,3];
```

## apply와 this

apply는 this를 설정할 수 있는 메소드이다

apply 메소드의 적용에 따른 this의 값 변화를 알아보자

```
var o = {};
var p = {};

function func() {
    switch (this) {
        case o:
            console.log("this is o");
            break;
        case p:
            console.log("this is p");
            break;
        case window:
            console.log("this is window");
            break;
    }
}

func();
func.apply(o);
func.apply(p);
```

처음 func()는 window에 소속되어있는 객체이므로 세번째 케이스로 들어가고
다음 func.apply(o)는 this를 o로 설정하므로 this === o , 다음은 당연히 this === p가 된다
