# cnewlands.dev brand guidelines

The design rules for [cnewlands.dev](https://cnewlands.dev): what the site is for, colour, type, the logo, layout, components, page templates, words, the avoid-list, and how components behave. [brand-guidelines.pdf](brand-guidelines.pdf) has the same content with the swatches, logo, icons and component examples; this file is the text version, for reading here and for tools.

## 1. Brand, colour, type and logo

How the final screens were put together, so that new pages and project write-ups look like they belong to the same site.

### What the site is for

#### Job

To turn warm leads from LinkedIn, Upwork and search into a message. It's the CV and the portfolio in one place.

#### Who reads it

Founders who need something full-stack built, and teams who want a review, an audit or a part-time tech lead (AI-first teams included). Most will skim it quickly before they decide whether to get in touch.

#### In one line

“Full-stack developer and part-time tech lead.” The rest of the site backs that up. [TBC: three personality words, in your words]

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

Everything is green. In code, name the tokens after what they do (`--colour-primary` rather than `--viridian`).

| Token                     | Role                                                                                                        | Contrast and limits                                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Viridian** #067a7e      | Primary: the main button, links, step numbers, logo mark                                                    | White on it 5.1:1. As text 5.0:1 on the page but only 4.35:1 on the band, so don’t use it for body text on the band |
| **Viridian dark** #04585b | Hover and pressed state for viridian                                                                        | 8.0:1 on the page                                                                                                   |
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
| **Error** #b3261e         | Form errors only, always with an icon and a message                                                         | 5.9:1 on white                                                                                                      |

#### Rules

- One strong block of colour per screen
- Mint is used sparingly
- No gradients, glows or coloured shadows

#### Status colours

These only appear inside product fragments, where they actually mean something: pass #3fae74, waiting #d9a93a, high #f3c9cf on #3a1d22.

#### Warm colours come from the photos

The palette has no warm colours on purpose. Screenshots, renders and photos provide them, so leave them untinted and without overlays.

### Type

Bricolage Grotesque
Commissioner for reading
Red Hat Mono for code

| Role | Font | Size (rem) | px at default size, and use |
| --- | --- | --- |
| **Display (h1)** | Bricolage 800 | `clamp(2.5rem, 1.6rem + 4vw, 5.5rem)`, lh 1, -0.02em | 40 to 88px. One per page, sentence case |
| **Section title** | Bricolage 800 | 2.75rem; 2.5rem on phones | 44px / 40px. “More work”, “Questions”, “So far” |
| **Chapter and card title** | Bricolage 800 | `clamp(1.875rem, 1.4rem + 1.5vw, 2.5rem)`; 2.125rem on phones | 30 to 40px / 34px. Project chapters, smaller service cards |
| **Panel title** | Bricolage 800 | `clamp(2.25rem, 1.6rem + 2vw, 3.25rem)`; 2.5rem on phones | 36 to 52px / 40px. The two big service panels |
| **Callout** | Bricolage 600 | `clamp(1.625rem, 1.2rem + 1.4vw, 2.25rem)`; 1.375rem on phones | 26 to 36px / 22px. Only for the headline result |
| **Stat number** | Bricolage 800 | `clamp(2.5rem, 1.9rem + 2vw, 3.5rem)`, lh 0.95 | 40 to 56px. Only for numbers with a source |
| **Lead** | Commissioner 400 | 1.375 to 1.625rem, lh 1.45 | 22 to 26px. Around two lines on a phone |
| **Body** | Commissioner 400 / 500 / 600 | 1.125rem, lh 1.6, max-width 68ch | 18px. Bold is 600 (700 is too heavy) |
| **Small** | Commissioner 400 | 1.0625rem, lh 1.55; 1rem, lh 1.6 | 17px / 16px. Card subtitles, list items, secondary text |
| **Label and caption** | Commissioner 400 | 0.9375rem, lh 1.5 | 15px. Nothing people need to read goes smaller than this |
| **Inputs** | Commissioner 400 | 1.0625rem | 17px. Keep it at 1rem or above, otherwise phones zoom in when the field is focused |
| **Code** | Red Hat Mono 500 | 0.875 to 1.0625rem | 14 to 17px. Real code only. Ligatures off |
| **Logo name** | Quicksand 700 | Outlined in the SVG, no font size | The name is part of the drawn logo |

Use sentence case throughout. No all-caps or letter-spaced labels, no monospace labels and no headlines in two colours. Buttons and facts are set in 600. Very long single-word titles (like “swimbooker”) use the smaller title size. All the fonts are SIL OFL, so self-host them and only load the weights that are used.

### Logo

Callum
Newlands

Callum
Newlands

- The mark is a single line where the moon (C) runs into the ridge (N)
- Viridian on light backgrounds and mint on dark, with the name in ink or white
- It’s one inline SVG with the text outlined. The mark is 48px in the nav and 38px on phones, and shouldn’t go below 32px
- Leave clear space of half the mark’s height around it
- Please don’t recolour, stretch or outline it, add effects, or set the name in a different font
- The favicon and app icon are below

#### Favicon and app icon

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
- Phone layouts kick in below 48em (768px)

#### Spacing scale

0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3.5, 4.5, 6, 7rem (4 to 112px). Sections are 6 to 7rem apart and chapters 6rem, or 8.75rem after a chapter with something overlapping its edge. Cards in a list are 4.5rem apart on phones.

#### Band rhythm

- Use a band when the subject changes, rather than on every section
- At most two tinted bands per page, plus the footer
- A rule before More work at the end of the page
- No white or near-white bands on the page background

### Units

#### rem

For font sizes and the spacing around text: padding in buttons, fields and cards, gaps and section spacing. It scales with the reader’s browser text size. 1rem is 16px, and the root font size isn’t changed.

#### px

For things that should stay the same size when text gets bigger: borders and hairlines, the focus ring, shadows, corner radius and icon sizes.

#### Everything else

Line heights have no unit. Reading widths are in `ch`. Fluid sizes use `clamp()` with rem at both ends (`vw` on its own breaks zoom). Breakpoints are in em, and the tokens are CSS custom properties named after what they do.

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
- **Secondary:** outlined and 48px tall, with the outward arrow when the link leaves the site
- **Text links:** underlined. Icon links show the brand icon next to the name
- Button labels say what will happen, like “Send me a message” or “Send it”

#### The form

- The same form is used on Services and Contact, in three numbered steps: what you need, where things are at, and where to reply
- The options for what you need are tiles, so they don’t get mistaken for buttons
- Labels sit above 52px fields. Errors show when you leave a field, and there are states for sent and for sending failed
- A white card on the band, going full width with square corners on phones

#### Work cards

- White, with a 1px #e3ebe8 border, the card shadow, a 16px radius, 8px padding and the screenshot at 10px
- The title with an arrow, a line on what the project is, then the role and the years
- This style is only for clickable project cards
- They stack on phones (no sideways scrolling)

#### Product fragments

- Small, real views of the work on card dark: architecture, pipeline, PR review, board, findings and templates
- They stick out of the panel or card they belong to. On phones they always sit at the top of the card, at nearly full width
- Two can be stacked, with a screenshot overlapping a fragment
- Each one needs a text alternative (`role="img"` and a label)

#### Headers

- **Project:** the title, a one-line lead, three facts in a row separated by thin lines (a label and value list on phones) and a secondary button. Next to the text, a fan of three screenshots with the middle one dropped down
- **About:** the pine band with the portrait, one button and the icon links
- **Services and Contact:** just a heading and a line of text

#### Story pieces

- **Headline result:** a sentence or two in larger type on the band, around four lines, with no label or rule
- **Chapters:** text and a figure, switching sides each time
- **Numbered screenshot:** full width with a legend, and close-up cards on phones
- **Results:** three tiles (white, mint and pine), followed by a centred quote or links
- **Timeline:** a line with dots, with the dates on the right on phones

#### Treeline

Groups of tiered firs with trunks, plus a few lone trees, on rolling ground. 120px tall and purely decorative. It only goes above the footer, and on at most one band edge per page. Draw all the shapes in the same direction, otherwise the overlaps punch holes in each other.

#### Icons

Only where they do a job: arrow, outward arrow, calendar, email, plus the LinkedIn, GitHub and Instagram icons (from Ant Design). Always next to a text label. No icon tiles, decorative icons or ticks on lists. Lists have thin rules between the items.

#### Imagery

Real screenshots in white frames, and renders and photos in full colour without cropping. Personal photos go in white print frames with a slight tilt, and only on About. Placeholders say exactly what’s missing, like [TBC: hiking photo].

#### Motion

Things only move when someone does something: the button lift, link colour changes and accordions opening. Nothing fades in on scroll, and everything respects `prefers-reduced-motion`.

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

- Designed at 390px, with everything in one column below 760px
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
- Sentence case, no em dashes, and short sentences
- Numbers have a source and a date. Anything unknown is a visible [TBC]
- One opinion per page, in your own words

#### Do and don’t

Do

“I look after the architecture, deployments and how we plan work.”

Don’t

“I deliver seamless, scalable solutions that elevate your vision.”

Do

“Send me a message”

Don’t

“Let’s connect!” or “Submit”

### Checks before shipping a page

#### Accessibility

- A single h1, and nav, main and footer landmarks
- Alt text says what the screenshot actually shows
- Decorative SVGs are hidden and fragments are labelled
- The keyboard order follows the visual order
- Error messages say how to fix the problem

#### Consistency

- Colours and sizes come from the tokens above
- One raised button per screen
- No more than two bands
- Fragments sit at the top of cards on phones
- The footer is the latest version (icons, 44px links)

#### The swap test

- Could this sentence appear on another developer’s site? Then rewrite it
- Does every number have a source?
- Is every [TBC] on the list for the content pass?

#### Still open

Looking back over the project pages, and the content pass: real screenshots, quotes, numbers, prices and the reply time. There are no plans for a dark mode.

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

Only questions people have really asked [TBC: confirm the three]. Otherwise it comes out.

## 5. States and patterns

How the components look and behave while people use them. The focus ring is the same everywhere: a 2px viridian ring with a 2px gap, or mint on dark backgrounds.

### Buttons and links

#### Raised button

_Shown in the PDF: Default, Hover, Focus, Pressed, Disabled, Sending._

One per screen. On hover it lifts 2px and gets darker, and it drops back down when pressed. While a message is sending the label changes and it can’t be pressed again. Only disable it when the action genuinely can’t happen.

#### Outlined button

_Shown in the PDF: Default, Hover, Focus._

#### Text links

_Shown in the PDF: Default, Hover, Focus._

Links in body text are always underlined. “Read more” and the like are links rather than buttons, as they take you somewhere.

#### Nav

_Shown in the PDF: Default, Hover, Current page, Focus._

The current page has a viridian underline and aria-current. The Contact button uses the button states, with a mint focus ring on the dark button.

### Form

#### Option tiles

_Shown in the PDF: Default, Hover, Selected, Focus._

Each tile has a radio button inside it. The selected tile gets a thicker viridian border and a pale tint, but it shouldn’t look like a filled button.

#### Inputs

_Shown in the PDF: Default, Focus, Filled, Error._

Inputs are at least 17px so phones don’t zoom in. Errors are shown with colour, an icon and a message.

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

_Shown in the PDF: Default, Hover: border and shadow deepen, Focus._

The whole card is a single link. It doesn’t lift or grow on hover.

#### Also

- **Accordion:** only worth it when people need a few out of a lot of sections (an FAQ of six or more). If there are only a few short ones, leave them open as plain questions and answers. The whole row is the button, the plus turns into a minus, opening one doesn’t close the others, nothing essential is hidden inside one, and they all expand when printed
- **Skip link:** “Skip to content”, hidden until it gets focus, in the top left
- **Brand icons:** LinkedIn, GitHub and Instagram, only in ink, white or near-white

### Gallery fallback

#### Gallery, when it’s needed

- Only for screenshots that don’t fit in a chapter. Most should sit next to the text they relate to
- Wide screenshots go one per row at full width, each with a caption underneath
- Phone screenshots go in rows of two or three at the same height
- Tap to see them full size. No carousels, and nothing that moves by itself
- On phones everything stacks, with phone screenshots two to a row

Wide screenshot, full width

Phone screenshots, three to a row, same height
