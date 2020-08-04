# URL과 리소스

URL이란 인터넷의 리소스를 가리키는 표준이름이다.

이를 통해서 리소스가 어디에 있고 어떻게 접근할 수 있는지 알려준다.

## 리소스 탐색하기

http://www.joes-hardware.com/seasonal/index-fall.html

위 URL을 불러오고 싶다고 해보면

http는 scheme으로 웹 클라이언트가 리소스에 어떻게 접근하는지 알려준다. 이경우에는 HTTP 프로토콜을 사용한다.

www.joes-hardware.com은 서버의 위치로 웹 클라이언트가 리소스가 어디에 호스팅 되어있는지 알려준다.

/seasonal/index-fall.html은 리소스의 경로이며 서버에 존재하는 로컬 리소스들 중에서 요청받은 리소스가 무엇인지 알려준다.

그래서 URL은 일관된 방식으로 리소스를 지칭할 수 있다.

## URL 문법

대부분의 URL 스킴의 문법은 일반적으로 9개 부분으로 나뉘다.

<스킴>://<사용자 이름>:<비밀번호>@<호스트>:<포트>/<경로>;<파라미터>?<쿼리>#<프래그먼트>

모든 컴포넌트를 가지는 URL은 거의 없지만 가장 중요한 세 가지 컴포넌트는 스킴,호스트,경로이다.

예를 들면 http://www.joes-hardware.com:80/index.html 에서

http는 스킴, www.joes-hardware.com은 호스트, 80은 포트, /index.html은 경로가 된다.
