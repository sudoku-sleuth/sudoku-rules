# Rules

A rule says what a mark means. A case file says where that rule applies. Use the familiar name to find a page, then use its `kind` in your declaration.

[Start with the README example](README.md#describe-a-puzzle), [browse by shape](#browse-by-shape), or open the [full library table](docs/library.md#rules).

## Read a rule page

The name and icon identify the rule. The opening paragraph gives its meaning in plain words. Other names help you find the same rule under familiar wording.

The parameter table tells you what to supply: cells, numbers, choices and settings. It also gives defaults. For example, [Cage](rules/cage.md) uses different digits by default; `repeats true` allows repeats.

Examples show a declaration, an assignment that satisfies it and one that breaks it. Use them to check how the rule treats order, endpoints and repeated digits.

The Definition section links to a [block](BLOCKS.md) and shows its settings. Rules that own their formula have a Maths section instead. The [predicate guide](PREDICATES.md) explains the notation behind those formulas.

## Names and aliases

Use the page's `kind`, such as `cage` or `whispers-5`, in a case file. German Whispers is another name for Whispers 5; Dutch Whispers means Whispers 4. Killer Cage and Killer refer to Cage.

Published alias pages link to their definition. Older spellings such as `killer` can be read and migrated to the current kind. The [migration guide](docs/migration.md) maps old declarations to their current forms.

## Write declarations

Put declarations in a fenced `rules` block. Declare the library root in the file's front matter so each kind resolves to its definition. The [case-file contract](spec/case-files.md) describes the header, boards and givens.

```rules
sudoku 9x9
small-cage: cage r1c1-r1c2 total 10
large-cage: cage r2c1-r2c2-r3c2 total 15 repeats false
whispers-5 r4c2-r4c3-r5c3
```

A label before `:` identifies an instance. Repeated kinds need different labels. Labels belong to the puzzle; `small-cage` does not create a new rule kind.

`r4c2` means row 4, column 2. List every cell. `r4c2-r4c4` names two cells; it does not include column 3. For a line, list cells in path order. A cage uses a set of cells, so its order does not change the meaning.

Named settings follow the cells: `total 10`, `repeats false`, or `loop true`. Lists and records use JSON notation. Some rules supply short keywords: `kropki r6c1-r6c2 black` states a ratio of two. Read the parameter table for the accepted settings.

### All marks given

State an all-given restriction explicitly. Group the marks of each kind in one declaration:

```rules
xv x [r6c4-r6c5] v [r8c7-r9c7] allGiven ["x","v"]
kropki white [r2c5-r2c6] black [r3c8-r4c8] allGiven ["white"]
```

The XV declaration gives every X and V: unmarked orthogonal pairs cannot have the corresponding sum. The Kropki declaration gives every white dot; black dots impose their positive ratio without an all-given restriction for black.

Each selected kind exempts only its own marked pairs. An X mark does not exempt a pair from an all-given V restriction. [Marked Pairs](rules/marked-pairs.md) defines the shared meaning. Positive marks read effective values; all-given restrictions read printed digits.

### Negation and conditions

`not` negates the complete rule. `not cage r1c1-r1c2 total 10 repeats true` requires a sum other than 10. Here `repeats true` leaves just the sum to negate.

`if` applies a rule when its condition holds. `unless` applies it when the condition does not hold. Conditions use the declaration's own cells:

```rules
yin-yang
light-or-dark: cage r1c1-r1c2 total 10 repeats true if uniform
mixed: not cage r1c1-r1c2 total 10 repeats true unless uniform
```

`uniform` means all those cells share a shade in the Yin Yang answer. The first cage requires a sum of 10 when the cells share a shade. The second requires a different sum when the cells have mixed shades.

The available conditions are `uniform`, `distinct` and `connected`. They test shared shading, different printed digits and orthogonal connectivity respectively. A condition needs a nonempty primary cell list. See [rule-line syntax](rules/syntax.md) for labels, comments and the complete operator grammar.

## Define a custom rule

Use an embedded definition when your puzzle needs a meaning the library does not yet name. Give it a local `id`, typed parameters, plain wording, a formula and an example. Declare it with `#` followed by its id:

````markdown
```rules
weighted-1: #weighted-triple r1c1-r1c2-r1c3
```

```custom-rules
- id: weighted-triple
  name: Weighted triple
  parameters:
    cells:
      type: path<cell>
      description: Three cells in order from the marked start.
      default: Required.
  definition: The third digit equals the first plus twice the second.
  maths: "|cells| = 3 ∧ D(cells[2]) = D(cells[0]) + 2 × D(cells[1])"
  example: "Satisfies: 1,2,5. Breaks: 1,2,6."
```
````

The id belongs to that file. Use an id distinct from library kinds, and include the definition in the same file as its declaration. The [custom-definition contract](spec/case-files.md#in-file-custom-definitions) gives the full format.

First look for an existing rule or a configurable [block](BLOCKS.md). Propose a library rule when the meaning has a useful shared name and can be reused across puzzles. Include its parameters, a satisfying assignment and a breaking assignment. [Contributing](CONTRIBUTING.md) explains how to choose a block or write a new formula.

## Browse by shape

This index follows the rule pages' metadata and the library's shape grouping. The [generated library table](docs/library.md#rules) gives every current rule's wording and binding. [Blocks](BLOCKS.md#block-index) have their own index.

### Lines

- [Allowed Digits](rules/allowed-digits.md)
- [Arrow](rules/arrow.md)
- [Between Line](rules/between-line.md)
- [Bremban](rules/bremban.md)
- [Close Whispers](rules/close-whispers.md)
- [Coordinate Arrows](rules/coordinate-arrows.md)
- [Double Arrow](rules/double-arrow.md)
- [Entropic](rules/entropic.md)
- [Greek Carpet](rules/greek-carpet.md)
- [Hidden Modular](rules/hidden-modular.md)
- [Index Line](rules/index-line.md)
- [Limited Digits](rules/limited-digits.md)
- [Lockout](rules/lockout.md)
- [Mean Lines](rules/mean-lines.md)
- [Modular](rules/modular.md)
- [Nabner](rules/nabner.md)
- [Palindrome](rules/palindrome.md)
- [Parity Line](rules/parity-line.md)
- [Pointing Thermo](rules/pointing-thermo.md)
- [Primality](rules/primality.md)
- [Region Sum](rules/region-sum.md)
- [Renban](rules/renban.md)
- [Run Sum](rules/run-sum.md)
- [Shifter Line](rules/shifter-line.md)
- [Slow Thermo](rules/slow-thermo.md)
- [Split Pea](rules/split-pea.md)
- [Summit](rules/summit.md)
- [Thermo](rules/thermo.md)
- [Whispers](rules/whispers.md)
- [Whispers 4](rules/whispers-4.md)
- [Whispers 5](rules/whispers-5.md)
- [Zipper](rules/zipper.md)

### Edges

- [Kropki](rules/kropki.md)
- [Negative](rules/negative.md)
- [Pair](rules/pair.md)
- [XV](rules/xv.md)

### Cells

- [Absent Digits](rules/absent-digits.md)
- [Clone](rules/clone.md)
- [Counting Circles](rules/counting-circles.md)
- [Equal Sums](rules/equal-sums.md)
- [Extremum](rules/extremum.md)
- [Liar Cells](rules/liar-cells.md)
- [Molecules](rules/molecules.md)
- [Odd Even Cells](rules/odd-even-cells.md)
- [Pressure Gauge](rules/pressure-gauge.md)
- [Quadruple](rules/quadruple.md)
- [Same Class](rules/same-class.md)
- [Tardis](rules/tardis.md)

### Cages

- [Cage](rules/cage.md)
- [Cage Expressions](rules/cage-expressions.md)
- [Cage Pair](rules/cage-pair.md)
- [Cage Shapes](rules/cage-shapes.md)
- [Equality Cage](rules/equality-cage.md)
- [Layered Cage](rules/layered-cage.md)
- [Look And Say](rules/look-and-say.md)
- [Product Cage](rules/product-cage.md)
- [Remainder Cage](rules/remainder-cage.md)
- [Sum Free Cage](rules/sum-free-cage.md)
- [Vault](rules/vault.md)

### Outside

- [Diagonal Sum](rules/diagonal-sum.md)
- [Doll Sum](rules/doll-sum.md)
- [Japanese Sums](rules/japanese-sums.md)
- [N Mate](rules/n-mate.md)
- [Numbered Room](rules/numbered-room.md)
- [Ordered Block](rules/ordered-block.md)
- [Outside](rules/outside.md)
- [Pointing Arrow](rules/pointing-arrow.md)
- [Prefix Sum](rules/prefix-sum.md)
- [Sandwich](rules/sandwich.md)
- [Skyscraper](rules/skyscraper.md)
- [X Sum](rules/x-sum.md)

### Regions

- [Constructed Regions](rules/constructed-regions.md)
- [Regions](rules/regions.md)

### Global

- [Anti King](rules/anti-king.md)
- [Anti Knight](rules/anti-knight.md)
- [Battenburg](rules/battenburg.md)
- [Diagonal](rules/diagonal.md)
- [Diagonal Lines](rules/diagonal-lines.md)
- [Flat Mates](rules/flat-mates.md)
- [Index](rules/index.md)
- [Lying Clues](rules/clue-count.md)
- [Magic Square](rules/magic-square.md)
- [Rotational Sums](rules/rotational-sums.md)
- [Scoped Move](rules/scoped-move.md)
- [Sudoku](rules/sudoku.md)
- [Window Classes](rules/window-classes.md)
- [Yin Yang](rules/yin-yang.md)

### Published alias pages

- [Aggregate Relation](rules/aggregate-relation.md) → [aggregate-equation](rules/aggregate-equation.md)
- [Between](rules/between.md) → [between-line](rules/between-line.md)
- [Extra Regions](rules/extra-regions.md) → [regions](rules/regions.md)
- [Index Count](rules/index-count.md) → [lookup](rules/lookup.md)
- [Killer Cage](rules/killer.md) → [cage](rules/cage.md)
- [Little Killer](rules/little-killer.md) → [diagonal-sum](rules/diagonal-sum.md)
- [Parity](rules/parity.md) → [parity-line](rules/parity-line.md)
- [Parity Cells](rules/parity-cells.md) → [odd-even-cells](rules/odd-even-cells.md)
- [Unique](rules/unique.md) → [regions](rules/regions.md)
- [Whisper](rules/whisper.md) → [whispers](rules/whispers.md)

### Syntax and setup

- [Rule-line syntax](rules/syntax.md)
- [Fog](rules/fog.md)
- [Shared predicates](rules/predicates.md)
