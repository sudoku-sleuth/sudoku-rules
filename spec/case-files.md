# Case files

A case file starts with YAML front matter declaring `format: open-rules`, `title`,
`setter`, `source`, `case`, `library` and `status`. Required text fields are strings.
`source` and `case` may be empty. `library` is the root URL used to resolve published
kinds. `status` is `read`, `confirmed` or `flagged`; flagged files carry a nonempty
list of unresolved reasons in `flags`.

## Board and givens

Declare a standard board once with `sudoku 9x9` in a fenced `rules` block. It supplies
the ordered alphabet 1–9 and standard boxes. For another board, supply a `board`
mapping with positive integer `rows` and `cols`, a nonempty list of distinct finite
numeric `symbols`, and optional `givens` and `regions`. Board fields are closed:
unknown names are errors. A board declared alongside `sudoku 9x9` must match it.

Givens appear in exactly one place: top-level `givens` or `board.givens`. A given is
an in-board cell and a member of the alphabet. Each cell has at most one given.
Accepted forms are a list of `{cell: r1c1, digit: 1}` objects, a string of
`r1c1=1 r2c2=2` pairs, or a grid string with one character per cell and `.` for an
empty cell. Given objects have only `cell` and `digit`.

Regions are lists of cell lists. Use `board.regions` without the standard Sudoku
declaration. With `sudoku 9x9`, top-level `regions` adds regions to the standard
boxes; `board.regions` must be empty or absent.

Dimensions and region membership do not impose house uniqueness. When normal Sudoku
applies to an explicit board, declare `unique` for every row, column and region.
The published `sudoku` kind supports only `9x9`. `W_CASE_HOUSES` reports a nonempty
region list without any positive, unconditional `unique` or `sudoku 9x9` declaration.
It checks absence, not completeness or custom formula meaning.

## Rule parameters

[Rule-line syntax](../rules/syntax.md) defines declarations. The
[declaration grammar](declarations.md) specifies tokens, ASTs and canonical text. Primary cell paths
supply the page's `cells` or `line` parameter. Named `cells` and `line` spellings
refer to that primary parameter; cage `sum` also accepts the page's `total` name.
Values are JSON, single rXcY cells, or explicitly listed cell paths. Parameters
cannot be repeated through different spellings. Every required input must be
present, and a required collection must be nonempty.

Only parameters declared by the rule page are accepted. The page's typed signature
checks booleans, finite numbers, whole-number positions and digits, enums,
collections, nested records and cells. Records reject unknown fields and require
every non-optional field. Every cell, including a nested cell or keyword-form
pair endpoint, must lie within the board. Paths retain their order and repeated
positions. Formula predicates supply the rule's further mathematical conditions. Lint rejects these incompatible parameters before grid evaluation: Local Sequence recurrence with loop true; Route loop true with either endpoint; Number Property reverse true with a non-decimal operand; fractional Coordinate Count bases, factors or offset; and an empty Region Partition scope.

When dimensions or the ordered alphabet differ from 9×9 with 1–9, state these
parameters explicitly, including values that would otherwise be defaults:

| Rules | Parameters |
| --- | --- |
| summit, whispers, parity, modular, entropic, primality, line-choice | `loop` |
| modular | `modulus` |
| nabner | `distinct` |
| cage | `repeats` |
| sandwich | `crusts` |
| index | `strips` |

For example, a six-symbol board can use `whispers r1c1-r1c2 gap 3 loop false`,
`cage r2c1-r2c2 total 5 repeats false`, and
`sandwich r3c1-r3c2-r3c3 sum 2 crusts [1,6]`.

## In-file custom definitions

A case can define its own rule under a local `id`. Use a local name unless the
setter has an address for sharing the rule. The reference is `#` followed by the
id; the display `name` and Markdown headings do not determine that id.

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
  definition: The third face digit equals the first plus twice the second.
  maths: "|cells| = 3 ∧ D(cells[2]) = D(cells[0]) + 2 × D(cells[1])"
  example: "Satisfies: 1,2,5. Breaks: 1,2,6."
```
````

An id uses the same spelling as a kind: lowercase letters and digits separated by
single hyphens. It is unique within the file and cannot equal a library kind.
`#id` resolves only to that file's embedded definition, never to a library page or
an external address. Two files' local ids have separate scope even when spelled
alike. Tools retain the source file with local references; a bare local id is
never a cross-file identity. Undefined, duplicate, colliding and unused definitions
produce `E_CUSTOM_DEFINITION`, following the existing unused-definition error convention.

Required fields are `name`, `parameters`, `definition`, `maths` and `example`, plus
at least one of `id` and `url`. Text fields are nonempty. Parameters form a mapping
(empty for no inputs); every parameter has a `type` and a nonempty `description`.
An absent default or `Required.` requires the input. The primary cell path is
`cells` or `line`; state its order, scope and length. The optional `class` is
`first-order` (the default), `with aggregates` or `existential`, and must match the
formula's logical class. Other entry fields are errors.

An optional `url` is an HTTPS `.md` address. Adding it to a definition with an id
provides a publication address without changing the id, parameters or meaning.
Either `#id` or that URL may reference the same embedded definition. A URL-only
definition remains supported, with the URL in its declaration and `url` field.
The URL basename supplies its kind; it never acquires a library kind's meaning.
No definition is fetched. URLs cannot repeat or replace a library page.

