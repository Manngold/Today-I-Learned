# DNS - Domain Name System

## IP Address and Host

두 대의 컴퓨터가 있고 서로 통신을 한다.

이 때, 네트워크에 연결된 두 컴퓨터를 `host`라고 한다.

그리고 두 컴퓨터가 통신을 하기 위해서 서로의 IP 주소를 알아야한다.

IP주소는 xxx.xx.xxx.xx로 숫자로 이루어져 있어서 사용자가 이 숫자들을 외우고 접근하기 매우 번거롭다

따라서 도메인의 개념이 등장하고 도메인으로 해당 ip 주소로 접근 할 수 있게 된다.

## hosts

모든 운영체제에는 hosts라는 파일이 존재하고 ip 주소와 도메인 네임이 들어있고

해당 주소로 접근할 때, hosts 파일에서 찾아서 접근을 하게 된다.

## Domain Name and Security

hosts 파일은 보안과도 연관이 있다

누군가가 악의적으로 나의 hosts 파일에 접근해서 내가 자주 방문하는 웹사이트의 ip 주소를 바꿔놓으면 도메인으로 웹 사이트를 접근하는 순간 hosts 파일을 참조해서 다른 ip 주소의 웹 사이트에 접속을 하게 된다.

그렇다면 이게 어떻게 문제가 될까? 내가 원하는 웹 사이트를 접속하지 못하게 만드는 단순한 장난으로 끝나면 다행이지만, 접속하려는 웹 사이트와 똑같이 만들어져 있고 민감한 정보를 다루는 웹 사이트라면 사용자의 정보를 악용 할 수 있게 된다.

하지만 https 기술을 통해서 피싱을 막을 수 있다

## DNS의 탄생

### Before DNS

DNS가 탄생하기 이전에 Stanford Research Institute(SRI)에서 모든 IP와 도메인을 관리했다.

따라서 내 컴퓨터에 다른 사람들이 접속하길 원하면 SRI에 IP 주소와 도메인을 hosts 파일에 등록하고 받아서 사용을 했다.

처음에는 좋은 방식이었지만, 점점 한계에 부딪히게 된다.

hosts 파일이 업데이트가 되지 않으면 해당 컴퓨터에 접속 할 수 없었고, 수작업으로 업데이트를 했기에 막대한 비용이 들었다.

이러한 문제점을 해결하기 위해서 Domain Name System이 탄생하게 된다.

### After DNS

DNS가 탄생하면서 클라이언트와 서버는 DNS 서버를 통해서 IP주소와 도메인에 접근할 수 있게 되었다.

서버는 DNS 서버에 자신의 ip 주소와 도메인을 등록하고 클라이언트는 자신의 hosts 파일에 해당 접속하고자 하는 도메인에 대한 ip 주소가 없으면 DNS 서버에서 ip 주소를 찾아서 온 다음에 해당 서버에 접속 할 수 있게 된다.

DNS 덕분에 SRI를 통해서 hosts 파일을 관리 할 때의 문제점들이 해결됐다.

### Public DNS

DNS 서버는 ISP(Internet Service Provider)에서 설정해논 DNS 서버를 쓰게 된다. 이런 DNS 서버를 Local DNS Server 라고 한다.

하지만 무료로 DNS 서버를 공개하는 곳도 존재하며 각각의 운영체제마다 DNS 서버를 사용자가 설정 할 수 있다.

### 도메인 이름의 구조

네이버 지도에 들어가면 도메인을 다음과 같이 확인 할 수 있다.

> map.naver.com.

도메인의 구조를 분석해보면

1. . : root domain
2. com : Top-level domain
3. naver : Second-level domain
4. map : sub domain

전 세계에는 수 많은 DNS 서버가 존재하고 각각의 도메인 레벨마다 전담하는 서버들이 존재한다.

우리가 도메인을 입력을 하면 root domain 서버에게 top-level domain을 보고 com에 대한 ip 주소를 갖고있는 top-level domain 서버에 대한 ip 값을 알려준다

이후 top-level domain 서버는 second-level domain을 보고 해당되는 서버의 ip 주소를 알려주는 방식으로 sub domain 까지 내려가서 최종적으로 해당 도메인에 대한 ip 주소를 알 수 있게 된다.
