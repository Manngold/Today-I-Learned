# CRUD

C - create

R - read

U - update

D - delete

파일을 읽기 위해서는 `fs`라고 하는 node.js 모듈을 사용해야 한다.

따라서 `var fs = require('fs');` 명령어로 모듈을 불러온 뒤,

fs의 메소드인 readFile()을 사용해서 파일을 읽어온다

```
fs.readFile('경로', '인코딩 방식', function(err,data){
    console.log(data)
})
```

인자값이 총 세 개가 들어가는데 첫번째는 읽고 싶은 파일의 경로, 두 번째는 인코딩 방식, 세번째는 콜백함수가 들어간다
