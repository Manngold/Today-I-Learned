# Class

## class를 통한 객체생성

기존 function을 활용한 객체 생성

```
function Human(name, age) {
    this.name = name;
    this.age = age;
}

Human.prototype.introduce = function() {
    return `hello my name is ${this.name}, ${this.age} years old`;
};

let kim = new Human("kim", 26);

kim.introduce();
```

ES6의 class를 활용한 객체 생성

```
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `hello my name is ${this.name}, ${this.age} years old`;
    }
}

let kim = new Human("kim", 26);

kim.introduce();
```

## Object assign으로 JS객체 만들기

객체를 생성하는 방법중 Object.create로 생성하는 방식이 존재한다 메소드로 활용되는 함수들을 먼저 정의해놓고 속성 값을 추가하는 방식이다

```
const healthObj = {
    showHealth: function() {
        console.log("운동 시간 : " + this.healthTime);
    }
};

const mikeHealth = Object.create(healthObj);

mikeHealth.healthTime = "11 : 11";
mikeHealth.showHealth();
```

이렇게 되면 코드의 가독성을 해칠 수 있기 때문에 Object.assign을 사용하면 객체 생성과 동시에 속성을 추가하면서 훨씬 깔끔해진다

```
const healthObj = {
    showHealth: function() {
        console.log("운동 시간 : " + this.healthTime);
    }
};

const mikeHealth = Object.assign(Object.create(healthObj), {
    healthTime: "11 : 11",
    name : "manngold"
});

mikeHealth.showHealth()
```
