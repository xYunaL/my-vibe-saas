# Delivery Plan — 패독 코리아 (Paddock Korea)

## 1. 문서 목적

이 문서는 2회차 후반부터 4회차까지의 개발 실행 계획을 정리한다.  
전체 MVP를 한 번에 구현하지 않고, 공통 베이스와 핵심 기능을 단계적으로 구현하기 위한 기준으로 사용한다.

---

## 2. 전체 개발 목표

최종 목표는 4회차 종료 시 배포 가능한 패독 코리아 MVP를 완성하는 것이다.

최종 산출물:

- Landing Page (서비스 소개, 문제 제시, 기능 소개, CTA)
- App Page (온보딩 + 전체/팀 채팅 + 밈 박스 + F1 101 + Pit Wall)
- 핵심 기능 (FR-001~FR-011 전부)
- GitHub 저장소
- Playwright E2E 테스트 또는 수동 QA 결과
- 배포 가능한 URL (Vercel)
- README

---

## 3. Session 2 Goal

2회차에서는 전체 프로젝트의 약 20~30%를 완성한다.

### 2회차 완료 기준

- Next.js 프로젝트가 준비되어 있다.
- `/` route가 존재한다.
- `/app` route가 존재한다.
- Landing Page 초안이 있다.
- App Page shell이 있다. (탭 네비게이션 골격)
- 핵심 타입이 정의되어 있다. (UserProfile, ChatMessage, Meme, Team 등)
- 정적 데이터가 준비되어 있다. (팀 목록, F1 101, 순위, 경기 일정)
- 주요 컴포넌트 placeholder가 있다.
- `pnpm dev`로 실행 가능하다.

---

## 4. Session 2 Must Have

| Task | Description | Done When |
|---|---|---|
| Project scaffold | Next.js + TypeScript + Tailwind 프로젝트 준비 | `pnpm dev` 실행 가능 |
| Landing route | `/` 페이지 생성 | 브라우저에서 `/` 접속 가능 |
| App route | `/app` 페이지 생성 | 브라우저에서 `/app` 접속 가능 |
| Design token 등록 | Tailwind에 DESIGN.md 컬러·폰트 토큰 적용 | `bg-f1-red`, `font-display` 등 사용 가능 |
| Type definition | 핵심 타입 정의 | `features/*/types.ts` 및 `lib/storage.ts` 작성 |
| Static data | 팀·F1 101·경기 일정·순위 정적 데이터 | `lib/teams.ts`, `features/*/data.ts` 작성 |
| Component placeholders | 주요 컴포넌트 파일 생성 | ChatRoom, MemeFeed, F1101Guide, PitWallPage 파일 존재 |
| Empty state | 데이터가 없을 때 화면 | `EmptyState` 컴포넌트 기본 안내 문구 표시 |

---

## 5. Session 2 Should Have

| Task | Description | Done When |
|---|---|---|
| Landing Page 섹션 구성 | Hero, Problem, Core Features, CTA | 브라우저에서 섹션 확인 가능 |
| App Header shell | 로고 + 탭 네비게이션 + 프로필 위젯 골격 | 헤더가 화면에 표시됨 |
| Onboarding Modal shell | 닉네임 입력 + 팀 선택 그리드 골격 | 모달 UI 확인 가능 (기능 미연결) |
| Basic styling | DESIGN.md 컬러 다크 테마 적용 | 화면이 charcoal-900 배경으로 표시 |
| `lib/storage.ts` | localStorage getUserProfile / saveUserProfile | 함수 존재 (단, 연결은 3회차) |

---

## 6. Session 2 Not Today

2회차에서는 아래 기능을 구현하지 않는다.

- 실제 채팅 메시지 전송·수신 로직
- 밈 업로드 및 좋아요 로직
- 온보딩 완료 후 localStorage 연동
- F1 101 카드 인라인 확장 동작
- Pit Wall 서브탭 전환 로직
- DB 연동
- 로그인
- 결제
- 실시간 WebSocket
- 외부 F1 공식 API 연동
- Playwright 테스트 코드 작성
- Vercel 배포

---

## 7. Session 3 Goal

3회차에서는 같은 요구사항을 두 방식으로 구현하고 비교한다.

### 비교 방식

1. **MD 설계 문서 기반 개발** — docs/ 문서 5종을 Claude Code에 제공하고 구현
2. **OpenSpec change 기반 개발** — OpenSpec change만 제공하고 구현

