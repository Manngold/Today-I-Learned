# Arguments

함수에는 arguments라는 변수에 담긴 숨겨진 유사 배열(배열과 비슷하나 배열은 아니다)이 존재한다

이 배열에는 함수를 호출할 때 입력한 인자가 담겨있다

```
function sum() {
    var i,
        _sum = 0;
    for (i = 0; i < arguments.length; i++) {
        _sum += arguments[i];
        console.log(_sum);
    }
}

sum(1, 2, 3, 4, 5);
```

다음 코드를 보면 이상한 부분이 보인다

함수를 선언하는 부분에서 인자값을 넣도록 작성하지 않았는데 호출 부분에서 1부터 5까지 인자값을 넣고 있다

JS가 좋다면 좋다고 볼 수 있는 부분이고 안 좋다면 안 좋다고 할 수 있는 부분이다 이때 에러를 발생하지 않고 arguments에 해당 인자값들을 담아두고 함수를 실행하게 된다. 그리고 arguments 라는 유사 배열에서 인자값들을 꺼내서 사용할 수 있게 된다

## 매개변수의 수 - function length

다음 코드를 실행시켜보자

```
function sum(a, b) {
    return a + b;
}

sum(1, 2, 3);
```

분명 인자값으로 2개만 들어가야 하지만 3개가 들어갔음에도 불구하고 함수는 정상적으로 작동을 한다

이는 개발자의 의도와 전혀 다른 방향으로 실행이 된 것이므로 개선을 시켜야한다

앞서 arguments.length로 함수 호출에 들어간 인자값들의 갯수를 알 수 있었다

그렇다면 함수를 선언된 함수가 몇개의 인자값을 필요로 하는지는 알 수 있는 방법은 함수명.length로 알 수 있다

다음 코드를 통해서 확인해보자

```
function sum(a, b) {
    if (sum.length !== arguments.length) {
        throw Error("Warning : Only two arguments required");
    }
    return a + b;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2));
```

1. 조건문을 통해서 sum.length와 arguments.length가 같은지 확인

2. 만약 같다면 인자값을 더해서 리턴해준다

3. 만약 같지 않다면 에러를 발생시킨다

이런 기능을 활용하여 신뢰성 높은 코드를 작성할 수 있도록 하자
