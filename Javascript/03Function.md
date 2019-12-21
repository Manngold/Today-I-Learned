# Function

자바스크립트에서 함수는 실행 문장들의 집합을 감싸고 있으며 모듈화의 근간이 된다

함수를 통해 코드의 재사용 및 정보 구성, 은닉화를 할 수 있고 객체의 행위를 지정하는데도 사용한다

## 함수 객체

자바스크립트에서 "함수 = 객체" 이다. 객체 리터럴로 생성되는 객체는 Object.prototype 에 연결된다 반면 함수 객체는 Function.prototype에 연결된다.(Function은 Object.prototype에 연결된다.)

### 함수의 추가 속성

1. 함수의 문맥(context)
2. 함수의 행위를 구현하는 코드(code)
3. 모든 함수 객체는 prototype 속성이 있다(함수 자체를 값으로 갖는 constructor라는 속성이 있는 객체)

함수는 객체이기 때문에 다른 값들처럼 사용할 수 있다

-   함수는 변수나 객체, 배열 등에 저장이 된다
-   다른 함수에 전달하는 인수로도 사용
-   함수의 반환값으로도 사용한다

함수를 다른 객체와 구분 짓는 특징은 호출을 할 수 있다.

## 함수 리터럴

함수는 리터럴로 생성할 수 있다

```

var add = function (a, b) {
    return a + b;
}

```

함수 리터럴 구성

1. function 이라는 예약어
2. 함수의 이름

    - 선택사항
    - 재귀적으로 호출할 때 사용
    - 디버거나 개발 툴에서 함수를 구분할 때도 사용
    - 함수의 이름이 주어지지 않은 경우 익명함수라 한다

3. 매개변수

    - 아예 없거나 하나 이상의 매개변수를 쉼표로 분리해서 열거
    - 이 매개변수들은 함수 내에서 변수로 정의한다
    - 일반적인 변수들을 undefined로 초기화하는 것과는 달리 매개변수는 함수를 호출할 때 넘겨진 인수로 초기화한다

4. 중괄호로 둘러싸인문장들의 집합

    - {} 로 둘러싸여 있다
    - 함수의 몸체이며 함수를 호출할 때 실행된다

## 호출

함수 호출 -> 현재 함수의 실행을 잠시 중단 -> 제어를 매개변수와 함께 호출한 함수로 넘김 -> 모든 함수는 명시되어 있는 매개변수에 더해서 this와 arguments라는 추가적인 매개변수 두 개를 받게 된다.

> this
>
> 객체지향 프로그래밍 관점에서 매우 중요
>
> this 값은 호출하는 패턴에 의해 결정된다
>
> 자바스크립트의 함수 호출 패턴은 메소드, 함수, 생성자, apply 네 가지가 존재한다.

함수를 호출하는 호출 연산자는 함수를 나타내는 함수를 나타내는 표현식 뒤에 이어지는 한 쌍의 괄호이다

괄호 안에는 표현식을 포함하지 않거나, 하나나 또는 쉼표로 구분해서 둘 이상의 표현식을 포함한다

함수를 호출할 때 넘기는 인수의 개수와 매개변수의 개수가 일치하지 않아도 오류를 발생하지 않는다 인수가 매개변수 수보다 적은 경우에는 남는 매개변수에 undefined를 할당하며 어떠한 값이 와도 그대로 매개변수에 할당한다

## 메소드 호출 패턴

함수 객체의 속성에 저장하는 경우 이 함수를 메소드라고 부른다

메소드를 호출할 때 this는 메소드를 포함하고 있는 객체에 바인딩된다

즉, this는 객체 자체가 된다

```

var myObj = {

    value : 0,
    increment : function (inc) {
        this.value += typeof inc === "number" ? inc : 1;
    }

}

myObj.increment();
console.log(myObj.value); // 1

myObj.increment(2);
console.log(myObj.value); // 3

```

> myObj라는 객체 안에 value라는 속성과 increment라는 메소드 속성이 존재한다.
>
> increment 메소드는 inc라는 매개변수의 타입이 number이면 inc를 this.value에 더하고 아니라면 1을 더한다
>
> 이 때 this는 메소드를 포함하고 있는 객체에 바인딩 되기 때문에 this = myObj가 됩니다.

따라서 메소드는 자신을 포함하는 객체의 속성들에 접근하기 위해서 this를 사용할 수 있다

