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

객체를 생성하는 방법중 Object.create는 프로토타입이 추가된 객체를 생성하는 방식이 존재한다 메소드로 활용되는 함수들을 먼저 정의해놓고 속성 값을 추가하는 방식이다

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

추가적으로 Object.assign은 immutable 객체를 생성하는 방법이다

다음은 Object.assign으로 빈 객체를 생성하고 다른 객체에 존재하는 속성값을 받는 방식의 코드이다

```
const previousObj = {
    name: "manngold",
    lastTime: "11:20"
};

const myHealth = Object.assign({}, previousObj, {
    lastTime: "12:30"
});

console.log(myHealth);
```

이때 myHealth를 빈 객체로 생성하고 previousObj의 값만 받는다고 하고 두 값을 비교해보면 두 값이 참조하는 것이 동일하지 않기 때문에 false가 나온다

## setPrototypeOf

객체의 프로토타입 속성을 추가할 수 있는 Object의 메소드이다

```
const healthObj = {
    showHealth: function() {
        console.log(`오늘 운동 시간 : ${this.healthTime}`);
    },
    setHealth: function(newTime) {
        this.healthTime = newTime;
    }
};

const myHealth = {
    name: "manngold",
    healthTime: "12:30"
};

Object.setPrototypeOf(myHealth, healthObj);

myHealth.showHealth(); // 오늘 운동 시간 : 12:30
```

새로운 객체를 생성하는 것도 가능하다

```
const healthObj = {
    showHealth: function() {
        console.log(`오늘 운동 시간 : ${this.healthTime}`);
    },
    setHealth: function(newTime) {
        this.healthTime = newTime;
    }
};

const newHealth = Object.setPrototypeOf(
    {
        name: "manngold",
        healthTime: "12:30"
    },
    healthObj
);

newHealth.showHealth();
```

## setPrototypeOf를 활용한 객체간 prototype chain 생성

setPrototypeOf를 활용하면 prototype chain을 생성할 수 있다

```
const healthObj = {
    showHealth: function() {
        console.log(`오늘 운동 시간 : ${this.healthTime}`);
    },
    setHealth: function(newTime) {
        this.healthTime = newTime;
    }
};

const healthChildObj = {
    getAge: function() {
        return this.age;
    }
};

Object.setPrototypeOf(healthChildObj, healthObj);

const childObj = Object.setPrototypeOf({ age: 22 }, healthChildObj);

childObj.setHealth("11:20");
childObj.showHealth();
childObj.getAge();
```

age 속성이 존재하는 childObj를 생성하고 healthChildObj를 prototype 속성들을 받는다 그런데 healthChildObj는 healthObj의 prototype 속성을 받았으므로 코드에 존재하는 모든 메소드를 사용할 수 있다
