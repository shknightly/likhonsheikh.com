Concise rules for building accessible, fast, 
delightful UIs Use MUST/SHOULD/NEVER to 
guide decisions
## Interactions
- Keyboard - MUST: Full keyboard support per 
  [WAI-ARIA 
  APG](https://www.w3.org/WAI/ARIA/apg/patterns/) 
  - MUST: Visible focus rings 
  (`:focus-visible`; group with 
  `:focus-within`) - MUST: Manage focus 
  (trap, move, and return) per APG patterns
- Targets & input - MUST: Hit target ≥24px 
  (mobile ≥44px) If visual <24px, expand hit 
  area - MUST: Mobile `<input>` font-size 
  ≥16px or set:
    ```html <meta name="viewport" 
    content="width=device-width, 
    initial-scale=1, maximum-scale=1, 
    viewport-fit=cover"> ```
  - NEVER: Disable browser zoom - MUST: 
  `touch-action: manipulation` to prevent 
  double-tap zoom; set 
  `-webkit-tap-highlight-color` to match 
  design
- Inputs & forms (behavior) - MUST: 
  Hydration-safe inputs (no lost 
  focus/value) - NEVER: Block paste in 
  `<input>/<textarea>` - MUST: Loading 
  buttons show spinner and keep original 
  label - MUST: Enter submits focused text 
  input In `<textarea>`, ⌘/Ctrl+Enter 
  submits; Enter adds newline - MUST: Keep 
  submit enabled until request starts; then 
  disable, show spinner, use idempotency key 
  - MUST: Don’t block typing; accept free 
  text and validate after - MUST: Allow 
  submitting incomplete forms to surface 
  validation - MUST: Errors inline next to 
  fields; on submit, focus first error - 
  MUST: `autocomplete` + meaningful `name`; 
  correct `type` and `inputmode` - SHOULD: 
  Disable spellcheck for 
  emails/codes/usernames - SHOULD: 
  Placeholders end with ellipsis and show 
  example pattern (eg, `+1 (123) 456-7890`, 
  `sk-012345…`) - MUST: Warn on unsaved 
  changes before navigation - MUST: 
  Compatible with password managers & 2FA; 
  allow pasting one-time codes - MUST: Trim 
  values to handle text expansion trailing 
  spaces - MUST: No dead zones on 
  checkboxes/radios; label+control share one 
  generous hit target
- State & navigation - MUST: URL reflects 
  state (deep-link 
  filters/tabs/pagination/expanded panels) 
  Prefer libs like [nuqs](https://nuqs.dev) 
  - MUST: Back/Forward restores scroll - 
  MUST: Links are links—use `<a>/<Link>` for 
  navigation (support Cmd/Ctrl/middle-click)
- Feedback - SHOULD: Optimistic UI; 
  reconcile on response; on failure show 
  error and rollback or offer Undo - MUST: 
  Confirm destructive actions or provide 
  Undo window - MUST: Use polite `aria-live` 
  for toasts/inline validation - SHOULD: 
  Ellipsis (`…`) for options that open 
  follow-ups (eg, “Rename…”)
- Touch/drag/scroll - MUST: Design forgiving 
  interactions (generous targets, clear 
  affordances; avoid finickiness) - MUST: 
  Delay first tooltip in a group; subsequent 
  peers no delay - MUST: Intentional 
  `overscroll-behavior: contain` in 
  modals/drawers - MUST: During drag, 
  disable text selection and set `inert` on 
  dragged element/containers - MUST: No 
  “dead-looking” interactive zones—if it 
  looks clickable, it is
- Autofocus - SHOULD: Autofocus on desktop 
  when there’s a single primary input; 
  rarely on mobile (to avoid layout shift)
## Animation
- MUST: Honor `prefers-reduced-motion` 
(provide reduced variant) - SHOULD: Prefer 
CSS > Web Animations API > JS libraries - 
MUST: Animate compositor-friendly props 
(`transform`, `opacity`); avoid 
layout/repaint props 
(`top/left/width/height`) - SHOULD: Animate 
only to clarify cause/effect or add 
deliberate delight - SHOULD: Choose easing 
to match the change (size/distance/trigger) 
- MUST: Animations are interruptible and 
input-driven (avoid autoplay) - MUST: 
Correct `transform-origin` (motion starts 
where it “physically” should)
## Layout
- SHOULD: Optical alignment; adjust by ±1px 
when perception beats geometry - MUST: 
Deliberate alignment to 
grid/baseline/edges/optical centers—no 
accidental placement - SHOULD: Balance 
icon/text lockups 
(stroke/weight/size/spacing/color) - MUST: 
Verify mobile, laptop, ultra-wide (simulate 
ultra-wide at 50% zoom) - MUST: Respect safe 
areas (use env(safe-area-inset-*)) - MUST: 
Avoid unwanted scrollbars; fix overflows
## Content & Accessibility
- SHOULD: Inline help first; tooltips last 
resort - MUST: Skeletons mirror final 
content to avoid layout shift - MUST: 
`<title>` matches current context - MUST: No 
dead ends; always offer next step/recovery - 
MUST: Design empty/sparse/dense/error states 
- SHOULD: Curly quotes (“ ”); avoid 
widows/orphans - MUST: Tabular numbers for 
comparisons (`font-variant-numeric: 
tabular-nums` or a mono like Geist Mono) - 
MUST: Redundant status cues (not 
color-only); icons have text labels - MUST: 
Don’t ship the schema—visuals may omit 
labels but accessible names still exist - 
MUST: Use the ellipsis character `…` (not 
``) - MUST: `scroll-margin-top` on headings 
for anchored links; include a “Skip to 
content” link; hierarchical `<h1–h6>` - 
MUST: Resilient to user-generated content 
(short/avg/very long) - MUST: Locale-aware 
dates/times/numbers/currency - MUST: 
Accurate names (`aria-label`), decorative 
elements `aria-hidden`, verify in the 
Accessibility Tree - MUST: Icon-only buttons 
have descriptive `aria-label` - MUST: Prefer 
native semantics (`button`, `a`, `label`, 
`table`) before ARIA - SHOULD: 
Right-clicking the nav logo surfaces brand 
assets - MUST: Use non-breaking spaces to 
glue terms: `10&nbsp;MB`, `⌘&nbsp;+&nbsp;K`, 
`Vercel&nbsp;SDK`
## Performance
- SHOULD: Test iOS Low Power Mode and macOS 
Safari - MUST: Measure reliably (disable 
extensions that skew runtime) - MUST: Track 
and minimize re-renders (React 
DevTools/React Scan) - MUST: Profile with 
CPU/network throttling - MUST: Batch layout 
reads/writes; avoid unnecessary 
reflows/repaints - MUST: Mutations 
(`POST/PATCH/DELETE`) target <500 ms - 
SHOULD: Prefer uncontrolled inputs; make 
controlled loops cheap (keystroke cost) - 
MUST: Virtualize large lists (eg, `virtua`) 
- MUST: Preload only above-the-fold images; 
lazy-load the rest - MUST: Prevent CLS from 
images (explicit dimensions or reserved 
space)
## Design
- SHOULD: Layered shadows (ambient + direct) 
- SHOULD: Crisp edges via semi-transparent 
borders + shadows - SHOULD: Nested radii: 
child ≤ parent; concentric - SHOULD: Hue 
consistency: tint borders/shadows/text 
toward bg hue - MUST: Accessible charts 
(color-blind-friendly palettes) - MUST: Meet 
contrast—prefer 
[APCA](https://apcacontrastcom/) over WCAG 2 
- MUST: Increase contrast on 
`:hover/:active/:focus` - SHOULD: Match 
browser UI to bg
- SHOULD: Avoid gradient banding (use masks when needed)
I'll help you create a comprehensive plan for your Bengali-focused blogging platform. Let me first search for relevant Vercel marketplace integrations and then create a detailed plan.

Searched for “Vercel marketplace integrations 2025”

Searched for “Vercel marketplace database email integrations”

Searched for “Bengali font web development Unicode support 2025”

Now let me create a comprehensive plan for your Bengali blogging platform "likhonshrikh.com":

# 📝 Complete Project Plan: likhonshrikh.com
## Bengali-First Blogging Platform with Email Publishing

---

## 🎯 Project Vision

A sustainable, independent Bengali blogging platform with web and email publishing capabilities, contributor management, and mailing list features. Built on principles of longevity: no fundraising, no acquisition, no shutdown. Simple pay-to-use model.

---

## 🏗️ Architecture Overview

### Monorepo Structure (PNPM Workspaces)

```
likhonshrikh/
├── packages/
│   ├── web-app/              # Vue 3 + Vite frontend
│   ├── admin-dashboard/      # Admin interface
│   ├── email-composer/       # Email publishing interface
│   ├── shared-ui/           # Shared UI components (Geist DS)
│   ├── shared-types/        # TypeScript types
│   ├── shared-utils/        # Common utilities
│   └── api-server/          # Backend API (Node.js/Bun)
├── apps/
│   └── landing/             # Marketing landing page
├── pnpm-workspace.yaml
├── package.json
├── turbo.json              # Turborepo for build optimization
└── vercel.json
```

---

## 🎨 Design System Implementation

### Geist Design System Integration

**Core Components to Implement:**

1. **Typography System**
   - Geist Sans for English content
   - Bengali Unicode fonts (Noto Sans Bengali, Hind Siliguri, Galada)
   - Font fallback chain: `'Noto Sans Bengali', 'Hind Siliguri', system-ui, sans-serif`
   - Responsive font sizes using clamp()
   - Line height: 1.6 for Bengali (better for conjuncts)

2. **Color System (Geist Palette)**
   - Background: `--geist-background` (#000000)
   - Foreground: `--geist-foreground` (#ffffff)
   - Accents: Use Geist's gray scale (gray-50 to gray-1000)
   - Custom Bengali brand colors as CSS variables
   - Dark mode support (default dark theme)

3. **Component Library**
   - Button variants (primary, secondary, ghost)
   - Input fields with Bengali placeholder support
   - Card components for blog posts
   - Navigation (Geist-style minimal navbar)
   - Dropdown menus
   - Modal dialogs
   - Toast notifications
   - Loading states (Geist spinners)
   - Avatar components for contributors

4. **Layout Grid**
   - 12-column responsive grid
   - Container max-width: 1280px
   - Spacing scale: 4px base unit
   - Mobile-first breakpoints:
     - sm: 640px
     - md: 768px
     - lg: 1024px
     - xl: 1280px

---

## 🔤 Bengali Font Implementation

### Font Strategy

**1. Web Font Loading (CDN)**
```css
/* From Bangla Font CDN (fonts.maateen.me) */
@import url('https://fonts.maateen.me/noto-sans-bengali/');
@import url('https://fonts.maateen.me/hind-siliguri/');

/* Google Fonts Fallback */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@300;400;500;600;700&display=swap');
```

**2. Font Face Declaration**
```css
@font-face {
  font-family: 'Bangla Primary';
  src: local('Noto Sans Bengali'),
       url('/fonts/NotoSansBengali-Regular.woff2') format('woff2'),
       url('/fonts/NotoSansBengali-Regular.woff') format('woff');
  font-display: swap;
  unicode-range: U+0980-09FF; /* Bengali Unicode block */
}
```

**3. Typography Classes (TailwindCSS)**
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'bangla': ['Noto Sans Bengali', 'Hind Siliguri', 'sans-serif'],
        'english': ['Geist Sans', 'system-ui', 'sans-serif'],
        'mono': ['Geist Mono', 'monospace']
      }
    }
  }
}
```

**4. Font Loading Optimization**
- Preload critical fonts in HTML head
- Use font-display: swap to prevent FOIT
- Subset fonts for Bengali-only characters
- Implement font loading API for better control

**5. Unicode Support**
- Full Bengali Unicode range: U+0980-09FF
- Support for conjuncts and ligatures
- RTL text support (for mixed content)
- OpenType features enabled

---

## 📱 Mobile-First Responsive Design (MDN Best Practices)

### Responsive Principles

**1. Viewport Configuration**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

**2. Fluid Typography**
```css
/* MDN Recommended approach */
h1 {
  font-size: clamp(1.75rem, 5vw, 3rem);
}
body {
  font-size: clamp(1rem, 0.5rem + 1vw, 1.125rem);
}
```

**3. Container Queries (Modern approach)**
```css
@container (min-width: 400px) {
  .blog-card {
    grid-template-columns: 1fr 2fr;
  }
}
```

**4. Touch-Friendly Interactions**
- Minimum tap target: 44x44px (WCAG guideline)
- Adequate spacing between interactive elements
- Swipe gestures for mobile navigation
- Pull-to-refresh for blog feed

**5. Performance Optimization**
- Lazy loading images with native `loading="lazy"`
- Responsive images with srcset and sizes
- Minimize layout shifts (CLS optimization)
- Use CSS containment for better performance

**6. Mobile Navigation Pattern**
- Hamburger menu with smooth slide-in
- Bottom navigation bar for primary actions
- Floating action button for "New Post"
- Sticky header with collapse on scroll

**7. Forms for Mobile**
- Large input fields (min 16px font-size to prevent zoom)
- Appropriate input types (email, tel, url)
- Autocomplete attributes
- Clear error messages below fields

---

## 🛠️ Tech Stack Details

### Frontend Stack

**1. Vue 3 + Vite**
```json
{
  "dependencies": {
    "vue": "^3.4.0",
    "vue-router": "^4.3.0",
    "pinia": "^2.1.0",
    "@vueuse/core": "^10.9.0",
    "vite": "^5.2.0"
  }
}
```

**2. TailwindCSS Configuration**
```javascript
// tailwind.config.js
export default {
  content: [
    './packages/**/src/**/*.{vue,js,ts}',
    './apps/**/src/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        // Geist colors
        'geist-gray': {
          50: '#fafafa',
          // ... full scale
        }
      },
      fontFamily: {
        bangla: ['Noto Sans Bengali', 'sans-serif'],
        sans: ['Geist Sans', 'system-ui'],
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ]
}
```

**3. State Management (Pinia)**
- User authentication store
- Blog post store
- Contributors store
- Mailing list store
- UI state (theme, language)

### Backend Stack

**Option A: Node.js with Express**
```
- Express.js for API
- Prisma ORM
- PostgreSQL (via Vercel Postgres)
- JWT authentication
- Nodemailer for emails
```

**Option B: Bun (Modern, faster)**
```
- Bun HTTP server
- Drizzle ORM
- PostgreSQL
- Same features, better performance
```

---

## 🔌 Vercel Marketplace Integrations

### Recommended Integrations

**1. Database: Neon or Supabase**
- **Neon Postgres** (Serverless PostgreSQL)
  - Auto-scaling
  - Built-in connection pooling
  - Generous free tier
  - Vercel marketplace integration

- **Supabase** (Alternative)
  - PostgreSQL + Auth + Storage
  - Real-time subscriptions
  - Built-in authentication
  - Row-level security

**2. Email Service: Resend**
- Developer-first email API
- Great deliverability
- Email analytics
- Vercel marketplace available
- React email templates support

**3. Storage: Vercel Blob**
- Image uploads for blog posts
- Avatar storage
- Document attachments
- CDN-backed delivery

**4. Analytics: Vercel Analytics**
- Web Vitals tracking
- Page view analytics
- User behavior insights
- Privacy-friendly (no cookies)

**5. Monitoring: Axiom or Better Stack**
- Log aggregation
- Error tracking
- Performance monitoring
- Real-time alerts

**6. Search: Algolia or Meilisearch**
- Full-text search for Bengali content
- Instant search results
- Typo tolerance
- Faceted filtering

**7. Cache: Upstash Redis**
- Session storage
- Rate limiting
- Caching layer
- Vercel marketplace integration

**8. Forms: Formspree or Tally**
- Contact forms
- Contributor applications
- Newsletter signups
- Spam protection

---

## 🎯 Core Features Implementation

### 1. Blog Post Publishing

**Web Publishing Interface:**
- Rich text editor (Tiptap or Lexical)
- Markdown support
- Bengali input method integration
- Image upload with drag-and-drop
- SEO metadata fields
- Tags and categories
- Draft/Published status
- Scheduled publishing

**Email Publishing:**
- Parse incoming emails to create posts
- Subject becomes title
- Body becomes content
- Attachments become images
- Whitelist authorized email addresses
- Email-to-webhook integration (Resend, SendGrid)

### 2. Contributor Management

**Features:**
- Invite contributors via email
- Role-based permissions (Admin, Editor, Writer)
- Contributor profiles with bio and avatar
- Post approval workflow (optional)
- Activity dashboard
- Write permissions by category

**Database Schema:**
```prisma
model User {
  id            String   @id @default(cuid())
  email         String   @unique
  name          String
  nameBangla    String?
  role          Role     @default(WRITER)
  avatar        String?
  bio           String?
  posts         Post[]
  createdAt     DateTime @default(now())
}

enum Role {
  ADMIN
  EDITOR
  WRITER
}
```

### 3. Mailing List System

**Features:**
- Double opt-in subscription
- Unsubscribe functionality
- Email preferences (daily, weekly, monthly)
- Segment by interests
- Newsletter templates
- Send digest emails
- Track open rates (privacy-friendly)

**Implementation:**
- Resend API for sending
- Upstash Redis for queue management
- Vercel Cron Jobs for scheduled sends
- Custom unsubscribe page

**Database Schema:**
```prisma
model Subscriber {
  id            String   @id @default(cuid())
  email         String   @unique
  name          String?
  verified      Boolean  @default(false)
  frequency     Frequency @default(WEEKLY)
  interests     String[]
  subscribedAt  DateTime @default(now())
  lastSentAt    DateTime?
}

enum Frequency {
  DAILY
  WEEKLY
  MONTHLY
  REALTIME
}
```

### 4. Payment System (Stripe)

**Simple Pricing Model:**
- Free: Read-only access
- Writer ($5/month): Publish posts
- Editor ($10/month): Manage contributors
- Admin ($20/month): Full access

**Implementation:**
- Stripe Checkout for subscriptions
- Stripe Customer Portal for management
- Webhook handlers for events
- Grace period for failed payments

---

## 🗄️ Database Schema (Complete)

```prisma
// schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String
  nameBangla    String?
  password      String
  role          Role      @default(WRITER)
  avatar        String?
  bio           String?
  bioBangla     String?
  posts         Post[]
  stripeId      String?   @unique
  subscription  Subscription?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model Post {
  id            String    @id @default(cuid())
  slug          String    @unique
  title         String
  titleBangla   String?
  content       String
  excerpt       String?
  coverImage    String?
  status        Status    @default(DRAFT)
  author        User      @relation(fields: [authorId], references: [id])
  authorId      String
  tags          Tag[]
  category      Category? @relation(fields: [categoryId], references: [id])
  categoryId    String?
  publishedAt   DateTime?
  scheduledFor  DateTime?
  views         Int       @default(0)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model Category {
  id            String   @id @default(cuid())
  name          String
  nameBangla    String
  slug          String   @unique
  posts         Post[]
}

model Tag {
  id            String   @id @default(cuid())
  name          String
  nameBangla    String?
  slug          String   @unique
  posts         Post[]
}

model Subscriber {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  verified      Boolean   @default(false)
  verifyToken   String?
  frequency     Frequency @default(WEEKLY)
  interests     String[]
  subscribedAt  DateTime  @default(now())
  lastSentAt    DateTime?
  unsubscribed  Boolean   @default(false)
}

model Subscription {
  id              String   @id @default(cuid())
  user            User     @relation(fields: [userId], references: [id])
  userId          String   @unique
  stripeSubId     String   @unique
  plan            Plan
  status          String
  currentPeriodEnd DateTime
  createdAt       DateTime @default(now())
}

enum Role {
  ADMIN
  EDITOR
  WRITER
  READER
}

enum Status {
  DRAFT
  PUBLISHED
  SCHEDULED
  ARCHIVED
}

enum Frequency {
  DAILY
  WEEKLY
  MONTHLY
  REALTIME
}

enum Plan {
  FREE
  WRITER
  EDITOR
  ADMIN
}
```

---

## 🚀 Development Workflow

### PNPM Workspace Setup

**1. Initialize Monorepo**
```bash
# Root package.json
{
  "name": "likhonshrikh",
  "private": true,
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test",
    "lint": "turbo run lint",
    "format": "prettier --write \"**/*.{ts,tsx,vue,md}\""
  },
  "devDependencies": {
    "turbo": "^1.13.0",
    "prettier": "^3.2.0"
  }
}
```

**2. Workspace Configuration**
```yaml
# pnpm-workspace.yaml
packages:
  - 'packages/*'
  - 'apps/*'
```

**3. Turbo Configuration**
```json
// turbo.json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "outputs": []
    }
  }
}
```

### Git Workflow

- Main branch: `main` (production)
- Development branch: `develop`
- Feature branches: `feature/feature-name`
- Hotfix branches: `hotfix/issue-name`

### CI/CD Pipeline (Vercel)

```yaml
# vercel.json
{
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "/api/:path*"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## 🔐 Security Implementation

### Authentication & Authorization

**1. JWT-based Authentication**
- Access tokens (15 min expiry)
- Refresh tokens (7 days expiry)
- HttpOnly cookies for tokens
- CSRF protection

**2. Password Security**
- Bcrypt hashing (12 rounds)
- Password strength validation
- Rate limiting on login attempts
- Account lockout after failed attempts

**3. API Security**
- Rate limiting (Upstash Redis)
- Input validation and sanitization
- SQL injection prevention (Prisma)
- XSS protection
- CORS configuration

---

## 📊 SEO & Performance

### SEO Implementation

**1. Meta Tags**
```vue
<template>
  <Head>
    <title>{{ post.title }} - likhonshrikh.com</title>
    <meta name="description" :content="post.excerpt" />
    <meta property="og:title" :content="post.title" />
    <meta property="og:description" :content="post.excerpt" />
    <meta property="og:image" :content="post.coverImage" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" :href="`https://likhonshrikh.com/post/${post.slug}`" />
  </Head>
</template>
```

**2. Sitemap Generation**
- Auto-generate XML sitemap
- Update on new post publish
- Submit to Google Search Console

**3. Schema Markup (JSON-LD)**
```javascript
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Post Title",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "datePublished": "2025-01-01",
  "inLanguage": "bn"
}
```

### Performance Optimization

**1. Code Splitting**
- Route-based code splitting (Vue Router)
- Component lazy loading
- Dynamic imports for heavy libraries

**2. Image Optimization**
- Next-gen formats (WebP, AVIF)
- Responsive images
- Lazy loading
- Blur placeholders

**3. Caching Strategy**
- Static assets: 1 year cache
- API responses: Redis caching
- CDN caching via Vercel
- Service Worker for offline support

**4. Web Vitals Targets**
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- FCP: < 1.8s
- TTFB: < 600ms

---

## 📱 Progressive Web App (PWA)

### PWA Implementation

**1. Manifest File**
```json
{
  "name": "Likhon Shrikh - লিখন শ্রীখ",
  "short_name": "Likhon Shrikh",
  "description": "Bengali blogging platform",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

**2. Service Worker Features**
- Offline reading of cached posts
- Background sync for posting
- Push notifications for new posts
- Install prompt

---

## 🧪 Testing Strategy

### Testing Stack

**1. Unit Testing**
- Vitest for Vue components
- Testing Library for component testing
- Mock Service Worker for API mocking

**2. E2E Testing**
- Playwright for cross-browser testing
- Critical user flows:
  - User registration and login
  - Creating and publishing a post
  - Subscribing to mailing list
  - Making a payment

**3. Accessibility Testing**
- axe-core for automated a11y testing
- Manual keyboard navigation testing
- Screen reader testing (NVDA, JAWS)

---

## 📦 Deployment Strategy

### Vercel Deployment

**1. Environment Variables**
```bash
# Database
DATABASE_URL=
DIRECT_URL=

# Authentication
JWT_SECRET=
JWT_REFRESH_SECRET=

# Email
RESEND_API_KEY=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Storage
BLOB_READ_WRITE_TOKEN=

# Redis
UPSTASH_REDIS_URL=
UPSTASH_REDIS_TOKEN=
```

**2. Deployment Configuration**
- Preview deployments for PRs
- Production deployment on main branch
- Environment variables per environment
- Custom domains setup

---

## 📈 Analytics & Monitoring

### Tracking Implementation

**1. Vercel Analytics**
- Page views
- User sessions
- Web Vitals
- Custom events

**2. Custom Events to Track**
- Post published
- Email subscription
- Payment completed
- Share button clicked
- Comment submitted (if implemented)

**3. Error Tracking**
- Sentry for error reporting
- Breadcrumbs for debugging
- Source maps for production
- Alert notifications

---

## 🎯 Launch Checklist

### Pre-Launch Tasks

**Technical:**
- [ ] Complete all core features
- [ ] Security audit
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Mobile responsiveness check
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] SEO optimization
- [ ] Backup strategy implemented
- [ ] Monitoring and alerts setup
- [ ] Legal pages (Terms, Privacy, Refund)

