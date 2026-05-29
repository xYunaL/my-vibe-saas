# UX / UI Spec — 패독 코리아 (Paddock Korea)

## 1. Design Reference

Follow:

- docs/DESIGN.md

## 2. Screen Map

| Screen | Route | Purpose |
|---|---|---|
| Landing Page | `/` | 서비스 문제·가치·핵심 기능을 소개하고 앱으로 진입시킨다 |
| App Page | `/app` | 팀 선택·닉네임 설정 후 채팅·밈·정보 기능을 사용한다 |

## 3. Landing Page

### Purpose

F1 팬덤이 분산된 문제를 공감시키고, 패독 코리아의 핵심 가치(소속감·소통·재미)를 전달한 뒤 앱 화면으로 이동시킨다.

### Required Sections

- Hero
- Problem
- Core Features
- CTA Button

### Key Copy

- **Headline:** 내 팀을 향한 진심어린 응원, 이제 하나의 공간에서
- **Subheadline:** 유튜브, 오픈채팅, 블로그에 흩어진 한국 F1 팬들이 모이는 대한민국 No.1 F1 소셜 플랫폼
- **CTA:** 패독 입장하기 →

### Section Detail

**Hero**
- 배경: `carbon-grid` 다크 텍스처 + 우측 하단 F1 Red 방사형 글로우
- 상단 좌측: 로고 (PADDOCK 태그 + KOREA 워드마크)
- 헤드라인: `display-lg` (Space Grotesk, bold, tight tracking)
- 서브헤드라인: `body-md` (Inter, gray-300)
- CTA 버튼: `button-primary` (F1 Red), "패독 입장하기 →"
- 보조 버튼: `button-secondary` (다크 고스트), "F1 101 먼저 보기"

**Problem**
- 섹션 레이블: `label-mono` (JetBrains Mono, uppercase, F1 Red)
- 3개의 문제 카드 (1열 또는 3열 그리드)
  - "소통 공간 분산" — 유튜브·오픈채팅·디시 등 플랫폼 파편화
  - "입문 장벽 높음" — 복잡한 용어와 규칙으로 신규 팬 이탈
  - "팀 소속감 부재" — 팀 기반 응원 문화를 형성할 구조 없음
- 각 카드: `card` 스타일, 아이콘 + 한 줄 제목 + 두 줄 설명

**Core Features**
- 섹션 제목: `heading-lg`
- 4개 기능 카드 (2×2 그리드 또는 4열)
  - 🏎️ **The Garage** — 팀별 채팅방. 내 팀에서 발언하고 다른 팀 채팅도 둘러보기
  - 💬 **The Main Straight** — 모든 팬과 함께하는 전체 채팅
  - 🔥 **Meme Box** — F1 밈을 올리고 반응하는 공간
  - 🏁 **Pit Wall** — KST 경기 일정과 챔피언십 순위
- 각 카드: `card` 스타일, 팀 색상 계열 아이콘 + 제목 + 한 줄 설명

**CTA Button**
- 전체 너비 섹션 배경: `charcoal-800`, 좌우 패딩 32px
- 중앙 배치: 큰 CTA 버튼 `button-primary` "지금 패독에 합류하기"
- 서브 카피: `body-sm`, gray-400, "로그인 없이 바로 시작 · 닉네임과 팀만 설정하면 됩니다"

## 4. App Page

### Purpose

닉네임과 팀을 설정한 사용자가 팀별 채팅·전체 채팅·밈 공유·F1 정보를 사용하는 핵심 기능 화면이다.

### Required Areas

- Onboarding Modal (첫 진입 시)
- App Header (상단 고정 내비게이션 + 테마 토글 + 프로필 위젯)
- Tab Navigation (6개 탭 전환)
- Home Dashboard (그랑프리 현황 + 응원/랭킹 + 전체 실시간 채팅)
- Board Area (전체/팀별 게시판 + 글쓰기/댓글/좋아요/정렬)
- Meme Feed Area (밈 피드 + 업로드)
- F1 101 Area (가이드 카드)
- Pit Wall Area (순위표 + 일정 + 세션 결과)
- My Page Area (프로필 편집 + 테마 + 내 글)
- Empty State (콘텐츠 없음 안내)

### Area Detail

**Onboarding Modal**
- 첫 진입 또는 설정 미완료 시 앱 위에 오버레이로 표시
- 스텝 1: 닉네임 입력 (`text-input`, 최대 15자)
- 스텝 2: 팀 선택 그리드 — 가상 옵션 2개("응원 팀 없음" 회색 보더, "올팬" 골드 보더) + 2026 시즌 11개 팀 (`team-selector-active` / `team-selector-inactive`). 각 팀 카드에 드라이버 2명 표기
- 완료 버튼: `button-primary` "패독 입장 완료"
- 닉네임 미입력 또는 팀/가상 옵션 미선택 시 완료 버튼 비활성화 (가상 옵션도 "선택"으로 인정)

