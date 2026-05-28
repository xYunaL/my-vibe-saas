---
id: expand-team-roster-and-cross-team-chat
title: 2026 시즌 11팀 반영 · 비팬 온보딩 옵션 · 타팀 채팅 읽기 허용
status: proposed
created: 2026-05-27
---

## Why

기존 Session 2 베이스라인은 2024 시즌 기준 10팀과 단순한 팀 이름·로고만 들고 있다.
그러나 사용자 요구는 (1) 2026 시즌 실제 라인업(11팀·22드라이버, 아우디·캐딜락 신규 진입)을 반영하고,
(2) "응원할 팀이 아직 없거나 모든 팀을 두루 좋아하는" 사용자도 온보딩을 완료할 수 있어야 하며,
(3) 자기 팀 외의 다른 팀 The Garage도 읽기 전용으로 둘러볼 수 있어야 한다는 것이다.
세 가지 모두 Session 3 핵심 기능(FR-001, FR-003) 구현 전에 사양으로 굳혀야
이중 작업을 피할 수 있다.

## What Changes

- 정적 팀 데이터 `lib/teams.ts`를 2026 시즌 11팀·22드라이버로 교체 (**BREAKING** — `Team` 타입에 `drivers: [string, string]` 필드 추가, `id` 일부 갱신: `rb` → `racingbulls`, `sauber` → `audi`, 신규 `cadillac`)
- `UserProfile.selectedTeamId`가 실제 팀 id 외에 가상 식별자 `"none"`(특정 응원 팀 없음)과 `"all"`(올팬)을 허용
- `OnboardingModal`에 "응원 팀 없음" / "올팬" 두 카드를 팀 그리드와 동일한 격자에 추가
- `TeamChatTabs` 동작 변경 — 다른 팀 탭도 표시·전환 가능. 본인 팀이 아닐 때는 입력창이 잠긴 read-only 모드로 동작하고 잠금 사유를 안내한다
- `"all"` 프로필은 모든 팀 채팅에 쓰기 권한을 가진다. `"none"` 프로필은 모든 팀 채팅을 읽을 수만 있고, 자기 팀이 없으므로 기본 진입 탭은 The Main Straight로 둔다
- `docs/REQUIREMENTS_SPEC.md`의 FR-001·FR-003 문구와 `docs/TECHNICAL_DESIGN.md`의 `UserProfile` / `Team` 타입 정의를 본 change의 spec과 일치시킨다 (문서 패치는 task에 포함)

## Capabilities

### New Capabilities

- `teams`: 정적 팀·드라이버 카탈로그. 팀 식별자, 표시 색, 로고, 드라이버 라인업과 가상 프로필 식별자(`none`·`all`)의 의미를 정의한다.

### Modified Capabilities

- `onboarding`: 팀 선택지에 가상 옵션(`"none"`·`"all"`)을 추가하고, 두 옵션도 "팀 선택" 요건을 충족하도록 완료 조건을 완화한다.
- `chat`: The Garage 탭이 자기 팀에 국한되지 않는다. 다른 팀 탭은 읽기 전용으로 진입 가능하고, 쓰기 권한 판정은 프로필 종류에 따라 결정된다.

## Impact

- 코드: `src/lib/types.ts`, `src/lib/teams.ts`, `src/components/onboarding/OnboardingModal.tsx`, `src/features/chat/*` (Session 3 TASK-001 / TASK-003 시 구현)
- 문서: `docs/REQUIREMENTS_SPEC.md` FR-001·FR-003 본문, `docs/TECHNICAL_DESIGN.md` §7 타입, `docs/UX_UI_SPEC.md` OnboardingModal / TeamChatTabs 항목
- 다른 change: `session-3-core-features`는 본 change가 archive된 뒤의 spec을 따른다. 이미 작성된 `tasks.md`의 TASK-001·TASK-003 체크리스트는 본 change의 요구사항을 포함하도록 보강이 필요하다.
- 사용자 데이터: 기존 localStorage에 `selectedTeamId: "rb"` 또는 `"sauber"`로 저장된 값이 있다면 무효 처리되어 온보딩이 재실행된다 (Session 3 진입 전 단계라 실사용자는 없음).
