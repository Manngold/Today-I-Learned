# Inheritance

상속이란 객체지향에서 아주 중요한 개념이다

객체에는 하나의 컨테이너고 어떠한 로직이 들어있다

그 객체는 물려받을 수 있고 단순히 물려받는 것뿐만 아니라 기존의 로직을 수정하고 변경해서 의도에 맞춰 객체를 활용할 수 있다

```
function Person(name) {
    this.name = name;
    this.introduce = function() {
        console.log(`Hi my name is ${this.name}`);
    };
}

var person1 = new Person("manngold");

person1.introduce() // Hi my name is manngold
```

이것이 우리가 앞서 알고 있는 객체를 생성하는 기본 흐름이다

같은 결과를 출력하지만 다른 코드이다

```
function Person(name) {
    this.name = name;
}

Person.prototype.name = null;
Person.prototype.introduce = function() {
    console.log(`Hi my name is ${this.name}`);
};

var person1 = new Person("manngold");
```

constructor function을 활용해서 객체를 생성하고

Person이라는 객체내에 존재하는 prototype이라는 속성에 name이라는 속성, introduce라는 속성을 추가했다

이렇게 상속을 위한 준비가 끝났다

## 상속의 사용법

```
function Person(name) {
    this.name = name;
}

Person.prototype.name = null;
Person.prototype.introduce = function() {
    console.log(`Hi my name is ${this.name}`);
};

function Programmer(name) {
    this.name = name;
}

Programmer.prototype = new Person();

var programmer = new Programmer("manngold");

programmer.introduce();
```

우선 앞서 정의한 `Person`이라는 객체가 존재하고 이후 `Programmer`라는 객체를 생성해서 `Programmer.prototype`를 `Person.prototype`로 상속을 받는다 따라서 `programmer.introduce()`를 호출해도 정상적으로 출력이 된다

## 기능의 추가

있는 기능을 그대로 받기만 한다면 상속을 제대로 활용하지 않는것이다. 중복되는 큰 기능을 받고 개별적인 기능을 추가하는것이 상속을 제대로 사용하는 것이다

위 예제처럼 사람이라는 큰 틀을 갖고 자기 소개를 하는 기능을 갖는다

그리고 사람은 프로그래머, 디자이너라는 직업을 갖으면서 그 직업만이 할 수 있는 일을 한다

코드로 확인해보자

```
function Person(name) {
    this.name = name;
}

Person.prototype.name = null;
Person.prototype.introduce = function() {
    console.log(`Hi my name is ${this.name}`);
};

function Programmer(name, skill) {
    this.name = name;
    this.skill = skill;
}

Programmer.prototype = new Person();
Programmer.prototype.coding = function() {
    console.log(`coding...${this.skill}`);
};

function Designer(name, skill) {
    this.name = name;
    this.skill = skill;
}

Designer.prototype = new Person();
Designer.prototype.design = function() {
    console.log(`design...${this.skill}`);
};

var programmer = new Programmer("manngold", "beautiful");
var designer = new Designer("fourfoot", "faster");
programmer.introduce();
programmer.coding();

designer.introduce();
designer.design();
```

`Person`이라는 큰 객체를 상속 받고 디자이너와 프로그래머만이 할 수 있는 개별적인 메소드를 추가하면서 상속의 활용을 극대화 할 수 있다

## prototype

자바스크립트를 지탱하는 핵심적인 개념이고 다른 언어와 구분할 수 있는 개념이다

```
function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function Sub() {}
Sub.prototype = new Super();

var o = new Sub();

console.log(o.ultraProp);
```

Ultra라는 객체의 prototype에 ultraProp = true라는 속성을 추가하고

Super 객체는 Ultra를 상속받고 그 밑에 Sub 객체는 Super를 상속받는다

그리고 o에 생성자로 Sub 객체를 생성한다

이렇게 되면 o는 빈 객체가 되는데 굳이 생성자로 하는 이유는 뭘까?

바로 `prototype`이라는 속성을 활용하기 위함이다 Sub의 prototype은 Super의 prototype를 Super의 prototype는 Ultra의 prototype를 이어받고 최상단의 Ultra.prototype에는 ultraProp이라는 속성이 존재한다 따라서 prototype를 활용하여 이어져있는 prototype의 속성을 사용할 수 있는 것이다

이것을 prototype chain이라고 한다

## prototype chain

prototype chain의 특성은 가장 가까운 객체의 prototype 속성부터 찾는 것이다 위 코드에서 o.ultraProp을 출력했을때 값이 true가 나올 수 있었던 것은 최하단 Sub부터 prototype 내에 ultraProp이 존재하는지 찾으면서 위로 올라가서 결국 최상단의 Ultra.prototype에 존재하는 ultraProp을 반환하게 되는 것이다

```
function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function Sub() {}
Sub.prototype = new Super();
Sub.prototype.ultraProp = "Sub's ultraProp";

var o = new Sub();

console.log(o.ultraProp);
```

코드로 확인해보자면 다음과 같이 나온다
