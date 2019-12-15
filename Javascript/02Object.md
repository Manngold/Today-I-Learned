# Object

자바스크립트에서 단순한 데이터 타입

-   number
-   string
-   boolean
-   null
-   undefined

위 항목을 제외한 다른 값들은 모두 객체이다.

number, string 그리고 boolean은 메소드가 존재하기 때문에 유사객체로 불리지만
한 번 데이터가 정해지면 변경할 수 없다 (immutable)

자바스크립트에서 객체란 변경 가능한 속성들의 집합이라고 할 수 있다

자바스크립트에서 객체

-   array
-   function
-   regex
-   object

객체는 이름과 값이 있는 속성들을 포함하는 컨테이너이다

속성의 이름은 문자열이면 가능, 빈 문자열도 가능

속성의 값은 undefined를 제외한 모든 값이 가능

객체는 클래스가 필요 없다(class-free)

객체는 다른 객체를 포함할 수 있기 때문에 그래프나 트리 자료구조를 쉽게 표현할 수 있다

속성들을 다른 객체에 상속하게 해주는 prototype 연결 특성으로 객체 초기화 시간과 메모리 사용을 줄일 수 있다

## 객체 리터럴

```

var empty_object = {};

var stooge = {
    "first-name": "mann",
    "last-name" : "gold"
}

```

객체 리터럴은 아무 것도 없거나 하나 이상의 이름/값 쌍들을 둘러싸는 중괄호

```

var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-22 14:55",
        city: "Los Angeles"
    }
}


```

이처럼 속성의 값으로 객체를 생성해 중첩된 객체를 표현할 수 있다.

## 속성값 읽기

객체의 속성값을 읽을 때에는 대괄호([ ])를 통해서 읽을 수 있다

속성 이름이 유효한 이름이고 예약어가 아닐 경우에 마침표로 읽을 수 있다

```

//위 객체의 속성값 읽어오기

stooge["first-name"] // "mann"
flight.departure.IATA // "SYD"

```

만약 읽으려는 객체에 존재하지 않는 속성을 읽으려고 하면 undefined 반환

```
// || 연산자를 통한 기본값 설정

stooge["age"] = stooge["age"] || "unknown"

stooge["age"] // "unknown"

```

존재하지 않는 속성의 속성을 참조하려 할 때 TypeError 예외가 발생한다

```
// && 연산자를 활용한 TypeError 방지

flight.equipment // undefined
flight.equipment.model // throw TypeError
flight.equipment && flight.equipment.model // undefined

```

## 속성값의 갱신

객체는 할당에 의해 값을 갱신한다

```

stooge['first-name'] = "Kim"

```

만약 할당 표현식이 이미 객체 안에 존재하면 해당 속성의 값만 교체한다

반대로 속성이 존재하지 않으면 해당 속성을 객체에 추가

```

stooge["middle-name"] = "Min"

```

### 참조

자바스크립트에서 객체는 참조 방식으로 전달되고 "절대 복사되지 않는다"

```

var x = stooge; // 변수 x가 stooge 객체 참조

x.nickname = "Curly"
// x가 stooge를 참조하므로 stooge의 nickname 속성이 생성된다.

var nick = stooge.nickname // 'Curly'가 저장됨

var a = {}, b = {}, c = {} // 모두 다른 빈 객체 참조

a = b = c = {} // 같은 빈 객체 참조

```

## Prototype

### 자바스크립트의 모든 객체는 속성을 상속하는 프로토타입 객체에 연결돼 있다

> 객체 리터럴로 생성되는 모든 객체는 자바스크립트의 표준 객체인 Object 속성인 prototype 객체에 연결된다 (Object.prototype)

객체를 생성할 때 해당 객체의 프로토타입이 될 객체를 선택할 수 있다.

```

if(typeof Object.create !== 'function'){
    Object.create = function(o){
        var F = function(){}
        F.prototype = o
        return new F()
    }
}

var another_stooge = Object.create(stooge)

```

객체를 변경해도 객체의 프로토타입에 영향을 미치지 않는다

```

another_stooge['first-name'] = "Harry"
another_stooge['middle-name'] = "Moses"

```

속성을 변경해도 프로토타입에 영향을 미치지 않지만 근간이 되는 프로토타입을 변경하면 해당 프로토타입을 근간으로 하는 객체들에게 즉각적으로 속성이 나타난다

