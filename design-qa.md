# Open Rules design review

final result: passed

## Visual target and evidence

Selected target: option 1, `/Users/afifim/.codex/generated_images/01a13263-4d2d-7e51-b77b-e8dbcca14c0e/exec-11e67ca3-c1cf-4b67-9f85-bb6a99a48a7a.png` (1122 × 1402 pixels). The owner's 13 October instructions replace text tabs with owned SVG shape icons, correct the rule content, preserve complete cell names in formulas, and authorise the generator build.

Browser-rendered evidence is in `design-preview/`:

- `comparison.jpg`: reference and implementation in the same comparison surface, normalised to equal widths. `reference-width-light.jpg` captures the implementation at the reference's 1122 × 1402 viewport, density 1.
- `desktop-light.jpg`: complete real library at 1440 CSS pixels wide; longer than the reference because it contains all real line rules.
- `desktop-light-top.jpg`, `desktop-dark-top.jpg`: 1440 × 1000 opening views.
- `contribution-footer.jpg`: two-column writing/proposal paths, exact README installation commands, and footer.
- `phone-light.jpg`, `phone-dark.jpg`, `phone-light-top.jpg`: 390 × 844 phone checks. The top capture is 390 × 844; full-page captures include the whole library.
- `rule-desktop-light.jpg`, `rule-phone-light.jpg`, `rule-phone-dark.jpg`: formula, parameter and example presentation.
- `case-phone-light.jpg`: attributed reading view of To the Revolution.

The generator's full-page capture and focused opening/footer views were inspected. The combined comparison uses the reference's actual pixel width; the original generation prompt requested 1440 but returned 1122. All captures use density 1, with no device frame. The exact selected design covers the landing page; rule and case views follow the owner's written requirements.

## Findings and fixes

No remaining P0/P1/P2 findings.

1. The initial rule table split space evenly between name and meaning. Set fixed table layout and a 24% name column (34% on phones). Post-fix capture: `desktop-light-top.jpg`.
2. The phone parameter heading broke across two lines. Reduced table-heading size and tracking at the phone breakpoint. Post-fix capture: `rule-phone-light.jpg`.
3. The Whisper formula exceeded the desktop reading column. Wrap long display notation at logical operators, retaining the original formula in its annotation. The final formula measures 700 pixels within its 700-pixel container. Longer formulas remain in a labelled, keyboard-focusable scrolling region. Post-fix capture: `rule-desktop-light.jpg`.
4. The first comparison used different source and implementation widths. Recaptured at 1122 × 1402 and compared at equal scale in `comparison.jpg`.

## Fidelity surfaces

- Typography: local Playfair Display and local Inter; system monospace for declarations. Serif title/section hierarchy, restrained labels, comfortable prose widths. No font requests leave the site at runtime. Font licences accompany the files.
- Layout: option 1's header, split featured example, ruled library, paired contribution columns and footer. Icons add the owner-requested vertical space. The full set of real rules extends the list beyond the illustrative image. Phones stack the featured example and contribution columns; icons wrap into four and three items.
- Colour: warm paper, navy ink and Sleuth blue from the brand token values. Night changes tokens, including the SVG icons and canonical mark, with identical geometry and content.
- Assets: supplied mark geometry copied unchanged; new 48-unit SVG icons use a 2-unit stroke, matching the mark's scaled line weight. Custom SVGs are expressly requested by the owner; they override the plugin's default icon-library guidance.
- Content: only real library kinds appear. Aliases share the canonical row, with links to their own definitions. Modular uses its source reading and stated modulus; default 3 remains in its parameter table. Kropki uses the owner's white/black wording in both the index and reading view. Raw Markdown is unchanged.

## Behaviour and accessibility

- Search finds German/Dutch whispers under Whisper and XV under Pair, across shape groups. Empty results are announced.
- Shape links work with keyboard focus and Enter; selected labels are underlined and have `aria-current`.
- With scripting disabled, all seven groups remain visible and their anchor links work.
- Skip link, heading hierarchy, labelled search, native tables and MathML, visible focus, and decorative image alt text are present.
- No page-level horizontal overflow at 320 or 390 CSS pixels on the landing and Whisper rule pages.
- Rule and real-case navigation preserves attribution and offers the unchanged raw URL.
- Browser error/warning log was empty during the tested site interactions. CSP permits only local site scripts, fonts, styles and images. No tracking, external scripts or external runtime assets.

## Validation

- Site build, portable package build, type checking, skill lint and YAML lint pass.
- 224 tests pass; no failures.
- `design-preview/raw-preservation.txt`: all 3977 Markdown files (85 library documents and 3892 cases) match the fetched branch and generated raw output byte for byte.
- Formula lint against the imported content does not pass: this checkout's `spec/prelude.md` differs from the supplied library vocabulary/signatures. Its diagnostics are recorded in `design-preview/formula-lint.log`; no rule formulas or raw case content were changed to accommodate it.
- No commit, merge or deploy.

## Follow-up polish

The full real library is longer than the illustrative mock. Review the density of the rule rows and the seven shape classifications with the owner.
