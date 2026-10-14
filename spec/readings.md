# Readings

A reading turns a case file into plain sentences, grouped the way a solver thinks: "seven X pairs sum to 10, three V pairs sum to 5". The wording lives on the rule pages, so the rules site, the Workbench and any host say the same thing. `readCase(text, library)` in the portable package performs no I/O and never throws: anything it cannot read stays an exact line.

## The `reading` block

Each rule page may add a `reading` block to its front matter. An alias page has none; it reads as its target.

```yaml
reading:
  group_by: [relation]          # instances with equal values here form one group
  terms: ["separated by an X"]  # setter words that name this rule, for pairing
  parts:                        # named sub-templates
    loop:
      - when: {loop: true}
        text: " The line closes into a loop."
      - text: ""
  variants:                     # first match wins; no `when` is the default
    - when: {relation: {op: sum, value: 10}}
      family: X/V pairs         # variants of one family share a row, in page order
      heading: X pairs
      name: X                   # the mark's name inside a family row and a joined note
      noun: pairs               # plural noun for the "Show the N pairs" list
      one: "The two digits in {cells} sum to 10."
      many: "{count|Words} X pairs: in each, the two digits sum to 10."
      short: "{count|words} X pairs sum to 10"
      item: "{cells}"           # one line per instance, for the list; the default is {cells}
      terms: ["=X"]
```

| Field | Use |
| --- | --- |
| `group_by` | Parameters that make two instances one group. Default: every parameter that is not a cell list. |
| `when` | Deep partial match on parameters. Also `present`, `absent`, `{length: n}` or `{length: {min, max}}`, `{varies: true}` over a group, `same: [a, b]` for equal cell sets, and `condition: name`. An absent boolean is false. |
| `heading` | The group's name. May use placeholders. |
| `one`, `many` | The sentence for one instance, or for `{count}` instances. `many` says what holds for each. When `many` is missing, `one` serves both. |
| `short` | The clause used when variants of a family share a row. A family member with one instance reads as its own `one` sentence. |
| `item`, `item_over` | The line for the detail list: a template, or a list of `{when, text}`. `item_over` lists the elements of a list parameter instead of the instances. |
| `list` | `always` lists even one instance. `never` omits the list. Otherwise the list appears when a group has more than one instance. |
| `spoiler` | The list is a spoiler part. The text says what opening it reveals, for example "reveals part of the puzzle". |
| `notes` | Extra sentences under the row, each with its own `when`. |
| `spoiler_notes` | Extra sentences shown inside the spoiler list, for facts about its lines. |
| `relation`, `join` | A variant standing for a pair relation (Kropki), and a variant that folds into the rows it describes (negative constraints). |
| `silent` | Read, and say nothing. |
| `terms` | Words that name the rule. See Pairing. |

Placeholders are `{name}`, `{name.prop}`, `{name|format}` and `{part:name}`. A name is a declared parameter or a built-in: `count`, `covered` (distinct cells in the group), `cells` (the rule's cells), `items`, `names`, `houses`. Properties are `first`, `last`, `length`, and `min` and `max` over the group. Formats:

| Format | Result |
| --- | --- |
| `words`, `Words` | One to twenty spelled out, then digits. `Words` capitalises. |
| `a` | A number with its article: "an 8", "a 5". |
| `range` | "4 to 17", or "4" when equal; a list of digits without gaps is a range. |
| `list`, `and`, `or` | Cells as "a, b, c"; cells or digits as "a, b and c". |
| `dots` | Items joined with " · " (the default for `{items}`). |
| `rectangle` | A full block: "the block r1c1 to r3c3". |
| `one` | The singular wording of a type reading. |
| `every` | `{names|every}`: "every X and every V". |

Types with several wordings read through `type_readings` in `predicates.md`, one home per named type. `PairRelation` has `many` and `one` forms per operation: "sum to 10" and "sums to 10". A relation with no wording (`shift`) cannot render, so its lines stay as written.

A sentence starts with a capital letter. Cells are never capitalised.

## Named conditions

A page reaches a case-level fact only through a named condition. The list is closed. A new need is a pull request that adds a condition and its test.

| Condition | True when |
| --- | --- |
| `isHouse` | A `unique` line is exactly a row, a column or a box (or a board region). |
| `housesStandAlone` | The houses in a group are every row, column and region of the board and no `sudoku` line also says so. Only then do they read as normal sudoku rules. |
| `underFog` | The file declares fog but its clear cells cannot be read, so any given digit might be hidden. |
| `hiddenGivens` | At least one given digit sits outside the clear cells. `{hiddenGivens}` is how many. |
| `exceptsAreMarked` | Every pair in a negative constraint's `except` is the cell pair of another line whose relation the constraint lists, and every such line is in `except`. The constraint then joins that group: "Every X is shown." |
| `standardBoard` | The board header is 9×9, digits 1 to 9, and standard boxes or no regions. |
| `triggersOnGivens` | A fog link has a given cell as a trigger. |
| `neverFire` | A fog link has a trigger off the grid. `{neverFire}` is the count. |

## Header readings

`givens`, `board` and `fog` are header data, not rule lines. The sudoku page holds the readings of `givens` and `board` under `reading.header`. Fog is a setup feature with its own page, [fog.md](../rules/fog.md); a page with `document: feature` is not a rule and declares no rule formula.

## Output

`readCase` returns rows: a heading, a sentence of text and cell parts, optional notes, an optional item list, and the indices of the rule lines in the row (counted over the non-blank lines of the case's `rules` fences). Header rows come first. A group with no reading, a line with `not`, `if` or `unless`, or a placeholder that cannot render becomes a row with `asWritten`. The result carries `complete` and `problems` for reports. `readingText` writes the reading as plain text.

A host stores the result, and shows a spoiler list collapsed under a button naming what it reveals. A spoiler part belongs in no page metadata, structured data or social card. `publicReading(reading)` returns the reading without its spoiler parts, and `itemLines` gives no lines for a spoiler list unless asked. Lint rejects a spoiler variant whose sentence uses `{items}`, `trigger` or `lights`; such words go in `item` or `spoiler_notes`.

A value is checked against the type its page declares before it is read. A line with a bad value, and a rule whose reading throws, shows as written; the rest of the case is read. A header that cannot be read (a fog block that is not a set of fields, a link with no trigger) becomes a header row shown as written, with a note in `problems`.

## Pairing

`align(sentences, reading, library)` pairs a setter's sentences with rows. The host splits the sentences. A sentence matches a page or variant when it contains one of its `terms` as whole words. A term is words separated by spaces; `*` stands for one word; a leading `=` is case-sensitive. A term that is a single word of one or two letters is weak: it pairs but never counts as naming a rule. Pairing is deterministic: no network, no model.

`missing` lists sentences that name a library rule while the file has none of the rules the sentence names. Nothing else is reported as missing.

## Checks

`bun run lint:spec` checks every `reading` block:

- E_READING_FIELD: an unknown field, a `when` asking about an undeclared parameter, an unknown named condition, a variant with no sentence.
- E_READING_PLACEHOLDER: a placeholder that is not a declared parameter or built-in, or uses an unknown property or format, or names a part that does not exist.
- E_READING_PARAMETER: a non-cell parameter that no sentence, condition or `group_by` uses.
- E_READING_EXAMPLE: the page's own Example does not read in full.
