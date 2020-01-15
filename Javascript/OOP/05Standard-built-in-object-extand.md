# Standard built-in object extand

## Standard built-in object란?

공식적으로 탑재된 상태에서 제공이 되는 객체를 뜻한다

-   Object
-   Function
-   Array
-   String
-   Boolean
-   Number
-   Math
-   Date
-   RegExp

위 객체들을 제공한다

서버 제어, 웹브라우저 혹은 구글 앱 같은 호스트 환경에서 제공하는 객체는 더 많아진다

이 개념과 대비되는 개념은 사용자 정의 객체라고 한다

## 배열의 확장

실용적인 예제로 배열에 임의의 값에 접근하는 코드를 작성해보자

```
 var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.random = function() {
    var index = Math.floor(this.length * Math.random());
    return this[index];
};

arr.random();
```

이렇게 기존에 제공하는 객체와 사용자가 작성한 코드를 합쳐서 객체를 만드는 것을 `하이브리드 객체`라고 한다

Array.prototype에 random이라는 메소드를 추가하는데 인자값으로 배열을 받게 되고 여기서 this는 생성된 배열을 가르키게 된다. 그리고 Math 객체를 활용해서 임의의 값에 접근할 수 있도록 한다
