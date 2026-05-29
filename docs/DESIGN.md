---
version: alpha
name: paddock-korea-design-system
description: |
  A motorsport-first dark platform built around the F1 Red CTA, deep charcoal chrome, and monospace telemetry data. Every surface recedes into near-black so team colors, live chat bubbles, and race data can speak. The chrome is a two-layer stack: a base `charcoal-900` body wash and a `charcoal-800` card surface, separated by hairline `rgba(255,255,255,0.05)` borders. The single saturated accent is F1 Red (`#e10600`), reserved for primary actions, active tab states, and the brand wordmark. Carbon Gold (`#ffb800`) is the secondary accent — reserved for achievements, badges, and podium highlights. Team base colors appear contextually as dynamic accents on garage banners, chat bubbles, and constructor standings bars.

colors:
  primary: "#e10600"
  primary-pressed: "#b00500"
  on-primary: "#ffffff"
  carbon-gold: "#ffb800"
  charcoal-900: "#0B0B0C"
  charcoal-800: "#0F0F12"
  charcoal-750: "#121214"
  charcoal-700: "#161618"
  charcoal-650: "rgba(255,255,255,0.05)"
  charcoal-600: "rgba(255,255,255,0.10)"
  charcoal-500: "rgba(255,255,255,0.20)"
  text-primary: "#e2e8f0"
  text-secondary: "#cbd5e1"
  text-muted: "#94a3b8"
  text-faint: "#64748b"
  on-dark: "#ffffff"
  success: "#10b981"
  success-muted: "rgba(16,185,129,0.10)"
  danger: "#f43f5e"
  danger-muted: "rgba(244,63,94,0.10)"

  # Dynamic team colors — applied at runtime from Team.baseColor
  team-dynamic: "var(--team-base-color)"

typography:
  logo-wordmark:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: 900
    fontStyle: italic
    letterSpacing: -0.5px
  logo-tag:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 900
    letterSpacing: 0.15em
    textTransform: uppercase
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 44px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.5px
  display-md:
    fontFamily: Space Grotesk
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.3px
  heading-lg:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.2
  heading-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.3
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
  body-strong:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
  button-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1
  button-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 700
    letterSpacing: 0.1em
    textTransform: uppercase
  data-lg:
    fontFamily: JetBrains Mono
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1
  data-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1
  data-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.4
  caption:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.05em

rounded:
  none: 0px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px

spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  section: 32px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 10px 20px
    hoverBackground: "{colors.primary-pressed}"
  button-secondary:
    backgroundColor: "{colors.charcoal-700}"
    textColor: "{colors.text-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 10px 20px
    border: "1px solid {colors.charcoal-600}"
    hoverBackground: "{colors.charcoal-600}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    hoverTextColor: "{colors.on-dark}"
  nav-tab-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 6px 12px
  nav-tab-inactive:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 6px 12px
    hoverBackground: "{colors.charcoal-600}"
  subtab-active:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-strong}"
    borderBottom: "2px solid {colors.primary}"
  subtab-inactive:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    typography: "{typography.body-strong}"
    borderBottom: "2px solid transparent"
  card:
    backgroundColor: "{colors.charcoal-800}"
    border: "1px solid {colors.charcoal-650}"
    rounded: "{rounded.lg}"
    padding: 20px
  card-inner:
    backgroundColor: "{colors.charcoal-900}"
    border: "1px solid {colors.charcoal-700}"
    rounded: "{rounded.md}"
    padding: 12px
  card-hero:
    backgroundColor: "linear-gradient(135deg, {colors.charcoal-800}, {colors.charcoal-700})"
    border: "1px solid {colors.charcoal-600}"
    rounded: "{rounded.xl}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.charcoal-900}"
    textColor: "{colors.text-primary}"
    border: "1px solid {colors.charcoal-700}"
    rounded: "{rounded.md}"
    padding: 8px 12px
    typography: "{typography.body-sm}"
    focusBorder: "1px solid {colors.primary}"
  chat-bubble-own:
    backgroundColor: "team-color at 15% opacity"
    border: "1px solid team-color at 25% opacity"
    rounded: "{rounded.lg}"
    roundedTopRight: 0
  chat-bubble-other:
    backgroundColor: "#1c1c24"
    border: "1px solid {colors.charcoal-700}"
    rounded: "{rounded.lg}"
    roundedTopLeft: 0
  filter-chip-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 6px 12px
  filter-chip-inactive:
    backgroundColor: "{colors.charcoal-800}"
    textColor: "{colors.text-muted}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 6px 12px
    hoverBackground: "{colors.charcoal-700}"
  badge-mono:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 700
    textTransform: uppercase
    rounded: "{rounded.sm}"
    padding: 2px 8px
  team-selector-active:
    border: "1px solid team-color"
    backgroundColor: "team-color at 8% opacity"
    rounded: "{rounded.md}"
    padding: 12px
  team-selector-inactive:
    border: "1px solid transparent"
    backgroundColor: "{colors.charcoal-800} at 50% opacity"
    rounded: "{rounded.md}"
    padding: 12px
  live-indicator:
    innerDot: "{colors.primary} — 10px circle"
    outerRing: "{colors.primary} at 75% opacity, animate-ping"
  modal-overlay:
    backgroundColor: "rgba(0,0,0,0.60)"
    backdropBlur: 8px
  modal-card:
    backgroundColor: "{colors.charcoal-800}"
    border: "1px solid {colors.charcoal-600}"
    rounded: "{rounded.lg}"
    padding: 24px
    maxWidth: 512px
  modal-card-achievement:
    backgroundColor: "gradient from charcoal-800 to charcoal-750"
    border: "2px solid {colors.carbon-gold}"
    rounded: "{rounded.xl}"
    padding: 24px
    shadow: "0 0 40px {colors.carbon-gold} at 25% opacity"
  racing-border:
    leftStrip: "4px repeating-linear-gradient(45deg, #e10600 0 8px, #ffffff 8px 16px)"
  profile-widget:
    backgroundColor: "{colors.charcoal-900}"
    border: "1px solid {colors.charcoal-700}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  footer:
    backgroundColor: "{colors.charcoal-800}"
    borderTop: "1px solid {colors.charcoal-700} at 60% opacity"
    padding: 24px
---

## Overview

Paddock Korea's design language is built around one principle: make race data and team identity the loudest thing on the screen. The chrome is an intentionally recessive dark stack — near-black `{colors.charcoal-900}` body behind `{colors.charcoal-800}` card surfaces behind `{colors.charcoal-900}` inset panels — so that F1 Red (`{colors.primary}` — `#e10600`) and dynamic team colors read as the highest-contrast elements on any viewport. A subtle `carbon-grid` CSS background (1px lines at 40px intervals, 1.5% opacity) adds motorsport texture without competing with content.

The type system has three distinct voices that never blur: **Space Grotesk** for brand and sectional display (bold, italic, tight tracking), **Inter** for all readable body and UI copy, and **JetBrains Mono** for telemetry data, timestamps, race codes, and any number that represents a racing statistic. Switching fonts signals a switch in register — display to body to data — and this three-voice rule is the system's most important typographic constraint.

**Key Characteristics:**
- Single primary accent: F1 Red (`{colors.primary}`) for the active CTA, the active tab, the live indicator, and the brand wordmark. Everything else uses charcoal surfaces or team dynamic colors.
- Carbon Gold (`{colors.carbon-gold}` — `#ffb800`) is the achievement accent: podium rank chips, badge unlock modals, Pit Wall telemetry highlights, and the "유익합니다" column reaction.
- Team dynamic colors are applied contextually from `Team.baseColor` — not from the design token system — for garage banners, chat bubble tints, constructor bars, and team selector borders.
- JetBrains Mono carries every number and code: lap times, championship points, countdowns, rank labels, and font-mono captions. It is never used for conversational body text.
- The `carbon-grid` and `racing-border` CSS patterns are the only decorative surfaces in the system. Every other visual interest comes from team colors, typography contrast, or live/animated state indicators.

## Colors

### Brand & Accent
- **F1 Red** (`{colors.primary}` — `#e10600`): the only saturated brand color. Active nav tab fill, primary button background, filter chip active state, focus ring on inputs, live race indicator, and the brand wordmark label. Never decorative.
- **F1 Red Pressed** (`{colors.primary-pressed}` — `#b00500`): hover/pressed state for primary button and any red interactive element.
- **Carbon Gold** (`{colors.carbon-gold}` — `#ffb800`): podium P1 rank tint, achievement badge border and glow, `PIT WALL TELEMETRY FEED` label, boost section premium stat highlight. Never used in the main nav or body copy.

