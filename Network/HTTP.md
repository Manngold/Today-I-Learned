# HTTP

## HTTP란?

Hyper Text Transfer Protocol의 약자이다.

HTML, CSS, JS, img 등의 컨텐츠를 주고 받기 위해서 클라이언트는 요청(Request)하고 서버는 그에 따라 응답(Response)을 해주게 된다.

이 때, 서로 알아들을 수 있는 공통의 약속으로 메세지를 주고 받아야한다.

바로 이 메세지를 `HTTP`이고 이 메세지는 Request와 Response로 나뉘어져있다.

### 어떻게 알 수 있을까?

크롬 개발자 도구 -> 네트워크 탭에서 로드된 파일을 클릭하면 Request와 Response에 대한 정보가 들어있다.

### HTTP Status Code

HTTP 요청과 응답에 따라 어떤 상태인지 알려주는 메세지이다

백단위로 정보들이 분류된다

1. 1xx : informational
2. 2xx : Successes
3. 3xx : Redirection
4. 4xx : Client Error
5. 5xx : Server Error

## Request Message

![RequestMessageImg](https://lh3.googleusercontent.com/proxy/KNlLH9F3NMtlATUDYADG7KvQljCTso-yI-xVa10q5Wd0C2diSEbgto2_RLw2SLCclZhFoneLtdjdYmjim4DacJtpN4RCF252t9UiVqZ9Ft-j1xVraTvbyGpYtQmSmM58ofc7rOrRSuTbO6kiPNrPvVtcAtNKYimAr2304uay)

### Request Message Header

Request Line과 Request Headers가 합쳐져서 Request Message Header가 된다.

Request Line에는 어떤 메소드로 어떤 파일을, 어떤 HTTP 버전으로 요청을 했는지 정보를 알려준다.

Request Headers는 Host, 웹 브라우저, 운영체제, 언어, 인코딩, 콘텐츠의 길이 등등 여러 정보가 담겨있다.

## Response Message

![ResponseMessageImg](https://lh3.googleusercontent.com/proxy/uUbbtwcICSgsg0HHAfpzMqa57QILf19Ncoh-c1YYDDXQDj6y_2NOIdyRd63Z5FxOpMfboHQ9-3zz747HwqbA8-PmqoDW4TB351yQLLJM_8E)

1. Status Line : HTTP의 상태를 알려준다(HTTP 버젼, status code)
2. General Headers : 바디에서 최종적으로 전송되는 데이터와는 관련이 없는 헤더.
3. Response Headers : 위치 또는 서버 자체에 대한 정보(이름, 버전 등)와 같이 응답에 대한 부가적인 정보
4. Entity Headers : 내용에 대한 자세한 정보
5. Message Body : 응답 내용
