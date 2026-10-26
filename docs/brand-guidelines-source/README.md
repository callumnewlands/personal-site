# Brand guidelines source

`index.html` is the source for `docs/brand-guidelines.pdf` and `docs/brand-guidelines.md`. Edit it here, then build both again.

## Build the PDF and markdown

```bash
pnpm guidelines
```

`build.mjs` opens `index.html` in Playwright's Chromium, prints it to the PDF and turns the page into markdown. The first time, install Chromium with `pnpm exec playwright install chromium`. Add `--md-only` to skip the PDF. Commit both files.

CI runs the same build when anything here changes. It fails if the committed markdown doesn't match, or if `index.html` changed without the PDF. The fresh PDF is uploaded as the `brand-guidelines` artifact.

To export the PDF by hand instead, print `index.html` from Chrome or Edge (Ctrl+P) with destination **Save as PDF**, margins **Default**, **Background graphics** ticked and **Headers and footers** unticked. The page size, margins, footer and page numbers come from the file itself.

## Editing

- The file is split into a cover, contents and five sections, each marked with a `<!-- ===== Section N ===== -->` comment. Text is plain HTML: change words in place.
- **Colours, sizes and spacing** follow the site's design tokens. If a token changes, change it here as well, so the guidelines don't drift from the site.
- **Page breaks.**
    - Each section starts on a new page.
    - Inside a section, a subsection with `class="pb"` on its `<section>` tag starts a new page. Add or remove `pb` if an edit leaves a page too full or nearly empty.
    - Cards, list items and table rows are never split across pages.
- **Contents page numbers** are typed in. Browsers can't fill them in automatically, so check them after an export if pages have moved.
- **Fonts** are in `fonts/`, with their licences (SIL Open Font License), so the PDF looks the same on any machine.
- **The markdown version** is generated, so don't edit `docs/brand-guidelines.md` directly. Anything that's only a picture (the logo, swatches, component examples) is left out. Mark a block `data-md="skip"` to leave it out too, or `data-md-note="..."` to replace it with a "Shown in the PDF" note.

## Where this came from

It was built from the five brand guideline boards on the design canvas, laid out for A4. The boards are where the visuals were designed. This file is now the source for the document, so make changes here first.
