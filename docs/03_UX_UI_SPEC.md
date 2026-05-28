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
- App Header (상단 고정 내비게이션)
- Tab Navigation (섹션 전환)
- Chat Area (전체 채팅 / 팀 채팅 공통 구조)
- Meme Feed Area (밈 피드 + 업로드)
- F1 101 Area (가이드 카드)
- Pit Wall Area (순위표 + 일정)
- Empty State (콘텐츠 없음 안내)

### Area Detail

**Onboarding Modal**
- 첫 진입 또는 설정 미완료 시 앱 위에 오버레이로 표시
- 스텝 1: 닉네임 입력 (`text-input`, 최대 15자)
- 스텝 2: 팀 선택 그리드 — 가상 옵션 2개("응원 팀 없음" 회색 보더, "올팬" 골드 보더) + 2026 시즌 11개 팀 (`team-selector-active` / `team-selector-inactive`). 각 팀 카드에 드라이버 2명 표기
- 완료 버튼: `button-primary` "패독 입장 완료"
- 닉네임 미입력 또는 팀/가상 옵션 미선택 시 완료 버튼 비활성화 (가상 옵션도 "선택"으로 인정)

**App Header**
- 상단 고정, `charcoal-800` 90% + backdrop-blur
- 좌: 로고 (PADDOCK 태그 + KOREA 워드마크), 클릭 시 홈으로 이동
- 중(데스크톱): 7개 탭 네비게이션 (`nav-tab-active` / `nav-tab-inactive`)
- 우: 팀 로고 + 닉네임 프로필 위젯 (`profile-widget`), 클릭 시 프로필 편집 모달
- 모바일: 햄버거 아이콘 → 2열 그리드 탭 드로어

**Tab Navigation**
- 탭 목록: 홈 피드 / The Garage / The Main Straight / Pit Wall / F1 101
- 활성 탭: `nav-tab-active` (F1 Red 배경)
- 비활성 탭: `nav-tab-inactive` (투명, gray-300 텍스트)
- 아이콘 + 탭명 조합

**Chat Area** (The Main Straight / The Garage 공통)
- 상단: 라이브 상태 바 (`live-indicator` 펄싱 레드 점 + 채팅방 이름)
- 중앙: 메시지 스크롤 영역 (고정 높이, 최신 메시지 자동 스크롤)
  - 내 메시지: `chat-bubble-own` (팀 컬러 틴트, 우측 정렬)
  - 상대 메시지: `chat-bubble-other` (charcoal, 좌측 정렬 + 팀 로고 아바타)
  - 메시지 상단: 닉네임 (`body-strong`) + 팀명 (팀 컬러, `caption`) + 시각 (`data-sm`)
- 하단: 입력창 (`text-input`, flex-1) + 전송 버튼 (`button-primary`, "전송")
- The Garage: 상단에 11개 팀 선택 탭 바(`TeamChatTabs`) 추가. 내 팀 탭에는 골드 점 표시
  - 다른 팀 탭 선택 시 메시지는 **읽기 전용**으로 열람 가능, 입력창 잠금 + "🔒 읽기 전용 — {팀명} 팬만 발언할 수 있어요" 골드 배지 표시
  - 작성 권한: 자기 팀이거나 "올팬"일 때만 입력창 활성화. "응원 팀 없음"은 모든 팀 읽기 전용

**Meme Feed Area** (The Main Straight 내 서브탭)
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
- 드라이버 순위: 테이블 (순위 칩 + 번호/코드 + 이름 + 팀 컬러 점 + 포인트 바)
- 컨스트럭터 순위: 2열 카드 그리드 (팀 컬러 상단 라인 + 포인트 바)
- 우측(데스크톱) / 하단(모바일): KST 경기 일정 스크롤 목록 (완료 = 60% opacity / 예정 = 풀 opacity + 알림 벨 버튼)

**Empty State**
- 채팅 메시지 없음: "아직 대화가 없습니다. 첫 메시지를 보내보세요!"
- 밈 없음: "아직 올라온 밈이 없습니다. 첫 밈을 올려보세요!"
- 카드 배경 없이 중앙 텍스트 + 서브 설명 (`body-sm`, gray-500)

## 5. Component Plan

