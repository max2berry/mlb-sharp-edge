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

Logo files live in `assets/`: `wbac-mark.png` (globe only, header and footer), `wbac-logo.webp` (full badge), plus `favicon.png` and `apple-touch-icon.png`.

**Caching:** browsers keep files for up to 10 minutes. When you change `css/`, `js/` or replace an image, bump the `?v=` number on its link (in both HTML files for CSS/JS, in `data.js` for headshots) so visitors get the new version right away.

## Previewing locally

Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.

## Deploying (GitHub Pages, free)

1. Merge into the default branch.
2. Repo **Settings → Pages → Build and deployment**: Source "Deploy from a branch", branch `main`, folder `/ (root)`.
3. The site goes live at `https://<user>.github.io/<repo>/`. To use a custom domain (for example `wbac.club`), add it on the same settings page.

## Content checklist (still needed)

- [x] Official logo
- [x] Instagram, X/Twitter, GroupMe and BeInvolved links
- [ ] Club contact email
- [x] Leadership names, roles and headshots
- [ ] Optional per officer: year, major, short bio, LinkedIn
- [ ] Oct 27 meeting: topic and end time (currently "General Meeting", 7–8 PM)
- [ ] November meeting dates, times, rooms and topics
- [ ] Projects (the page shows "coming soon" until some are added)
