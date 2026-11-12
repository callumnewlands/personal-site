# cnewlands.dev brand guidelines

<!-- Generated from brand-guidelines-source/index.html by pnpm guidelines. Edit the HTML, not this file. -->

The design rules for [cnewlands.dev](https://cnewlands.dev): what the site is for, colour, type, the logo, layout, components, page templates, words, the avoid-list, and how components behave. [brand-guidelines.pdf](brand-guidelines.pdf) has the same content with the swatches, logo, icons and component examples; this file is the text version, which is easier to read on GitHub and to search.

How the final screens were put together, so that new pages and project write-ups look like they belong to the same site.

## 1. Brand, colour, type and logo

### What the site is for

#### Job

To turn warm leads from LinkedIn, Upwork and search into a message. It's the CV and the portfolio in one place.

#### Who reads it

Founders who need something full-stack built, and teams who want a review, an audit or a part-time tech lead (AI-first teams included). Most will skim it quickly before they decide whether to get in touch.

#### In one line

“Full-stack developer and part-time tech lead.” The rest of the site backs that up. [TBC: three personality words]

### Principles

#### 1. Lead with real work

Screenshots, diagrams and numbers with a source do the convincing, and the words are there to explain them. Pages that are mostly text start to feel generic.

#### 2. Light and calm, one strong colour

Most of the page is off-white and pale green. Viridian is the one strong colour, and the dark greens are saved for product fragments and the footer.

#### 3. A human touch in set places

A few things are tilted or stick out of their panels: the fan, the fragments, the results tiles and the photos. Grids, forms and text stay straight.

#### 4. Specific or cut

If a block could sit on any other freelancer’s site, make it specific or take it out. Anything we don’t know yet shows as a visible [TBC] rather than a guess.

#### 5. Accessible by default

WCAG 2.2 AA is the minimum. That means 4.5:1 for text and 3:1 for large text and controls, 44px touch targets, a visible focus state, and nothing that depends on colour or motion alone.

### Colour

Everything is green. In code, name the tokens after what they do (`--color-primary` rather than `--viridian`). Every colour token uses the `--color-` prefix, the spelling CSS itself uses.

| Token                     | Role                                                                                                        | Contrast and limits                                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Viridian** #067a7e      | Primary: the main button, links, step numbers, logo mark                                                    | White on it 5.1:1. As text 5.0:1 on the page but only 4.35:1 on the band, so don’t use it for body text on the band |
| **Viridian dark** #04585b | Hover and pressed state for viridian                                                                        | 8.0:1 on the page                                                                                                   |
| **Mint dark** #92c6ba     | Hover and pressed state for the mint button on dark                                                         | #15231f on it 8.5:1                                                                                                 |
| **Mid mint** #a2dccf      | Accent: one results tile, the review panel, the button on dark, the logo on dark. Use sparingly             | Text on it #15231f (10:1+)                                                                                          |
| **Pine** #2f5a4a          | Dark blocks: the About header band, a results tile, step numbers                                            | White on it 7.8:1                                                                                                   |
| **Deep green** #22332f    | Footer                                                                                                      | Mint on it 8.6:1; #9fb8b2 for small text 6.3:1                                                                      |
| **Card dark** #16221f     | Product fragments only (diagrams, pipeline, PR review, findings). Rows #1d2c29, code #0f1816                | For “screens” only, not section backgrounds                                                                         |
| **Band** #e6eeeb          | Tinted sections: the headline result, the classroom band, the form section, the Contact page, Off the clock | Ink 12.5:1, subtle text 5.5:1                                                                                       |
| **Page** #fafcfc          | Default background                                                                                          | Slightly off white, so white cards still stand out                                                                  |
| **Surface** #ffffff       | Cards, work cards, form card, option tiles                                                                  | Don’t use it for full-width bands, it disappears against the page                                                   |
| **Ink** #1b2b28           | Text on light surfaces                                                                                      | Use #15231f on mint                                                                                                 |
| **Muted** #3a4b47         | Secondary text, leads, sublines                                                                             | 9.0:1 on the page                                                                                                   |
| **Subtle** #52625e        | Labels, captions, metadata (15px minimum)                                                                   | 6.2:1 on the page                                                                                                   |
| **Line** #dfe7e5          | Hairlines: card borders, list and timeline rules                                                            |                                                                                                                     |
| **Line strong** #c9d7d3   | Form tile borders, the rule before More work, any divider that needs to be seen                             |                                                                                                                     |
| **Control line** #9fb8b2  | The outlined button’s border                                                                                | 2.1:1, so only where a label already identifies the control                                                         |
| **Input line** #7b958f    | Borders of inputs and text areas                                                                            | 3.2:1 on white, so the edge of a field meets the 3:1 rule for controls                                              |
| **Selected** #f0f7f5      | The fill of a selected option tile                                                                          | Ink 13.6:1, viridian 4.7:1                                                                                          |
| **Error** #b3261e         | Form errors only, always with an icon and a message                                                         | 5.9:1 on white                                                                                                      |

#### Rules

- One strong block of colour per screen
- Mint is used sparingly
- No gradients, glows or coloured shadows

#### Fragment colours

Only inside product fragments. Text #e6efec, small text #9fb8b2, rows #1d2c29, code #c9d8d4 on #0f1816, box borders #3f5652 (2px), ticket borders #33473f, dashed connectors #5d7671. Status: pass #3fae74, waiting #d9a93a. Badges: High #f3c9cf on #3a1d22, Medium #f2d98d on #3d3418, added #bfe9cf on #183326, all 8:1 or more.

#### Warm colours come from the photos

The palette has no warm colours on purpose. Screenshots, renders and photos provide them, so leave them untinted and without overlays.

### Type

| Role                       | Font                         | Size (rem)                                                      | px at default size, and use                                                                 |
| -------------------------- | ---------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **Display (h1)**           | Bricolage 800                | `clamp(2.5rem, 1.6rem + 4vw, 5.5rem)`, lh 1, -0.02em            | 40 to 88px. One per page, sentence case                                                     |
| **Section title**          | Bricolage 800                | 2.75rem; 2.5rem on phones                                       | 44px / 40px. “More work”, “Questions”, “So far”                                             |
| **Chapter and card title** | Bricolage 800                | `clamp(1.875rem, 1.4rem + 1.5vw, 2.5rem)`; 2.125rem on phones   | 30 to 40px / 34px. Project chapters, smaller service cards                                  |
| **Panel title**            | Bricolage 800                | `clamp(2.25rem, 1.6rem + 2vw, 3.25rem)`; 2.5rem on phones       | 36 to 52px / 40px. The two big service panels                                               |
| **Callout**                | Bricolage 600                | `clamp(1.625rem, 1.2rem + 1.4vw, 2.25rem)`; 1.375rem on phones  | 26 to 36px / 22px. Only for the headline result                                             |
| **Quote**                  | Bricolage 800                | `clamp(1.625rem, 1.2rem + 1.4vw, 2.375rem)`, lh 1.2, max 30ch   | 26 to 38px. The quote under the results, centred                                            |
| **Stat number**            | Bricolage 800                | `clamp(2.5rem, 1.9rem + 2vw, 3.5rem)`, lh 0.95                  | 40 to 56px. Only for numbers with a source                                                  |
| **Card title**             | Bricolage 800                | 1.3125rem; 1.5rem on the wide card                              | 21px / 24px. Work card titles                                                               |
| **Timeline title**         | Bricolage 800                | 1.75rem; dates 1.25rem in viridian                              | 28px / 20px. The About timeline                                                             |
| **Marker number**          | Commissioner 600             | 0.9375rem in a 30px circle; 0.875rem in a 26px circle on phones | 15px / 14px. Screenshot markers and their legend, and the form’s step numbers (28px circle) |
| **Lead**                   | Commissioner 400             | 1.375 to 1.625rem, lh 1.45                                      | 22 to 26px. Around two lines on a phone                                                     |
| **Body**                   | Commissioner 400 / 500 / 600 | 1.125rem, lh 1.6, max-width 68ch                                | 18px. Bold is 600 (700 is too heavy)                                                        |
| **Small**                  | Commissioner 400             | 1.0625rem, lh 1.55; 1rem, lh 1.6                                | 17px / 16px. Card subtitles, list items, secondary text                                     |
| **Label and caption**      | Commissioner 400             | 0.9375rem, lh 1.5                                               | 15px. Nothing people need to read goes smaller than this                                    |
| **Inputs**                 | Commissioner 400             | 1.0625rem                                                       | 17px. Keep it at 1rem or above, otherwise phones zoom in when the field is focused          |
| **Code**                   | Red Hat Mono 500             | 0.875 to 1.0625rem                                              | 14 to 17px. Real code only. Ligatures off                                                   |
| **Logo name**              | Quicksand 700                | Outlined in the SVG, no font size                               | The name is part of the drawn logo                                                          |

Use sentence case throughout. No all-caps or letter-spaced labels, no monospace labels and no headlines in two colours. Buttons, facts and marker numbers are set in 600. A heading’s size comes from its role in this table, not its level: choose the level for the page outline, so Awards is an h2 set at chapter size. Very long single-word titles (like “swimbooker”) use the smaller title size. All the fonts are SIL OFL, so self-host them and only load the weights that are used.

### Logo

- The mark is a single line where the moon (C) runs into the ridge (N)
- Viridian on light backgrounds and mint on dark, with the name in ink or white
- It’s one inline SVG with the text outlined. The mark is 48px in the nav and 38px on phones, and shouldn’t go below 32px
- Leave clear space of half the mark’s height around it
- Please don’t recolour, stretch or outline it, add effects, or set the name in a different font
- The favicon and app icon are below

### Favicon and app icon

_Shown in the PDF: light and dark browser tabs; the mark at 16, 32 and 48px; the 16 and 32px marks enlarged; the 180px app icon and an alternative._

- Just the mark, without the name
- The favicons are cropped close to the mark so it fills the square. The app icon keeps the logo’s normal margin
- Each small size was redrawn on its own pixel grid with a whole-pixel stroke (2px at 16, 3px at 32 and 4px at 48). At 16px the dip is deeper and the C is shorter so the two shapes don’t merge
- Viridian on a transparent background, switching to mint in dark browser themes (an SVG favicon with a `prefers-color-scheme` rule)
- The app icon is mint on deep green as a full-bleed square, and the OS rounds the corners
- Exported as an ico, PNGs, an SVG and app icons at 180, 192, 384 and 512px

## 2. Layout and components

The values below are the ones used on the final screens.

### Layout, spacing and rhythm

#### Container

- Content is a maximum of 72.5rem (1160px), centred
- Gutters are `clamp(1rem, 4vw, 2.5rem)`
- Reading text is capped at 68ch
- Narrow pages (Contact, forms) go up to 55rem (880px)
- Two breakpoints: phones below 48em (768px), and in-between widths from 48em to 64em (768 to 1024px)

#### Spacing scale

0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3.5, 4.5, 6, 7rem (4 to 112px). Use these steps rather than values in between. Where each one goes is in “Spacing inside sections” below.

#### Band rhythm

- Use a band when the subject changes, rather than on every section
- At most two tinted bands per page, plus the footer
- A rule before More work at the end of the page
- No white or near-white bands on the page background

### Spacing inside sections

Gaps are the margin between one element’s box and the next, with headings at their normal line height. Don’t pad things out to make up a gap.

| Between                                                                                                                  | Desktop                           | Phones                              |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------------- | ----------------------------------- |
| **Sections**                                                                                                             | 6 to 7rem                         | 6rem                                |
| **Chapters, and separate blocks in one section** (results tiles, then the quote)                                         | 6rem                              | 4.5rem                              |
| **After a chapter whose figure overlaps its edge**                                                                       | 6rem plus the overlap             | 4.5rem (nothing overlaps on phones) |
| **Page or section title** to text / to a block                                                                           | 0.75rem / 2rem                    | 0.75rem / 2rem                      |
| **Chapter, panel or card title** to text / to a block                                                                    | 0.75rem / 1.5rem                  | 0.75rem / 1.5rem                    |
| **Text to a block** (a lead, then a grid). With a heading, paragraph and block, the block’s gap goes under the paragraph | 2rem                              | 2rem                                |
| **Paragraph to paragraph**                                                                                               | 1rem                              | 1rem                                |
| **Rule lists**                                                                                                           | 0.75rem above and below each rule | 0.75rem                             |
| **A block and its caption or source line**                                                                               | 0.75rem                           | 0.75rem                             |
| **A grid and the link after it** (More work, then “All work”)                                                            | 1.5rem                            | 1.5rem                              |

| Grid                                                               | Desktop gap                 | Phones gap                                         |
| ------------------------------------------------------------------ | --------------------------- | -------------------------------------------------- |
| **Work cards**                                                     | 2.5rem rows, 1.5rem columns | 2rem                                               |
| **Big panels** (service panels, Hiring me)                         | 3.5rem                      | 4.5rem when a fragment sits on top, otherwise 2rem |
| **Columns of text** (chapters, Off the clock, small service cards) | 3.5rem                      | stacked, 2rem                                      |
| **Cards and tiles** (results tiles, archery and location cards)    | 1.5rem                      | 1.5rem                                             |
| **Small items** (awards, the legend, option tiles, form fields)    | 0.75rem                     | 0.75rem                                            |
| **Tags**                                                           | 0.5rem                      | 0.5rem                                             |

| Padding        | Value                                                                      | Where                                                                   |
| -------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| **Panels**     | `clamp(1.5rem, 0.9rem + 2.5vw, 3rem)`                                      | 24px on phones to 48px. Service panels, Hiring me panels, the form card |
| **Cards**      | 1.5rem                                                                     | The archery and location cards, small cards inside a panel              |
| **List cards** | 1rem 1.25rem                                                               | Awards                                                                  |
| **Tiles**      | 1rem 1.5rem                                                                | Results tiles                                                           |
| **Fragments**  | 1.5rem; 1rem on phones                                                     | Product fragments                                                       |
| **Work cards** | 0.5rem, with the caption 0.75rem below the image and 1.25rem at the bottom | Work cards                                                              |

### In-between widths

#### From 48em to 64em (768 to 1024px)

- Work cards and results tiles go two-up. The wide card stays full width
- Chapters and service panels stay side by side down to 48em
- The Hiring me mosaic becomes a plain two-column grid, with no tilts or overlaps
- Fragments stop poking out and sit inside the top of their card, as on phones

#### Wider than the container

- Content stops at 72.5rem and centres. Bands, the footer and the treeline run full width
- The treeline grows with the screen above 1440px so the treetops aren’t cropped (see Treeline)

### Units

#### rem

For font sizes and the spacing around text: padding in buttons, fields and cards, gaps and section spacing. It scales with the reader’s browser text size. 1rem is 16px, and the root font size isn’t changed.

#### px

For things that should stay the same size when text gets bigger: borders and hairlines, the focus ring, shadows, corner radius and icon sizes.

#### Everything else

Line heights have no unit. Reading widths are in `ch`. Fluid sizes use `clamp()` with rem at both ends (`vw` on its own breaks zoom). Breakpoints are in em (48em and 64em), and the tokens are CSS custom properties named after what they do.

### Shape and depth

#### Radius by role

**6px**
Tags, nav button, small chips

**8 to 10px**
Screenshots and images (10px), diagram boxes (8px)

**12px**
Buttons, stat tiles, product fragments

**14px**
Big panels and cards

**16px**
Work cards (clickable project cards)

**50%**
Avatars only

#### Shadow by role

**None**
Flat cards and panels on the band

**Card**
Work cards only: 1px #e3ebe8 border plus this light shadow

**Lift**
Tilted stat tiles, the raised button

**Photo**
The fan in the masthead, polaroids

**Float**
Product fragments poking out of a panel

All shadows are neutral grey, without any colour in them.

### Components

#### Buttons and links

- **Raised primary:** one per screen. Viridian (mint on dark), 56px tall with a 12px radius and an arrow, and it lifts 2px on hover
- **Secondary:** outlined and 48px tall, 17px text at 600, 0 18px padding, a 2px control line border and a white fill. The border and text turn viridian on hover. The outward arrow when the link leaves the site
- **Text links:** underlined, with no separate visited style. Links to other sites open in the same tab, and in body text they get the small outward arrow. Icon links show the brand icon next to the name
- Button labels say what will happen, like “Send me a message” or “Send it”

#### The form

- The same form is used on Services and Contact, in three numbered steps: what you need, where things are at, and where to reply
- The options for what you need are tiles, so they don’t get mistaken for buttons
- Labels sit above 52px fields with a 10px radius and an input line border. Hints go between the label and the field in caption style. No placeholder text
- Every field is required, so nothing is marked. If an optional field is ever added, it says “(optional)” after its label
- Errors show when you leave a field, and there are states for sent and for sending failed
- A white card on the band with panel padding and a 14px radius, going full width with square corners on phones

#### Work cards

- White, with a 1px #e3ebe8 border, the card shadow, a 16px radius, 8px padding and the screenshot at 10px
- The title with an arrow, a line on what the project is, then the role and the years
- Images are 16:10. The one exception is the wide card at the top of Home, which runs the full row at 16:7 with a 24px title and up to three tags. Every other card has a 21px title and up to two tags, and on phones the wide card becomes 16:10 like the rest
- This style is only for clickable project cards
- They stack on phones (no sideways scrolling)

#### Product fragments

- Small, real views of the work on card dark: architecture, pipeline, PR review, board, findings and templates
- They stick out of the panel or card they belong to. On phones they always sit at the top of the card, at nearly full width
- Two can be stacked, with a screenshot overlapping a fragment
- Each one needs a text alternative (`role="img"` and a label)

#### Panels

- Four fills: white, viridian, mint and pine. Ink text on white and mint (#15231f on mint), white text on viridian and pine
- A 14px radius, panel padding, and no border or shadow. White panels only sit on the band, never on the page background
- On phones they keep their radius, fill the container width and stack. A fragment moves to the top of its panel at nearly full width

#### Headers

- **Project:** the title, a one-line lead, three facts in a row separated by thin lines (a label and value list on phones) and a secondary button. Next to the text, a fan of three screenshots with the middle one dropped down
- **About:** the pine band with the portrait, one button and the icon links
- **Services and Contact:** just a heading and a line of text

#### Story pieces

- **Headline result:** a sentence or two in larger type on the band, around four lines, with no label or rule
- **Chapters:** text and a figure, switching sides each time
- **Numbered screenshot:** full width with a legend, and close-up cards on phones
- **Results:** three tiles (white, mint and pine), then a source line, then a centred quote or links
- **Source line:** under the tiles, 0.75rem below them and lined up with the first tile, in caption style. It says what the numbers are and where they come from, like “On swimbooker, the platform I lead. Source: swimbooker.com, Oct 2026”
- **Timeline:** a line with dots, with the dates on the right on phones

#### Treeline

Groups of tiered firs with trunks, plus a few lone trees, on rolling ground. It’s two fixed drawings, not generated when the page loads: one above the footer on every page, and one along the top of the Hiring me band on Home. Nowhere else, and never more than one band edge per page.

The trees take the colour of the section below and sit on the colour of the section above, so there’s no seam. It’s 120px tall and full width, cropping evenly from both sides on narrow screens, and above 1440px it grows to `max(120px, 100vw / 12)` so the treetops aren’t cut off. It’s decorative, so it’s hidden from screen readers. If the drawing changes, draw every shape in the same direction, otherwise the overlaps punch holes in each other.

#### Icons

Only where they do a job: arrow, outward arrow, calendar, email, plus the LinkedIn, GitHub and Instagram icons (from Simple Icons). Always next to a text label. No icon tiles, decorative icons or ticks on lists. Lists have thin rules between the items.

Line icons are drawn on a 24px grid with round ends and a 2.4px stroke, in the text colour. 20px in buttons and icon links, 16px for the outward arrow.

#### Imagery

Real screenshots in white frames, and renders and photos in full colour without cropping. Personal photos go in white print frames with a slight tilt, and only on About. Placeholders say exactly what’s missing, like [TBC: hiking photo].

Work cards and the fan are 16:10 and personal photos 4:5. Chapter figures and the numbered screenshot keep their own shape. Tilts are 0.5° to 3°, alternating, apart from the fan’s outer screenshots. Serve AVIF or WebP at the size shown, and lazy-load anything below the first screen.

#### Motion

Things only move when someone does something: the button lift, link colour changes and accordions opening. Nothing fades in on scroll.

Everything takes 150ms with `ease`. With reduced motion on, the change still happens but instantly: no lift, no arrow nudge, no accordion animation and no smooth scrolling. The nav isn’t sticky, it scrolls away with the page.

## 3. Pages, phones, words and checks

### Page templates

Every page has the same nav and footer. Each one has a single job and one main call to action, with the message button in the footer as a fallback on every page.

#### Home

The hero line and button, the fan, the work cards, the two ways to hire me, a short about section and the footer. The work section doubles as the portfolio, and “All work” links to /#work. A separate project index can wait until there are eight or so projects.

#### Project (template)

The header, the headline result, three or four chapters, an optional green band showing the product in use, the results with a quote or links, a rule, and two More work cards. The optional parts can be left out without leaving a gap.

#### Services

A heading and a line of text, four service panels (each with a fragment, a price and how the work is set up), the questions, and then the form.

#### About

The pine band with the portrait, two personal paragraphs and a photo, the timeline, awards with their logos, and Off the clock.

#### Contact

A heading and the usual reply time, the form, then a line with the other ways to reach me (email, LinkedIn, GitHub).

#### 404 and privacy

404: a plain heading, a line of text, three links and the message button. Privacy: one column of text in short sections.

#### New project pages

Fill in the template and leave out the band or the quote if there isn’t one. Keep the lead to around two lines and the headline result to around four, and use wide screenshots for the fan.

### Phones

#### Layout

- Designed at 390px, with everything in one column below 48em (768px)
- No sideways scrolling anywhere (the root hides overflow)
- The fan stays inside the screen, but screenshots and fragments can go edge to edge
- The form is full width with one option per row
- Facts become a label and value list, and the timeline dates move to the right
- Project header order: title, lead, fan, then the facts and button

#### Type and touch

- Section titles 2.5rem, chapter and card titles 2.125rem, body 1.125rem (40, 34 and 18px)
- The logo mark is 38px and the name stays in the nav
- Touch targets are at least 44px, and footer links are 44px tall
- For small text in screenshots, show a close-up instead of making people zoom

### Words

#### Voice

- First person, plain and specific, as if you were explaining it to a client over a coffee
- UK English spelling
- Sentence case, no em dashes, and short sentences
- Numbers have a source and a date. Anything unknown is a visible [TBC]
- One opinion per page, in my own words

#### Do and don’t

Do

“I look after the architecture, deployments and how we plan work.”

Don’t

“I deliver seamless, scalable solutions that elevate your vision.”

Do

“Send me a message”

Don’t

“Let’s connect!” or “Submit”

#### Formats

- Dates as 2 November 2026, and as Nov 2026 in source lines
- Money as £1,485, and “from £[x] a month” for prices
- Big numbers as 120K+ or £7.9M+, only with a source line

#### Link previews

- One 1200 by 630 template: the logo top left, the page title in Bricolage 800, one line in Commissioner, the treeline along the bottom and the page’s own images on the right
- Home is the default card. Project pages use their header screenshots, and About uses the portrait

### Checks before shipping a page

#### Accessibility

- A single h1, and nav, main and footer landmarks
- Alt text says what the screenshot actually shows
- Decorative SVGs are hidden and fragments are labelled
- The keyboard order follows the visual order
- Error messages say how to fix the problem
- Buttons, cards, panels and tiles have a 1px transparent border, so their edges still show in Windows high-contrast mode
- Long words and web addresses wrap instead of overflowing (`overflow-wrap: break-word`)
- Selected text is ink on mint

#### Consistency

- Colours and sizes come from the tokens above
- One raised button per screen
- No more than two bands
- Fragments sit at the top of cards on phones
- The footer is the latest version (icons, 44px links)

#### The swap test

- Could this sentence appear on another developer’s site? Then rewrite it
- Does every number have a source?
- Is every [TBC] on the to-do list?

#### Still open

Whether project pages get a “Looking back” section, and the real screenshots, quotes, numbers, prices and reply time. No dark mode for now.

## 4. The avoid-list

Things that make a site look or read as if it was AI-generated. None of them is a giveaway on its own, but people notice when several turn up together. Check new pages and new copy against this list.

### Design

#### Colour

- No purple or indigo, and no gradients on text, buttons or backgrounds
- No glows, aurora backgrounds or coloured shadows
- Also avoid the usual fallbacks: cream with terracotta, near-black with a single acid accent, or neon palettes with lots of accents
- A single accent colour, used sparingly

#### Type

- Avoid Inter, Roboto, Geist, Space Grotesk, Plus Jakarta and Instrument Serif for display text unless there’s a good reason
- No two-tone headlines, single words picked out in another colour, or serif italic accents
- Sentence case, including the H1
- No all-caps, letter-spaced eyebrows (in mono or in a pill), and don’t default to an eyebrow, a heading and a grey centred subline for every header

#### Layout and components

- No rows of identical cards with an icon on top. Give the most important thing more room
- No cards inside cards, and only one surface style per element
- No coloured borders along the top or left of cards and callouts
- No glassmorphism, bento grids for the sake of it, fake dashboards, 3D blobs or stock illustrations
- No pill-shaped nav, pill badges above the H1, status dots, or badges with live dots and middle dots
- No icon tiles in lists, and buttons don’t all need an icon
- Only number things that really are a sequence

#### Motion

- No fading up on every section and no hover lift on every card
- Movement responds to something the user did, with at most one deliberate moment per page
- Respect prefers-reduced-motion

#### Imagery

- No darkened full-bleed photo with an overlay behind a huge headline
- Real screenshots, renders and photos in their own colours
- Placeholders say exactly what’s missing

### Copy

#### Patterns

- “Not just X, it’s Y”, “No X, no Y, just Z”: just say Y
- Lists of three out of habit: use however many there actually are
- Tacked-on “-ing” clauses and making things sound more important than they are: cut them
- “Serves as”, “boasts”: use “is” and “has”
- No em dashes or Title Case, and only use bold for real emphasis
- No made-up or suspiciously round numbers, and no placeholder people, companies or quotes
- No headings that could go on any site (“Why choose me”, “What I offer”)
- Don’t give every section the same shape (heading, one-line intro, three items, button)

#### Words

Never

elevate, unlock, unleash, empower, supercharge, revolutionise, transform (as a promise), seamless, cutting-edge, state-of-the-art, next-level, game-changer, world-class, best-in-class, delve, tapestry, testament, in today’s fast-paced / ever-evolving / digital landscape, navigate the complexities, take your X to the next level, bring your vision to life, turning ideas into reality, passionate about, look no further, whether you’re X or Y, it’s not just X it’s Y, in conclusion, X? Sorted., your dream X, starts here, find your perfect X, we’ve got you covered, premier, as seen on, FREE in capitals

Only with a concrete fact in the same sentence

leverage, robust, scalable, streamline, innovative, bespoke, tailored, solutions, end-to-end, holistic, crucial, pivotal, comprehensive, enhance, foster, showcase, underscore, meticulous, journey, ensure, valuable insights, peace of mind, results-driven, trusted partner, dedicated, high-quality

### Structure

#### Order

- Don’t fall back on hero, logos, features, testimonials, FAQ, CTA
- Put the work first
- Plan each page around what it’s for

#### Calls to action

- One main call to action per page, as well as the nav button and the footer
- Not a CTA after every section
- Button labels say what will happen, and errors say what went wrong and how to fix it

#### Empty states

- Every layout has to look finished without testimonials, numbers or logos
- Don’t ship a placeholder figure

### What we do instead

#### Real work on show

- Screenshots of shipped products, with captions
- The ForestGenerator renders and the preprint
- Architecture, pipeline and review fragments taken from real projects

#### A real person

- A real photo, written in the first person
- Actual names, years and roles
- Archery, the smallpipes and hiking, each mentioned once

#### Opinions

- At least one opinion per page that someone could disagree with
- Dates on things: the month you’re available from, and the years on every project
- Not everything gets equal space: the main offer and the main project get the most

### Deliberate exceptions

A few things on the site come close to the list but are there on purpose. Here’s why.

#### Arrows on buttons and cards

They show that something leads somewhere. They’re fine on text links too, just not on every link in a block, and an arrow should never be the only thing telling you it’s a link.

#### Numbered steps in the form

The steps really are a sequence (what you need, your situation, where to reply), so the numbers are useful. Nothing else on the site is numbered unless it’s a sequence.

#### Tilts and things poking out

Only the fan, the product fragments, the results tiles and the photos. Text, forms and grids stay straight.

#### Status colours

Only inside product fragments, where the green, amber and red show an actual state.

#### The FAQ

Only questions people have really asked [TBC: which three]. Otherwise it comes out.

## 5. States and patterns

How the components look and behave while people use them. The focus ring is the same everywhere: a 2px viridian ring with a 2px gap, or mint on dark backgrounds.

### Buttons and links

With a keyboard, focus shows the ring and Enter acts straight away, so there’s no pressed state for Enter. Pressed styles are on `:active` whatever the input, so holding Space shows them too, and focus never looks like pressed.

#### Raised button

_Shown in the PDF: Default, Hover, Focus, Pressed, Disabled, Sending._

One per screen. On hover it lifts 2px and turns viridian dark. Pressed: viridian dark, no lift, and the card shadow in place of the lift shadow. Focus: the default look plus the ring. The mint button on dark uses mint dark the same way. While a message is sending the label changes and it can’t be pressed again. Only disable it when the action genuinely can’t happen.

#### Outlined button

_Shown in the PDF: Default, Hover, Focus, Pressed._

Pressed: a band fill with the border and text in viridian dark, which stays readable on the band where viridian wouldn’t.

#### Text links

_Shown in the PDF: Default, Hover, Focus, Pressed._

Links in body text are always underlined. Hover and pressed look the same: viridian dark with a 2px underline, so a tap on a phone still shows something. Don’t remove the browser’s tap highlight. “Read more” and the like are links rather than buttons, as they take you somewhere.

#### Nav

_Shown in the PDF: Default, Hover, Current page, Focus._

The current page has a viridian underline and aria-current. The Contact button uses the button states, with a mint focus ring on the dark button.

### Form

#### Option tiles

_Shown in the PDF: Default, Hover, Selected, Focus._

Each tile has a radio button inside it. On hover the border turns control line. The selected tile gets a thicker viridian border and the selected fill (#f0f7f5), but it shouldn’t look like a filled button.

#### Inputs

_Shown in the PDF: Default, Focus, Filled, Error._

Inputs are at least 17px so phones don’t zoom in. The border is input line, viridian on focus with the ring, and a 2px error border with an icon and a message when something’s wrong. Use `type="email"` and `autocomplete="name"` and `"email"` so phones can fill them in.

Your message didn’t send

It’s still in the form, so you can try again, or email it to callum@cnewlands.dev.

Thanks, it’s on its way

I usually reply within [TBC]. A copy has gone to your inbox.

- Errors appear when you leave a field, not while you’re typing
- When the form is submitted, focus goes to the first error, with a summary at the top if there’s more than one
- Once it’s sent, the confirmation replaces the form and gets the focus
- A hidden honeypot field catches spam, so there’s no captcha

### Cards

#### Work card

_Shown in the PDF: Default, Hover, Focus._

The whole card is a single link. On hover the border turns line strong, the shadow deepens to the card hover shadow and the title’s arrow nudges 3px right. It doesn’t lift or grow.

#### Also

- **Accordion:** only worth it when people need a few out of a lot of sections (an FAQ of six or more). If there are only a few short ones, leave them open as plain questions and answers. The whole row is the button, the plus turns into a minus, opening one doesn’t close the others, nothing essential is hidden inside one, and they all expand when printed. Opening takes 150ms
- **Numbered screenshot:** pointing at a marker or its legend item highlights both: the circle grows slightly and turns viridian dark. The pointer stays the normal arrow, as nothing is clickable. On phones the legend becomes close-up cards
- **Skip link:** “Skip to content”, hidden until it gets focus, in the top left
- **Brand icons:** LinkedIn, GitHub and Instagram, only in ink, white or near-white

### Gallery fallback

#### Gallery, when it’s needed

- Only for screenshots that don’t fit in a chapter. Most should sit next to the text they relate to
- Wide screenshots go one per row at full width, each with a caption underneath
- Phone screenshots go in rows of two or three at the same height
- Tap to see them full size. No carousels, and nothing that moves by itself
- On phones everything stacks, with phone screenshots two to a row

_Shown in the PDF: a wide screenshot at full width, and phone screenshots three to a row at the same height._

### Changes in 1.1

#### November 2026

- Colour: the token prefix is `--color-`, and mint dark, control line, input line and selected are added. Input borders are darker so fields meet the 3:1 rule
- Fragment colours, including the Medium badge
- Type: quote, card title, timeline title and marker number roles, a callout sample, and heading size following role rather than level
- Spacing inside sections, grid gaps and padding, replacing “cards are 4.5rem apart on phones”
- In-between widths (48 to 64em), and the phone breakpoint corrected to 48em
- Panels, work card sizes and image ratio, and the results source line
- The outlined button spec, pressed states and keyboard behaviour, and pressed for text links
- Link behaviour, icon sizes, image ratios, motion timing and reduced motion, and a static nav
- Treeline: fixed drawings, colours and sizing
- Form: borders, hints, required fields and autocomplete
- Formats, link previews, and accessibility details (high-contrast borders, wrapping, selection)
