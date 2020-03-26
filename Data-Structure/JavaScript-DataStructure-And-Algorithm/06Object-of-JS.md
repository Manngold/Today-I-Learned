# Object Of JS

객체는 `{}`나 `new Object()`로 생성이 가능ㅎ다ㅏ

속성 접근시 `object.propertyName` 혹은 `object['propertyName']`으로 접근이가능ㅎ다ㅏ

```
var obj = {};
var testArr = [1,2,3,4];

obj.testArr = testArr;

obj.title = "algorithm";
```

## 프로토타입 활용 상속

자바와 같은 언어에서는 클래스의 메소드가 클래스와 동시에 정의 됨

JS에서는 함수가 클래스의 Object 속성으로 추가돼야 한다

```
function ExampleClass() {
    this.name = "js";
    this.sayName = function() {
        console.log(this.name);
    };
}

var example = new ExampleClass();

example.sayName();
```

JS에서 프로토타입 활용 상속은 유일한 상속 방법이다. 클래스의 함수를 추가하기 위해서 .prototype 속성을 사용한 다음 함수의 이름을 지정하기만 하면 된다

```
function ExampleClass() {
    this.name = "js";
}

var example = new ExampleClass();

ExampleClass.prototype.sayName = function() {
    console.log(this.name);
};

example.sayName();
```
