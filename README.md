# Solomon Atalokhia — Portfolio

A minimal, canvas-inspired UI/UX portfolio site. Plain HTML/CSS/JS, no build step.

## File structure

```
portfolio/
├── index.html      # all content lives here
├── css/style.css   # design tokens + styles
├── js/script.js    # nav toggle, scroll reveal, scroll-spy
└── assets/         # put your images here (portrait, project thumbs, resume PDF)
```

## Editing checklist

Open `index.html` in VS Code and search for `EDIT:` (Ctrl/Cmd + F) — every
placeholder is flagged with a comment. In order of appearance:

1. **Resume button** (in the nav) — replace `href="#"` with your resume PDF,
   e.g. drop `solomon-atalokhia-resume.pdf` into `assets/` and set
   `href="assets/solomon-atalokhia-resume.pdf"`.
2. **Hero availability badge** — "Available for freelance & contract work"
   vs "Booked until [date]".
3. **Hero avatar** — the small circular "S" placeholder inline in the
   headline. Replace `<span class="avatar-placeholder">S</span>` with
   `<img src="assets/avatar.jpg" alt="Solomon" />` (a small square/circular
   headshot works best, ~100x100px).
4. **Tools strip** (below the hero buttons) — swap the 5 tool names for
   whichever design tools you actually use.
5. **About portrait** — replace the placeholder `<div>` with:
   ```html
   <img src="assets/portrait.jpg" alt="Solomon Atalokhia" />
   ```
6. **About bio** — expand the paragraph with 2–3 more sentences if you want.
7. **Stat cards** (4 included, next to your bio) — replace the placeholder
   numbers (3+ years, 20+ projects, 15+ clients, 98% satisfaction) with your
   real figures.
8. **Project cards (4 included)** — for each card:
   - `href="#"` → the direct Behance URL for that specific project
   - Title, one-line description, role, and tools
   - Swap the `.project-thumb` placeholder div for an `<img>` of your project cover
   - Duplicate a whole `<a class="project-card">...</a>` block to add more projects
6. **"See all projects on Behance"** button — your main Behance profile URL.
7. **Skills lists** — edit the three `<ul class="chip-list">` blocks.
8. **Testimonials (3 included)** — swap in real quotes, names, and roles.
   Duplicate a `.testimonial-card` block for more.
9. **Behance link in Contact section** — same URL as #6.

## Linking a project card to Behance

Each project card is just an `<a>` tag:

```html
<a href="https://www.behance.net/gallery/XXXXXXX/your-project" class="project-card" target="_blank" rel="noopener noreferrer">
  ...
</a>
```

Grab the URL from the address bar when viewing that specific project (case
study) on Behance — not your profile page — so it deep-links correctly.

## Adding real project images

Drop images into `assets/` (e.g. `assets/project-01.jpg`) then replace:

```html
<div class="project-thumb">
  <span class="mono-label">Project 01</span>
</div>
```

with:

```html
<div class="project-thumb">
  <img src="assets/project-01.jpg" alt="Project Title One" style="width:100%;height:100%;object-fit:cover;border-radius:10px;" />
</div>
```

## Running locally

No build step needed. Easiest options:

- **VS Code Live Server extension** — right-click `index.html` → "Open with Live Server"
- Or just double-click `index.html` to open it in a browser (some relative
  paths behave better with Live Server, so that's the recommended route)

## Deploying to Vercel

**Option A — GitHub (recommended, matches your existing workflow):**

1. Create a new GitHub repo (e.g. `solomon-portfolio`) and push this folder:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/solomon-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: choose **"Other"** (it's a static site, no build command needed).
4. Click **Deploy**. Vercel will give you a live URL
   (e.g. `solomon-portfolio.vercel.app`).
5. Every future `git push` to `main` auto-deploys, same as your PredictPro setup.

**Option B — Vercel CLI (fastest for a quick test):**

```
npm install -g vercel
cd portfolio
vercel
```

Follow the prompts — it deploys directly from your machine without needing GitHub.

## Notes

- Fonts (Space Grotesk, Manrope, JetBrains Mono) load from Google Fonts via
  `<link>` tags in `index.html` — no local font files needed.
- The site is fully static — no `.env`, no server, no database. Safe to
  deploy as-is once you've swapped placeholders.
- Reduced-motion is respected — animations turn off automatically for users
  who have that OS setting enabled.
