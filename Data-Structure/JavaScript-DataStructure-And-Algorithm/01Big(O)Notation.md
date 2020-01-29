# Big(O) Notation

## Basic of Big(O)

입력의 갯수를 n이라고 할 때, n이 무한으로 접근할 때 어떻게 되는 것인가에 대한 것이다

표기를 할 때에는 대문자 O에 n에 대한 처리시간을 표기해준다 ex) O(n), O(n^2) ....

1. O(1)

배열에 있는 항목을 인덱스를 사용해 접근하는 경우

2. O(N)

n개의 입력이 있을 때, 최악의 경우 n번의 연산을 수행해야 할 때

```
for (var i = 0; i < n; i++) {
    console.log(i);
}
```

3. O(N^2), O(N^3)...

n개의 입력이 있을 때, n^n만큼의 시간이 소요되는 시간복잡도

```
for (var i = 0; i < n; i++) {
    console.log(i)
    for(var j = 0; j < n; j++){
        console.log(j)
    }
}

for (var i = 0; i < n; i++) {
    console.log(i)
    for(var j = 0; j < n; j++){
        console.log(j)
        for(var k = 0; k < n; k++){
            console.log(k)
        }
    }
}
```

4. O(log N)

n개의 입력이 있을 때, log N의 시간복잡도를 갖는 코드

```
for (var i = 0; i < n; i * 2) {
    console.log(i);
}
```

## Rule of Big O notation

1. 계수법칙 - 시간복잡도를 계산할 때, 앞에 계수가 붙은 경우 n은 무한에 가까워질 경우 무시할 수 있으므로 계수를 제거한다

2. 합의 법칙 - f(n) = O(h(n)) g(n) = O(p(n))일 때, f(n) + g(n) = O(h(n) + p(n))이 될 수 있다

3. 곱의 법칙 - 합의 법칙과 마찬가지로 두 개의 다른 시간 복잡도를 곱할 때 빅오 표기법도 곱해진다

4. 다항 법칙 - k차 다항식이면 O(n^k)가 되면서 최고 차수의 항을 제외한 나머지 항은 무시할 수 있을만큼 작기 때문에 무시가 가능하다

code

```
for (var i = 0; i < 9 * n; i++) {
    console.log(i);
}
```

계수 법칙에 의해서 O(N)

```
for (var i = 0; i < 9 * n; i++) {
    console.log(i);
}

for (var j = 0; j < 10 * n; j++) {
    console.log(j);
}
```

for문이 두 개가 존재하는데 각각의 시간 복잡도는 O(9N), O(10N)이고 합의 법칙에 의해 더하면 O(19N)인데 계수 법칙을 적용해서 O(N)이 된다

```
for (var i = 0; i < 9 * n; i++) {
    console.log(i);
    for (var j = 0; j < 10 * n; j++) {
        console.log(j);
    }
}
```

각각의 시간복잡도는 O(9N), O(10N)이고 중첩된 loop로 O(90N^2)이지만 계수 법칙을 적용해서 O(N^2)이 된다