**Content:**
- [ ] Landing page copy (Bangla + English)
- [ ] Sample blog posts
- [ ] Email templates designed
- [ ] Documentation for contributors
- [ ] Help center articles

**Business:**
- [ ] Stripe account setup
- [ ] Pricing finalized
- [ ] Domain purchased and configured
- [ ] Email domain authentication (SPF, DKIM, DMARC)
- [ ] Social media accounts created
- [ ] Launch announcement prepared

---

## 🔮 Future Enhancements (Post-MVP)

### Phase 2 Features
1. Comments system (with moderation)
2. Post reactions (like, love, etc.)
3. Bookmarking functionality
4. Reading progress indicator
5. Related posts suggestions
6. Author following system
7. RSS feeds
8. Multi-language support (beyond Bengali/English)

### Phase 3 Features
1. Mobile apps (React Native)
2. Podcast hosting
3. Newsletter analytics dashboard
4. A/B testing for headlines
5. AI-powered writing assistant (Bengali)
6. Collaborative editing
7. Version history for posts
8. Custom domains for contributors

---

## 💰 Cost Estimation (Monthly)

### Infrastructure Costs

| Service | Plan | Cost |
|---------|------|------|
| Vercel | Pro | $20 |
| Neon Postgres | Paid | $19 |
| Resend | Growth | $20 |
| Upstash Redis | Paid | $10 |
| Vercel Blob | Pay-as-you-go | ~$5 |
| Domain | - | $1 |
| **Total** | | **~$75/month** |