**App Header**
- 상단 고정, `charcoal-800` 95% + backdrop-blur
- 좌: 로고 (PADDOCK.KOREA 워드마크)
- 중(데스크톱): 6개 탭 네비게이션 (`nav-tab-active` / `nav-tab-inactive`)
- 우: 테마 토글(`ThemeToggle`) + 팀 로고(들) + 닉네임 프로필 위젯 (`profile-widget`), 클릭 시 My Page로 이동
- 모바일: 헤더 하단 가로 스크롤 탭 스트립

**Tab Navigation**
- 탭 목록: Home / Board / Meme Box / F1 101 / Pit Wall / My Page (`TabId`)
- 활성 탭: `nav-tab-active` (F1 Red 배경)
- 비활성 탭: `nav-tab-inactive` (투명, muted 텍스트)
- 데스크톱: pill 형태 가로 네비 / 모바일: 하단 가로 스크롤 스트립

**Home Dashboard** (`main-straight` 탭)
- 상단: 그랑프리 현황 카드 — 다음/진행 중 그랑프리명, 국가, KST 기간, `D-{n}` 또는 `● LIVE` 배지 (OpenF1 `/api/pitwall` 일정 기반)
- 좌측: 응원 패널(`CheerPanel`) + 응원 랭킹(`CheerRanking`)
- 우측: 전체 실시간 채팅(`GlobalChatRoom`, 컴팩트). "⤢ 전체화면" 버튼으로 오버레이 확대 / "✕ 닫기"로 복귀
- 채팅 영역 구조:
  - 상단: 라이브 상태 바 (`live-indicator` 펄싱 레드 점 + 채팅방 이름)
  - 중앙: 메시지 스크롤 영역 (최신 메시지 자동 스크롤)
    - 내 메시지: `chat-bubble-own` (팀 컬러 틴트, 우측 정렬)
    - 상대 메시지: `chat-bubble-other` (charcoal, 좌측 정렬 + 팀 로고 아바타)
    - 메시지 상단: 닉네임 (`body-strong`) + 팀명 (팀 컬러, `caption`) + 시각 (`data-sm`)
  - 하단: 입력창 (`text-input`, flex-1) + 전송 버튼 (`button-primary`, "전송"), Enter 전송

**Board Area** (`board` 탭)
- 상단: 제목 + "+ 글쓰기" 버튼 (`button-secondary`, 작성 권한 없으면 비활성)
- 스코프 토글: 전체 / 팀별 (`aria-pressed`)
- 팀별 스코프: 11개 팀 선택 탭 바(`BoardTeamTabs`). 내 팀 탭 강조
  - 작성 권한 없는 팀(타팀 팬, "응원 팀 없음") 선택 시 "🔒 읽기 전용 — {팀명} 팬만 글을 쓸 수 있어요" 골드 배지, 글쓰기·댓글 잠금
  - 권한: `canPostInTeamChat` — 자기 팀(들) 또는 "올팬"일 때만 작성 가능
- 정렬: 최신순 / 인기순 (`aria-pressed`)
- 피드: 글 카드 목록(`PostCard`) — 제목·본문·작성자·팀·좋아요·댓글
- 글쓰기 모달(`PostComposer`): 제목·본문 입력, 둘 다 채워야 게시 가능

**Cheer (Home 내)**
- 응원 패널(`CheerPanel`): 내 응원 대상 팀 + 응원 버튼(+1). 오늘 응원 완료 시 비활성. KST 하루 1회
- 응원 랭킹(`CheerRanking`): 팀별 누적 응원(시드 baseline + 사용자 누적) 정렬 목록, 내 팀 강조

**Meme Feed Area** (`meme` 탭)
- 상단: 카테고리 필터 칩 바 (`filter-chip-active` / `filter-chip-inactive`) + "밈 올리기" 버튼 (`button-secondary`)
- 피드: 2열 카드 그리드 (`meme-card` 스타일)
  - 카테고리 배지: `badge-mono` (F1 Red 텍스트)
  - 제목: `heading-md`
  - 본문: `body-sm`, `card-inner` 인셋 블록
  - 하단: 닉네임 + 팀 로고 + 좋아요(`success` 초록) / 싫어요(`danger` 로즈) 버튼
