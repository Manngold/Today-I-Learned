# Map & WeakMap

## WeakMap

WeakMap의 key는 Object형만 들어간다

```
let wm = new WeakMap();

let myFunc = function() {};

//객체를 key값으로 받는다

wm.set(myFunc, 0);

count = 0;

for (let i = 0; i < 10; i++) {
    wm.get(myFunc);
    count++;
    wm.set(myFunc, count);
}

console.log(wm.get(myFunc)); // 10

myFunc = null;

console.log(wm.get(myFunc)); // undefined
```

만약에 WeakMap의 key가 참조가 없을 경우 모든 항목은 가비지 컬렉터에 의해서 WeakMap에서 제거된다

## WeakMap 클래스 인스턴스 변수 보호

wm을 활용해서 인스턴스 변수를 쉽게 보호할 수 있다

```
let wm = new WeakMap();

function Area(height, width) {
    wm.set(this, { height, width });
}

Area.prototype.getArea = function() {
    const { height, width } = wm.get(this);
    return height * width;
};

let myarea = new Area(10, 20);

console.log(myarea.getArea());
```
