# Data Type

데이터는 크게 두가지로 나뉜다.

원시 데이터 타입과 객체 데이터 타입

원시 데이터 타입은 기본 데이터 타입이라 불리고

객체 데이터 타입은 참조 데이터 타입이라고 불린다

원시 데이터 타입에는

-   숫자
-   문자열
-   불리언(true/false)
-   null
-   undefined

이렇게 5개가 존재하고 위 데이터 타입을 제외한 모든 데이터 타입은 객체 데이터 타입이다

## wrapper object

객체란 속성과 메소드들이 존재한는 집합이다 따라서 우리는 객체에서 속성을 참조할 때, 메소드를 실행 할 때 object.method(), object.prop 등을 사용한다

하지만 앞서 원시 데이터 타입은 객체가 아니라고 했지만 객체같이 동작하는 것을 확인할 수 있다

```
var str = "manngold"

console.log(str.length); // 8
console.log(str.charAt(0)); // "m"
```

분명 객체가 아닌데 객체처럼 동작했다 그럼 문자열은 객체인것일까?

문자열은 원시 데이터 타입이 맞지만 개발자들이 편리하게 작업을 하기 위해서 해당 명령에서 객체로 잠깐 변하는 것이다

그래서 문자열은 String, 숫자는 Number, 불리언은 Boolean 이라는 객체로 원시 데이터 타입을 덮게 된다 (null과 undefined는 존재하지 않음)

```
var str = "manngold"

str.prop = "coding" // 정상 작동

null.prop = "coding" // error
```

위 코드를 보면 str.prop 코드에서 String이라는 (wrapper)객체로 덮여서 정상 작동을 하지만

null은 wrapper 객체가 존재하지 않아서 오류가 발생한다
