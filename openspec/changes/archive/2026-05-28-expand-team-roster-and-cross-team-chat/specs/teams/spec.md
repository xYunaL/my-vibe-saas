## ADDED Requirements

### Requirement: 정적 팀 카탈로그는 2026 시즌 11팀을 모두 포함한다

The system SHALL ship a static `TEAMS` list whose entries cover every constructor that is on the 2026 F1 grid: McLaren, Mercedes, Red Bull Racing, Ferrari, Williams, Racing Bulls, Aston Martin, Haas, Audi, Alpine, Cadillac. The list MUST NOT contain teams from prior seasons that are no longer on the grid (e.g., the previous Kick Sauber / VCARB identities).

#### Scenario: 11개 팀이 그리드에 노출된다
- **WHEN** OnboardingModal의 팀 선택 그리드가 처음 렌더링된다
- **THEN** 11개의 실제 팀 카드가 노출된다 (가상 옵션 별도)

#### Scenario: 사라진 팀은 더 이상 선택할 수 없다
- **WHEN** localStorage에 `selectedTeamId: "rb"` 또는 `"sauber"` 처럼 baseline 시점에는 존재했지만 본 change 적용 후 사라진 식별자가 들어 있다
- **THEN** `getUserProfile()`은 `null`을 반환하고 OnboardingModal이 다시 표시된다

### Requirement: 각 팀 엔트리는 두 명의 드라이버를 들고 있다

Every team in `TEAMS` SHALL declare a `drivers` field that is a tuple of exactly two driver display names following the format `"한글이름 (영문이름)"`. The pair MUST match the 2026 season lineup supplied by the product owner.

#### Scenario: 모든 팀이 정확히 두 명의 드라이버를 가진다
- **WHEN** TEAMS 배열을 순회한다
- **THEN** 모든 엔트리의 `drivers.length === 2`이고 빈 문자열이 없다

#### Scenario: 2026 라인업과 일치한다
- **WHEN** Ferrari 엔트리의 drivers를 읽는다
- **THEN** `["샤를 르클레르 (Charles Leclerc)", "루이스 해밀턴 (Lewis Hamilton)"]`가 반환된다

### Requirement: 시스템은 가상 프로필 식별자 `none` / `all`을 정의한다

The system SHALL recognize two reserved profile identifiers that are NOT real team ids:
- `"none"` — 사용자가 응원할 팀을 아직 정하지 못한 상태.
- `"all"` — 사용자가 모든 팀을 두루 응원하는 상태.

These identifiers MUST be exported as a named constant `SPECIAL_TEAM_IDS` and MUST NOT clash with any entry's `id` in `TEAMS`.

#### Scenario: 가상 식별자는 실제 팀과 겹치지 않는다
- **WHEN** `SPECIAL_TEAM_IDS`의 모든 원소를 `TEAMS.find(t => t.id === id)`로 조회한다
- **THEN** 모두 `undefined`가 반환된다

#### Scenario: `isRealTeam` 헬퍼가 가상 식별자를 거른다
- **WHEN** `isRealTeam("all")` 또는 `isRealTeam("none")`을 호출한다
- **THEN** `false`가 반환된다

#### Scenario: 실제 팀 식별자는 그대로 통과한다
- **WHEN** `isRealTeam("ferrari")`를 호출한다
- **THEN** `true`가 반환된다
