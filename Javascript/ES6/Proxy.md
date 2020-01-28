# Proxy

## Proxy란?

어떤 object가 있을때 object를 작업을 할 때, 추가적인 일을 수행하는것

```
const myObj = { name: "manngold" };

const proxy = new Proxy(myObj, {
    get: function(target, property, receiver) {
        console.log("get value");
        return target[property];
    },
    set: function(target, property, value) {
        console.log("set value");
        target[property] = value;
    }
});

proxy.name;
proxy.name = "paul";
```

myObj에 대하여 값을 불러오거나 수정할 때 위처럼 추가적인 로직을 수행할 수 있다

응용해서 myObj의 property를 수정할 때마다 count를 올려주는 로직도 추가할 수 있다

```
const myObj = { name: "manngold", cnt: 0 };

const proxy = new Proxy(myObj, {
    get: function(target, property, receiver) {
        console.log("get value");
        return target[property];
    },
    set: function(target, property, value) {
        console.log("set value");
        target.cnt += 1;
        target[property] = value;
    }
});

proxy.name;
proxy.name = "paul";
proxy.name = "kim";
console.log(myObj);
```

총 수정 횟수가 두번이므로 cnt가 2인것을 확인할 수 있다
