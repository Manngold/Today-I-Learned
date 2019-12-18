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