즉, this를 활용하여 객체의 값을 읽거나 변경할 수 있다

### this와 객체의 바인딩은 호출 시에 일어난다

### 자신의 객체 문맥을 this로 얻는 메소드를 public method라고 합니다

## 함수 호출 패턴

함수가 객체의 속성이 아닌 경우에는 함수로써 호출한다

```

function add (a, b) {
    return a + b;
}

var sum = add(3, 4)

```

함수를 이 패턴으로 호출할 때, this는 전역객체에 바인딩 된다

따라서 다음과 같은 문제가 발생한다

```

var add = function(a, b) {
    return a + b;
};

var myObj = {
    value: 0,
    increment: function(inc) {
        this.value += typeof inc === "number" ? inc : 1;
    }
};

myObj.double = function() {
    var helper = function() {
        this.value = add(this.value, this.value);
    };
    helper();
};

myObj.increment(3); // vaule = 3
myObj.double();
myObj.vaule; // 기대하는 결과값 : value = 6 결과값 : value = 3

```

문제는 help와 add의 this와 관련하여 발생한다

앞선 설명에서 함수 호출 패턴을 설명할 때 객체의 속성이 아닌 경우 this는 전역객체에 바인딩 된다.

따라서 add에서의 this와 helper에서의 this가 myObj에 바인딩 되지 않아서 myObj의 value 값을 수정할 수 없는 것이다.

해결책으로는 this를 변수에 할당하여 함수가 메소드의 this에 접근할 수 있도록 하는 방법이 있다

```

var add = function(a, b) {
    return a + b;
};

var myObj = {
    value: 0,
    increment: function(inc) {
        this.value += typeof inc === "number" ? inc : 1;
    }
};

myObj.double = function() {
    var that = this;

    var helper = function() {
        that.value = add(that.value, that.value);
    };
    helper();
};

myObj.increment(3); // myObj.value = 3
myObj.double();
myObj.vaule; // myObj.value = 6

```

> double 메소드에서 that이라는 변수를 생성하고 this(myObj)를 할당한다
>
> double은 myObj의 메소드이므로 this는 myObj가 된다 따라서 helper와 add 함수에서 that을 활용하여 myObj.value에 접근이 가능하므로 원하는 결과값을 얻을 수 있다.

## 생성자 호출 패턴

자바스크립트는 프로토타입에 의해서 상속이 이루어지는 언어이다
즉, 객체가 자신의 속성들을 다른 객체에 바로 상속할 수 있다는 뜻이다

```

var Quo = function(string){
    this.status = string;
};

Quo.prototype.get_status = function() {
    return this.status
}

var myQuo = new Quo("happy")
myQuo.get_status();

```

new라는 전치 연산자와 함께 호출하면, 호출한 함수의 prototype 속성의 값에 연결되는 링크를 갖는 객체가 생성되고 이 새로운 객체는 this에 바인딩 된다

## apply 호출 패턴

자바스크립트는 함수형 객체지향 언어이다 따라서 함수는 메소드를 가질 수 있다

apply 메소드는 함수를 호출할 때 사용할 인수들의 배열을 받을 수 있다.
또한 apply는 this의 값을 선택할 수 있도록 해준다

> apply 메소드 매개변수
>
> 1. this에 묶이게 될 값(선택을 안하면 자동으로 전역객체)
> 2. 매개변수들의 배열

```

var Quo = function(string) {
    this.status = string;
};

Quo.prototype.get_status = function() {
    return this.status;
};

var statusObj = {
    status: "sad"
};

var status = Quo.prototype.get_status.apply(statusObj);
console.log(status); // sad

```

이때 statusObj 객체는 Quo를 상속받지 않았다. 하지만 apply 메서드를 활용하여
get_status라는 메소드의 this가 statusObj를 대상으로 실행되도록 호출하였다

## 인수 배열

함수를 호출할 떄 추가적인 매개변수로 arguments라는 배열을 사용할 수 있다

이 배열은 함수를 호출할 때 전달된 모든 인수를 접근할 수 있게 해준다.

arguments에는 매개변수 개수보다 더 많이 전달된 인수들도 모두 포함한다

넘어오는 인수의 개수에 맞춰서 동작하는 함수를 만들 수 있게 해준다

