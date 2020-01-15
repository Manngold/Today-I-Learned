# Object

앞선 prototype chain 예제에서(Ultra-Super-Sub) 이 모든 객체들은 Object라는 최상위 객체를 상속받고 있다 따라서 우리가 객체를 생성하면 무조건 Object라는 객체를 상속받게 되어있다

## Object API

Object.method vs Object.prototype.method

Object의 key 값을 반환하는 keys 메소드를 사용하기 위해 MDN의 문서를 참조해보면

Object.keys()라고 되어있는데 이는 Constructor Function 내에서 정의된 메소드를 지칭한다

그래서 이 메소드를 사용할 때, Object.keys(parameter) 방식으로 사용을 해야 한다

```
var arr = [1,2,3];

Object.keys(arr) //"["0", "1", "2"];
```

Object.prototype.method는 Object.prototype에 정의된 메소드이다 따라서

Object를 상속받는 객체들은 해당 메소드를 사용할 수 있게 된다

Object.prototype.toString()은 object의 요소를 string으로 반환하는 메소드이다

```
var arr = [1,2,3];

arr.toString();

"1,2,3"
```
