# Portfolio Code Review & Fixes — Handoff Notes
Date: 2026-08-24
Project: C:\Users\mosta\portfolio (Next.js 16.3.2, React 19, Tailwind v4, framer-motion, TypeScript)
Backup: full source copy at C:\Users\mosta\portfolio-backup-2026-08-24 (excludes node_modules/.next/.git/out)

## Summary of changes

### 1. Content fixes
- src/components/about/About.tsx: fixed typo "My My journey" -> "My journey".
- src/data/projects.ts: removed `image` fields pointing to nonexistent files (/images/projects/*.png were never in public/).
- src/data/experience.ts: reordered timeline entries newest/ongoing first:
  2025-Present (Software Engineering) -> 2026 (B2 cert) -> 2025 (Android) -> 2024-2026 (German learning).

### 2. Projects section (src/components/projects/Projects.tsx)
- GitHub / Live Demo buttons are now rendered ONLY when the URL is not "#".
- Two of three projects still have github:"#"/demo:"#" in data, so their buttons are hidden until real URLs are added. Adding real URLs to data makes buttons reappear automatically.

### 3. Navbar (src/components/layout/Navbar.tsx)
- Scroll listener now uses { passive: true }.
- New useEffect: while mobile menu is open -> Escape key closes it + body scroll locked (document.body.style.overflow = "hidden"), restored on cleanup.
- Mobile menu "Download CV" link now has target="_blank" rel="noopener noreferrer" (consistent with desktop link).

### 4. Contact (src/components/contact/Contact.tsx)
- Item component: target="_blank"+rel only applied to http(s) links; mailto: links open normally (no blank tab).

### 5. Footer (src/components/layout/Footer.tsx)
- Copyright year dynamic: new Date().getFullYear() instead of hardcoded 2026.

### 6. Certificates data extraction
- Created src/data/certificates.ts (moved inline array out of the component).
- src/components/certificates/Certificates.tsx now imports from "@/data/certificates".

### 7. Dead code deletion (verified unused via grep before deleting)
- Deleted: src/ui/ (GlassCard.tsx, Badge.tsx, SectionTitle.tsx)
- Deleted: src/components/shared/ (Container.tsx, Reveal.tsx, Section.tsx)
- Deleted: src/components/hero/HeroBadge.tsx
- Deleted: src/lib/utils.ts (cn helper) and removed "clsx" dependency from package.json (only consumer was utils.ts). Lockfile synced via npm install.
- Current structure: src/app, src/components (about, certificates, contact, experience, hero, layout, projects, skills), src/data (projects, experience, skills, certificates).

### 8. Fonts (src/app/layout.tsx + src/app/globals.css)
- Removed Share_Tech_Mono from next/font/google (was loaded but never used).
- Kept Fira_Code as --font-fira-code variable on <html>.
- globals.css: added Tailwind v4 @theme block mapping --font-mono to var(--font-fira-code), ui-monospace, SFMono-Regular, Menlo, Consolas, monospace — so font-mono utilities (terminal header, code block) actually render Fira Code.
- Removed leftover suppressHydrationWarning from <html> (no client-side html mutation exists).
- Body still uses system sans stack intentionally.

### 9. Lint fixes
- eslint.config.mjs: added ".claude/**" to globalIgnores (local skill tooling scripts were being linted and failing).
- Fixed all 46 pre-existing react/no-unescaped-entities errors across About.tsx, Contact.tsx, HeroInfo.tsx, Skills.tsx (apostrophes -> &apos;) and HeroCode.tsx (quotes -> &quot;). Rendered output unchanged.

## Verification
- npm run lint -> 0 problems (exit 0).
- npm run build -> success, all routes static prerendered: / , /_not-found , /sitemap.xml (Next.js 16.3.2 Turbopack).

## Known remaining issues / suggested next steps (NOT yet implemented)
1. MISSING og-image.png: layout.tsx metadata references "/og-image.png" (openGraph + twitter card) but the file does not exist in public/. Link previews on LinkedIn/WhatsApp will have no image. Need a 1200x630 image at public/og-image.png. TOP PRIORITY.
2. Project cards show emoji placeholder header; add real screenshots/mockups later.
3. Consider German version of the site (target audience: German recruiters/Ausbildung).
4. Consider contact form (e.g., Web3Forms/Formspree, free, no backend).
5. Consider per-project detail pages (/projects/[id]) with deeper technical writeups.
6. Minor a11y: aria-current on active nav link; full focus trap for mobile menu (Escape+scroll lock already done).
7. HeroCode terminal footer claims "23 Lines" (cosmetic, roughly accurate).

## Second review pass — 2026-08-26

1. Fixed 2 react/no-unescaped-entities errors in HeroInfo.tsx ("Ausbildung" quotes -> &quot;). npm run lint now exits 0 again.
2. globals.css: removed `padding: 1rem` from the max-width:768px `.glass-card` rule. Unlayered CSS was overriding Tailwind's `p-0` utility, breaking the full-bleed HeroCode terminal and Projects preview on mobile (same cascade trap documented at top of the file).
3. Generated public/og-image.png (1200x630) via PowerShell System.Drawing script (temp file make-og.ps1): dark navy bg + grid + cyan/violet glows matching site branding, name/role/alasaad.de text, terminal panel graphic. Resolves the TOP PRIORITY item above; link previews will now show an image. Regenerate anytime by re-running that script.
4. Navbar.tsx: active desktop nav link now gets aria-current="true" (a11y).
5. next.config.ts: set turbopack.root = process.cwd() to silence the "ignored package-lock.json in C:\Users\mosta" warning caused by a stray package-lock.json/node_modules in the home directory. Warning gone from builds.
6. Verified: npm run lint -> 0 problems; npx tsc --noEmit -> clean; npm run build -> success with no warnings, og-image.png present in out/.

Still open (unchanged):
- Project cards use emoji placeholder headers; real screenshots/mockups pending.
- German translation, contact form, per-project pages: optional future work.
- Mobile menu has Escape+scroll lock but no full focus trap.

## Notes for other AI agents
- Repo has AGENTS.md warning that Next.js version may differ from training data (Next 16.3.2) — check node_modules/next/dist/docs before making framework-level changes.
- Styling system: global CSS classes (.glass-card, .glass-button, .glass-badge, .gradient-text, .float-animation, .glow-effect) defined in src/app/globals.css + Tailwind utilities inline. There is NO component-based abstraction anymore (ui/ and shared/ were deleted) — follow the existing pattern of utility classes per component.
- Data lives in src/data/*.ts; components import from there. Keep new content there.
- Do NOT re-add clsx/lib utils unless actually needed.