### 3회차 목표

- 핵심 기능 FR-001~FR-011 구현
- 요구사항 반영도 비교
- 범위 통제 비교
- 코드 구조 비교
- Claude Code 응답 품질 비교

---

## 8. Session 3 Must Have

| Task | Related Requirement | Done When |
|---|---|---|
| 온보딩 (닉네임 + 팀 선택) | FR-001, AC-001 | 닉네임·팀 선택 후 localStorage 저장 및 앱 진입 |
| 전체 채팅 (The Main Straight) | FR-002, FR-004, FR-005, AC-002 | 메시지 전송 시 닉네임·팀 컬러와 함께 즉시 표시 |
| 팀별 채팅 (The Garage) | FR-003, FR-004, FR-005, AC-003 | 팀 채팅방 격리 확인 가능 |
| 밈 업로드 (Meme Box) | FR-006, AC-004 | 이미지 URL + 캡션으로 밈 게시 |
| 밈 피드 조회 | FR-007, AC-004 | 밈 피드 최신순 표시 |
| 밈 좋아요 | FR-008, AC-005 | 좋아요 수 즉시 반영 |
| F1 입문 가이드 | FR-009, AC-006 | 카테고리 탭 + 카드 인라인 확장 동작 |
| 경기 일정 (KST) | FR-010, AC-007 | KST 기준 일정 + 다음 경기 강조 표시 |
| 챔피언십 순위 | FR-011, AC-008 | 드라이버·컨스트럭터 순위 표시 |

---

## 9. Session 3 Should Have

| Task | Description |
|---|---|
| 밈 인기순 정렬 (FR-012) | 좋아요 수 기준 정렬 토글 |
| 닉네임·팀 변경 (FR-013) | 프로필 편집 모달에서 변경 후 저장 |
| 채팅 시뮬레이터 | setInterval로 7초 간격 자동 메시지 추가 (데모용) |
| 이미지 로드 실패 처리 | 밈 이미지 오류 시 placeholder 표시 |

---

## 10. Session 4 Goal

4회차에서는 테스트, 리팩토링, 배포를 진행한다.

### 4회차 목표

- Playwright E2E 테스트 작성 (AC-001~AC-008 기준)
- TDD 흐름 체험
- 코드 리팩토링 및 접근성 점검
- README 정리
- Vercel 배포
- 최종 발표

---

## 10b. Session 5+ — 고도화 단계

4회차 종료 이후, 초기 MVP에서 제외했던 제약 중 4개를 해제하고 발전된 기능 개발과 리팩토링을 진행한다. (CLAUDE.md Boundaries 참조)

### 우선순위

1. **문서-코드 정합화** — docs를 현재 코드 실상(Home/Board/Cheer/My Page/2팀/테마/세션 결과)에 맞춰 갱신 (← 이번 작업)
2. **기존 기능 고도화** — Board/Cheer/Home/My Page 등 이미 추가된 기능을 다듬고 안정화
3. **해제된 제약 도입** — 아래 4개 영역을 작게·검증 가능하게 단계적으로 도입

### 해제된 제약 (도입 가능)

| 영역 | 현재 | 목표 | 기술 방향 |
|---|---|---|---|
| 인증/로그인 | localStorage 단일 사용자 | 소셜 로그인·다중 사용자 | Supabase Auth / NextAuth (docs/04 §18) |
| 실시간 | setInterval 시뮬레이터 | 실시간 채팅·응원·게시판 | Supabase Realtime / WebSocket |
| 백엔드/DB | 인메모리 State | 채팅·게시판·응원·밈 영속화 | Supabase(Postgres) |
| 파일 업로드 | 밈 이미지 URL | 실제 이미지 파일 업로드 | Supabase Storage / Vercel Blob |

> 여전히 제외: 결제, 추가 외부 API(OpenF1 외).

### 도입 원칙

- 한 번에 하나의 영역만 도입하고, 각 단계 후 빌드·수동 QA로 검증한다.
- 기존 커스텀 훅(`useChatMessages`/`useBoard`/`useMemes`/`useCheer`)의 인터페이스를 유지하고 내부 구현만 교체한다.
- 비로그인 게스트 흐름을 유지해 온보딩 1분 목표를 깨지 않는다.
- 단일 백엔드 서비스(예: Supabase)로 인증·DB·실시간·스토리지를 함께 해결해 "다중 외부 API" 경계를 지킨다.