```

var sum = function() {
    var i,
        sum = 0;

    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
};

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

```

arguments는 실제 배열이 아닌 배열 같은 객체이다(length라는 속성이 있지만 모든 배열이 갖는 메소드들은 없다)

## 반환

함수는 { 로 시작해서 } 로 끝날 때까지 함수가 실행된다

return문은 함수의 끝에 도달하기 전에 반환을 할 수 있다.

return문을 실행하게 되면 함수의 나머지 부분을 실행하지 않고 즉시 반환이 된다

함수는 항상 반환이 되고 반환값이 지정되지 않은 경우 undefined가 반환된다

## 예외

자바스크립트에서 예외를 다루기 위해서 throw문을 사용한다.

```

var add = function(a,b){
    if(typeof a !=="number" || typeof b !== "number"){
        throw{
            name: 'TypeError',
            message: 'add needs numbers'
        }
    }
    return a + b;
}

var error_test = function () {
    try{
        add("3", 4)
    }catch(e){
        console.log(e.name + ' : ' + e.message)
    }
}

error_test() // TypeError : add needs numbers

```

예외 객체는 try문의 catch 절에 전달이 된다.

## 기본 타입에 기능 추가

자바스크립트는 언어의 기본 타입에 기능을 추가하는 것을 허용한다

예를 들면 method라는 메소드를 Function.ㅔ 처구하면 이후 모든 함수에서 이 메소드를 사용할 수 있다

```

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
    return this
}

```

이처럼 method라는 메소드를 Function.prototype에 추가함으로써 앞으로는 prototype이라는 속성 이름을 사용할 필요가 없다

예제 - 정수 추출 메소드 생성

```

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
    return this
}

Number.method('integer', function(){
    return Math[this < 0 ? 'ceiling' : 'floor'](this);
});

```

## Scope(유효범위)

프로그래밍 언어에서 유효범위는 변수와 매개변수의 접근성과 생존 기간을 제어한다.

이름들이 충돌하는 문제를 덜어주고 자동으로 메모리를 관리해준다.

```

var foo = function() {
    var a = 3,
        b = 5; // a = 3, b = 5

    console.log(a, b);
    var bar = function() {
        var b = 7,
            c = 11; // a = 3, b = 7, c = 11
        console.log(a, b, c);
        a += b + c; // a = 21, b = 7, c = 11
        console.log(a, b, c);
    };
    console.log(a, b, c);
    // a = 3, b = 5

    bar();
    console.log(a, b, c);
    // a = 21, b = 5
};

```

1. 모든 변수는 블록 바깥쪽에서는 접근할 수 없다.
2. 블록 내에서 정의된 변수는 블록의 실행이 끝나면 해제된다.
3. 함수 내에서 정의된 매개변수와 변수는 함수 외부에서는 유효하지 않다.
4. 함수 내부에서 정의된 변수는 함수 어느 곳에서도 접근할 수 있다. 따라서 함수에서 사용하는 모든 변수를 함수 첫 부분에서 선언하는 것이 최선의 방법이다.

## Closure(클로저)

> 클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다. 이 환경은 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성된다

```

function makeAdder(x) {
  var y = 1;
  return function(z) {
    y = 100;
    return x + y + z;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2));  // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)


```

코드 진행 흐름

1. add5, 와 add10 이라는 변수에 x와 y의 값이 저장된다
2. add5와 add10에는 리턴 값으로 z라는 인자값을 받는 함수가 저장되어있다.
3. add5(2), add10(2)로 z값을 넣어준뒤, 호출
4. y값은 100으로 변경되고 x + y + z 의 결과 값이 리턴된다.

## 모듈

함수와 클로저를 사용해서 모듈을 만들 수 있다

모듈은 내부의 상태나 구현 내용은 숨기고 인터페이스만 제공하는 함수나 객체이다

모듈의 일반적인 패턴은 private 변수와 함수를 정의하는 함수이다.

클로저를 활용해 private 변수와 함수에 접근할 수 있는 권한이 있는 함수를 생성하고 이 함수를 반환하거나 접근 가능한 장소에 이를 저장하는 것이다

모듈 패턴을 사용하면 전역변수 사용을 없앨 수 있다.

> 정보 은닉 애플리케이션이나 다른 싱글톤 패턴들을 효과적으로 캡슐화할 수 있게 한다.
