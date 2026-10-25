# Simron Sarita — Portfolio

A React + Tailwind + React Router portfolio with real URLs for each section:

- `/` — About
- `/projects` — Projects
- `/experience` — Experience
- `/skills` — Skills
- `/education` — Education
- `/contact` — Contact

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/`, which you can deploy anywhere (Vercel, Netlify, GitHub Pages, etc.).

### Deploying to Vercel / Netlify
Just point them at this repo — they auto-detect Vite and run `npm run build` for you.

### Deploying to GitHub Pages
Since this uses `BrowserRouter` (clean URLs, not `#/hash` routes), GitHub Pages needs a small
redirect trick to handle direct links/refreshes on sub-routes (e.g. someone opening
`/projects` directly). If you go this route, let me know and I can add the `404.html`
redirect workaround, or switch you to `HashRouter` for a zero-config setup.

## Project structure

```
src/
  main.jsx              # app entry, wraps everything in BrowserRouter
  App.jsx                # route definitions
  components/
    Layout.jsx            # shared editor chrome + navbar (NavLink)
    ui.jsx                 # small shared bits (Kicker, SectionHeading)
  pages/
    About.jsx, Projects.jsx, Experience.jsx, Skills.jsx, Education.jsx, Contact.jsx
```

## Customizing

- **Project links**: each project card in `src/pages/Projects.jsx` currently links to your
  GitHub profile — swap in the specific repo URL per project when ready.
- **Colors/fonts**: everything is plain Tailwind utility classes (slate/sky/amber/emerald/purple
  palette) — tweak classes directly, no separate CSS file to hunt through.