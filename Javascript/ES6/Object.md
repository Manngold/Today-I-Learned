# Object

ES6에서 Object와 관련된 많은것들이 등장했다

이전에 객체를 생성할 때에는

```
var name = "manngold"
var age = "27"
var email = "jsw4820@gmail.com"

var info = {
    name : name,
    age : age,
    email: email
}
```

이렇게 변수명이 같으면 불필요한 과정이 존재했다. 하지만 ES6부터는 이런 부분이 개선되었다

```
const name = "manngold"
const age = "27"
const email = "jsw4820@gmail.com"

const info = {
    name,
    age,
    email
}
```

이렇게 같은 객체가 형성이 된다

## Destructuring

구조 분해라는 의미로 ES6에서 눈에 띄는 기능이다

### 배열에서의 Destructuring

```
let data = ["manngold", "moon", "sun", "bob"];
let [jhon, , , paul] = data;

console.log(jhon, paul);
```

배열을 분해해서 jhon과 paul객체에 manngold와 bob으로 값을 할당이 가능하다
