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