| Component | Purpose | Requirement Link |
|---|---|---|
| `OnboardingModal` | 닉네임 입력 + 팀 선택 온보딩 | FR-001 |
| `AppHeader` | 상단 고정 내비게이션, 프로필 위젯, 모바일 햄버거 | FR-001, FR-002, FR-003 |
| `TabNav` | 섹션 전환 탭 (데스크톱 수평 / 모바일 드로어) | FR-002, FR-003 |
| `ChatRoom` | 채팅 메시지 목록 + 입력 폼 (전체 / 팀 공통) | FR-002, FR-003, FR-005 |
| `ChatBubble` | 개별 메시지 버블 (내 것 / 상대방 구분) | FR-002, FR-003, FR-004 |
| `TeamSelectorGrid` | 팀 선택 카드 그리드 (11개 팀 + 가상 옵션 2개, 온보딩 및 설정 변경) | FR-001 |
| `TeamChatTabs` | The Garage 팀 선택 탭 바 (11개 팀, 내 팀 표시, 타팀 열람) | FR-003 |
| `MemeCard` | 밈 피드 개별 카드 (제목·본문·투표) | FR-007, FR-008 |
| `MemeUploadModal` | 밈 제목·카테고리·본문 입력 후 게시 | FR-006 |
| `MemeFilterBar` | 밈 카테고리 필터 칩 바 | FR-012 |
| `F1GuideCard` | F1 101 카드 (용어·경기 방식·위켄드) | FR-009 |
| `StandingsTable` | 드라이버 챔피언십 순위 테이블 | FR-011 |
| `ConstructorGrid` | 컨스트럭터 챔피언십 카드 그리드 | FR-011 |
| `RaceScheduleList` | KST 기준 경기 일정 목록 + 알림 벨 | FR-010 |
| `LiveIndicator` | 펄싱 레드 점 + 라이브 텍스트 상태 표시 | FR-005 |
| `EmptyState` | 채팅·밈 콘텐츠 없음 안내 | FR-002, FR-007 |
| `ProfileEditModal` | 닉네임·팀 변경 모달 | FR-013 |

## 6. Interaction Rules

- 닉네임 미입력 시 온보딩 완료 버튼이 비활성화된다.
- 채팅 메시지 전송 후 입력창이 초기화되고 스크롤이 최신 메시지로 자동 이동한다.
- 채팅 입력창이 비어 있으면 전송 버튼이 비활성화된다.
- The Garage 탭에서는 기본 팀(실제 팀 사용자=자기 팀, 올팬/응원 팀 없음=첫 번째 팀) 채팅방이 열리며, 다른 팀 탭으로 전환할 수 있다.
- 작성 권한이 없는 팀 채팅방(타팀 팬, "응원 팀 없음")은 읽기 전용으로 열람되며 입력창이 잠기고 "읽기 전용" 배지가 표시된다. "올팬"은 모든 팀 채팅방에 작성할 수 있다.
- 밈 업로드 후 모달이 닫히고 피드 최상단에 새 밈이 즉시 표시된다.
- 밈 제목 또는 본문 미입력 시 게시 버튼이 비활성화된다.
- 밈 카테고리 필터를 변경하면 피드 목록이 즉시 바뀐다.
- F1 101 카드를 클릭하면 같은 카드 내에서 상세 내용이 인라인 펼쳐진다. 다시 클릭하면 접힌다.
- 경기 일정 알림 벨을 누르면 "알림 설정 완료" 안내 메시지가 5초간 표시된 후 사라진다.
- 채팅 탭 이외의 탭으로 이동하면 채팅 자동 갱신이 일시 정지된다.
- 프로필 위젯 클릭 시 프로필 편집 모달이 열리며, 닉네임 저장 후 헤더에 즉시 반영된다.

## 7. Accessibility Rules

- 모든 입력 필드에는 `<label>` 또는 `aria-label`이 있어야 한다.
- 버튼 텍스트는 기능을 설명해야 한다 (예: "전송", "밈 게시", "팀 선택 완료", "알림 설정").
- 팀 구분은 색상과 팀명 텍스트를 함께 표기한다. 색상만으로 구분하지 않는다.
- 라이브 상태는 점 애니메이션 외에 "● LIVE" 텍스트를 병행 표기한다.
- 채팅 버블에는 발신자 닉네임과 팀명이 텍스트로 포함되어야 한다.
- 주요 영역은 `<h1>`–`<h3>` heading 구조를 가진다 (랜딩 히어로 `h1`, 섹션 제목 `h2`, 카드 제목 `h3`).
- 모달은 열릴 때 포커스가 모달 내부로 이동하고, 닫힐 때 원래 트리거 버튼으로 돌아와야 한다.
- 필터 칩의 활성/비활성 상태는 색상 외에 `aria-pressed` 또는 `aria-selected`로도 표현한다.
