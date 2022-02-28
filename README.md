# Cola Dashboard

1. 💁 프로젝트 소개
2. 👋🏻 팀원 소개
3. 🔗 배포 링크
4. 📄 협업 문서
5. 🌈 피그마 디자인 
6. 👩‍💻 구현 기능
7. 💿 설치 및 실행 방법
8. 🛠️ 기술 스택

## 1. 💁 프로젝트 소개

- 주제 : 물류를 처리를 위한 대시보드 페이지
- 기간 : 22.02.17 ~ 22.02.19

## 2. 👋🏻 팀원 소개

<table>

  <tr align="center">
    <td><a href='https://github.com/yeongjong310'>김영종</a></td>
    <td><a href="https://github.com/b41-41">정다빈</a></td>
    <td><a href="https://github.com/leechoiswim1">최수임</a></td>
    <td><a href="https://github.com/vi2920va">이송현</a></td>
  </tr>

  <tr align="center">
    <td><img src="https://avatars.githubusercontent.com/u/39623897?v=4" width="150px"/></td>
    <td><img src="https://avatars.githubusercontent.com/u/90027202?v=4"  width="150px"/></td>
    <td><img src="https://avatars.githubusercontent.com/u/85476908?v=4" width="150px"/></td>
    <td><img src="https://avatars.githubusercontent.com/u/76679130?v=4" width="150px"/></td>

  </tr>

  <tr align="center">
  <td>팀장</td>
  <td>팀원</td>
  <td>팀원</td>
  <td>팀원</td>
  </tr>

</table>

## 3. 🔗 배포 링크

[프로젝트 링크 바로가기](https://dashboard-1919.netlify.app)

## 4. 📄 협업 문서

[프로젝트 노션 바로가기](https://www.notion.so/3-2-85a8e70f1c134a4f975f0ffc91f0c06e)

## 5. 🌈 피그마 디자인 시안
[디자인 시안 바로가기](https://www.figma.com/file/GposUi3IM0v3MQoDHyS18X/%EC%98%81%EC%A2%85%EC%83%81%EC%82%AC?node-id=12%3A2)

## 6. 👩‍💻 기능 목록 명세

- 매핑 리스트
  - 체크박스 선택으로 행 고정 여부 선택 기능
- 필터
  - 선택한 항목만 노출
  - 페이지가 내려왔을 때 플로팅 버튼으로 필터 버튼을 노출
- 모달
  - 데이터를 클릭하면 한 눈에 볼 수 있도록 상세 정보 노출

### 공통:
- 목 데이터 설계
- 피그마 디자인

### ✔ 담당자 : 김영종

- 상태 설계, THEME
- 테이블
  - 레이아웃 구현
  - 행 고정 기능
  - 필터링 적용

### ✔ 담당자 : 정다빈

- 검색 기능
  - 필터, 항목 내용과 연결되는 검색 기능

### ✔ 담당자 : 최수임

- 필터 기능
  - 상단 필터, 하단 필터
  - 체크 박스 여부에 따라 전역 상태로 전달

### ✔ 담당자 : 이송현

- 모달 기능
  - 데이터를 클릭하면 정보를 모달로 전달
  - 전달된 값을 모달 창으로 노출

## 7. 💿 설치 및 실행 방법

Project Clone

```bash
$ git clone https://github.com/wantedPreOnboarding/19_06th_cola_dashboard.git
```

Project Setup

```bash
$ yarn install
```

Project Start For Development

```bash
$ yarn start
```

## 8. 🛠️ 기술 스택

<div>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/git-flow-brightgreen?style=for-the-badge&logo"/>
<img src="https://img.shields.io/badge/redux-BF6C97?style=for-the-badge&logo=redux&logoColor=black"/>
</div>
