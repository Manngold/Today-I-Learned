# Week 1

## Introduction

### Computer System Basic

컴퓨터 시스템의 구조는 하나 혹은 여러 개의 cpu들과 컨트롤러, 메모리와 연결되어 있다

이 연결은 도와주는 것이 버스(BUS)이다

BUS

1. 주소 버스

2. 데이터가 흘러가는 버스

3. 버스 컨트롤 정보

메모리는 직접 버스와 연결되지만 장치는 직접 연결이 되지 않고 컨트롤러를 통해서 버스와 연결된다 그리고 이 장치들은 concurrency 하게 작동된다

> concurrency - 동시성, 병렬성, 독립적

그래서 이 장치들이 동시에 그리고 독립적으로 작동할 수 있는 것이다

### 운영체제는 소프트웨어인데 누가 실행할까?

운영체제를 실행하는 과정(부팅) - boostraping

boostraping 프로그램이 운영체제를 실행시킨다

파워를 넣는 순간, reboot라는 명령어가 나오는 순간 실행이 된다

ROM 혹은 EEPROM에 저장되어 있고 실행이 되면 하드웨어 초기화, 메모리 작동 여부, 디바이스 컨트롤러가 잘 작동하는지 점검

이후 커널을 메모리에 로드한다 그리고 첫 벗째 프로세스를 실행시킨다

> Kernel(커널) - 메모리에서 계속 돌아가는 프로그램

### Components of Computer System

1. Hardware

-   기본적인 컴퓨터 자원을 제공

-   CPU, memory, I/O device

2. Application programs

-   웹브라우저, 워드 등 시스템의 자원을 사용하여 사용자에게 제공하는 프로그램

3. Operating System

-   시스템, 어플리케이션 프로그램과 컴퓨터 하드웨어 사이에서 동작하고 이들이 서로 상호작용을 잘 할 수 있도록 도와준다

### What OS Do?

1. 컴퓨터에서 계속 작동되는 프로그램(Kernel)

2. 유저와 하드웨어 사이에서 하드웨어와 어플을 다뤄준다

3. 파워가 들어왔을 때, 리부트 되었을 때 ROM이나 EEPROM에 저장된 부트스트랩 프로그램에 의해 실행된다

### Computer-System Organization

cpu내에는 program counter(pc)에서 주소 버스로 메모리에 접근해서 명령어를 가져온다(Fetch) 이 명령어가 데이터 버스를 타고 들어와서 해석이 된다(Decode) 이후 실행이 된다

### Storage Structure

컴퓨터 내에는 여러 저장장치가 있다

1. Main memory

-   CPU는 메모리로부터 명령을 로드할 수 있다

2. Secondary memory (보조 기억 장치)

-   최근 플래시 메모리 사용

3. Cache memory

-   정보를 복사해서 저장해서 일시적으로 빠르게 접근할 수 있는 저장소

### Storage-Device Hierarchy

저장장치는 계층을 갖고 있는데 상위계층으로 올라갈 수록 프로세서가 접근하기 용이하다

1.  register
2.  cache
    --------------- processor
3.  main memory
    --------------- primary storage
4.  electronic disk

volatile(파워가 꺼지면 메모리 날라감)

---

nonvolatile(파워 꺼져도 한 번 저장된 것이 일정기간 유효)

5.  magnetic disk
6.  optical disk
7.  magnetic tapes
    --------------- secondary storage

### I/O Structure

장치(디스크, 프린터, 마우스, 키보드 등등)는 조그만 컴퓨터가 붙어있다(controller)

그리고 OS가 디바이스 컨트롤러를 통해서 제어하기 위해서 Device driver가 필요하다

따라서 컨트롤러와 드라이버가 있어야 프로그램을 통해서 장치를 사용할 수 있다

### DMA I/O Operation

이전에는 CPU가 I/O 컨트롤러를 통해서 접근을 했지만

현재에는 DMA 컨트롤러를 통해서 접근을 하고 메모리와 정보를 주고받음

장점 : CPU를 통해서 메모리와 컨트롤러가 정보를 주고받으면 CPU 점유율이 높아 비효율적이지만 DMA를 통해서 CPU점유율이 낮아지고 메모리와 데이터를 주고받는 속도가 빨라진다

### Computer System Architecture

1. Single-processor system

-   싱글 프로세서(cpu가 한 개)

2. Multi-processor system

-   멀티 프로세서(cpu 여러 개 듀얼코어 쿼드코어 ...)
-   병렬 시스템
-   여러 개의 프로세서가 하나의 칩에 존재

3. Clusterd system

### Symmetric vs Asymmetric Multiprocessing

1. Symmetric Multiprocessing (SMP)

-   각각의 프로세서들이 같은 일을 한다

2. Asymmetric Multiprocessing

-   각각의 코어가 다른 일을 한다

### Operating System Structure

Multiprogramming의 도입

-   여러 프로그램을 스케줄링을 통해서 효율적인 cpu활용

Time-sharing(multitasking)

### Operating System operation

Interrupt-driven

-   Software interrupt : 무언가를 처리해달라 요청(system call)
-   Hadware interrupt : 어떤 이벤트가 발생했다는 것을 알려줌

이런 interrupt가 발생하면 OS는 처리하게 됨

### Interrupt Sequence

1. Interrupt가 들어오면 CPU가 하던걸 멈춤
2. Interrupt된 명령의 주소가 저장됨(고정된 위치나 시스템 스택에 저장)
3. interrupt service routine(ISR)을 프로그램 카운터에 넣어준다
4. Interrupt된 명령어를 재개한다

> interrupt service routine : 인터럽트 접수에 의해 발생되는 인터럽트에 대응하여 특정 기능을 처리하는 기계어 코드 루틴이다.

### System call Sequence

1. 유저 프로그램에서 함수(라이브러리에 존재) 호출
2. 소프트웨어 인터럽트 생성
3. 명령어가 저장된 인터럽트 벡터 테이블에 접근
4. 함수 콜

## 1주차 정리
