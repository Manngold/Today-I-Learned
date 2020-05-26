# Webpack

## 웹팩의 도입

새로운 버전의 js를 지원하지 않는 브라우저를 위해서, 여러 파일들 로드하는 비용을 줄이기 위해서 우리는 웹팩을 사용한다

이러한 목표를 갖고 우리는 웹팩의 기본적인 작업흐름은 다음과 같다

1. 여러 js 파일이 모이는 `entry point`가 존재한다(index.js)
2. 이 entry point를 갖고 webpack을 통해서 작업을 진행한뒤, `output`(결과물) 파일을 어느 폴더에 생성한다
3. html 파일에서 작업이 완료된 결과물을 활용한다.

## webpack.config.js

개발을 하면서 프로젝트는 규모가 커지게 될 것이고 webpack은 점점 번들링을 할 파일들이 많아지고 그에 따라서 해줘야 할 설정들이 많아진다. 따라서 webpack은 config 파일을 생성해서 프로젝트에 필요한 webpack의 설정을 입력 할 수 있다.

## mode

webpack에는 총 세 가지의 모드가 존재한다

none, development, production인데

`none`은 말 그대로 모드가 설정되지 않은 값이고 `development`는 파일들을 번들링해서 하나의 파일로 만들지만 개발자가 읽기 쉽게 만들어준다. `production` 모드는 변수 이름 변경 + 난독화를 최대한으로 압축을 진행한다.

이를 활용해서 개발용 webpack.config, 배포용 webpack.config.pord를 만들어 상황에 맞춰 사용하고 더 나아가 환경변수 설정을 통해서 모드를 변경 할 수 있다

## loader

webpack은 js 파일뿐만 아니라 css, jpg, png등의 파일도 묶어주는 엄청난 기능을 제공한다 이때 필요한 개념이 loader라는 개념이다

이때 번들링을 하고 싶은 파일에 대한 loader를 package manager를 통해서 다운 받아서 config 파일에 설정 해준다.

css 파일을 기준으로 css 파일을 웹팩에 로드하기 위한 css-loader, 번들링한 파일을 js파일에 담아주는 style-loader가 필요하다

```
module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    }
```

module -> rules에 배열의 형태로 여러 가지 번들링 전략이 담길 수 있다

`test` 속성은 어떤 파일을 번들링 할 것인가에 대한 것을 정할 수 있고 `use`는 파일에 대해서 어떤 loader를 사용 할 것인가에 대한 설정이면 배열의 최상위 loader부터 사용이 된다.
