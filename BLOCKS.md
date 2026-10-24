# Blocks

A block is a reusable constraint with typed parameters and a mathematical formula. Rules give that constraint familiar names and fix some of its settings. Other blocks supply tools for combining clues, routes, regions and shared answers.

Start with a [rule](RULES.md) when it describes your puzzle. Use a block directly when you need its wider range of settings. Each block page gives the parameter types, defaults, formula and examples.

## From a rule to a block

[Whispers 5](rules/whispers-5.md), also called German Whispers, binds [Difference Line](rules/difference-line.md). The setter supplies the path:

```rules
whispers-5 r4c2-r4c3-r5c3
```

The rule passes that path to the block and fixes these settings:

| Setting | Value | Meaning |
| --- | --- | --- |
| `mode` | `"at-least"` | Every step meets a minimum difference. |
| `gap` | `5` | The minimum difference is five. |
| `channel` | `"V"` | Compare effective values. |
| `diamonds` | Empty set | No diamond positions are supplied. |
| `turnDigits` | Empty set | No turn-digit choices are supplied. |

The rule also passes through `loop` and optional explicit `edges`. The default is an open path. In the example, values 1, 6, 1 satisfy both steps; values 1, 5, 1 break both steps.

[Whispers 4](rules/whispers-4.md) binds the same block with `gap=4`. [Whispers](rules/whispers.md) lets the setter choose the gap. The shared formula stays on Difference Line.

## One block, different marks

[XV](rules/xv.md) and [Kropki](rules/kropki.md) both bind [Marked Pairs](rules/marked-pairs.md).

| Rule | Lists it supplies | Relationships |
| --- | --- | --- |
| XV | `x`, `v` | Sum of ten; sum of five. |
| Kropki | `white`, `black` | Difference of one; ratio of two. |

Each rule supplies empty lists for the other family's marks and passes through `allGiven`. A single-pair declaration adds its pair to the selected list.

```rules
xv x [r6c4-r6c5] v [r8c7-r9c7] allGiven ["x","v"]
```

Here the block receives the two marked pairs and the all-given kinds X and V. Every other orthogonal pair must avoid each selected relationship unless it has that kind of mark. Positive marks read effective values; all-given restrictions read printed digits.

To combine both families in one declaration, use Marked Pairs directly with `x`, `v`, `white`, `black` and `allGiven`. Its page gives the full signature.

## Inside a block

Typed inputs tell tools whether a setting is a cell path, a set, a number or a choice. The formula combines [predicates](PREDICATES.md) with logic and arithmetic to define exactly which assignments satisfy the block.

A named rule's front matter records its target in `alias_of` and supplies an `alias_bind` expression for every block parameter. Rules with a unique meaning can own their formula directly. See [Contributing](CONTRIBUTING.md#rules-and-building-blocks) for the page format.

## Block index

