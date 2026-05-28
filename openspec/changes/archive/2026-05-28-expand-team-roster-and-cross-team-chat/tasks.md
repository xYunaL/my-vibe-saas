---
id: expand-team-roster-and-cross-team-chat
section: tasks
---

## Tasks

### TASK-A — `Team` 타입 확장 + 정적 데이터 교체
**Spec:** specs/teams/spec.md  
**Status:** done

- [x] `src/lib/types.ts` — `Team` 타입에 `drivers: readonly [string, string]` 필드를 추가한다
- [x] `src/lib/types.ts` — `SpecialTeamId = "none" | "all"`을 정의하고 `UserProfile.selectedTeamId: Team["id"] | SpecialTeamId`로 좁힌다 (`Team["id"]`는 union literal로 좁히지 않고 `string`을 유지해도 무방)
- [x] `src/lib/teams.ts` — TEAMS를 2026 시즌 11팀으로 교체 (id, name, fullName, baseColor, logo, drivers). id는 `mclaren / mercedes / redbull / ferrari / williams / racingbulls / astonmartin / haas / audi / alpine / cadillac` 11개로 한다
- [x] `src/lib/teams.ts` — `SPECIAL_TEAM_IDS`, `isRealTeam(id)`, `canPostInTeamChat(profile, teamId)` 헬퍼 export
- [x] `pnpm build` 통과

---

### TASK-B — `getUserProfile`에 알 수 없는 식별자 검증 추가
**Spec:** specs/teams/spec.md (Scenario: 사라진 팀은 더 이상 선택할 수 없다)  
**Status:** done

- [x] `src/lib/storage.ts` — 파싱된 `selectedTeamId`가 `isRealTeam()` 또는 `SPECIAL_TEAM_IDS`에 속하지 않으면 `null` 반환
- [x] 자가 검증: 앱 진입 시 `getUserProfile()` null → 온보딩 모달 자동 표시 (브라우저 검증 완료)

---

### TASK-C — `OnboardingModal` 가상 옵션 + 동작 연결
**Spec:** specs/onboarding/spec.md  
**Status:** done

- [x] 팀 그리드 컴포넌트가 11팀 + 2가상 옵션을 동일한 격자에 노출하도록 수정
- [x] 가상 옵션 카드: "응원 팀 없음"(charcoal-500 보더, `❔` 아이콘), "올팬"(carbon-gold 보더, `🌈` 아이콘)
- [x] 카드 클릭 핸들러는 실제 팀과 동일한 `onSelect(id)` 시그니처를 사용 (선택 시 baseColor 보더 활성화)
- [x] 완료 버튼 활성화 조건 `nickname.trim() && selectedId` — 가상 옵션도 통과 (브라우저 검증: 입장 버튼 disabled→enabled, ferrari 저장)

---

### TASK-D — `ChatRoom` / `TeamChatTabs` 타팀 열람 + 권한 모델
**Spec:** specs/chat/spec.md  
**Status:** done

- [x] `src/features/chat/TeamChatTabs.tsx` 신규 — 11팀을 가로 스크롤 탭으로 노출 (브라우저 검증: 11개 탭)
- [x] `ChatRoom`의 `team` 모드 props를 `{ activeTeamId, profile, onTeamChange }`로 확장
- [x] 입력창 활성화 조건을 `canPostInTeamChat(profile, activeTeamId)`로 게이팅 (브라우저 검증: 내 팀 활성 / 타팀 disabled)
- [x] 활성 팀이 자기 팀이 아니면 "읽기 전용 — {팀명} 팬만 발언할 수 있어요" 배지 표시 (브라우저 검증 완료)
- [x] The Garage 탭 첫 진입 시 기본 활성 팀: 실제 팀이면 자기 팀, `"all"`/`"none"`이면 `TEAMS[0]` (`defaultGarageTeamId`, 브라우저 검증: ferrari 진입)
- [x] 메시지 전송 로직 연결 (useChatMessages.sendMessage, 브라우저 검증: 전송→렌더→입력창 초기화)

---

### TASK-E — 문서 동기화
**Status:** done

- [x] `docs/02_REQUIREMENTS_SPEC.md` — UC-001/FR-001에 "응원 팀 없음/올팬 옵션", UC-003/FR-003에 "타팀 채팅 읽기 전용 열람" 명시. AC-001·AC-003 대응 시나리오 추가
- [x] `docs/04_TECHNICAL_DESIGN.md` — `UserProfile.selectedTeamId` 타입에 `SpecialTeamId` 명시, `Team`에 `drivers`·`fullName` 필드 + 권한 헬퍼, validation·open question·폴더 설명의 "10개 팀" → "11개 팀" 정정
- [x] `docs/03_UX_UI_SPEC.md` — OnboardingModal에 가상 옵션 2개, TeamChatTabs 동작(읽기/쓰기 분리), 컴포넌트 표에 TeamChatTabs 추가
- [x] `openspec/changes/session-3-core-features/tasks.md` — TASK-001·TASK-003 체크리스트에 본 change 항목 흡수 (가상 옵션 분기, read-only 게이팅)

---

### TASK-F — 검증
**Status:** done

- [x] `openspec validate expand-team-roster-and-cross-team-chat --strict` 통과
- [x] `pnpm build` 통과
- [x] (수동) `/app` 진입 HTTP 200 + 헤더 탭 렌더 확인 (그리드 11팀/가상 옵션은 온보딩 모달 — Session 3 동작 연결 후 클릭 검증)

---

## 구현 순서

```
TASK-A (타입·데이터)
  → TASK-B (storage 검증)
  → TASK-C (OnboardingModal UI)
  → TASK-D (ChatRoom 권한 모델)
  → TASK-E (문서 동기화)
  → TASK-F (검증)
```

TASK-C·D 중 동적 동작(완료 버튼 게이팅, 메시지 전송 게이팅)은 Session 3 TASK-001·TASK-002·TASK-003 시점에 본 spec과 일치하도록 구현한다. Session 2 시점에 본 change에서는 UI 셸·타입·정적 데이터·문서까지만 적용한다.

## 완료 기준

- TEAMS가 11팀 + 22드라이버를 정확히 반영한다
- OnboardingModal에 가상 옵션 2개가 노출된다
- `ChatRoom` shell이 다른 팀 탭 열람 + read-only 배지를 표시한다
- 위 spec 4개 (`teams`, `onboarding`, `chat`)가 OpenSpec validate를 통과한다
- 문서 3종(REQUIREMENTS_SPEC, TECHNICAL_DESIGN, UX_UI_SPEC)과 session-3 tasks가 본 change와 일치한다
- `pnpm build` 오류 없음