프로토타입 연결은 오로지 객체의 속성을 읽을 때만 사용, 객체에 있는 특정 속성의 값을 읽으려고 하는데 해당 속성이 객체에 없으면 찾으려고 프로토타입 객체에서 찾는다.

### 속성을 찾는 순서 (delegation)

1. 해당 객체에서 속성을 찾는다
2. 해당 객체에 속성이 없다면 프로토 타입 체인을 타고 가면서 찾는다
3. 가장 마지막인 Object.prototype에도 없다면 undefined를 반환

```
//프로토타입에 새로운 속성이 추가될 경우

stooge.["profession"] = "actor"
another_stooge.profession // "actor"

```

이처럼 해당 프로토타입을 근간으로 하는 객체들에 즉각적으로 속성이 반영된다

## Reflection

객체에 어떤 속성이 있는지 특정 속성을 접근해서 반환하는 값을 보는 것

```
//typeof 연산자를 활용한 속성 타입 리플렉션

typeof flight.number // "number"
typeof flight.status // "string"
typeof flight.arrival // "object"

```

때로는 해당 객체의 속성이 아닌 프로토타입 체인 상에 있는 속성을 반환할 수 있으므로 주의해야한다.

```
//프로토타입 체인 상의 속성을 반환하는 경우

typeof flight.toString // "function"
typeof flight.constructor // "function"

```

### 리플렉션시 원하지 않는 속성을 배제하는 방법

1. 함수 값을 배제하는 방법

일반적으로 리플렉션을 할 때 데이터에 관심이 있기 때문에 함수가 반환되는 경우를 배제하고 리플렉션을 한다

2. hasOwnProperty 메소드

hasOwnProperty 메소드는 프로토타입 체인을 바라보지 않고 객체 자체가 가지고 있는 속성인지에 대해서 true/false를 반환한다

```
//hasOwnProperty 메소드를 사용한 리플렉션

var obj = {
    "hello": 0,
    "my": 1,
    "name": 2,
    "is": 3,
    "manngold": 3
}

function propChecker(v, p){
	if(v.hasOwnProperty(p)){
	return typeof v[p]
} else {
	return "this is not own property"
}

propChecker(obj, "hello") // "number"
propChecker(obj, "coding") // "this is not own property"
}

```

## Enumeration (열거)

for in 구문을 통해서 객체의 속성을 열거 가능

```
//hasOwnProperty와 for in 구문을 사용한 메소드와 함수 배제

var name;

for (name in another_stooge){
    if(typeof another_stooge[name] !== 'function){
        console.log(name + " : " + another_stooge[name])
    }
}

```

for in 구문은 이름 순으로 나온다는 보장이 없다 따라서 for문을 사용한 객체 속성 열거를 해야한다.

```
//배열과 for문을 활용해 특정 순서에 따른 열거

var obj = {
    "hello": 0,
    "my": 1,
    "name": 2,
    "is": 3,
    "manngold": 3
}

var i = 0;
var prop = ["hello", "my", "name", "is", "manngold"];

for(i = 0; i < obj.length; i++){
    console.log(obj[prop[i]]);
}

```

## 삭제

delete 연산자를 활용하여 객체의 속성을 삭제할 수 있다

삭제를 할 때, 프로토타입 연결 상에 있는 객체들은 접근하지 않는다

객체에서 특정 속성을 삭제 했는데 같은 속성이 프로토타입 체인 상에 있는 경우 프로토타입의 속성이 나타난다

```

another_stooge.nickname // "Moe"

delete another_stooge.nickname; // "Moe" 삭제됨

another_stooge.nickname // "Curly"

//프로토타입의 속성을 출력한다

```

## 최소한의 전역변수 사용

전역변수는 프로그램의 유연성을 약화하기 때문에 가능하면 피하는 것이 좋다

```

var MYAPP = {} // 전역변수를 위한 컨테이너로 활용

MYAPP.stooge = {
    "first-name" : "mann",
    "last-name" : "gold"
};

MYAPP.foo = {
    "boo" : "blah",
    "hoo" : "blahblah"
}

```

이렇게 하나로 관리하면 다른 애플리케이션이나 위젯 또는 라이브러리들과 연동할 때 발생하는 문제점을 최소화 할 수 있다.
