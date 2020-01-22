# Set & Weak Set

## Set

Set 자료형은 중복 없이 유일한 값을 저장하려고 할 때 유용하다

```
let mySet = new Set();

mySet.add("manngold");
mySet.add("kim");
mySet.add("manngold");

console.log(mySet.has("kim")) // true

console.log(mySet);
```

출력을 해보면 "manngold" 요소 값이 1개만 있는 것을 확인할 수 있다

## WeakSet

WeakSet 자료형은 참조를 가지고 있는 객체만 저장이 가능하다

객체 형태를 중복 없이 저장하려고 할 때 유용하다

```
let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let obj = { arr, arr2 };
let ws = new WeakSet();

ws.add(arr);
ws.add(arr2);
ws.add(obj);

arr = null;

console.log(ws); // 배열과 객체 모두 출력
console.log(ws.has(arr), ws.has(arr2)); // false true
```

ws를 찍었을 때 정상적으로 출력되는 것처럼 보이지만 has 메소드를 적용하면 유효하지 않는 값이라는 것을 알 수 있다
