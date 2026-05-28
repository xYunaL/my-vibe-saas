---
id: expand-team-roster-and-cross-team-chat
section: design
---

## Context

Session 2 베이스라인은 `lib/teams.ts`에 10팀(2024 시즌 추정)만 정의돼 있고
드라이버 정보는 없다. `UserProfile.selectedTeamId`는 `string`으로 선언돼 있어
"팀이 없음"이나 "올팬" 같은 비-팀 상태를 표현할 수단이 없다.
`OnboardingModal`은 팀 그리드만 노출해 비팬은 진입 자체가 막힌다.
`ChatRoom`은 `roomType`과 `teamName`만 받기 때문에 "다른 팀 채팅을 읽지만 쓸 수는 없다"는
권한 분리를 표현할 수 없다.

Session 3에서 채팅·온보딩 구현이 시작되기 전에 이 세 가지를 사양 단계에서
확정해두지 않으면, TASK-001 / TASK-003가 코드 변경 후 다시 뒤집어야 한다.

## Goals / Non-Goals

**Goals:**
- 2026 시즌의 실제 11팀·22드라이버 라인업을 정적 데이터에 반영한다.
- 비팬·올팬 사용자도 온보딩을 완료하고 앱 본문으로 진입할 수 있게 한다.
- 사용자가 자기 팀이 아닌 The Garage 탭도 열어 읽을 수 있게 한다. 쓰기 권한은 프로필 종류로 결정한다.
- spec / 문서 / 코드 타입을 한 차례에 정합하게 맞춘다.

**Non-Goals:**
- 채팅 메시지 송수신 로직 자체의 구현 (Session 3 TASK-002 / TASK-003 범위)
- 팀별 권한 모델을 서버에 두는 것 (전부 클라이언트 판정)
- 외부 F1 API 연동으로 라인업을 동적으로 받아오는 것 (CLAUDE.md "다중 외부 API 연동" 경계)
- 응원 팀 변경 후 다른 팀 채팅의 본인 과거 메시지 권한 재계산 (Session 3는 인메모리이므로 비고려)

## Decisions

### D1. 가상 프로필 식별자를 별도 타입이 아닌 `selectedTeamId` 값으로 표현한다

`type SpecialTeamId = "none" | "all"`을 정의하고,
`UserProfile.selectedTeamId: Team["id"] | SpecialTeamId`로 좁힌다.
대안인 `selectedTeamId?: string + isAllFan: boolean` 같은 다중 필드 모델은
직렬화·검증 분기가 늘어나서 채택하지 않는다.

판정 헬퍼는 `lib/teams.ts`에 모은다:
- `isRealTeam(id)` — 실제 팀 id 여부
- `canPostInTeamChat(profile, teamId)` — 자기 팀이거나 `"all"`이면 true
- `defaultLandingTab(profile)` — `"all"`/`"none"`이면 `main-straight`, 실제 팀이면 마지막 활성 탭 유지

### D2. The Garage 탭을 "내 팀 고정 단일 채팅"이 아니라 "팀 채팅 디렉터리"로 재정의한다

기존 가정: `roomType="team"` 한 화면에 자기 팀 메시지만 표시.
변경 후: 좌측에 11개 팀 선택 바(`TeamChatTabs`) + 우측에 선택된 팀의 채팅.
선택된 팀이 사용자 본인 팀이 아니면 입력창은 잠금 상태로 표시하고,
상단에 "읽기 전용 — Ferrari 팬만 발언할 수 있어요" 안내 배지를 띄운다.

쓰기 권한은 단일 함수로 결정한다:
```
canPost = profile.selectedTeamId === activeTeamId
       || profile.selectedTeamId === "all"
```

### D3. 가상 식별자에는 팀 컬러를 부여하지 않고 시스템 컬러를 쓴다

`"none"`: 회색 (`charcoal-500` 라인) — 중립.
`"all"`: 무지개 그라디언트가 아니라 carbon-gold 한 색만 사용 — 디자인 토큰 일관성을 위해.
이렇게 두면 채팅 버블의 본인 측 틴트도 동일 규칙으로 만들 수 있다.

### D4. 기존 팀 id 변경(`rb` → `racingbulls`, `sauber` → `audi`)은 마이그레이션 없이 처리

Session 2 베이스라인은 사용자가 없는 단계이므로 마이그레이션 코드를 만들지 않는다.
`getUserProfile`이 알 수 없는 `selectedTeamId`를 반환하면 `null`로 간주해
온보딩 모달을 다시 띄운다. 이 동작은 `storage.ts`에 한 줄의 검증으로 추가한다.

### D5. 문서 패치는 본 change tasks에 포함한다

`docs/REQUIREMENTS_SPEC.md`·`docs/TECHNICAL_DESIGN.md`·`docs/UX_UI_SPEC.md`
세 파일에 본 change의 spec 내용을 반영하지 않으면, 다음 회차에서 다시
"문서와 코드가 어긋난다" 리스크(DELIVERY_PLAN §16)가 살아난다.

## Risks / Trade-offs

| Risk | Mitigation |
|---|---|
| 가상 식별자(`none`/`all`)와 실제 팀 id가 같은 namespace에 섞여 검증이 복잡 | `isRealTeam()`·`SPECIAL_TEAM_IDS` 상수를 단일 출처로 두고 모든 분기에서 그것만 호출 |
| 다른 팀 채팅 열람 허용으로 "팀 채팅의 결속감" 약화 우려 | 읽기 전용 배지 + 입력창 잠금 + 본인 팀에는 시각적 강조(racing-border)로 차별화 |
| 11번째 팀(Cadillac) 등 신규 팀 색상이 디자인 토큰에 없음 | 팀 데이터의 `baseColor` 그대로 inline style로만 쓰고 토큰화하지 않음 (DESIGN §디자인 토큰 정책과 일치) |
| Session 3 tasks.md가 본 change 이후 다시 손봐야 함 | tasks에 "session-3 tasks.md 갱신" 항목 포함 |
| 사용자가 `"all"`로 가입 후 채팅 도배 가능성 | MVP 범위 — 신고/제재는 본 change Non-goals. Session 4 회고에서 다시 논의 |
