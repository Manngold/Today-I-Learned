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