### Surfaces (dark stack)
- **Charcoal 900** (`{colors.charcoal-900}` — `#0B0B0C`): the page body. Also used for inset panels inside cards (the "card-inner" layer).
- **Charcoal 800** (`{colors.charcoal-800}` — `#0F0F12`): primary card and container surface. Header, footer, every `{component.card}`, and modal backgrounds live here.
- **Charcoal 750** (`{colors.charcoal-750}` — `#121214`): section dividers and secondary card backgrounds (constructor standing inner tiles).
- **Charcoal 700** (`{colors.charcoal-700}` — `#161618`): border for all standard cards, inputs, and table row dividers.
- **Charcoal 650** (`{colors.charcoal-650}` — `rgba(255,255,255,0.05)`): the softest border — used on primary cards against the charcoal-900 body.
- **Charcoal 600** (`{colors.charcoal-600}` — `rgba(255,255,255,0.10)`): slightly more visible border for interactive elements like the profile widget and modals.
- **Charcoal 500** (`{colors.charcoal-500}` — `rgba(255,255,255,0.20)`): hover-state border brightening on cards.

### Text
- **Text Primary** (`{colors.text-primary}` — `#e2e8f0`): default body text on all dark surfaces. Set globally on `<body>`.
- **Text Secondary** (`{colors.text-secondary}` — `#cbd5e1`): body prose inside cards, chat message content.
- **Text Muted** (`{colors.text-muted}` — `#94a3b8`): metadata labels, inactive tab text, placeholder neighbors.
- **Text Faint** (`{colors.text-faint}` — `#64748b`): table column headers in mono, scrollbar track label, secondary metadata.
- **On Primary / On Dark** (`{colors.on-primary}` / `{colors.on-dark}` — `#ffffff`): text on red or near-black backgrounds.

### Semantic
- **Success** (`{colors.success}` — `#10b981`): member-approved status badge, thumbs-up button, "서포터즈 승인됨" label. Background tint in `{colors.success-muted}`.
- **Danger** (`{colors.danger}` — `#f43f5e`): thumbs-down vote button, destructive action hover. Background tint in `{colors.danger-muted}`.

### Team Dynamic Colors
Applied at runtime from `Team.baseColor` in `data.ts`. These are never hardcoded in the design token system — the pattern is always `team.baseColor + opacity suffix`. Used for: garage banner gradient, chat bubble own-message tint, constructor standings progress bar, team selector card border, and small team color dots in standings rows.

## Typography

### Font Families
Three distinct voices, each with a non-overlapping register:

**Space Grotesk** (`{typography.logo-wordmark}`, `{typography.display-*}`, `{typography.heading-*}`) — brand and structural headlines. Loaded via Google Fonts at weights 400–700. Distinguishing traits: tall x-height, tight tracking at large sizes, slightly condensed geometry that reads "engineered." Applied to the logo wordmark (italic, black weight), hero headlines, section titles (`font-display font-bold` in Tailwind).

**Inter** (`{typography.body-*}`, `{typography.button-*}`) — all conversational and UI copy. Loaded via Google Fonts at weights 300–700. The neutral workhorse: chat messages, card body copy, button labels, form labels, and any text longer than one line.

**JetBrains Mono** (`{typography.label-mono}`, `{typography.data-*}`, `{typography.caption}`) — race data and codes exclusively. Loaded via Google Fonts at weights 400–700. Applied to: championship points, countdown digits, lap times, KST timestamps, rank labels (`P1`, `R7`), driver codes (`VER`, `NOR`), monospace badge tags (`PADDOCK`, `LIVE CONCURRENT STATE`), and all uppercase tracking labels. Never used for body prose.

### Hierarchy

