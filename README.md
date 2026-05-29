# 패독 코리아 (Paddock Korea) 🏎️

> 흩어진 한국 F1 팬을 한곳에 모으는 팀 기반 커뮤니티 + 입문 가이드 앱

**🔗 라이브: [paddockkorea.vercel.app](https://paddockkorea.vercel.app)**

유튜브·오픈채팅·블로그로 흩어진 한국의 2030 F1 신규 팬이, **좋아하는 팀을 응원하고 함께 소통하며 F1을 쉽게 배우도록** 돕는 웹 서비스입니다. 바이브 코딩 실전 특강의 Micro SaaS MVP 프로젝트입니다.

---

## ✨ 주요 기능

앱은 6개 탭으로 구성됩니다 (`/app`).

| 탭 | 설명 |
|---|---|
| **Home** | 다음/진행 중 그랑프리 현황(D-day·LIVE), 내 팀 응원·랭킹, 전체 실시간 채팅(컴팩트 + 전체화면) |
| **Board** | 전체/팀별 게시판 — 글·댓글·좋아요, 최신순/인기순 정렬. 팀 게시판은 응원 팀만 작성 가능(그 외 읽기 전용) |
| **Meme Box** | 이미지 URL·캡션으로 밈을 게시하고 좋아요로 반응 |
| **F1 101** | 용어 사전·경기 방식·레이스 위켄드 입문 가이드 카드 |
| **Pit Wall** | OpenF1 기반 드라이버·컨스트럭터 챔피언십 순위, KST 경기 일정, 세션별 결과 |
| **My Page** | 닉네임·응원 팀(최대 2개) 변경, 라이트/다크 테마, 내가 쓴 글 |

- **온보딩**: 로그인 없이 닉네임 + 응원 팀(2026 시즌 11개 팀 또는 "응원 팀 없음"·"올팬")만 설정하면 1분 안에 시작
- **응원(Cheer)**: 하루 1회 내 팀에 응원(+1)을 보내고 팀별 누적 랭킹 확인
- **테마**: 라이트/다크 모드 전환

---

## 🛠 기술 스택

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · OpenF1 API · Playwright · pnpm

---

## 🚀 실행 방법

**사전 준비:** Node.js 20+ 와 [pnpm](https://pnpm.io)

```bash
# 1. 의존성 설치
pnpm install

# 2. 개발 서버 실행
pnpm dev
```

브라우저에서 **http://localhost:3000** 접속

- `/` — 랜딩 페이지 (서비스 소개)
- `/app` — 메인 앱 (온보딩 후 전체 기능)

```bash
# 프로덕션 빌드 / 실행
pnpm build
pnpm start

# 린트
pnpm lint
```

> 환경 변수나 API 키 없이 바로 실행됩니다. Pit Wall은 공개 OpenF1 API를 서버에서 호출하며, 실패 시 정적 폴백 데이터로 동작합니다.

---

## 🧪 테스트 방법

Playwright E2E 테스트 프레임워크가 설정되어 있습니다.

```bash
# 브라우저 최초 1회 설치
pnpm exec playwright install

# 테스트 실행
pnpm exec playwright test

# HTML 리포트 보기
pnpm exec playwright show-report
```

> 현재 `tests/`에는 예제 테스트만 있으며, 핵심 흐름(AC-001~AC-011)에 대한 E2E 작성은 진행 예정입니다.

---

## 🌐 배포 URL

**https://paddockkorea.vercel.app**

---

## 📸 데모

> 스크린샷 미첨부. 아래 흐름으로 직접 확인할 수 있습니다.

1. `/` 랜딩에서 "패독 입장하기" → `/app` 진입
2. 온보딩: 닉네임 입력 + 응원 팀 선택(최대 2개) → 완료
3. **Home**: 다음 그랑프리 D-day, 응원 버튼·랭킹, 전체 채팅
4. **Board**: 전체/팀별 글쓰기·댓글·좋아요 (타팀 게시판은 읽기 전용 배지)
5. **My Page**: 프로필·테마 변경, 내가 쓴 글 확인

---

## 🔒 보안 / 제외 범위

**보안 메모**
- 로그인 없는 단일 사용자 기준 — 닉네임·응원 팀만 `localStorage`에 저장 (민감 정보 미저장)
- API 키·시크릿을 코드에 포함하지 않으며 `.env`는 커밋하지 않음
- 채팅·밈·게시글은 React 기본 이스케이핑으로 렌더링 (`dangerouslySetInnerHTML` 미사용)

**현재 제외 범위**
- 결제 / 굿즈 스토어
- OpenF1 외 추가 외부 API 연동

**고도화 단계에서 도입 가능** (현재 미구현)
- 인증/로그인 · 실시간 동기화 · 백엔드 DB 영속화 · 이미지 파일 업로드

---

## 📚 문서

- 제품 기획: [docs/01_PRODUCT_BRIEF.md](docs/01_PRODUCT_BRIEF.md)
- 요구사항: [docs/02_REQUIREMENTS_SPEC.md](docs/02_REQUIREMENTS_SPEC.md)
- UX/UI: [docs/03_UX_UI_SPEC.md](docs/03_UX_UI_SPEC.md)
- 기술 설계: [docs/04_TECHNICAL_DESIGN.md](docs/04_TECHNICAL_DESIGN.md)
- 디자인 시스템: [docs/DESIGN.md](docs/DESIGN.md)
