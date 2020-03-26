# Week2

## Process

### Process Concept

-   실행되고 있는 프로그램
-   컴퓨터 시스템에서 일의 단위
-   CPU가 실행되는 프로그램 혹은 software를 다루는 모든 행동
-   프로그램은 실행가능한 파일이 메모리에 로드되어 프로세스가 된다
-   프로그램은 passive entity 프로세스는 active entity

프로세스 생성 과정

1. 디스크에 존재하는 프로그램이 메인 메모리에 로드 (Process Image가 된다)
2. CPU가 Process Image를 fetch, decoding을 해서 실행

### Process Structure

1.Stack
일시적으로 저장된 데이터를 포함

-   함수 파라미터
-   리턴 주소
-   변수

2.Heap
런타임에서 동적으로 할당되는 메모리

3.Data
글로벌 변수

4.Text
실행가능한 코드들

### Process and Program

많은 프로세스가 같은 프로그램이라면

Text Section은 같이 관리하고 Data, Stack, Heap을 따로 관리해준다

Text Section은 다른 프로세스와 공유

### Process State

프로세스는 실행이 될 때, 상태가 변화한다

1. New : 생성된 프로세스
2. Running : CPU에 의해 실행되는 상태
3. Waiting : 이벤트를 위해 기다리는 상태(I/O)
4. Ready : CPU에 의해 실행되길 기다리는 상태 (프로세스 큐에 존재)
5. Terminated : 프로세스가 실행이 끝난 상태

### CPU Switch from Process to Process

프로세스 a와 b가 실행 될 때, 프로세스간 switch가 어떻게 일어나는가

1. a 실행
2. interrupt or system call 발생
3. a의 상태를 a의 PCB에 저장됨
4. b의 PCB로부터 b의 상태를 로드한다 이때, idle 상태가 된다 (아무것도 못하는 상태)
5. b 실행

CPU context에는 해당 프로세스의 PC, register Memory-management, information이 저장된다

프로세스가 변경되는 것은 바로 이 CPU context가 변경되는 것이므로 context switch라고 한다

### Process Control Block(PCB)

PCB는 하나의 자료구조인데 여러 가지 정보가 보관이 된다

1. Process state
2. Program counter : 다음 실행 명령의 주소값
3. CPU register
4. CPU scheduling information
5. Memory management information
6. Accounting information
7. I/O status information

### Process Scheduling

프로세스에서 다른 프로세스로 넘어갈 때, 스케쥴링이 필요하다(언제 할 것인가?)

Multiprogramming에서 CPU 이용 효율을 최대화 한다

Scheduling queues

1. job queue : 시스템에서 모든 프로세스들의 집합
2. ready queue : 메인메모리에서 ready상태의 프로세스
3. device queue : I/O 장치를 위해 기다리는 프로세스들의 집합

일반적으로 링크드리스트 구조로 저장된다.

### Schedulers

1. Long-term scheduler (job scheduler)

-   디스크 풀에서 프로세스를 선택해서 레디큐에 넣어줌

2. Short-term scheduler (CPU scheduler)

-   레디큐에 있는 프로세스 중 하나를 고른다

3. Medium-term scheduler

-   메모리나 디스크에서 swap out된 것 중에서 선택
