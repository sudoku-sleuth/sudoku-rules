---
name: Lying Clues
url: https://rules.sudoku-sleuth.com/clue-count.md
kind: clue-count
shape: Global
layer: rule
parameters:
  clues:
    type: list<clause>
    description: The complete clues in this count's scope.
    default: Required.
  comparison:
    type: enum{exactly,"at-least","at-most"}
    description: How to compare the number of false clues with count.
    default: Required.
  count:
    type: position
    description: The nonnegative number of false clues.
    default: Required.
---

# Lying Clues

Exactly, at least or at most the stated number of supplied clues are false.
A false clue fails its complete rule, including distinctness and occurrence conditions.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| clues | Nonempty list of owned clue records. | Required. |
| comparison | exactly, at-least or at-most. | Required. |
| count | Nonnegative whole number of false clues. | Required. |

Each record has a unique nonempty `id`, a `rule` kind, local `#id` or Markdown URL,
and `args` containing that rule's named parameters. Defaults come from the referenced
rule. Primary paths use their published name (`line` or `cells`); pair keywords
use their named relation record. These clues are owned by the count; do not also
assert them as top-level declarations. IDs identify clues within this scope and
are not truth variables. Distinct marks with identical meanings count separately.

Supply one declaration for each line or box when the count applies separately to
each; supply one list of all affected clues for a whole-grid count. A clue may
be a whole mark, an adjacent pair, or a line segment, according to the setter's
rule. List each counted part explicitly. A whole whisper line fails when at least
one of its edges fails; counting its edges separately gives a different rule.
The scope is exactly this list, with no inference from artwork or cell membership.

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define clueHolds.

```text
let failures=countWhere(clues,λq:clause: ¬clueHolds(q));
(comparison="exactly" → failures=count)
∧ (comparison="at-least" → failures>=count)
∧ (comparison="at-most" → failures<=count)
```

All clues read the same answer, including D and V. Counts are taken before any
formula deduplication. An exact or minimum count larger than the list is
unsatisfiable; a maximum larger than the list imposes no further restriction.
`not` complements the whole count once. File-level `negate: all` also complements
the owner once, leaving its children unchanged. Count owners may contain other
count owners, with their own local clue IDs.

## Example

````markdown
---
format: open-rules
title: One false black dot
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
clue-count clues [{"id":"a","rule":"kropki","args":{"cells":["r1c1","r1c2"],"colour":"black"}},{"id":"b","rule":"kropki","args":{"cells":["r2c1","r2c2"],"colour":"black"}}] comparison "exactly" count 1
```
````

Satisfies the rule: the first pair has values 1 and 2; the second has 3 and 5.
Breaks the rule: replace 5 with 6, so both dots are true.