| Token | Font | Size | Weight | Use |
|---|---|---|---|---|
| `{typography.logo-wordmark}` | Space Grotesk | 20–24px | 900 | "KOREA 패독 코리아" brand wordmark |
| `{typography.logo-tag}` | JetBrains Mono | 10px | 900 | "PADDOCK" red label chip above wordmark |
| `{typography.display-lg}` | Space Grotesk | 44px | 800 | Hero section headline ("내 팀을 향한 진심어린 응원") |
| `{typography.display-md}` | Space Grotesk | 30px | 700 | Garage team banner team name |
| `{typography.heading-lg}` | Space Grotesk | 22px | 700 | Card section headings, modal titles |
| `{typography.heading-md}` | Space Grotesk | 16px | 700 | Sub-section labels, meme titles, column titles |
| `{typography.body-md}` | Inter | 14px | 400 | Chat messages, card body prose |
| `{typography.body-sm}` | Inter | 12px | 400 | Metadata, member counts, secondary info |
| `{typography.body-strong}` | Inter | 13px | 600 | Tab labels, button labels, emphasis inline |
| `{typography.button-md}` | Inter | 12px | 700 | All button labels, filter chips |
| `{typography.label-mono}` | JetBrains Mono | 10px | 700 | "NEXT GRAND PRIX", "ACTIVE GRID DRIVERS", section prefixes |
| `{typography.data-lg}` | JetBrains Mono | 28px | 700 | Countdown digits (days/hours/mins/secs) |
| `{typography.data-md}` | JetBrains Mono | 14px | 700 | Championship points, lap times |
| `{typography.data-sm}` | JetBrains Mono | 11px | 500 | Driver codes, KST timestamps, rank labels |
| `{typography.caption}` | JetBrains Mono | 10px | 500 | Table column headers, footer meta |

### Principles
The font-switch is the system's primary hierarchy signal. When text changes from Inter to JetBrains Mono, the reader knows they've crossed from editorial content into race data. This substitution is more reliable than size or color alone because it works even at the smallest sizes (10px caption vs 10px monospace label). Designers should never use mono for prose and never use Inter for numerical race statistics.

## Layout

### Spacing System
- **Base unit:** 4px grid with primary rhythm at 8px (`{spacing.sm}`).
- **Card internal padding:** 20px (`{spacing.xl}`) for standard cards; 32px (`{spacing.xxl}`) for hero and modal cards; 12px (`{spacing.md}`) for inner panels.
- **Section rhythm:** `{spacing.section}` (32px) vertical gap between major page blocks (`space-y-8` in Tailwind).
- **Grid gutters:** 16–24px gaps between card grid columns.

### Grid & Container
- **Max width:** 7xl (~1280px) centered with 16px horizontal padding.
- **Dashboard home grid:** full-width hero → 2/3+1/3 split card row → 5-column team selector → 4-column shortcut card row.
- **Pit Wall grid:** 2/3 standings + 1/3 schedule side-by-side at `lg`, stacked at mobile.
- **Garages grid:** 1/2 + 1/2 split (fan threads left, banter zone right) at `lg`.
- **Main Straight chat grid:** 2/3 chat window + 1/3 sidebar at `lg`.
- **Meme grid:** 2-column card grid at `md`, 1-column at mobile.
- **Column grid:** 3-column at `lg`, expanding to full width on click/expand state.

### Background Texture
`carbon-grid` applies a 40×40px repeat of 1px white lines at 1.5% opacity over the body background. This is the only background texture in the system — it is never applied inside cards or modals, only on the page body `<div>`.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Body | `{colors.charcoal-900}` flat, carbon-grid texture | Page body wash |
| 1 — Card | `{colors.charcoal-800}` + `{colors.charcoal-650}` border | Standard cards, header, footer |
| 2 — Inner panel | `{colors.charcoal-900}` inset + `{colors.charcoal-700}` border | Stat grids inside cards, countdown tiles, driver rows |
| 3 — Modal | `{colors.charcoal-800}` + `rgba(0,0,0,0.60)` + backdrop-blur 8px scrim | Profile edit modal, meme upload modal, column composer |
| 4 — Achievement overlay | `{colors.charcoal-800}` gradient + `{colors.carbon-gold}` double border + gold glow shadow | Badge unlock celebration fullscreen overlay |

The system uses no drop shadows on cards or nav. Depth is communicated entirely through the layered charcoal stack: body → card → inner panel. The only exception is the achievement modal at level 4, which uses `shadow-2xl` at 25% carbon-gold opacity to lift the modal above the dark scrim.

