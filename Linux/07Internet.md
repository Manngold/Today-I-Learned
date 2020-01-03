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

## Apache - intro

이전에 우리는 Client와 Server가 존재한다는 것을 알게 되었고 req와 res를 통한 통신을 한다고 배웠다

이때 Client는 Web Browser를 통해서 Server에 접근하게 되고 Server는 Web Server를 활용해서 Client의 request에 해당하는 response를 할 수 있는 것이다

여기서 Web Browser는 firefox, chrome, ie 가 있고 Web Server는 Apache, nigx, IIS등이 있다

## Apache - install

따라서 apache를 설치하고 테스트를 위해서 elinks도 설치해준다

`service apache start` 명령어로 간단히 실행이 가능하다 이렇게 하면 웹 서버가 실행된 것이고 웹서버에 접근하기 위해서는 ip 주소를 알아햐하기 때문에 `ip addr`로 ip 주소를 얻어온다

이후 터미널에서 elinks (알아온 ip)를 입력하면 it works라는 글이 있는 창이 뜨는 것을 확인할 수 있다

## Apache - configuration

apache에 관한 설정 파일들은 /etc 에 들어가면 확인할 수 있다

파일명에 .conf 가 붙은 파일들은 모두 설정 파일이며 `nano` 명령어를 사용해서 들어가면 여러 설정들이 있는 것을 알 수 있다

간단한 예제로 document root가 있는데 우리가 웹서버의 index.html에 접속요청을 하게 되면 웹서버(apache)는 storage에 있는 파일을 찾아서 사용자에게 보내주고 사용자는 그 파일을 해석해서 읽게된다

그렇다면 이전에 it works!의 출력 값을 바꾸기 위해서는 index.html을 찾아서 수정을 해줘야 한다.

1. apache2 폴더에서 설정 파일을 `nano` 명령어로 연다 (본인은 맥os이므로 httpd.config 파일을 열었습니다) 우분투의 경우 sites-enabled 폴더에 000-default.conf 파일이 있다

2. 내려보면서 찾아보면 `DocumentRoot = 경로`가 있는 것을 확인할 수 있고 해당폴더로 넘어간다

3. index.html 파일을 수정해준다

4. elinks로 변경된 index.html 파일을 확인해준다

## Apache - log

웹서버가 동작을 할 때, 관리자를 위해서 기록을 남긴다

이것 또한 .conf 파일을 보면 어디에 기록이 되는지 알 수 있다

`nano`명령어로 다시 한 번 설정 파일을 찾아보자

```

# ErrorLog: The location of the error log file.
# If you do not specify an ErrorLog directive within a <VirtualHost>
# container, error messages relating to that virtual host will be
# logged here.  If you *do* define an error logfile for a <VirtualHost>
# container, that host's errors will be logged there and not here.
#
ErrorLog "/private/var/log/apache2/error_log"

```

이렇게 Error log가 생성되는 위치를 찾을 수 있게 된다.

따라서 파일 위치로 가서 `tail -f error_log`명령어를 실행한다

`tail`은 마지막에 존재하는 데이터 `-f`는 데이터가 생성되면 출력을 해준다

그리고 `curl http://localhost/index.txt`를 입력하면 error log가 찍히는것을 확인할 수 있다
