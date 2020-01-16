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

## Object의 확장

배열의 확장과 마찬가지로 Object 또한 확장이 가능하다

Object에 속한 모든 객체가 특정 value가 있는지 확인하는 메소드를 만들어보자

```
Object.prototype.contain = function(needle) {
    for (var name in this) {
        if (this[name] === needle) {
            return true;
        }
    }
    return false;
};

var o = {"name": 'manngold', 'age': 25};
o.contain("manngold");
```

## Object 확장의 위험

이러한 확장은 모든 객체에 영향을 준다 다음 코드를 실행 시켜보면 이해가 될 것이다

```
Object.prototype.contain = function(needle) {
    for (var name in this) {
        if (this[name] === needle) {
            return true;
        }
    }
    return false;
};

var o = { name: "manngold", age: 25 };
o.contain("manngold");

for (var name in o) {
    console.log(name);
}
```

원래 기대되는 출력 값이 name과 age이지만 Object.prototype에 존재하는 contain이 같이 나온다

이렇게 모든 객체에 영향을 주게된 것이다

따라서 이렇게 확장을 할 경우 신중하게 결정을 해야한다

만약 확장을 했을 경우 고유한 객체의 속성을 갖고오고 싶다면

```
for(var name in o){
    if(o.hasOwnProperty(name)){
        console.log(name);
    }
}
```

hasOwnProperty 메소드를 사용하면 객체가 갖는 고유의 속성을 리턴한다