Each entry links to the complete definition. “Used by” lists rules that bind the block directly. General composition blocks can be declared without a named rule. The [generated library table](docs/library.md#blocks) also lists bindings and composition purposes.

| Block | What it does | Used by |
| --- | --- | --- |
| [Aggregate Equation](rules/aggregate-equation.md) | Compare two arithmetic expressions built from aggregate operands. | [Cage](rules/cage.md), [Cage Pair](rules/cage-pair.md), [Diagonal Sum](rules/diagonal-sum.md), [Double Arrow](rules/double-arrow.md), [Pair](rules/pair.md), [Prefix Sum](rules/prefix-sum.md), [Product Cage](rules/product-cage.md) |
| [Aggregate Groups](rules/aggregate-groups.md) | All groups have equal aggregate results. | [Equal Sums](rules/equal-sums.md), [Mean Lines](rules/mean-lines.md), [Region Sum](rules/region-sum.md) |
| [Assignment](rules/assignment.md) | Assign a zero-based label to each ordered slot. | Direct composition |
| [Blocked Sight](rules/blocked-sight.md) | Each ray stops at its first blocker. | [Skyscraper](rules/skyscraper.md) |
| [Cell Entries](rules/cell-entries.md) | Give every cell in scope a list of symbols from the board alphabet, with the stated size bounds and repeat policy. | Direct composition |
| [Choice Count](rules/choice-count.md) | Count true labels in one shared Boolean assignment. | Direct composition |
| [Class Pattern](rules/class-pattern.md) | Constrains digit classes in cells, squares or line windows. | [Entropic](rules/entropic.md), [Modular](rules/modular.md), [Odd Even Cells](rules/odd-even-cells.md), [Parity Line](rules/parity-line.md), [Same Class](rules/same-class.md), [Window Classes](rules/window-classes.md) |
| [Coordinate Count](rules/coordinate-count.md) | Transform each source number into a board coordinate and count successful destinations. | Direct composition |
| [Decoration](rules/decoration.md) | The specified drawn marks are decorative only. | Direct composition |
| [Derived Count](rules/derived-count.md) | Derive one number from every operand pair, then count matching occurrences, distinct results, or rank a target among those results. | Direct composition |
| [Difference Line](rules/difference-line.md) | Bounds differences on edges, or tests changes between consecutive differences. | [Close Whispers](rules/close-whispers.md), [Summit](rules/summit.md), [Whispers](rules/whispers.md), [Whispers 4](rules/whispers-4.md), [Whispers 5](rules/whispers-5.md) |
| [Digit Profile](rules/digit-profile.md) | Each listed class occurs its stated number of times. | [Absent Digits](rules/absent-digits.md), [Allowed Digits](rules/allowed-digits.md), [Counting Circles](rules/counting-circles.md), [Equality Cage](rules/equality-cage.md), [Limited Digits](rules/limited-digits.md), [Look And Say](rules/look-and-say.md), [Outside](rules/outside.md), [Quadruple](rules/quadruple.md), [Sum Free Cage](rules/sum-free-cage.md) |
| [Endpoint Range](rules/endpoint-range.md) | Compare interior digits with the interval between two endpoints; optionally require a minimum endpoint gap. | [Between Line](rules/between-line.md), [Lockout](rules/lockout.md) |
| [Line Choice](rules/line-choice.md) | The line satisfies between the stated minimum and maximum number of the listed line rules. | Direct composition |
| [Local Sequence](rules/local-sequence.md) | Successive numbers follow the chosen sequence. | Direct composition |
| [Lookup](rules/lookup.md) | Look up one-based positions in ordered cell lists and count successful relations. | [Index](rules/index.md), [Index Line](rules/index-line.md), [Numbered Room](rules/numbered-room.md), [Pointing Arrow](rules/pointing-arrow.md), [Pointing Thermo](rules/pointing-thermo.md) |
| [Mapped Values](rules/mapped-values.md) | Constrain one numeric channel using a shared selection inside scope. | Direct composition |
| [Marked Pairs](rules/marked-pairs.md) | X pairs sum to ten, V pairs sum to five, white pairs differ by one and black pairs have ratio two. | [Kropki](rules/kropki.md), [XV](rules/xv.md) |
| [Marking Relation](rules/marking-relation.md) | Each ordered pair has the stated relationship between its two marks. | Direct composition |
| [Maze](rules/maze.md) | Construct a connected named network on exactly the scoped cells. | Direct composition |
| [Mirrored Pairs](rules/mirrored-pairs.md) | Compare opposite positions along a line or a half-turned board by equality, a common pair sum, or allowed pair sums. | [Palindrome](rules/palindrome.md), [Rotational Sums](rules/rotational-sums.md), [Zipper](rules/zipper.md) |
| [Monotone Line](rules/monotone-line.md) | Orders values along a path, with a choice of direction and strictness. | [Slow Thermo](rules/slow-thermo.md), [Thermo](rules/thermo.md) |
| [Neighbour Count](rules/neighbour-count.md) | Count neighbours satisfying at least one relation with the origin. | Direct composition |
| [Neighbour Extremum](rules/neighbour-extremum.md) | Each marked digit is smaller than all its unmarked neighbours for a minimum, or larger for a maximum. | [Extremum](rules/extremum.md), [Tardis](rules/tardis.md) |
| [Network Clue](rules/network-clue.md) | Constrain the edges and degrees of a shared network. | Direct composition |
| [Number Property](rules/number-property.md) | The operand result has the stated numeric property. | [Primality](rules/primality.md), [Remainder Cage](rules/remainder-cage.md) |
| [Paired Roles](rules/paired-roles.md) | Pair each cell in the left role with exactly one cell in the right role, covering scope. | Direct composition |
| [Profile Relation](rules/profile-relation.md) | Compares the numbers in two groups, with optional multiplicity matching. | Direct composition |
| [Region Clue](rules/region-clue.md) | Compares aggregates within shared regions with targets. | Direct composition |
| [Region Partition](rules/region-partition.md) | Partition the scope into nonempty orthogonally connected regions. | [Constructed Regions](rules/constructed-regions.md) |
| [Region Shape](rules/region-shape.md) | Constrain a shared region collection by template shape, template counts or half-turn symmetry. | Direct composition |
| [Relation Scope](rules/relation-scope.md) | Every selected pair satisfies at least one listed relation. | [Anti King](rules/anti-king.md), [Anti Knight](rules/anti-knight.md), [Clone](rules/clone.md), [Diagonal](rules/diagonal.md), [Negative](rules/negative.md), [Regions](rules/regions.md), [Scoped Move](rules/scoped-move.md) |
| [Route](rules/route.md) | Construct one named route with distinct cells and allowed steps. | Direct composition |
| [Route Clue](rules/route-clue.md) | Apply numeric clues to a shared route. | Direct composition |
| [Route Group](rules/route-group.md) | Relate at least two distinct named routes. | Direct composition |
| [Selected Stretch](rules/selected-stretch.md) | Sum selected positions of an ordered list: a counted prefix, the interval between crusts, a stretch balanced with its endpoints, or positions touching a consecutive step. | [Doll Sum](rules/doll-sum.md), [Run Sum](rules/run-sum.md), [Sandwich](rules/sandwich.md), [X Sum](rules/x-sum.md) |
| [Selection](rules/selection.md) | Choose one shared set of marked cells inside the scope. | Direct composition |
| [Shade Components](rules/shade-components.md) | The named partition is exactly the maximal orthogonally connected components of selected cells in scope, or of their complement within scope. | Direct composition |
| [Subset Total](rules/subset-total.md) | A nonempty subset of the cells has the stated total and size bounds. | Direct composition |
| [Sum Partition](rules/sum-partition.md) | Constrains target-sum intervals covering a line. | Direct composition |
| [Symbol House](rules/symbol-house.md) | Each supplied house has exactly the stated multiplicity of each listed symbol across all entries of its cells in a shared symbol channel. | Direct composition |
| [Value Modifier](rules/value-modifier.md) | Selects modifier cells and constrains the effective values of the board. | Direct composition |
| [Value Set](rules/value-set.md) | Constrain the numbers on one whole line or network. | [Bremban](rules/bremban.md), [Nabner](rules/nabner.md), [Renban](rules/renban.md) |
