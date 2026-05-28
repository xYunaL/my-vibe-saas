# chat Specification

## Purpose
TBD - created by archiving change expand-team-roster-and-cross-team-chat. Update Purpose after archive.
## Requirements
### Requirement: The Garage 탭은 다른 팀의 채팅도 읽기 전용으로 열람할 수 있다

The Garage tab SHALL present a sub-navigator listing every real team. Selecting any team's tab MUST render that team's chat history regardless of the current user's `selectedTeamId`. 자기 팀이 아닌 채팅에 진입한 경우에도 메시지 목록은 정상 표시되어야 한다.

#### Scenario: Ferrari 팬이 McLaren 채팅을 연다
- **WHEN** `selectedTeamId === "ferrari"` 인 사용자가 The Garage에서 McLaren 탭을 누른다
- **THEN** McLaren 팀 채팅의 메시지 목록이 표시된다

#### Scenario: 가상 프로필도 모든 팀 채팅을 열람할 수 있다
- **WHEN** `selectedTeamId === "none"` 인 사용자가 임의 팀 탭을 누른다
- **THEN** 해당 팀의 메시지 목록이 표시된다

### Requirement: 메시지 작성 권한은 프로필 종류와 활성 팀에 따라 결정된다

The chat composer SHALL be enabled only when the predicate `canPostInTeamChat(profile, activeTeamId)` returns `true`, defined as:
- `profile.selectedTeamId === activeTeamId` (자기 팀이면 작성 가능)
- 또는 `profile.selectedTeamId === "all"` (올팬은 모든 팀 채팅에 작성 가능)

다른 모든 경우에는 입력창과 전송 버튼이 `disabled` 상태가 되고, 화면 상단에 "읽기 전용 — 이 팀 팬만 발언할 수 있어요" 형태의 안내 배지가 표시된다.

#### Scenario: 자기 팀 채팅에서는 작성 가능
- **WHEN** Ferrari 팬이 Ferrari 채팅을 보는 중이다
- **THEN** 입력창은 활성 상태이고 안내 배지는 노출되지 않는다

#### Scenario: 다른 팀 채팅에서는 read-only
- **WHEN** Ferrari 팬이 McLaren 채팅을 보는 중이다
- **THEN** 입력창과 전송 버튼은 `disabled`이고 "읽기 전용" 배지가 표시된다

#### Scenario: 올팬은 모든 팀 채팅에 작성 가능
- **WHEN** `selectedTeamId === "all"` 인 사용자가 임의 팀 채팅을 보는 중이다
- **THEN** 입력창은 활성 상태이다

#### Scenario: "응원 팀 없음" 사용자는 모든 팀 채팅이 read-only
- **WHEN** `selectedTeamId === "none"` 인 사용자가 임의 팀 채팅을 보는 중이다
- **THEN** 입력창과 전송 버튼은 `disabled`이고 "읽기 전용" 배지가 표시된다

### Requirement: The Garage 탭의 기본 활성 팀은 프로필 종류에 따라 정해진다

When the user lands on The Garage tab for the first time in a session, the system SHALL pick a default active team:
- 실제 팀 사용자 → 자기 팀
- `"all"` 또는 `"none"` → `TEAMS[0]` (그리드 첫 번째 팀)

이후 사용자가 다른 팀 탭을 선택하면 해당 선택을 세션 동안 유지한다 (인메모리 상태).

#### Scenario: 실제 팀 사용자는 자기 팀으로 진입한다
- **WHEN** Ferrari 팬이 The Garage 탭을 처음 누른다
- **THEN** 활성 서브탭은 Ferrari이다

#### Scenario: 올팬·비팬은 그리드 첫 팀으로 진입한다
- **WHEN** `selectedTeamId === "all"` 인 사용자가 The Garage 탭을 처음 누른다
- **THEN** 활성 서브탭은 `TEAMS[0].id`이다

