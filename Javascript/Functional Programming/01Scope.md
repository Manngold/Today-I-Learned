# Functional Programming - Scope

JS에서 함수는 모듈화의 근간이 된다

정보를 감추거나 객체의 행위를 지칭하는 등 여러 기능을 수행한다

우선 Scope에 대해서 정리해보자

다음 코드의 결과 값을 예측해보자

```
var vscope = 'global';
function fscope(){
    alert(vscope);
}
fscope();
```

fscope 함수를 호출하면서 alert 메소드가 실행되면서 함수 밖의 vscope 값을 참조해서 global을 출력하게된다

그렇다면 다음 코드는 어떻게 출력될까

```
var vscope = 'global';
function fscope(){
    var vscope = 'local'
    alert(vscope);
}
fscope();
```

출력값은 local이 된다

왜 이런 결과가 나오는걸까?

여기서 바로 지역변수와 전역변수의 개념이 등장한다

지역변수는 `{...}` 안에서 생성된 변수들을 칭하고 `{...}` 밖에서 정의된 변수는 application 전역에서 접근이 가능한 전역변수를 뜻하게 된다.

지역변수와 전역변수의 유효범위는 다음 코드를 보면 확실하게 이해가 가능하다

```
var vscope = 'global';
function fscope(){
    var vscope = 'local';
    alert(vscope);
}
fscope(); // local
alert(vscope); // global
```

위 코드와 첫번째 코드를 비교해보면 지역변수 -> 전역변수 순으로 출력이 된다

그렇다면 다음과 같은 상황은 어떨까

```
var vscope = 'global';
function fscope(){
    vscope = 'local';
}
fscope();
alert(vscope);
```

외부에서는 내부에 존재하는 변수에 접근할 수 없으니 전역변수를 참조하므로 global일까?

물론 외부에서 내부 변수에 접근할 수 없으니 전역변수에 접근을 하는 것은 맞지만 함수 내에 존재하는 `vscope` 앞에 변수를 지칭하는 `var`이라는 키워드가 붙지 않아서 지역변수로 생성된 것이 아닌 전역변수의 값을 재정의 하는 것이 되어서 local이 출력된다

따라서 지역변수를 생성할 때, `var`를 잘 붙이도록 주의하고 전역변수를 사용할 때에는 사용하는 이유가 명확할 경우에 사용하도록 한다

## 유효범위의 필요성

조금 더 와닿는 예제를 보도록 해보자

```
function a(){
    var i = 0;
}

for(var i = 0; i < 5; i++){
    a();
    console.log(i);
}
```

이 코드의 실행 결과 값은 어떻게 될까?

결과는 콘솔 창에 0부터 4까지 출력이된다

for문에서 i를 초기화 해줄때 i는 전역변수가 되었고

함수 a에서는 i를 지역변수로 선언했기 때문에 for문 안에서 함수 a를 호출을 해도 전역변수 i에 영향을 미치지 않아서 0부터 4까지 정상적으로 출력이 된다

하지만 지역변수 활용을 잘못 했을 경우의 코드를 살펴보면

```
function a(){
    i = 0;
}

for(var i = 0; i < 5; i++){
    a();
    console.log(i);
}
```

차이점은 함수 a에서 i에 var라는 키워드를 뺀 것이다

그렇다면 i는 지역변수가 되지 않고 전역변수 i의 값에 접근해서 변경을 하게 된다

따라서 for문에서 i는 종료 조건에 도달하지 못하게 되므로 무한루프에 빠지게 된다

## 전역변수의 사용

우리가 불가피하게 전역변수를 사용해야 하는 경우에 하나의 객체를 전역변수로 생성하고 객체의 속성으로 변수를 관리하는 방법이 있다

```
MYAPP = {}
MYAPP.calculator ={
    'left' : null,
    'right' : null
}
MYAPP.coordinate = {
    'left':null,
    'right':null
}

MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
}

console.log(sun())
```

MYAPP이라는 전역변수마저 사용하고 싶지 않을때

```
(function(){
    var MYAPP = {}
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    MYAPP.coordinate = {
        'left' : null,
        'right' : null
    }
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum(){
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    console.log(sum());
}())
```

## 유효범위의 대상

###JS는 함수에 대한 유효범위만 제공한다

다음 코드를 보자

```
function a(){
    var nickname = "manngold";
}
console.log(nickname)
for(var i = 0; i < 5; i++){
    var nickname = "manngold"
}
console.log(nickname)
```

첫번째 로그는 undefined가 출력되지만 두번째 로그는 manngold가 정상적으로 출력된다

함수에서 생성된 `nickname`은 지역변수로 생성이 되었고 외부에서 접근이 불가능하지만 for문에서 생성된 `nickname`은 전역변수로 생성이 되어서 외부에서도 접근이 가능하다

## 정적 유효범위

### JS는 함수가 선언된 시점에서의 유효범위를 갖는다 이러한 유효범위의 방식을 정적 유효범위(static scoping) 혹은 렉시컬(lexical scoping)이라 한다

다음 코드에서 `console.log(...)` 명령어는 어떤 값을 출력할까

```
var i = 5;

function a(){
    var i = 10;
    b();
}

function b(){
    console.log(i);
}

a();
```

함수 a가 실행되면 지역변수 i가 생성되고 함수 b가 실행되는데 함수 a의 범위 안이기 때문에 `console.log(i)`의 값은 10이 되는걸까?

결론은 5가 출력된다

앞서 유효범위는 함수만 갖고 `함수가 선언된 시점`에서 생성된다고 했기 때문에

함수가 생성된 시점의 i는 5이기 때문에 5가 출력된다

위 정의를 활용해서 i가 10의 값을 갖는 코드를 본다면

```
var i = 5;

function a(){
    var i = 10;

    function b(){
        console.log(i);
    }

    b();
}

a();
```

생성된 시점의 i는 지역변수 i가 존재하므로 10이 출력된다