- 밈 업로드 모달: `modal-card`, 제목·카테고리 select·본문 입력 + 완료 버튼

**F1 101 Area**
- 상단: 카테고리 탭 (용어 사전 / 경기 방식 / 레이스 위켄드)
- 카드 그리드: 1열(모바일) / 2열(태블릿) / 3열(데스크톱)
- 각 카드: `card` 스타일, 카테고리 배지 + 용어 제목(`heading-md`) + 설명(`body-sm`)
- 클릭 시 카드 내부에서 인라인 확장 (별도 페이지 없음)

**Pit Wall Area**
- 상단: 드라이버 순위 / 컨스트럭터 순위 서브탭 전환
- 드라이버 순위: 테이블 (순위 칩 + 번호/코드 + 드라이버 헤드샷 + 이름 + 팀 컬러 점 + 포인트 바)
- 컨스트럭터 순위: 2열 카드 그리드 (팀 컬러 상단 라인 + 포인트 바)
- 우측(데스크톱) / 하단(모바일): KST 경기 일정 스크롤 목록 (완료 = 60% opacity / 예정 = 풀 opacity)
- 완료 세션 선택 시: 세션별 결과 테이블 (순위·드라이버·헤드샷·포인트, DNF/DNS/DSQ 표시). OpenF1 `/api/pitwall/session/[sessionKey]` 경유
- 데이터 출처 배지: `source: openf1 | fallback`

**My Page Area** (`mypage` 탭)
- 프로필 카드: 닉네임 입력(1–15자, 카운터) + 응원 팀 선택 그리드(`TeamPickerGrid`, 최대 2개) + "변경 저장" 버튼(변경 시에만 활성, 미변경 시 "저장됨")
- 테마 카드: 라이트/다크 토글(`ThemeToggle`)
- 내 게시글 카드: 내가 작성한 글 목록(최신순, 제목·요약·좋아요·댓글 수·날짜·스코프 배지). 없으면 EmptyState

**Empty State**
- 채팅 메시지 없음: "아직 대화가 없습니다. 첫 메시지를 보내보세요!"
- 밈 없음: "아직 올라온 밈이 없습니다. 첫 밈을 올려보세요!"
- 카드 배경 없이 중앙 텍스트 + 서브 설명 (`body-sm`, gray-500)

## 5. Component Plan

> 실제 구현 컴포넌트(src/) 기준. 일부 초기 계획 컴포넌트는 통합/대체되었다.

| Component | Path | Purpose | Requirement Link |
|---|---|---|---|
| `OnboardingModal` | components/onboarding | 닉네임 입력 + 팀 선택 온보딩 | FR-001 |
| `TeamPickerGrid` | components/onboarding | 팀 선택 그리드 (11개 팀 + 가상 옵션 2개, 최대 2팀). 온보딩·My Page 공용 | FR-001, FR-013 |
| `AppHeader` | components/layout | 상단 고정 내비게이션(6탭) + 테마 토글 + 프로필 위젯 | FR-001~003, FR-015 |
| `ThemeToggle` | components/layout | 라이트/다크 테마 전환 | FR-015 |
| `HomeView` | features/home | 그랑프리 현황 + 응원/랭킹 + 전체 채팅 대시보드 | FR-002, FR-010, FR-014 |
| `GlobalChatRoom` | features/chat | 전체 채팅 목록 + 입력 폼 (컴팩트/전체화면) | FR-002, FR-004, FR-005 |
| `ChatBubble` | features/chat | 개별 메시지 버블 (내 것 / 상대방 구분) | FR-002, FR-004 |
| `LiveIndicator` | features/chat | 펄싱 레드 점 + 라이브 텍스트 상태 표시 | FR-005 |
| `BoardView` | features/board | 전체/팀 게시판 + 스코프·정렬·권한 | FR-003, FR-012 |
| `BoardTeamTabs` | features/board | 팀 선택 탭 바 (11개 팀, 내 팀 표시, 타팀 열람) | FR-003 |
| `PostCard` | features/board | 개별 게시글 카드 (제목·본문·좋아요·댓글) | FR-003, FR-004 |
| `PostComposer` | features/board | 글 제목·본문 입력 후 게시 모달 | FR-003 |
| `CheerPanel` | features/cheer | 내 팀 응원 버튼 (하루 1회 +1) | FR-014 |
| `CheerRanking` | features/cheer | 팀별 누적 응원 랭킹 | FR-014 |
| `MemeFeed` | features/memes | 밈 그리드 + 필터 + 업로드 진입 | FR-007, FR-012 |
| `MemeCard` | features/memes | 밈 피드 개별 카드 (이미지·캡션·좋아요) | FR-007, FR-008 |
| `MemeUploadModal` | features/memes | 밈 이미지 URL·캡션 입력 후 게시 | FR-006 |
| `F1101Guide` | features/f1guide | F1 101 카테고리 탭 + 카드 그리드 | FR-009 |
| `F1GuideCard` | features/f1guide | F1 101 카드 (인라인 확장) | FR-009 |
| `PitWallPage` | features/pitwall | 순위 + 일정 + 세션 결과 레이아웃 | FR-010, FR-011 |
| `MyPageView` | features/mypage | 프로필 편집 + 테마 + 내 글 | FR-013, FR-015, FR-016 |
| `EmptyState` | components/ui | 콘텐츠 없음 안내 | FR-002, FR-003, FR-007 |
| `Button` | components/ui | Primary / Secondary / Ghost 버튼 | 공용 |