### Decorative Depth
- **Carbon grid:** page-level texture that recedes behind card surfaces.
- **Team color glows:** garage banners use `blur-3xl` radial blobs in team color at 10% opacity in card corners — the only blur decoration in the system.
- **Racing stripe left border** (`racing-border` CSS class): a 4px diagonal red+white repeating stripe used as a left-side indicator on data cards (countdown, garage threads). This is the system's signature decorative gesture.

## Shapes

### Border Radius Scale

| Token | Value | Tailwind | Use |
|---|---|---|---|
| `{rounded.none}` | 0px | — | Structural full-width sections, table rows |
| `{rounded.sm}` | 6px | `rounded` | Small chips, monospace badge tags, driver rank chips |
| `{rounded.md}` | 8px | `rounded-lg` | Standard buttons, inputs, filter chips, team tabs, inner stat tiles, banter cards |
| `{rounded.lg}` | 12px | `rounded-xl` | Primary content cards, chat window, meme cards, PitWall panels, column cards |
| `{rounded.xl}` | 16px | `rounded-2xl` | Hero section banner, achievement modal |
| `{rounded.full}` | 9999px | `rounded-full` | Profile widget pill, team logo avatar circle, live indicator dots, scrollbar thumb |

The system uses `{rounded.lg}` (12px / `rounded-xl`) as the dominant card radius — every standard content surface uses this value. `{rounded.md}` (8px / `rounded-lg`) is the interactive element radius: buttons, inputs, chips, tabs. `{rounded.xl}` (16px) appears only on the hero banner and achievement modal to signal "this is the most important surface on screen."

## Components

> Active and pressed states are documented where they appear in the implementation. Hover states are implicit transitions (150–300ms `transition-all`).

### Navigation

**`primary-nav`** (sticky header)
- Background `{colors.charcoal-800}` at 90% opacity + `backdrop-blur-md`, border-bottom `{colors.charcoal-700}` at 80%.
- Height ~56px (px-4 py-3).
- Left: Logo block — `{typography.logo-tag}` "PADDOCK" on `{colors.primary}` red chip, then `{typography.logo-wordmark}` "KOREA" + "패독 코리아" in gray-400.
- Center (desktop `lg`): `{component.nav-tab-active}` / `{component.nav-tab-inactive}` pill buttons for all 7 sections. Active = red fill; inactive = transparent with muted text.
- Right: `{component.profile-widget}` + mobile hamburger.

**`profile-widget`**
- Pill-shaped: `{colors.charcoal-900}` bg + `{colors.charcoal-700}` border + `{rounded.full}`.
- Contains: team emoji avatar (28px circle, `charcoal-800` bg), team name in `{typography.caption}` uppercase, username in `{typography.body-strong}`.
- Border switches to `{colors.carbon-gold}` if "gold-carbon" border unlocked; to `{colors.primary}` if "neon-red" unlocked.
- Shine animation on hover: `bg-gradient-to-r` from white/0 to white/5 translates across the widget.

**Mobile drawer nav**
- Full-width panel below header: `{colors.charcoal-800}` bg + bottom border.
- 2-column grid of tab buttons matching desktop nav-tab shape.
- Active = `{colors.primary}` fill; inactive = `{colors.charcoal-900}` bg + gray-400 text.

### Cards & Containers

**`card`** — primary content card
- Background `{colors.charcoal-800}`, border `{colors.charcoal-650}` (1px), rounded `{rounded.lg}`, padding 20px.
- Hover: border brightens to `{colors.charcoal-500}` on meme cards and shortcut cards.

**`card-hero`** — full-width hero banner
- Gradient `from-charcoal-800 to-charcoal-700`, rounded `{rounded.xl}`, border `{colors.charcoal-600}`.
- Contains a `{colors.primary}` red radial glow blob at `blur-3xl` opacity-10 in the right corner.
- Contains a live indicator badge (pulsing red dot) with `{typography.label-mono}` label.

**`card-inner`** — inset stat panel
- Background `{colors.charcoal-900}`, border `{colors.charcoal-700}`, rounded `{rounded.md}`, padding 12px.
- Used inside cards for: countdown digit tiles, team stat grids, driver standing row containers, profile stats.

