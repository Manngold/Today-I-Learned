# Number Of JS

## 숫자 체계

JS는 64비트 부동소수점 표현을 사용한다

64비트를 활용하여 부호, 지수 값, 분수 값을 나타낸다

JS는 십진분수로 인해 부동소수점 체계가 반올림 오류를 일으킬 수 있다

예를들어 `0.1 + 0.2 === 0.3`이 false가 되어 버리는 어이 없는 결과가 나타나기도 한다

0.1을 64비트 부동소수점 숫자로 제대로 표현할 수 없는 이유는 이진 표기법으로 10은 1010이고 1 / 10을 계산하려 하면

소수점 아래 수가 무한히 생성된다

하지만 자바스크립트에는 Number 객체의 내장된 속성들이 있다

## Number.EPSILON

`Number.EPSILON`은 두 개의 표현 가능한 숫자 사이의 가장 작은 간격을 반환한다

이는 앞서 언급된 문제를 해결하기 위한 방법으로 유용하다

```
function numberEqual(x, y){
    return Math.abs(x - y) < Number.EPSILON
}

numberEquals(0.1 + 0.2 , 0.3); // true
```

## Number.MAX_SAFE_INTEGER

가장 큰 정수를 반환해준다

`Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2`

이 코드는 더 이상 커질 수 없기 때문에 true를 반환한다. 하지만 부동소수점과 같이 사용하면 false를 반환한다.

## Number.MIN_SAFE_INTEGER

Number.MAX_SAFE_INTEGER와 반대로 가장 작은 정수를 반환한다

## Infinity

Number.MAX_VALUE보다 큰 유일한 것은 Infinity이고 -Number.MAX_SAFE_INTEGER보다 작은 유일한 것은 -Infinity이다

# 숫자 알고리즘

## 소수 테스트 알고리즘

```
function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}
```

위 코드는 2부터 n - 1 까지 나눠서 나머지가 0인지를 확인하는 방법인데 이 방법은 O(n)의 복잡도를 나타내므로 효율적인 코드가 아니다

소수를 나열해보면 `2,3,5,7,11,13,17,19,23,29,31...`로 2와 3을 제외한 모든 소수는 6k+1, 6k-1의 형태를 띄고 있다

그리고 n의 제곱근이 소수가 아니면 n은 수학적 정의에 의해서 소수가 아니기 때문이다

```
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 == 0 || n % 3 == 0) return false;

    for (let i = 5; i * i < n; i = i + 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;
        }
    }

    return true;
}
```

이렇게 코드를 변경할 수 있고 시간복잡도는 O(sqrt(n))을 나타내게 된다.