> 명칭 변경: `TeamSelectorGrid`→`TeamPickerGrid`, `ChatRoom`→`GlobalChatRoom`, `TeamChatTabs`→`BoardTeamTabs`(채팅→게시판), `ProfileEditModal`→`MyPageView`(모달→탭). `MemeFilterBar`·`StandingsTable`·`ConstructorGrid`·`RaceScheduleList`는 상위 컴포넌트에 통합.

## 6. Interaction Rules

- 닉네임 미입력 시 온보딩 완료 버튼이 비활성화된다.
- 채팅 메시지 전송 후 입력창이 초기화되고 스크롤이 최신 메시지로 자동 이동한다.
- 채팅 입력창이 비어 있으면 전송 버튼이 비활성화된다.
- Home 채팅 "전체화면" 버튼으로 오버레이 확대, "닫기"로 복귀한다.
- Board 팀별 스코프에서는 기본 팀(실제 팀 사용자=자기 팀, 올팬/응원 팀 없음=첫 번째 팀) 게시판이 열리며, 다른 팀 탭으로 전환할 수 있다.
- 작성 권한이 없는 팀 게시판(타팀 팬, "응원 팀 없음")은 읽기 전용으로 열람되며 글쓰기·댓글이 잠기고 "읽기 전용" 배지가 표시된다. "올팬"은 모든 팀 게시판에 작성할 수 있다.
- 게시글 제목 또는 본문 미입력 시 게시 버튼이 비활성화된다. 게시 후 최신순으로 정렬되고 피드 최상단에 표시된다.
- 게시판 정렬을 최신순/인기순으로 토글하면 목록이 즉시 재정렬된다.
- 응원 버튼은 KST 기준 하루 1회만 누를 수 있고, 누른 뒤에는 비활성화되며 랭킹이 즉시 갱신된다.
- 밈 업로드 후 모달이 닫히고 피드 최상단에 새 밈이 즉시 표시된다.
- 밈 이미지 URL 미입력/형식 오류 시 게시 버튼이 비활성화된다.
- F1 101 카드를 클릭하면 같은 카드 내에서 상세 내용이 인라인 펼쳐진다. 다시 클릭하면 접힌다.
- Pit Wall에서 완료 세션을 선택하면 해당 세션 결과 테이블이 표시된다.
- Home 탭이 아닐 때는 채팅 자동 갱신 시뮬레이터가 일시 정지된다.
- 헤더 프로필 위젯 클릭 시 My Page로 이동하며, 닉네임·팀 저장 후 헤더에 즉시 반영된다.
- 테마 토글 시 화면이 즉시 전환되고 설정이 유지된다.

## 7. Accessibility Rules

- 모든 입력 필드에는 `<label>` 또는 `aria-label`이 있어야 한다.
- 버튼 텍스트는 기능을 설명해야 한다 (예: "전송", "밈 게시", "팀 선택 완료", "알림 설정").
- 팀 구분은 색상과 팀명 텍스트를 함께 표기한다. 색상만으로 구분하지 않는다.
- 라이브 상태는 점 애니메이션 외에 "● LIVE" 텍스트를 병행 표기한다.
- 채팅 버블에는 발신자 닉네임과 팀명이 텍스트로 포함되어야 한다.
- 주요 영역은 `<h1>`–`<h3>` heading 구조를 가진다 (랜딩 히어로 `h1`, 섹션 제목 `h2`, 카드 제목 `h3`).
- 모달은 열릴 때 포커스가 모달 내부로 이동하고, 닫힐 때 원래 트리거 버튼으로 돌아와야 한다.
- 필터 칩의 활성/비활성 상태는 색상 외에 `aria-pressed` 또는 `aria-selected`로도 표현한다.
