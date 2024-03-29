# Reference

## 복제란?

다음 코드를 보면서 이해 해보자

```
var a = 1;
var b = a;

b = 2;

console.log(a); // 1
```

변수 a와 b를 생성했고 b는 a에 담긴 값을 그대로 담았다

이 과정에서 복제를 해서 b에 값을 담았기 때문에 값은 1이 된다

그 이후 b의 값을 2로 변경하고 a를 출력해보니 1이 출력되는 것을 확인하고 b의 값을 변경했다고 해서 a의 값이 바뀌지 않는 것을 확인할 수 있다 이는 `원시 데이터 타입`에만 해당된다

당연한 결과지만 이후 `참조`의 개념과 대비되는 개념이므로 명확하게 알고 가는 것이 좋다

## 참조

그렇다면 `객체 데이터 타입`은 어떻게 될까?

```
var a = {'id':1};
var b = a;

b.id = 2;

console.log(a.id) // 2
```

이상하게도 a의 id가 변경되었다. 이것이 바로 `참조`의 특징인데 a를 `{'id': 1}`로 선언하면 메모리에 `{'id': 1}`가 올라가게 된다

따라서 a는 메모리에 올라간 값을 바라보고 b = a를 선언하는 순간 b는 a가 바라보는 것을 똑같이 바라보게 된다

그래서 `b.id = 2`라는 것은 b가 바라보는 데이터의 속성을 변경한 것이기 때문에 a도 똑같이 바라보고 있으므로 출력시 그 값 또한 변경이 되는 것이다

```
var a = {'id': 1};
var b = a;

b = {'id' : 2};

console.log(a.id); // 1
```

이 경우는 a와 b가 같은 객체를 바라보다 메모리에 다른 객체를 올리고 b는 a가 바라보던 것을 바라보지 않고 새로운 객체를 바라보기 때문에 a의 id 값은 변경이 안된다

## 함수와 참조

```
var a = 1;

function func(b){
    b = 2;
};
func(a);
console.log(a); // 1
```

```
var a = {'id' : 1};

function func(b){
    b = {'id': 2};
}
func(a);
console.log(a.id) // 1
```

```
var a = {'id' : 1};

function func(b){
    b.id = 2;
}
func(a);
console.log(a.id) // 2
```

앞서 배운 개념들은 함수에서도 동일하게 적용된다

복제, 참조의 개념을 명확히 이해하고 코드를 작성하도록 하자
