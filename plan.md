# Implementation Plan - SellMate AI

Build a modern AI-powered customer service and sales negotiation mobile app called "SellMate AI". This is a frontend-only MVP using React, Tailwind CSS, and Lucide icons.

## Scope Summary
- **App Name:** SellMate AI
- **Target Platform:** Mobile-first web app (PWA feel)
- **Visual Style:** Modern SaaS/Fintech, glassmorphism, rounded cards, blue/purple/black/white palette.
- **Data Layer:** Local state / mock data only (No Supabase/Backend).
- **Core Features:** 
    - Splash & Onboarding
    - Auth (UI only)
    - Dashboard (Analytics/Overview)
    - AI Chat with negotiation & product cards
    - Order Management
    - AI Settings (Price limits)
    - Human Support Handover
    - Analytics & Profile

## Assumptions & Open Questions
- **Assumption:** The app will be built as a Single Page Application (SPA) using `react-router-dom` for navigation between screens.
- **Assumption:** "AI" functionality will be simulated via local state and pre-defined response logic to demonstrate the UX.
- **Question:** Are there specific external e-commerce platforms (Jumia, TikTok Shop) that need deep UI integration? 
    - *Decision:* We will include "Integration Cards" in the settings/profile to represent these.

## Affected Areas
- **`src/App.tsx`**: Main router and layout wrapper.
- **`src/components/`**: Reusable UI components (Chat bubbles, Product cards, Stat cards).
- **`src/pages/`**: Individual screens (Dashboard, Chat, Orders, etc.).
- **`src/hooks/`**: Local state management for mock orders and messages.

## Ordered Phases

### Phase 1: Foundation & Navigation
- Install dependencies (`react-router-dom`, `framer-motion`, `lucide-react`, `recharts`).
- Set up the main routing structure in `App.tsx`.
- Create a `Layout` component for the mobile-first container and bottom navigation.
- Implement Global Styles (OKLCH colors based on the requested palette).
- **Owner:** `frontend_engineer`

### Phase 2: Onboarding & Auth UI
- Build the Splash screen with a futuristic logo/animation.
- Build multi-step Onboarding screens with illustrations/icons.
- Build Login/Sign-up screens with a premium SaaS look.
- **Owner:** `frontend_engineer`

### Phase 3: Dashboard & Analytics
- Create the Main Dashboard with "Business Overview" cards.
- Implement Charts using `recharts` for sales and AI performance.
- Build the Analytics & Reports detail screen.
- **Owner:** `frontend_engineer`

### Phase 4: AI Chat & Negotiation UI
- Build the AI Chat interface:
    - Message bubbles for Customer vs AI.
    - Glassmorphism input area.
    - "Negotiation Status" badges (e.g., "AI Negotiating", "Discount Offered").
    - Product card attachments in chat.
- Implement simple mock interaction logic (Simulated AI typing/responses).
- **Owner:** `frontend_engineer`

### Phase 5: Management Screens
- Order Management: List view, status tracking, filters.
- AI Negotiation Settings: Range sliders for prices, toggle switches for automation.
- Human Support Handover: List of agents and priority labels.
- Profile & Store Integrations.
- **Owner:** `frontend_engineer`

### Phase 6: Polish & Animations
- Add smooth transitions between screens using Framer Motion.
- Refine typography and spacing for "premium" feel.
- Ensure dark mode consistency.
- **Owner:** `quick_fix_engineer`

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Setup routing, layout, and build the core functional screens (Phases 1-5).
2. quick_fix_engineer — Polish UI, animations, and typography (Phase 6).

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1, 2, 3, 4, 5
- **Scope:** Build the entire SellMate AI app structure and screens. Use `react-router-dom` for navigation.
- **Files:** `src/App.tsx`, `src/pages/*`, `src/components/*`
- **Depends on:** none
- **Acceptance criteria:** All 10+ requested screens are accessible and look premium/SaaS-like. Mock chat and negotiation logic works within the UI.

### 2. quick_fix_engineer
- **Phases:** 6
- **Scope:** Refine CSS, add Framer Motion transitions between routes, fix any alignment issues, ensure the "glassmorphism" effect is consistent.
- **Files:** `src/index.css`, `src/App.tsx`, `src/components/*`
- **Depends on:** Phase 5 completion.
- **Acceptance criteria:** App feels smooth and "app-like" with polished transitions.

**Do not dispatch:** 
- supabase_engineer (No database requested/available).
