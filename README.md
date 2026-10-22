# World Basketball Analytics Club website

A fast, static site for WBAC. Plain HTML, CSS and JS: no build step and no dependencies.

- `index.html`: the home page and hub. It has the social/join links, upcoming meetings, the leadership team and recent projects.
- `projects.html`: every project, with category filters.

## Updating content

**All content lives in [`js/data.js`](js/data.js).** You never need to touch the HTML to:

| Task | What to edit in `data.js` |
| --- | --- |
| Add a meeting | Add an entry to `meetings` (`date: "YYYY-MM-DD"`, 24-hour `start`/`end`). The site splits upcoming and past meetings on its own and features the next one with an "Add to calendar" button. |
| Update a social link | Edit `links`. A URL that still contains `TODO` shows as "Link coming soon". |
| Change the leadership team | Edit `leadership`. Put headshots in `assets/leaders/` and set `photo`. Without a photo, the card shows initials. |
| Add a project | Add an entry to the top of `projects`. Images go in `assets/projects/`. The home page shows the first three. |

Swap in the official logo by replacing `assets/logo.svg`. If your logo is a PNG, also update the `<img src>` and favicon `<link>` in both HTML files.

## Previewing locally

Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.

## Deploying (GitHub Pages, free)

1. Merge into the default branch.
2. Repo **Settings → Pages → Build and deployment**: Source "Deploy from a branch", branch `main`, folder `/ (root)`.
3. The site goes live at `https://<user>.github.io/<repo>/`. To use a custom domain (for example `wbac.club`), add it on the same settings page.

## Content checklist (still needed)

- [ ] Official logo (SVG or high-res transparent PNG)
- [ ] Instagram handle and URL
- [ ] X/Twitter handle and URL
- [ ] Confirm the full GroupMe invite link
- [ ] Club contact email
- [ ] Leadership: name, role, year, major, 1–2 sentence bio, headshot, optional LinkedIn/email
- [ ] Upcoming meeting dates, times, rooms and topics
- [ ] Project details: accurate summaries, cover images (Instagram graphics work), links to slides, sheets or posts
- [ ] Confirm the time zone in `data.js` (`America/Indiana/Indianapolis`)