**`card-team-garage`** — team garage banner
- Background: `linear-gradient(135deg, team-color at 20% → charcoal-750)`.
- Border: team-color at 40% opacity.
- Box-shadow: `0 10px 30px -15px team-color at 25%`.
- Transitions smoothly on team switch (500ms `transition-all duration-500`).
- Top-right: faded large team code text (charcoal-700, text-8xl, 5% opacity) as decorative background.

### Chat Components

**`chat-bubble-own`** — user's sent message
- Background: team base color at 15% opacity; border: team base color at 25% opacity.
- Rounded `{rounded.lg}` with `rounded-tr-none` (right-aligned bubble style).
- Text: `{colors.text-secondary}`.
- Alignment: right-aligned flex row.

**`chat-bubble-other`** — other users' messages
- Background: `#1c1c24`; border: `{colors.charcoal-700}`.
- Rounded `{rounded.lg}` with `rounded-tl-none`.
- Has team logo avatar (32px circle, `charcoal-900` bg + `charcoal-700` border) to the left.
- Team name shown in team base color, `{typography.caption}` uppercase.

**Live status bar** (chat header)
- Pulsing `{component.live-indicator}` red dot + "LIVE" label.
- Timestamp and concurrent user chip in `{colors.charcoal-900}` bg, `{typography.data-sm}`.

### Meme Components

**Meme card** (`card` base)
- Category badge: `{component.badge-mono}` with `{colors.primary}` text, `{colors.charcoal-900}` bg + `{colors.charcoal-700}` border.
- Title: `{typography.heading-md}` white → transitions to `{colors.primary}` on card hover.
- Body: `{typography.body-sm}` in `{colors.charcoal-900}` inset block with `{colors.charcoal-700}` border.
- Vote row: thumbs-up in `{colors.success}` / thumbs-down in `{colors.danger}`, both on `{colors.charcoal-900}` bg + `{colors.charcoal-700}` border pill.

**`filter-chip-active`** / **`filter-chip-inactive`**
- Active: `{colors.primary}` bg, white text, `{rounded.md}`.
- Inactive: `{colors.charcoal-800}` bg, gray-400 text, hover → `{colors.charcoal-700}`.

### Pit Wall Components

**Championship standings table**
- Header: `{typography.caption}` uppercase, `{colors.text-faint}`, border-bottom `{colors.charcoal-700}`.
- Rows: hover `{colors.charcoal-900}` at 40% tint; divider `{colors.charcoal-700}` at 50%.
- Rank chips: P1 = `carbon-gold/20` bg + gold text; P2 = slate-300/20 + slate text; P3 = amber-800/20 + amber text; others = gray-400.
- Points bar: 80px wide, `{colors.charcoal-900}` track, team base color fill proportional to leader.

**Constructor standing card**
- `{colors.charcoal-750}` bg + `{colors.charcoal-700}` border, `{rounded.lg}`.
- Top accent line: 6px tall strip in team base color (full width, `position: absolute`).
- Points bar: 2-step bar, team base color fill.

**Race schedule item**
- Upcoming: `{colors.charcoal-900}` bg + `{colors.charcoal-700}` border; hover brightens border.
- Completed: 60% opacity, `{colors.charcoal-750}` bg.
- Round label: `{typography.caption}` in `{colors.charcoal-800}` chip.
- Reminder bell: activated = `{colors.primary}` at 20% bg + red text; deactivated = `{colors.charcoal-700}` border + gray icon.

### Inputs & Forms

**`text-input`**
- Background `{colors.charcoal-900}`, text `{colors.text-primary}`, placeholder `{colors.text-faint}`.
- Border `{colors.charcoal-700}`, focus → `{colors.primary}` (1px).
- Rounded `{rounded.md}`, padding `8px 12px`, text `{typography.body-sm}`.
- No box shadow on focus — the red border is the only focus signal.

**`select`** — same spec as `text-input` with native `<select>` element.

**`textarea`** — same spec as `text-input`, with `font-mono` variant in the column composer.

### Modals

**`modal-card`**
- Overlay: `rgba(0,0,0,0.60)` + `backdrop-blur-sm`. Centered flex.
- Card: `{colors.charcoal-800}` bg + `{colors.charcoal-600}` border + `{rounded.lg}` + 24px padding.
- Header: bordered bottom `{colors.charcoal-700}`, title `{typography.heading-lg}`, X icon button.
- Entrance animation: `animate-scale-up` (scale from 0.95, opacity 0 → 1).