The older `url: "#weighted-triple"` form remains supported: its fragment must name
the heading whose section contains the complete definition. Prefer `id` for new
files; it has no heading or section-placement requirement. Every definition must
be referenced, and several fences may contain definitions.

Custom parameters and maths use the same formula parser, shared names, type checks,
guard checks and logical-class checks as library pages. Diagnostics point into the
case file, including quoted and multiline YAML values. This checks formula validity;
the rule remains custom and its intended meaning unverified. Matching prose and
assignments to the formula requires review. URL loading and example evaluation
remain separate phases.

## Shared solution assignments

The solution includes named routes, undirected networks and region collections.
The names are ordinary string parameters, scoped to the case and to their type.
`routeAnswer`, `networkAnswer` and `partitionAnswer` in the shared prelude read
those assignments. Reusing a name reuses its object. Instance IDs identify rule
occurrences; they do not identify these shared objects.

For finite sets of referenced names A, B and G, the solution condition is

```text
∃ (L_a)_{a∈A}, (E_b)_{b∈B}, (P_g)_{g∈G}:
  all instantiated rule formulas hold under this one assignment
```

Every referenced typed name has exactly one constructor per name: Route for routes, Maze or Paired Roles for networks, Region Partition or Shade Components for partitions. Missing and duplicate constructors are lint errors (`E_CASE_PARAMETERS`), even under negation or a condition. The constructor fixes topology once; Route also fixes closure, read by `routeClosed(name)`. Clues require a nonempty route, edge list or partition. A one-cell Maze with no edges is permitted as a constructor but cannot satisfy Network Clue.

Each L is a finite cell list, each E a finite list of two-cell edges, and each P
a finite set of cell sets. Constructors check topology and scope. Named answer
readers introduce no topology by themselves. The case-wide choice encloses
negation and conditional declarations. A negated clue tests the chosen object;
it does not bind a new one. Every constructor and clue reading these shared choices is classified existential.

```rules
route name "trail" scope ["r1c1","r1c2","r1c3"] cover true
route-clue name "trail" total 6 distinct true
route-clue name "trail" relations [{"op":"difference","value":1}]
```

All three lines constrain one ordered route. Independent route existentials
would allow the total and step clues to choose different routes. A custom
formula can reuse `routeAnswer("trail")` with existing shared predicates, such
as `consecutiveValues(routeAnswer("trail"),"D",false)`. Network and partition
readers compose in the same way. The primary Regions input remains separate
from every named constructed partition.


### Selections, truth labels and channels

The joint solution assignment also supplies named cell selections, Boolean truth
labels, integer assignment lists, numeric cell channels and symbol-entry lists.
Each reader uses one case-wide object per typed name:

| Reader | Solution data | Constructor or constraint |
| --- | --- | --- |
| selectedCells(name) | Cell set; H reads the board shading | Selection |
| choiceAnswer(name) | Boolean label | Reification formulas and Choice Count |
| assignmentAnswer(name) | Integer list | Assignment |
| channelValue(name,c) | Number; D and V read the existing channels | Mapped Values |
| cellSymbols(name,c) | Digit list; D reads a singleton face digit | Cell Entries and Symbol House |

Selection, Assignment, Mapped Values and Cell Entries are the unique constructors for their named selections, integer lists, numeric channels and symbol lists. Shade Components constructs its components partition; Paired Roles constructs its pairs network and reads its two selections. A custom `reified(choiceAnswer("label"),meaning)` constructs that truth label once. Choice Count reads those labels. The board inputs H, D and V are reserved and need no additional constructor. Every named reader, including one inside a custom formula or prelude wrapper, is subject to the same reference check. Custom reader names must resolve from fixed case parameters or literals.

Supply the assignments for every referenced name and cell. Missing answer data
is an unavailable assignment, never a default value. Constructors constrain
data; merely reading a name creates no size, connectivity, domain, reification
or face-digit condition. Names in different reader types have separate
namespaces. A negated constructor negates its complete condition on the chosen
data. It does not choose another assignment. Paired Roles reads undirected
network edges; its left and right selections determine numeric argument order.

Truth labels refer to formulas through `reified`, not to instance IDs or strings
containing formula source. The Choice Count page gives a complete case example
with two reified clues. A liar label must be equivalent to the whole truthful
meaning. For a supplied opposite meaning, use `conditionalMeaning` instead.

An assignment can select a shared relation without redefining its arithmetic:

```text
let xs=assignmentAnswer("colours"); boundedAssignment(xs,2,2,true) ∧ ∀i∈[0,2): pairRelation(relationSpec(if xs[i]=0 then "sum" else "difference",1),D(boardCell(0,i)),D(boardCell(1,i)))
```

The two slots choose different relation labels. Each label constrains its entire
pair; integer bounds precede the indexed reads. More than one relation may hold
on a pair, while the selected labels must still obey the declared bijection.

Mapped Values can target V for existing valued rules. Separate names are read
in custom formulas with channelValue. Each named output channel has one Mapped Values constructor. Use a single scope and mapping to constrain that channel, or distinct output names for independent maps. V remains a reserved board channel. The equations constrain values directly, including under negation. A conditional mapping is a custom
formula over the same channel; a declaration condition requires a nonempty
primary cell list and does not read a named scope parameter.

Symbol House defaults to one face digit per cell. For multi-entry cells, use a
named symbol channel and Cell Entries to constrain each cell. Adding entries
never changes the board header's alphabet, givens, primary regions or houses.
Declare alternative-board houses explicitly; omit sudoku when its standard
all-different houses are not intended.
