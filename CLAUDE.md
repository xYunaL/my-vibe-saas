# Project

Micro SaaS MVP project for a Vibe Coding class.

# Product Idea

패독 코리아(Paddock Korea)는 **한국의 2030 F1 신규 팬**이 흩어진 플랫폼을 떠도는 문제를, **팀 기반 커뮤니티(게시판·응원·채팅)와 입문 가이드를 한 앱에 모으는 방식**으로 해결한다.

# Tech Stack

- Next.js (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Claude Code
- GitHub
- Playwright (E2E)
- OpenF1 API (Pit Wall 순위·일정·세션 결과)

# Current Stage

고도화 단계(Session 5+): 핵심 기능(온보딩·전체 채팅·게시판·응원·밈·F1 101·Pit Wall)이 동작하는 MVP 위에서, 일부 제약을 해제하고 발전된 기능 개발과 리팩토링을 진행한다. 우선순위는 **문서-코드 정합화**와 **기존 기능 고도화**다.

# Working Rules

- Read relevant files before suggesting changes.
- Explain the plan before editing files.
- Keep changes small.
- Do not add unnecessary dependencies.
- Update docs when project direction changes.
- Summarize changed files before commit.

# Boundaries

여전히 추가하지 않는 것:

- payment (결제·굿즈 스토어)
- multiple external API integrations — 외부 API는 OpenF1 **하나**로 유지한다. 새 외부 API 도입은 사전 합의 후에만.

고도화 단계에서 **해제된** 제약 (이제 도입 가능, 단 작게·검증 가능하게):

- real-time collaboration — WebSocket/실시간 동기화. 현재 setInterval 시뮬레이터를 실제 실시간으로 대체 가능.
- authentication — 소셜 로그인·사용자 계정. 현재 localStorage 단일 사용자 → 다중 사용자 기반으로 확장 가능.
- backend / DB — 채팅·게시판·응원을 Supabase/Firebase 등으로 영속화 가능.
- file upload — 밈 이미지 URL 입력 → 실제 이미지 파일 업로드 가능.

# References

- Follow docs/DESIGN.md for UI direction.
- Follow docs/04_TECHNICAL_DESIGN.md for project structure (Source Structure §5).