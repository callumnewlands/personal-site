# Brand guidelines source

`index.html` is the source for `docs/brand-guidelines.pdf`. Edit it here, then export it again.

## Export the PDF

**In Chrome or Edge.** Open `index.html` and print it (Ctrl+P). Then set:

- Destination: **Save as PDF**
- Margins: **Default**
- Options: tick **Background graphics**, untick **Headers and footers**

The page size (A4 landscape), the margins, the footer and the page numbers come from the file itself, so leave paper size and layout alone. Save over `docs/brand-guidelines.pdf`.

**Or with a script.** `build-pdf.mjs` does the same with Playwright, writing straight to `docs/brand-guidelines.pdf`. The comment at its top explains how to run it.

## Editing

- The file is split into a cover, contents and five sections, each marked with a `<!-- ===== Section N ===== -->` comment. Text is plain HTML: change words in place.
- **Colours, sizes and spacing** follow the site's design tokens. If a token changes, change it here as well, so the guidelines don't drift from the site.
- **Page breaks.**
    - Each section starts on a new page.
    - Inside a section, a subsection with `class="pb"` on its `<section>` tag starts a new page. Add or remove `pb` if an edit leaves a page too full or nearly empty.
    - Cards, list items and table rows are never split across pages.
- **Contents page numbers** are typed in. Browsers can't fill them in automatically, so check them after an export if pages have moved.
- **Fonts** are in `fonts/`, with their licences (SIL Open Font License), so the PDF looks the same on any machine.
- **The text-only version.** `docs/brand-guidelines.md` has the same text and is kept separately. When you change wording here, make the same change there.

## Where this came from

It was built from the five brand guideline boards on the design canvas, laid out for A4. The boards are where the visuals were designed. This file is now the source for the document, so make changes here first.