---

## 11. Manual QA for Session 2

2회차 종료 전 확인할 항목:

- [ ] `pnpm dev`로 앱이 실행된다.
- [ ] `/` 페이지가 열린다.
- [ ] `/app` 페이지가 열린다.
- [ ] TypeScript 컴파일 오류가 없다.
- [ ] Landing Page에 서비스 설명 (Hero + Problem + Features + CTA)이 보인다.
- [ ] App Page에 탭 네비게이션 shell이 보인다.
- [ ] 화면 배경이 `charcoal-900` 다크 테마로 표시된다.
- [ ] 주요 컴포넌트 placeholder가 빈 화면 없이 표시된다.
- [ ] 모바일 너비(375px)에서 큰 레이아웃 깨짐이 없다.
- [ ] 2회차 범위를 넘는 기능(채팅 로직, 밈 로직 등)이 구현되지 않았다.

---

## 12. Verification Commands

```bash
pnpm dev
pnpm build
git status
```

선택적으로 실행:

```bash
pnpm lint
pnpm type-check
```

4회차에서 추가:

```bash
pnpm test:e2e
```

---

## 13. Branch Plan

3회차 비교 실험을 위해 브랜치를 나눈다.

```text
main
├── md-driven-dev       ← MD 설계 문서 5종 기반 구현
└── openspec-driven-dev ← OpenSpec change 기반 구현
```

### MD 기반 개발 브랜치

```bash
git checkout -b md-driven-dev
```

### OpenSpec 기반 개발 브랜치

```bash
git checkout main
git checkout -b openspec-driven-dev
```

---

## 14. Development Prompts

### 공통 베이스 구현 프롬프트 (2회차)

```text
docs/ 폴더의 설계 문서(PRODUCT_BRIEF, REQUIREMENTS_SPEC, DESIGN, UX_UI_SPEC, TECHNICAL_DESIGN)를
모두 읽고, 오늘 구현할 공통 베이스 20~30%만 제안해 주세요.

조건:
- MD 기반 개발과 OpenSpec 기반 개발 비교를 방해하지 않는 공통 구조만 만드세요.
- 채팅 전송 로직, 밈 업로드 로직은 구현하지 마세요.
- 로그인, DB, 외부 API는 넣지 마세요.
- route, App shell, type, static data, placeholder 컴포넌트 중심으로 계획하세요.
- 아직 파일은 수정하지 말고 수정할 파일과 구현 순서만 제안해 주세요.
```

### 구현 승인 프롬프트 (2회차)

```text
좋습니다. 제안한 계획대로 구현해 주세요.

조건:
- docs/TECHNICAL_DESIGN.md의 Source Structure와 Data Model을 따르세요.
- docs/DESIGN.md의 컬러·타이포그래피 토큰을 Tailwind에 적용하세요.
- 채팅 전송, 밈 업로드, 온보딩 localStorage 연동은 하지 마세요.
- 오늘은 route, shell, 타입, 정적 데이터, placeholder까지만 구현하세요.
- 구현 후 변경된 파일 목록과 실행 방법을 요약해 주세요.
```

### MD 기반 핵심 기능 구현 프롬프트 (3회차 — md-driven-dev 브랜치)

```text
docs/ 폴더의 설계 문서(PRODUCT_BRIEF, REQUIREMENTS_SPEC, DESIGN, UX_UI_SPEC, TECHNICAL_DESIGN)를
모두 읽고 핵심 기능을 구현해 주세요.

구현 순서:
1. 온보딩 모달 (FR-001)
2. 전체 채팅 The Main Straight (FR-002~FR-005)
3. 팀별 채팅 The Garage (FR-003~FR-005)
4. 밈 박스 Meme Box (FR-006~FR-008)
5. F1 입문 가이드 F1 101 (FR-009)
6. Pit Wall 순위·일정 (FR-010~FR-011)

조건:
- REQUIREMENTS_SPEC.md의 Acceptance Criteria를 구현 완료 기준으로 삼으세요.
- DESIGN.md의 컴포넌트 스펙을 UI 구현 기준으로 삼으세요.
- 한 번에 전부 구현하지 말고 위 순서대로 하나씩 구현하고 확인해 주세요.
- 각 단계 구현 후 변경 파일과 다음 단계를 요약해 주세요.
```

