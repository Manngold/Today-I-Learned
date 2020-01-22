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

### Destructuring Array

```
let data = ["manngold", "moon", "sun", "bob"];
let [jhon, , , paul] = data;

console.log(jhon, paul);
```

배열을 분해해서 jhon과 paul객체에 manngold와 bob으로 값을 할당이 가능하다

### Destructuring Object

객체에서 또한 가능하다 코드가 한층 더 간결해지는 효과를 볼 수 있다

```
let obj = {
    name: "manngold",
    age: 27,
    email: "jsw4820@gmail.com"
};

let { name, age } = obj;

console.log(name, age); // manngold 27
```

저장되는 변수명 또한 변경이 가능하다

```
let obj = {
    name: "manngold",
    age: 27,
    email: "jsw4820@gmail.com"
};

let { name: myName, ageL myAge } = obj;

console.log(myName, myAge);
```

### Destructuring JSON

JSON 또한 손쉽게 정보를 얻을 수 있다

```
let obj = [
    {
        name: "Molecule Man",
        age: 29,
        secretIdentity: "Dan Jukes",
        powers: ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
        name: "Madame Uppercut",
        age: 39,
        secretIdentity: "Jane Wilson",
        powers: [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
        ]
    }
];

let [, madame] = obj;
let {name, age} = madame;

console.log(madame);
```

이렇게 배열, 객체 Destructuring을 활용하여 원하는 정보를 얻어낼 수 있고
Destructuring 부분을 더 간단히 하면

`let [,{name, age}] = obj`로 간단히 표현 할 수 있다

### Passing Event Using Destructuring

HTML div 태그에 이벤트를 등록하고 event 객체를 Destructuring으로 활용해보자

```
document.querySelector("div").addEventListener("click", function({target, type}){
    console.log(type, target.tagName);
})
```

이런식으로 무거운 event 객체를 유연하게 사용할 수 있다
