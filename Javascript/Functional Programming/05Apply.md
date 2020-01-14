# Apply

this를 설정해줄 수 있는 함수의 메소드이다

코드로 더 와닿게 확인을 해보자

```
o1 = { val1: 1, val2: 2, val3: 3 };
o2 = { v1: 10, v2: 50, v3: 100, v4: 25 };

function sum() {
    var _sum = 0;
    for (name in this) {
        _sum += this[name];
    }
    return _sum;
}

console.log(sum.apply(o1));
console.log(sum.apply(o2));
```

for문에서 this의 값들을 불러와서 객체내의 모든 value를 더해주는 것이다

이때 apply 메소드를 사용해서 this를 o1, o2 로 설정을 해주는 것이다

만약 apply메소드를 사용하지 않을 경우의 o1, o2에서 함수를 호출해야 this가 o1, o2로 적용이 되므로

```
o1 = { val1: 1, val2: 2, val3: 3, sum: sum };
o2 = { v1: 10, v2: 50, v3: 100, v4: 25, sum: sum };

function sum() {
    var _sum = 0;
    for (name in this) {
        _sum += this[name];
    }
    return _sum;
}

console.log(o1.sum());
console.log(o2.sum());
```

이렇게 작성을 해야하지만 `for...in` 구문을 돌면서 sum까지 더하게 되므로 이상한 결과값이 나온다 따라서 최종 수정 코드는

```
o1 = { val1: 1, val2: 2, val3: 3, sum: sum };
o2 = { v1: 10, v2: 50, v3: 100, v4: 25, sum: sum };

function sum() {
    var _sum = 0;
    for (name in this) {
        if (typeof this[name] !== "function") {
            _sum += this[name];
        }
    }
    return _sum;
}

console.log(o1.sum());
console.log(o2.sum());
```

이렇게 값의 데이터타입이 function이 아닐 경우에만 더하는 조건문까지 추가를 해줘야 최종 완성본이 되는 번거로움이 발생한다

따라서 실용적인 코드를 위해 apply를 활용한 코드 작성 연습이 필요하다

> call과 apply 메소드는 기능은 동일하나 call 메소드는 인자를 하나 하나 받고 apply는 인자의 리스트를 전달한다

예제

-   sum.call(null, 2, 3)
-   sum.apply(null, [2,3])
