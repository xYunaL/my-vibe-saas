# onboarding Specification

## Purpose
TBD - created by archiving change expand-team-roster-and-cross-team-chat. Update Purpose after archive.
## Requirements
### Requirement: 온보딩 팀 선택지에 가상 옵션 두 개를 포함한다

The OnboardingModal SHALL render two additional selectable cards alongside the 11 real teams: "응원 팀 없음" (mapped to `selectedTeamId="none"`) and "올팬" (mapped to `selectedTeamId="all"`). 두 카드는 실제 팀 카드와 동일한 그리드 안에 표시되어야 하며, 시각적으로 가상 옵션임이 구분되어야 한다(예: 팀 컬러 대신 charcoal-500 또는 carbon-gold 보더).

#### Scenario: 사용자가 "응원 팀 없음"을 선택한다
- **WHEN** 사용자가 닉네임을 입력하고 "응원 팀 없음" 카드를 선택한 후 완료를 누른다
- **THEN** `saveUserProfile({ nickname, selectedTeamId: "none" })`가 호출되고 모달이 닫힌다

#### Scenario: 사용자가 "올팬"을 선택한다
- **WHEN** 사용자가 닉네임을 입력하고 "올팬" 카드를 선택한 후 완료를 누른다
- **THEN** `saveUserProfile({ nickname, selectedTeamId: "all" })`가 호출되고 모달이 닫힌다

### Requirement: 완료 버튼은 실제 팀과 가상 옵션을 동등하게 인정한다

The submit button's `disabled` predicate SHALL accept any non-empty `selectedTeamId` regardless of whether it points to a real team or one of the special identifiers. The previous "real team only" 제약은 폐기된다.

#### Scenario: 가상 옵션 선택 시에도 완료 버튼이 활성화된다
- **WHEN** 닉네임은 유효하고 `selectedTeamId === "none"`이다
- **THEN** 완료 버튼의 `disabled` 속성은 `false`이다

#### Scenario: 어떤 카드도 선택하지 않으면 여전히 비활성
- **WHEN** 닉네임만 입력하고 어떤 카드도 선택하지 않았다
- **THEN** 완료 버튼은 `disabled`이다

### Requirement: 진입 탭은 프로필 종류에 따라 결정된다

After onboarding completion the app SHALL route the user to a sensible default tab:
- 실제 팀 또는 `"all"` → The Main Straight
- `"none"` → The Main Straight (Garage 탭은 비어 보이지 않도록 직접 선택해야 진입)

#### Scenario: 가상 프로필도 The Main Straight로 진입한다
- **WHEN** 온보딩 완료 직후의 활성 탭을 확인한다
- **THEN** `activeTab === "main-straight"`이다 (프로필 종류 무관)