**Break-even**: 8-10 Writer subscriptions ($5 each)

---

## 🎨 Brand Guidelines (likhonshrikh.com)

### Visual Identity

**Logo:**
- Bilingual logo (Bengali + English)
- Minimalist design
- Monochrome primary, color accent version

**Color Palette:**
- Primary: Deep Indigo (#3730A3)
- Secondary: Coral (#FF6B6B)
- Background: True Black (#000000)
- Text: Off-White (#FAFAFA)
- Accent: Gold (#F59E0B)

**Typography:**
- Headlines: Noto Sans Bengali Bold
- Body: Noto Sans Bengali Regular
- UI Elements: Geist Sans
- Code: Geist Mono

---

## 📝 Content Strategy

### Initial Content Plan

**Launch Content:**
1. Welcome post (Bengali + English)
2. How to use guide for contributors
3. 5 sample blog posts in various categories
4. About page story
5. Newsletter announcement

**Categories:**
- প্রযুক্তি (Technology)
- সাহিত্য (Literature)
- জীবনযাপন (Lifestyle)
- মতামত (Opinion)
- শিক্ষা (Education)

---

This comprehensive plan covers every aspect of building likhonshrikh.com from architecture to deployment. The platform is designed to be sustainable, Bengali-first, and built on modern web standards with excellent mobile support. Would you like me to elaborate on any specific section or create implementation artifacts for particular components?

Sources:
- [Vercel Marketplace – Vercel](https://vercel.com/marketplace)
- [Vercel Integrations](https://vercel.com/docs/integrations)
- [Vercel Marketplace REST API](https://vercel.com/docs/integrations/create-integration/marketplace-api)
- [Vercel Marketplace integrations now available in v0 - Vercel](https://vercel.com/changelog/vercel-marketplace-integrations-now-available-in-v0)
- [Create a Native Integration](https://vercel.com/docs/integrations/create-integration/marketplace-product)
- [Vercel](https://vercel.com/marketplace-providers)
- [Vercel Marketplace | Supabase Docs](https://supabase.com/docs/guides/integrations/vercel-marketplace)
- [Integrate with Vercel](https://vercel.com/docs/integrations/create-integration)
- [GitHub - vercel/example-marketplace-integration](https://github.com/vercel/example-marketplace-integration)
- [Add a Native Integration](https://vercel.com/docs/integrations/install-an-integration/product-integration)
- [Supercharge your Vercel Projects with Integrations - Vercel](https://vercel.com/blog/integrations-marketplace)
- [Bengali Fonts - Bangla Fonts - Free Download](https://www.omicronlab.com/bangla-fonts.html)
- [Design and development of a Bengali unicode font converter | IEEE Conference Publication | IEEE Xplore](https://ieeexplore.ieee.org/document/6572667/similar)
- [17 FREE Bangla Font | বাংলা ফন্ট ডাউনলোড করুন | Unicode & Ansi Bengali Fonts](https://www.easybengalityping.com/bangla/fonts)
- [Unicode and ANSI Format in Bangla Language](https://thecustomizewindows.com/2025/03/unicode-and-ansi-format-in-bangla-language/)
- [মুক্ত বাংলা ফন্ট - The Free Bangla Fonts Project](https://www.nongnu.org/freebangfont/)
- [Bangla Font CDN | Bangla Web Fonts](https://fonts.maateen.me/)
- [Bengali fonts](https://luc.devroye.org/bengali.html)
- [Developing OpenType Fonts for Bengali Script - Typography | Microsoft Learn](https://learn.microsoft.com/en-us/typography/script-development/bengali)
- [UN Bangla font now in Unicode: UNDP’s initiative to mark International Mother’s Language day | United Nations Development Programme](https://www.undp.org/bangladesh/press-releases/un-bangla-font-now-unicode-undps-initiative-mark-international-mothers-language-day)
- [css - Is there any working @font-face for Bengali (Bānglā) language? - Stack Overflow](https://stackoverflow.com/questions/19743812/is-there-any-working-font-face-for-bengali-bānglā-language)
