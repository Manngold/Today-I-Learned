# Characteristic of JS

## Scope

변수에 대한 접근 권한을 정의한 것이다

전역변수와 지역변수가 존재하는데 전역변수는 프로그램 어디에서든 접근이 가능한 변수이고

지역변수는 해당 범위 내에서만 접근이 가능한 변수이다

## var를 사용한 선언: 함수 범위

변수를 어디에서 선언하든 변수 선언이 함수의 맨 앞으로 이동한다 이를 `변수 호이스팅`이라고 한다

```
function scope(){
    var top = "top";
    bottom = "bottom";
    console.log(bottom);

    var bottom;
}
```

위 코드는 `var bottom`이 변수 호이스팅에 의해서 상단으로 올라가고 그 다음 할당이 이루어진다 결국 로그를 찍었을 때, bottom이 정상 출력된다

var 키워드에 관해 주목할 점은 해당 변수의 범위에 가장 가까운 함수 범위에 적용이 된다는 것이다

```
function scope(print){
    if(print){
        var innerVar = 12;
    }
    console.log(innerVar);
}
scope(true);
```

변수 호이스팅의 관점에서 위 코드를 다시 살펴보면

```
function scope(print){
    var innerVar;
    if(print){
        innerVar = 12;
    }
    console.log(innerVar);
}
```

와 같은 코드가 되기 때문에 정상적으로 12가 출력될 수 있다

```
var innerVar = 20;

function scope(print){
    if(print){
        var innerVar = 12;
    }
    console.log(innerVar);
}
scope(true);
```

위 코드는 전역변수의 값인 20이 아니라 12가 출력이 된다. innerVar가 함수 범위 내에서 재 선언 되었기 때문에 12가 출력되는 것이다

## let을 활용한 선언: 블록 범위

ES6가 등장하면서 let과 const의 개념이 등장하게 된다

이때 let으로 선언하게 되면 변수가 선언된 블록 내에서 유효하게 된다

```
function scope(print){
    if(print){
        let innerVar = 12;
    }
    console.log(innerVar);
}
scope(true);
```

`innerVar`는 if문 내에서만 유효하기 때문에 오류가 출력된다

## === 와 ==

JS는 스크립트 언어이고 변수 선언시 변수에 형이 할당되지 않는다. 대신, 코드가 실행될 때 해당 변수의 형이 해석된다

따라서 === 는 ==보다 더욱 엄격한 확인을 위해 사용된다

> == : 값만을 확인
>
> === : 타입과 값 모두 확인

```
console.log("5" == 5); // true;

console.log("5" === 5); // false;
```

하지만 객체의 경우 다른 결과를 보인다 같은 두 개의 빈 객체를 선언하고 비교 했을 때, 다른 결과를 나타낸다

```
let o1 = {};
let o2 = {};

console.log(o1 == o2); // false
console.log(o1 === o2); // false
```

이는 두 객체가 서로 메모리상의 주소가 다르기 때문에 나타나는 현상이다.

같은 객체여도 속성과 값을 비교하는 것이 아니라 객체의 메모리상의 주소가 같은지 비교하기 때문에 false를 반환하게 되는 것이다

따라서 이런 문제를 해결하기 위해서 lodash나 underscore를 사용한다
