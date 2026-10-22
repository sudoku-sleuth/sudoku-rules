# Standard phrasing comparison

Reference: [Sudoku U, Standard Constraint Phrasing](https://www.sudoku-u.org/constraints).

The comparison covers every Markdown page in `rules/`. Rule descriptions below
are written for this library; the reference supplies constraint names and variant
choices. Published defaults and accepted assignments remain unchanged. Two new
parameter choices extend Region Sum and Zipper without changing their defaults.

## Variant choices

| Reference constraint or variation | Open Rules expression |
| --- | --- |
| Single-circle arrows, pills, separately summed shafts | `arrow`; ordered `bulb` cells form the pill; repeat declarations for independent shafts. |
| Cages with mandatory or optional printed totals | `cage total n`, or omit `total`; `repeats false` supplies no repeats. A setter requiring every cage to carry a total supplies it on every declaration. |
| White, black and numbered dots; X, V and XV | `kropki` for unnumbered white/black; `pair difference n`, `ratio n`, `sum 10` or `sum 5`. |
| All possible dots/clues given | Separate `negative` declarations with explicit relations, scopes and exceptions; relation-specific and shared exceptions are distinct choices. |
| Quadruples with and without repeated clue digits | `quadruple digits [...]`; list each required copy. A list without duplicates gives the ordinary at-least-once version. |
| Region sum: boxes or irregular regions; separate or combined visits | Declare the primary geometry and maximal path runs in `segments`; `combine false` compares each visit, `combine true` totals each visited region. The unspecified re-entry versions should state this choice. |
| Zipper: odd-centre when present, independent pair sums, required centre | `centre "when-odd"` (default), `centre "ignore"`, `centre "required"`. |
| Entropic lines on 6 or 9 symbols | Ordered alphabet thirds in `entropic`: 1–2 / 3–4 / 5–6 or 1–3 / 4–6 / 7–9. The library also retains its explicit open two-cell condition. |
| Modular lines on 6 or 9 symbols | `modular modulus 3`; groups use remainder rather than alphabet position. |
| Shout-n and whisper-n | `close-whispers gap n` and `whispers gap n`; standard German/Dutch names use gaps 5/4. |
| Slow and strict thermometers | `slow-thermo` allows equal printed digits; `thermo` requires increasing effective values. |
| Look-and-say cages and diagonals | `look-and-say` with the full cell group and exact count records. |
| Lockout and between lines | Separate interior `line` and `ends`; lockout uses explicit `gap`, normally 4. Each lockout diamond terminates a segment. |
| Fortress cells and minimum/maximum cells | `extremum` over the complete marked set for fortress; singleton declarations for extrema compared to every orthogonal neighbour. |
| 159, row and column indexing | `index` with the corresponding axis and marked cells; restrict column indexing cells to columns 1, 5 and 9 for 159. |
| Anti-diagonal | Compose `limited-digits max 3` and a negated `limited-digits max 2` on each main diagonal for exactly three distinct digits. The `diagonal` direction named anti still means uniqueness. |
| Global entropy and modularity | `window-classes classes "entropy"` or `classes "mod3"`. |
| Clone regions | One `clone` declaration for each corresponding position across the regions. |
| Extra regions and disjoint groups | `unique` for each full extra region or each collection of corresponding box positions. |
| Normal 4×4/6×6 and irregular Sudoku | Explicit board dimensions, alphabet and regions, plus `unique` declarations for every row, column and region. `sudoku 9x9` retains its published specialised meaning. |
| Chaos construction | `constructed-regions` plus explicit row and column uniqueness. |
| Anti-quadruples | `absent-digits` on the four touching cells. |
| Non-consecutive | `negative` forbidding difference 1 on all orthogonally adjacent pairs. |
| Ordinary and dynamic fog | The `fog` setup header: neighbourhood reveal or explicit trigger/light links. |
| Remaining direct counterparts | Anti King, Anti Knight, Diagonal, Little Killer (diagonal sums), Parity Cells, Numbered Room, Palindrome, Parity, Renban, Sandwich, Skyscraper and X Sum retain their existing definitions. |

## Page review

“Retained” means the existing English and formula agree and either express the
reference meaning or define an additional library rule. Supporting format and
shared-definition pages are included separately from kinds.

| Page | Review |
| --- | --- |
| [README](../../rules/README.md) | Retained supporting format, shared definitions or setup feature. |
| [absent-digits](../../rules/absent-digits.md) | Retained; no wording or meaning change needed. |
| [allowed-digits](../../rules/allowed-digits.md) | Retained; no wording or meaning change needed. |
| [anti-king](../../rules/anti-king.md) | Retained; no wording or meaning change needed. |
| [anti-knight](../../rules/anti-knight.md) | Retained; no wording or meaning change needed. |
| [arrow](../../rules/arrow.md) | Documented independent shafts sharing a bulb and excluded bulb cells from the shaft list. |
| [between](../../rules/between.md) | Clarified strict bounds, endpoint exclusion, unordered interiors and allowed repeats. |
| [bremban](../../rules/bremban.md) | Retained; no wording or meaning change needed. |
| [cage-expressions](../../rules/cage-expressions.md) | Retained; no wording or meaning change needed. |
| [cage-pair](../../rules/cage-pair.md) | Retained; no wording or meaning change needed. |
| [cage-shapes](../../rules/cage-shapes.md) | Retained; no wording or meaning change needed. |
| [cage](../../rules/cage.md) | Distinguished an omitted total from zero and explained untotalled repeat-only cages. |
| [clone](../../rules/clone.md) | Retained; no wording or meaning change needed. |
| [close-whispers](../../rules/close-whispers.md) | Mapped shout-n to gap n and clarified equality and repeats. |
| [constructed-regions](../../rules/constructed-regions.md) | Retained; no wording or meaning change needed. |
| [coordinate-arrows](../../rules/coordinate-arrows.md) | Retained; no wording or meaning change needed. |
| [counting-circles](../../rules/counting-circles.md) | Retained; no wording or meaning change needed. |
| [decoration](../../rules/decoration.md) | Retained; no wording or meaning change needed. |
| [diagonal-lines](../../rules/diagonal-lines.md) | Retained; no wording or meaning change needed. |
| [diagonal](../../rules/diagonal.md) | Distinguished opposite-diagonal uniqueness from the anti-diagonal variant. |
| [doll-sum](../../rules/doll-sum.md) | Retained; no wording or meaning change needed. |
| [double-arrow](../../rules/double-arrow.md) | Separated the two endpoint digits from the interior sum and from decimal pills. |
| [entropic](../../rules/entropic.md) | Added 1–6 groups, loop and permitted-repeat guidance; retained the published two-cell condition. |
| [equal-sums](../../rules/equal-sums.md) | Retained; no wording or meaning change needed. |
| [equality-cage](../../rules/equality-cage.md) | Retained; no wording or meaning change needed. |
| [extremum](../../rules/extremum.md) | Explained orthogonal unmarked neighbours, fortress cells, isolated extrema and exhaustive marking. |
| [flat-mates](../../rules/flat-mates.md) | Retained; no wording or meaning change needed. |
| [fog](../../rules/fog.md) | Retained supporting format, shared definitions or setup feature. |
| [greek-carpet](../../rules/greek-carpet.md) | Retained; no wording or meaning change needed. |
| [hidden-modular](../../rules/hidden-modular.md) | Retained; no wording or meaning change needed. |
| [index-line](../../rules/index-line.md) | Retained; no wording or meaning change needed. |
| [index](../../rules/index.md) | Replaced an ambiguous summary with explicit row, column and 159 indexing directions. |
| [killer](../../rules/killer.md) | Retained alias; canonical definition supplies the clarification. |
| [kropki](../../rules/kropki.md) | Explained blank and numbered dots and explicit negative composition. |
| [layered-cage](../../rules/layered-cage.md) | Retained; no wording or meaning change needed. |
| [limited-digits](../../rules/limited-digits.md) | Distinguished an upper bound from an exact distinct count and described anti-diagonal composition. |
| [line-choice](../../rules/line-choice.md) | Retained; no wording or meaning change needed. |
| [little-killer](../../rules/little-killer.md) | Retained; no wording or meaning change needed. |
| [lockout](../../rules/lockout.md) | Specified the usual gap 4, segment-ending diamonds, strict exclusion and repeats. |
| [look-and-say](../../rules/look-and-say.md) | Generalised the explanation to marked groups, including diagonals; decoded count–digit clues and empty lists. |
| [magic-square](../../rules/magic-square.md) | Retained; no wording or meaning change needed. |
| [mean-lines](../../rules/mean-lines.md) | Retained; no wording or meaning change needed. |
| [modular](../../rules/modular.md) | Added 1–6 and 1–9 remainder groups, path adjacency, repeats and loop guidance. |
| [molecules](../../rules/molecules.md) | Retained; no wording or meaning change needed. |
| [n-mate](../../rules/n-mate.md) | Retained; no wording or meaning change needed. |
| [nabner](../../rules/nabner.md) | Made the standard no-repeat version an explicit distinct true choice. |
| [negative](../../rules/negative.md) | Explained orthogonal scope, all-dots/X/V variants, empty exceptions and relation-specific exemption policies. |
| [numbered-room](../../rules/numbered-room.md) | Retained; no wording or meaning change needed. |
| [ordered-block](../../rules/ordered-block.md) | Retained; no wording or meaning change needed. |
| [outside](../../rules/outside.md) | Retained; no wording or meaning change needed. |
| [pair](../../rules/pair.md) | Mapped numbered dots and X/V clues to existing keywords and linked negative variants. |
| [palindrome](../../rules/palindrome.md) | Clarified mirrored positions and repetitions. |
| [parity-cells](../../rules/parity-cells.md) | Retained; no wording or meaning change needed. |
| [parity](../../rules/parity.md) | Retained; no wording or meaning change needed. |
| [pointing-arrow](../../rules/pointing-arrow.md) | Retained; no wording or meaning change needed. |
| [pointing-thermo](../../rules/pointing-thermo.md) | Retained; no wording or meaning change needed. |
| [predicates](../../rules/predicates.md) | Retained supporting format, shared definitions or setup feature. |
| [pressure-gauge](../../rules/pressure-gauge.md) | Retained; no wording or meaning change needed. |
| [primality](../../rules/primality.md) | Retained; no wording or meaning change needed. |
| [product-cage](../../rules/product-cage.md) | Retained; no wording or meaning change needed. |
| [quadruple](../../rules/quadruple.md) | Explained four touching cells, repeated clue digits, extra copies and blank circles. |
| [region-sum](../../rules/region-sum.md) | Added combine with a false default; described primary box/region boundaries and repaired the example. |
| [remainder-cage](../../rules/remainder-cage.md) | Retained; no wording or meaning change needed. |
| [renban](../../rules/renban.md) | Retained; no wording or meaning change needed. |
| [rotational-sums](../../rules/rotational-sums.md) | Retained; no wording or meaning change needed. |
| [run-sum](../../rules/run-sum.md) | Retained; no wording or meaning change needed. |
| [same-class](../../rules/same-class.md) | Retained; no wording or meaning change needed. |
| [sandwich](../../rules/sandwich.md) | Specified standard crusts, excluded endpoints and adjacent-crust total zero. |
| [scoped-move](../../rules/scoped-move.md) | Retained; no wording or meaning change needed. |
| [shifter-line](../../rules/shifter-line.md) | Retained; no wording or meaning change needed. |
| [skyscraper](../../rules/skyscraper.md) | Retained; no wording or meaning change needed. |
| [slow-thermo](../../rules/slow-thermo.md) | Specified bulb-to-tip order, printed digits and allowed equality. |
| [sudoku](../../rules/sudoku.md) | Kept standard 9×9 meaning and documented explicit houses for smaller boards. |
| [sum-free-cage](../../rules/sum-free-cage.md) | Retained; no wording or meaning change needed. |
| [summit](../../rules/summit.md) | Retained; no wording or meaning change needed. |
| [syntax](../../rules/syntax.md) | Retained supporting format, shared definitions or setup feature. |
| [tardis](../../rules/tardis.md) | Retained; no wording or meaning change needed. |
| [thermo](../../rules/thermo.md) | Retained; no wording or meaning change needed. |
| [unique](../../rules/unique.md) | Explained extra regions and disjoint groups as explicit uniqueness groups. |
| [value-modifier](../../rules/value-modifier.md) | Retained; no wording or meaning change needed. |
| [vault](../../rules/vault.md) | Retained; no wording or meaning change needed. |
| [whisper](../../rules/whisper.md) | Retained alias; canonical definition supplies the clarification. |
| [whispers](../../rules/whispers.md) | Mapped whisper-n, German and Dutch names to gap; clarified path adjacency and repeats. |
| [window-classes](../../rules/window-classes.md) | Mapped global entropy/modularity and explained 6-symbol groups and repeated classes. |
| [x-sum](../../rules/x-sum.md) | Retained; no wording or meaning change needed. |
| [yin-yang](../../rules/yin-yang.md) | Retained; no wording or meaning change needed. |
| [zipper](../../rules/zipper.md) | Added centre modes when-odd, ignore and required, retaining the current default. |

## Names without a dedicated kind

No new kind is introduced in this comparison. These reference names do not have
a dedicated page under that name: 4×4/6×6 Sudoku, extra regions, irregular
Sudoku, disjoint groups, non-consecutive, 159 indexing, anti-diagonal,
anti-quadruples, clone regions, fortress cells, global entropy, global
modularity, look-and-say diagonals, shout-n, X/V/XV and variable dots. Their
existing expressions are listed above. Review whether named shortcuts would
help setters before adding aliases or new kinds. Ordinary/dynamic fog are
setup choices rather than rule kinds. Chaos construction uses the existing
Constructed Regions kind with row and column houses.

The reference provides no additional unrepresented constraint requiring a new
formal definition. Review the anti-diagonal wording before introducing a named
kind: an upper bound of three distinct digits and exactly three distinct digits
are different predicates. The composition above states exactly three.

## Symbols

`site/icons/rules.json` maps all 86 imported symbols to their existing page
slugs. Eighty-two are kind pages and four are setup/reference pages. Every
symbol has a page; `decoration` is the sole kind without a symbol. Aliases use
their canonical symbol. The symbols carry the repository’s MIT licence, use
`currentColor` and theme accents, and are hidden from screen readers beside
the visible rule name.

## Files changed

- `CHANGELOG.md`
- `README.md`
- `docs/reports/standard-phrasing.md`
- `rules/arrow.md`
- `rules/between.md`
- `rules/cage.md`
- `rules/close-whispers.md`
- `rules/diagonal.md`
- `rules/double-arrow.md`
- `rules/entropic.md`
- `rules/extremum.md`
- `rules/index.md`
- `rules/kropki.md`
- `rules/limited-digits.md`
- `rules/lockout.md`
- `rules/look-and-say.md`
- `rules/modular.md`
- `rules/nabner.md`
- `rules/negative.md`
- `rules/pair.md`
- `rules/palindrome.md`
- `rules/quadruple.md`
- `rules/region-sum.md`
- `rules/sandwich.md`
- `rules/slow-thermo.md`
- `rules/sudoku.md`
- `rules/unique.md`
- `rules/whispers.md`
- `rules/window-classes.md`
- `rules/zipper.md`
- `scripts/build.ts`
- `site/icons/README.md`
- `site/icons/rules.json`
- `site/icons/rules/cages/cage-expressions.svg`
- `site/icons/rules/cages/cage-pair.svg`
- `site/icons/rules/cages/cage-shapes.svg`
- `site/icons/rules/cages/cage.svg`
- `site/icons/rules/cages/equal-sums.svg`
- `site/icons/rules/cages/equality-cage.svg`
- `site/icons/rules/cages/killer.svg`
- `site/icons/rules/cages/layered-cage.svg`
- `site/icons/rules/cages/look-and-say.svg`
- `site/icons/rules/cages/n-mate.svg`
- `site/icons/rules/cages/product-cage.svg`
- `site/icons/rules/cages/remainder-cage.svg`
- `site/icons/rules/cages/sum-free-cage.svg`
- `site/icons/rules/cages/vault.svg`
- `site/icons/rules/cells/absent-digits.svg`
- `site/icons/rules/cells/allowed-digits.svg`
- `site/icons/rules/cells/coordinate-arrows.svg`
- `site/icons/rules/cells/counting-circles.svg`
- `site/icons/rules/cells/extremum.svg`
- `site/icons/rules/cells/flat-mates.svg`
- `site/icons/rules/cells/molecules.svg`
- `site/icons/rules/cells/parity-cells.svg`
- `site/icons/rules/cells/pointing-arrow.svg`
- `site/icons/rules/cells/pressure-gauge.svg`
- `site/icons/rules/cells/same-class.svg`
- `site/icons/rules/cells/tardis.svg`
- `site/icons/rules/edges/kropki.svg`
- `site/icons/rules/edges/pair.svg`
- `site/icons/rules/edges/quadruple.svg`
- `site/icons/rules/global/README.svg`
- `site/icons/rules/global/anti-king.svg`
- `site/icons/rules/global/anti-knight.svg`
- `site/icons/rules/global/diagonal-lines.svg`
- `site/icons/rules/global/diagonal.svg`
- `site/icons/rules/global/fog.svg`
- `site/icons/rules/global/negative.svg`
- `site/icons/rules/global/predicates.svg`
- `site/icons/rules/global/rotational-sums.svg`
- `site/icons/rules/global/scoped-move.svg`
- `site/icons/rules/global/sudoku.svg`
- `site/icons/rules/global/syntax.svg`
- `site/icons/rules/global/value-modifier.svg`
- `site/icons/rules/global/window-classes.svg`
- `site/icons/rules/global/yin-yang.svg`
- `site/icons/rules/lines/arrow.svg`
- `site/icons/rules/lines/between.svg`
- `site/icons/rules/lines/bremban.svg`
- `site/icons/rules/lines/close-whispers.svg`
- `site/icons/rules/lines/double-arrow.svg`
- `site/icons/rules/lines/entropic.svg`
- `site/icons/rules/lines/greek-carpet.svg`
- `site/icons/rules/lines/hidden-modular.svg`
- `site/icons/rules/lines/index-line.svg`
- `site/icons/rules/lines/limited-digits.svg`
- `site/icons/rules/lines/line-choice.svg`
- `site/icons/rules/lines/lockout.svg`
- `site/icons/rules/lines/mean-lines.svg`
- `site/icons/rules/lines/modular.svg`
- `site/icons/rules/lines/nabner.svg`
- `site/icons/rules/lines/palindrome.svg`
- `site/icons/rules/lines/parity.svg`
- `site/icons/rules/lines/pointing-thermo.svg`
- `site/icons/rules/lines/primality.svg`
- `site/icons/rules/lines/region-sum.svg`
- `site/icons/rules/lines/renban.svg`
- `site/icons/rules/lines/shifter-line.svg`
- `site/icons/rules/lines/slow-thermo.svg`
- `site/icons/rules/lines/summit.svg`
- `site/icons/rules/lines/thermo.svg`
- `site/icons/rules/lines/whisper.svg`
- `site/icons/rules/lines/whispers.svg`
- `site/icons/rules/lines/zipper.svg`
- `site/icons/rules/outside/doll-sum.svg`
- `site/icons/rules/outside/little-killer.svg`
- `site/icons/rules/outside/numbered-room.svg`
- `site/icons/rules/outside/ordered-block.svg`
- `site/icons/rules/outside/outside.svg`
- `site/icons/rules/outside/run-sum.svg`
- `site/icons/rules/outside/sandwich.svg`
- `site/icons/rules/outside/skyscraper.svg`
- `site/icons/rules/outside/x-sum.svg`
- `site/icons/rules/regions/clone.svg`
- `site/icons/rules/regions/constructed-regions.svg`
- `site/icons/rules/regions/index.svg`
- `site/icons/rules/regions/magic-square.svg`
- `site/icons/rules/regions/unique.svg`
- `site/style.css`
- `spec/normal-form.md`
- `src/declaration-library.ts`
- `src/semantics/lines.ts`
- `tests/language/finite-fragment.ts`
- `tests/rules/arrow.test.ts`
- `tests/semantics/lines.test.ts`
- `tests/site.test.ts`
