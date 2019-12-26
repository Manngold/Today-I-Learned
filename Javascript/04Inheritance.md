# Inheritance

클래스 기반의 언어에서 상속은 두 가지 유용한 점을 제공한다

1. 코드 재사용의 한 형태이다.
    - 만약 새로 만들 클래스가 기존에 있는 클래스와 매우 유사하다면 상속을 통해서 다른 점만 구현하면 된다
2. 상속에 데이터 타입 체계의 명세가 포함된다.

> JS에서 객체의 중요한 점은 어떤 일을 하는지가 중요하다

## Pseudoclassical

함수 객체가 만들어질 때, 함수를 생성하는 Function 생성자는 다음과 같은 코드를 실행한다.

```

this.prototype = { constructor : this };

```

새로운 함수 객체는 새로운 함수 객체를 값으로 갖는 constructor라는 속성이 있는 객체를 prototype 속성에 할당 받는다

prototype 객체는 상속할 것들이 저장되는 장소이다.

JS는 어떤 함수가 생성자로 사용되기 위해 만들어졌는지 알 수 있는 방법을 제공하지 않기 때문에 모든 함수는 prototype 객체를 갖는다

new 연산자가 메소드라면 구현

```

Function.method("new", function() {
    var that = Object.create(this.prototype);
    var other = this.apply(that, arguments);
    return (typeof other === "object" && other) || that;
});

var Mammal = function(name) {
    this.name = name;
};

Mammal.prototype.getName = function() {
    return this.name;
};

Mammal.prototype.saying = function() {
    return this.say || "";
};

var myMammal = new Mammal("Herb the Mammal");
var name = myMammal.getName();

var Cat = function (name) {
    this.name = name;
    this.saying = "meow";
};

Cat.prototype = new Mammal();

Cat.prototype.purr = function (n){
    var i, s = '';
    for (i = 0; i < n; i++){
        if(s){
            s += '-';
        }
        s += 'r';
    }
    return s;
}

Cat.prototype.getName = function (){
    return this.says() + ' ' + this.name + " " + this.says();
}

var myCat = new Cat('Henrietta');
var says = myCat.saying(); //meow
var purr = myCat.purr(5); //r-r-r-r-r
var name = myCat.getName(); // meow Henrietta meow

```

클래스와 같이 동작하는 생성자 함수를 갖게 되었지만 private은 없고 모든 속성이 public이다 그리고 부모 메소드로의 접근도 전혀 할 수 없다

## Object Specifiers (객체를 기술하는 객체)

때로는 생성자가 많은 매개변수를 갖는 경우가 있다 순서를 외우기 힘들고 성가시기 때문에 객체를 기술하는 하나의 객체를 받도록 정의하면 편리하게 사용할 수 있다

```

var myObj = maker(f, l, m, c, s);

```

이렇게 작성하기 보다는

```

var myObj = maker({
    first: f,
    last: l,
    state: s,
    city: c
});

```

형태로 작성해서 가독성을 높일 수 있다.

## Prototype 방식

순수하게 프로토타입에 기반한 패턴은 클래스가 필요 없다 대신 객체에만 초점을 맞추면 된다

프로토타입에 의한 상속은 개념적으로 클래스에 의한 상속보다 더 간단하다

즉 새로운 객체는 기존 객체의 속성들을 상속받을 수 있다

```

var myMammal = {
    name: "Herb the Mammal",
    getName: function() {
        return this.name;
    },
    says: function() {
        return this.saying || "";
    }
};

var myCat = Object.create(myMammal);
myCat.name = "Henrietta";
myCat.saying = "meow";

console.log(myCat.says());
console.log(myCat.getName());

```

객체를 생성하고 Object.create 메소드를 사용하여 이 객체의 더 많은 인스턴스를 생성할 수 있다.

새로 만든 인스턴스를 필요에 맞게 맞춤화할 수 있다.(메소드나 속성 추가)

```
//메소드 추가 및 수정

myCat.purr = function(n) {
    var i,
        s = "";
    for (i = 0; i < n; i++) {
        if (s) {
            s += "-";
        }
        s += "r";
    }
    return s;
};

myCat.getName = function() {
    return this.says() + " " + this.name + " " + this.says();
};


```

이러한 방법은 클래스에 의한 상속과는 분명히 구별되는 상속 방법이다

새로운 객체를 맞춤화하면서 기반이 되는 객체와 차이점을 만들 수 있다

프로토타입 방식은 기존 데이터 구조를 상속받는 데이터 구조에 유용

## 함수를 사용한 방식

지금까지 살펴본 프로토타입에 의한 상속패턴의 한가지 단점은 private 속성을 가질 수 없다는 것이다 객체의 모든 속성은 public 이다.

이건 경우에 따라서 중요한 문제일 수 있다.

함수를 사용한 방식은 나은 대안이 될 수 있다

4단계로 작업이 진행된다

1. 새로운 객체를 생성한다

2. 필요한 private 변수와 메소드를 정의한다 (함수 안의 일반적인 변수)

3. that에 새로운 객체 할당, 메소드 추가 이때 추가되는 메소드들은 함수의 매개변수와 2번 단계에서 정의한 변수들을 접근할 수 있는 권한을 갖는다

4. 새로운 객체 that을 반환한다

```

var mammal = function(spec) {
    var that = {};

    that.getName = function() {
        return spec.name;
    };
    that.says = function() {
        return spec.saying || "";
    };
    return that;
};

var myMammal = mammal({ name: "Herb" });

```

의사 클래스 패턴에서 Cat 생성자 함수가 Mammal 생성자가 하는 작업과 같은 작업을 중복해서 해야만 했다 하지만 함수형 패턴에서는 Cat 생성자가 Mammal 생성자를 호출하고 Mammal 생성자가 객체 생성을 위해 필요한 대부분의 작업을 하기 때문에 이러한 작업이 필요가 없다

Cat은 추가되는 부분만 신경쓰면 된다

```

var cat = function(spec){
    spec.saying = "meow";
    var that = mammal(spec);
    that.purr = function(n){
        var i, s = '';
        for(i = 0; i < n; i++){
            if(s){
                s += '-';
            }
            s += 'r';
        }
        return s;
    }
    that.getName = function () {
        return that.says() + " " + spec.name + " " + that.says();
    }
    return that;
}

var myCat = cat({name: "Henrietta"})

```
