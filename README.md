# Korea AI Summer

Marketing site for a fully sponsored four-week summer program bringing U.S.
undergraduates into Korea's AI and semiconductor industry.

**Status: draft.** Nothing on this site is confirmed yet. Dates, partners,
venue and sponsors are all marked with their real status on the page itself.

## Running it

No build step, no dependencies.

```bash
python -m http.server 5173     # or: npx serve . -l 5173
```

Opening `index.html` over `file://` works, but use a server so the language
switcher behaves the way it will in production.

Deploys to Vercel on push. No build configuration.

## Files

```
index.html        The whole page. English copy lives here, in the HTML.
styles.css        Silicon dark ground, cleanroom amber accent, IBM Plex.
i18n.js           Every language other than English, plus the list data.
app.js            Language switching and list rendering.
build-static.js   Regenerates the static English lists in index.html.
```

## After editing i18n.js, run the build

The five data-driven lists (site visits, eligibility, what's covered, the
sponsor table, the FAQ) exist twice: as static English markup in
`index.html`, and as data in `i18n.js`. That is deliberate — see below — but
it means they can drift.

```bash
node build-static.js           # rewrite the static English blocks
node build-static.js --check   # exit 1 if out of sync, for CI
```

Run it whenever you touch the English list data. It only rewrites the marked
containers, so it is safe to run as often as you like.

## Why the English text is in the HTML

Sister project `deother` renders all of its text from JavaScript. Google
handles that; Naver's crawler does not, so those pages are effectively
invisible on Naver. This site keeps the English copy in `index.html` so that
a crawler which never runs JavaScript still reads the full page — 7,700+
characters with JS disabled, measured.

Keep it that way. If you move copy out of the HTML and into `i18n.js`, you
give up that property without anything warning you.

## Adding a language

1. Copy the `ko` block in `i18n.js`, translate it, keep every key.
2. Add the code to `LANGS` at the top of the file.
3. Add a `STATUS_LABELS` entry for the same code.

**Array lengths must match English.** `visits.items`, `apply.eligItems`,
`apply.coveredItems`, `spon.rows` and `faq.items` are rendered by index. A
short array renders a short section in that language only, silently. Check
with:

```bash
node -e "const fs=require('fs'),vm=require('vm'),c={};vm.createContext(c);
vm.runInContext(fs.readFileSync('i18n.js','utf8'),c);const en=c.I18N.en;
for(const l in c.I18N){const t=c.I18N[l];console.log(l,
 t.visits.items.length,t.apply.eligItems.length,t.apply.coveredItems.length,
 t.spon.rows.length,t.faq.items.length);}"
```

For a right-to-left language set `dir:"rtl"` in `LANGS`. The stylesheet uses
logical properties (`margin-inline-start`, `border-inline-start`) throughout,
so it should hold — but check it in a browser before shipping.

## Editing rules

**Do not write anything that is not confirmed.** Every venue, partner and
sponsor on this page carries a status pill: `confirmed`, `talks`, or
`planned`. A judge, a sponsor or a university international office will check.
One overstated line makes every other claim on the page suspect.

Specifically, as of the last update:

- No site visit partner is agreed. None are named — not the semiconductor
  fab, not the automotive group, not the electronics group.
- The Yangpyeong campus is not booked.
- No advisory board member has confirmed. No names appear.
- No individual speaker has confirmed. The mind sports session is described
  by what it is about, not by who might lead it.
- The 999 Seoul Forum has not held its first convening, and the page says so.
- The program carries no academic credit, and the FAQ says so.

Personal introductions are how these get confirmed. They are not themselves
claims the site can make. A name goes on this page when that person has
agreed to appear on it, and not one step earlier.

When something becomes real, change its status in `i18n.js` **in every
language** and update the `foot.note` and the footer date.

## Not done yet

- [ ] Form endpoints. `applyBtn`, `volBtn` and `sponBtn` currently alert.
- [ ] Real photographs. There are no images on the site at all right now.
- [ ] `sitemap.xml`, `robots.txt`, Open Graph image.
- [ ] Sponsor brief PDF for the sponsor CTA.
- [ ] Confirm dates once the venue is booked.
