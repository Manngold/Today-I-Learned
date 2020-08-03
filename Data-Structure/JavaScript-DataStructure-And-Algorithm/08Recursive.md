# Recursive

재귀함수는 자기 자신을 호출하는 함수이다

잘못 구현하는 경우 프로그램이 함수에 빠져서 종료되지 않아서 stack overflow가 발생한다.

여기서 stack overflow는 프로그램의 콜 스택 최대 개수가 제한된 양의 주소 공간을 초과할 때를 나타냄

따라서 재귀함수는 종료 조건을 잘 설정해줘야 stack overflow에서 벗어날 수 있다.

```
function countDown(n){
    if(n < 0){
        return; // 종료 조건
    } else{
        console.log(n);
        countDown(n - 1);
    }
}

countDown(10);
```

## 피보나치 함수

피보나치 함수는 n번째 수가 n-1번째 와 n-2번째 수의 합이다.

따라서 피보나치 함수는 재귀함수와 꼬리 재귀를 통해서 구현 할 수 있다.

### 재귀함수를 활용한 피보나치 수열

```
function fibonacci(n){
    if(n <= 1){
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
```

이러한 경우 시간 복잡도는 2의 n승이 된다

### 꼬리 재귀를 활용한 피보나치 수열
