# Brand guidelines source

`index.html` is the source for `docs/brand-guidelines.pdf` and `docs/brand-guidelines.md`. Edit it, then rebuild both:

```bash
pnpm guidelines
```

The first time, install Chromium with `pnpm exec playwright install chromium`. Commit the PDF and the markdown with your change. CI rebuilds them and fails if either is out of date.

## Editing

- A `<section>` with `class="pb"` starts on a new page. Add or remove it if an edit leaves a page too full or nearly empty.
- The contents page numbers are typed in, so check them if pages move.
- The markdown skips pictures. Mark a block `data-md="skip"` to leave it out, or `data-md-note="..."` to swap it for a "Shown in the PDF" note.
