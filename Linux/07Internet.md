# Internet

두대의 컴퓨터가 있다고 가정하자

하나는 내 컴퓨터 다른 하나는 구글의 컴퓨터

브라우저에 google.com을 입력하면 요청이 보내지고 google의 컴퓨터는 요청에 대한 정보를 보내준다

이것이 기본적인 구조이며 우리는 여기서 google에게 request를 했다고 하고 google은 response를 했다고 한다

이때 request를 보낸쪽이 Client가 되고 response를 한 곳은 Server라고 한다

조금 더 진전시켜서 방금 우리가 google.com을 입력해서 들어갔는데 이때 google.com을 `domain name` 이라고 한다

그리고 다른 접속 방법은 `ip address` 라는 방식으로 ip를 이용해서 접속하는 방식인데 콘솔 창에 `ping google.com`을 입력하면 ip address가 나오고 이 값을 브라우저에 입력하면 google.com을 입력할 때와 동일하게 접속할 수 있게 된다

## Public ip vs Private ip 

터미널에 두 가지를 입력해보자 `curl ipinfo.io/ip`와 `ip addr`을 입력하면 각각 ip주소가 이 둘은 전부 내가 사용하는 ip 주소이다 

하지만 높은 확률로 두 결과 값이 다를텐데 그건 바로 `public ip와 private ip` 때문이다

우선 우리는 인터넷 회선을 연결하고 공유기(Router)를 설치한다 그리고 이 공유기에 여러 기기를 연결한다.

이때 통신사가 제공하는 ip가 public ip로 외부와 통신하기 위한 ip 주소이고

private ip는 같은 네트워크끼리 통신을 하기 위해서 생성된 ip 주소이다