---

## 15. Comparison Criteria for Session 3

3회차에서 두 방식의 결과를 비교할 때 볼 기준:

| Criteria | Question |
|---|---|
| Requirement Coverage | FR-001~FR-011이 빠짐없이 구현되었는가? |
| Scope Control | 불필요한 기능(로그인, 결제, 외부 API 등)이 추가되지 않았는가? |
| Implementation Order | 구현 순서가 문서의 UC 흐름과 일치했는가? |
| File Structure | TECHNICAL_DESIGN.md의 Source Structure를 따랐는가? |
| Code Quality | 중복과 복잡도가 적절한가? |
| UI Consistency | DESIGN.md 컬러·타이포·컴포넌트 스펙을 따랐는가? |
| Verifiability | AC-001~AC-008 기준으로 수동 QA가 가능한가? |
| Claude Response Quality | 계획 제안, 단계 요약, 범위 통제 설명이 명확했는가? |

---

## 16. Risks

| Risk | Mitigation |
|---|---|
| 기능 범위가 커짐 (채팅에 WebSocket 추가 등) | Must / Should / Not Today로 명확히 분리 |
| 구현 시간이 부족함 | 2회차는 베이스까지, 3회차는 Must Have 중심 |
| 문서와 구현이 어긋남 | 구현 전 관련 docs/ 파일 먼저 읽기 프롬프트 사용 |
| OpenSpec이 과하게 커짐 | 기능 단위로 10~20분씩 분리하여 진행 |
| 팀 컬러 대비 미검증 | WCAG AA 기준으로 주요 팀 컬러 수동 확인 |
| Next.js 설치 이슈 | `create-next-app` 템플릿 또는 기존 repo 활용 |
| 학생별 진도 차이 | Must Have 중심으로 진행, Should는 선택 |

---

## 17. Commit Plan

2회차 종료 시 커밋:

```bash
git add .
git commit -m "session-2: add planning docs and baseline scaffold"
git push origin main
```

3회차 MD 기반 개발 커밋:

```bash
git checkout -b md-driven-dev
git commit -m "session-3a: implement core features from MD design docs"
```

3회차 OpenSpec 기반 개발 커밋:

```bash
git checkout main
git checkout -b openspec-driven-dev
git commit -m "session-3b: implement core features from OpenSpec"
```

4회차 테스트 + 배포 커밋:

```bash
git checkout main
git merge md-driven-dev   # 또는 openspec-driven-dev (비교 후 선택)
git commit -m "session-4: add playwright tests and prepare for deployment"
git push origin main
```

---

## 18. Final Checklist

### 2회차 종료 전 확인

- [ ] MD 설계 문서 5개 작성 완료 (PRODUCT_BRIEF, REQUIREMENTS_SPEC, DESIGN, UX_UI_SPEC, TECHNICAL_DESIGN)
- [ ] DELIVERY_PLAN.md 작성 완료
- [ ] Next.js 프로젝트 scaffold 완료
- [ ] Tailwind 디자인 토큰 (F1 Red, Charcoal 계열, Space Grotesk 등) 등록
- [ ] 핵심 타입 정의 (UserProfile, ChatMessage, Meme, Team 등)
- [ ] 정적 데이터 작성 (teams, F1 101, 순위, 일정)
- [ ] `/` route 브라우저 확인
- [ ] `/app` route 브라우저 확인
- [ ] placeholder 컴포넌트 파일 생성
- [ ] `pnpm dev` 실행 확인
- [ ] `pnpm build` 오류 없음 확인
- [ ] Git commit / push 완료

### 3회차 종료 전 확인

- [ ] FR-001~FR-011 전부 구현
- [ ] AC-001~AC-008 기준 수동 QA 통과
- [ ] md-driven-dev 브랜치 커밋 완료
- [ ] openspec-driven-dev 브랜치 커밋 완료
- [ ] 두 브랜치 비교 메모 작성

### 4회차 종료 전 확인

- [ ] Playwright E2E 테스트 작성 (AC-001~AC-008)
- [ ] `pnpm test:e2e` 통과
- [ ] README 작성 (서비스 설명, 실행 방법, 기술 스택)
- [ ] Vercel 배포 완료 및 URL 확인
- [ ] 최종 발표 준비