**`modal-card-achievement`** (badge unlock)
- Overlay: `rgba(0,0,0,0.85)` + `backdrop-blur-md`.
- Card: gradient `from-charcoal-800 to-charcoal-750`, `border-2` `{colors.carbon-gold}`, `{rounded.xl}`.
- `shadow-2xl shadow-carbon-gold/25` glow lift.
- Trophy emoji rotates (`animate-spin`), achievement text pulses (`animate-pulse`).
- Checkered-flag background: `linear-gradient(45deg,...)` at 5% opacity.
- CTA button: `{colors.carbon-gold}` bg, `{colors.charcoal-900}` text (inverted from normal).

### Buttons

**`button-primary`** — the universal red action
- `{colors.primary}` bg → `{colors.primary-pressed}` on hover, `{colors.on-primary}` text, `{typography.button-md}`, `{rounded.md}`, padding `10px 20px`.
- Optional shadow: `shadow-md shadow-f1-red/20` on hero CTAs.

**`button-secondary`** — dark ghost
- `{colors.charcoal-700}` bg → `{colors.charcoal-600}` on hover, `{colors.on-dark}` text, border `{colors.charcoal-500}`.

**`button-ghost`** — text-only link button
- Transparent bg, `{colors.text-muted}` text → `{colors.on-dark}` on hover.

**`button-achievement`** — gold CTA inside badge modal only
- `{colors.carbon-gold}` bg → `#cca300` on hover, `{colors.charcoal-900}` text (inverted). Used exactly once in the system.

### Footer

**`footer`**
- Background `{colors.charcoal-800}`, top border `{colors.charcoal-700}` at 60%, padding 24px.
- Left: logo in `{typography.logo-wordmark}` + tagline in `{typography.body-sm}` `{colors.text-faint}`.
- Right: copyright in `{typography.caption}`.
- `sm:flex-row` at 640px, `flex-col` at mobile.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (F1 Red) for: the active tab fill, primary button, filter chip active state, input focus ring, and the live indicator. It is never decorative.
- Use `{colors.carbon-gold}` only for achievement states (badge unlock modal, P1 rank chip, Pit Wall telemetry gold label). Keep it scarce — one per screen maximum.
- Apply team base colors dynamically from `Team.baseColor`. Never hardcode a team color into the design token system.
- Use JetBrains Mono for every racing number and code. Use Inter for every conversational or editorial text. Never mix these registers.
- Use `{rounded.lg}` (12px / `rounded-xl`) for primary cards and `{rounded.md}` (8px / `rounded-lg`) for interactive elements. Do not introduce intermediate values.
- Include a `{component.racing-border}` left stripe on cards that carry live countdown or ranked data — it is the system's signature accent gesture.
- Stack surfaces in charcoal-900 → charcoal-800 → charcoal-900 order (body → card → inner panel). This three-layer rhythm is the entire elevation model.
- Use `animate-ping` + `animate-pulse` only on the live red dot and the "레이스 대기 중" status — sparingly, for genuine liveness signals.

### Don't
- Don't use F1 Red for decorative illustration, dividers, or text that isn't a primary action or brand wordmark.
- Don't apply drop shadows to standard cards or the navigation bar. The only shadow in the system is on the achievement modal.
- Don't use Space Grotesk for body copy or Inter for race statistics — the three-font rule is strict.
- Don't introduce a new accent color beyond F1 Red and Carbon Gold. Team dynamic colors are applied programmatically, not as new design system tokens.
- Don't use `{rounded.xl}` (16px) on anything except the hero banner and achievement modal. It signals "most important surface."
- Don't apply the `carbon-grid` background inside cards or modals — it belongs only on the page body.
- Don't use `backdrop-blur` outside modal overlays. It is not a nav treatment in this system.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| mobile | 0–639px | Single-column layouts throughout; hero headline scales down to ~28px; countdown grid 4-up (compressed); nav collapses to hamburger |
| sm | 640px | Footer switches to `flex-row`; some 2-column grids activate |
| md | 768px | Meme grid goes 2-column; Pit Wall constructor grid goes 2-column; Garages driver list activates |
| lg | 1024px | Desktop nav appears (horizontal tab pills); all major 2/3+1/3 and 3+1 grid splits activate; mobile drawer hidden |
| xl+ | 1280px | Content locked at max-w-7xl; outer gutters grow |

### Touch Targets
All interactive elements meet 44×44px minimum. Primary and secondary buttons sit at ~40px height — extended to 44px effective tap target via padding. Filter chips are ~36px height with horizontal padding that brings the effective target to 44px. The hamburger and profile widget are both 44px touch targets. Input fields sit at ~36px height with the surrounding form row providing the full tap zone.

### Collapsing Strategy
- **Primary nav:** desktop horizontal pill tabs (`lg`) → hamburger icon at mobile/tablet. The profile widget stays visible at every breakpoint.
- **Hamburger drawer:** 2-column grid of tab buttons sliding in below the header.
- **Hero headline:** `{typography.display-lg}` at 44px desktop → `text-3xl` (~30px) at mobile (`md:text-5xl text-3xl` pattern).
- **Card grids:** the 4-column shortcut grid collapses: 4-up at `lg`, 2-up at `md`, 1-up at mobile. The 3-column column grid collapses: 3-up at `lg`, 1-up at mobile (with click-to-expand staying full-width).
- **PitWall grid:** 2/3 standings + 1/3 schedule side-by-side at `lg`, stacked at mobile.
- **Chat window:** `h-[520px]` fixed height with internal scroll; sidebar moves below at mobile (`grid-cols-1 lg:grid-cols-3`).
- **Circuit selector:** horizontal scrolling tab strip at mobile (`flex-row overflow-x-auto`), vertical sidebar at `lg`.
- **Section spacing:** `space-y-8` (32px) maintained at all breakpoints — no tightening on mobile.
- **Footer:** `flex-col` at mobile, `sm:flex-row sm:items-center sm:justify-between` at 640px+.

## Iteration Guide

1. Pull the token YAML before touching any color, radius, or spacing value. Every property must resolve to a token or a documented team-dynamic color.
2. Use JetBrains Mono for any number that represents race data; use Inter for everything else. This is the system's single most important rule.
3. When adding a new card variant, build it from `{component.card}` + `{component.card-inner}` composition first. Only deviate when the layout genuinely cannot be expressed with the existing stack.
4. Apply team dynamic colors as: `backgroundColor: team-color + 'XX'` (hex opacity suffix) or `style={{ backgroundColor: team.baseColor + '20' }}`. Never hardcode a team color.
5. Reserve `{colors.primary}` for one interactive signal per fold. If a new section needs a CTA and a live indicator in the same viewport, choose one to carry red and use gold or ghost for the other.
6. The `racing-border` class should appear on exactly one card per section — the one carrying the most time-sensitive data (countdown, next race, live standings).
7. Entrance animations (`animate-fade-in` on page views, `animate-scale-up` on modals) are the only page-level motion. Do not add scroll-triggered animations.

## Known Gaps

- **Real backend not implemented** — chat messages simulate with `setInterval` auto-messages; memes, threads, and columns are in-memory state that resets on reload. The design system documents the UI layer only.
- **Team colors not exhaustively tested for contrast** — `baseColor` values from `data.ts` are used directly on dark backgrounds without systematic WCAG contrast checking. Low-luminance team colors (e.g., dark blue) may not meet AA on charcoal-800.
- **F1 101 component not documented here** — the F1101 component uses the same card and inner-panel vocabulary but introduces a card-news/flashcard pattern not covered in the component spec above.
- **BoostMode and PaddockStore** — these components exist in the prototype but are excluded from the MVP scope. Their component patterns (tap-to-boost interaction, store item card) are not documented.
- **Light/dark theme (구현됨)** — 앱은 이제 라이트/다크 테마 토글(`ThemeToggle`, 헤더·My Page)을 지원하며, 색상은 `globals.css`의 CSS 변수 토큰(`var(--color-*)`, `var(--text-*)`, `var(--border)`)으로 구현된다. 위 YAML 토큰은 다크 테마 기준값이며, 라이트 테마 값은 `globals.css`에서 재정의된다. 신규 UI는 하드코딩 hex 대신 CSS 변수 토큰을 사용해야 두 테마에서 모두 동작한다.
- **Mobile screenshots not captured** — responsive behavior is derived from Tailwind breakpoint classes in the source, not from visual QA at each breakpoint.
