---
name: Skyscraper
url: https://rules.sudoku-sleuth.com/skyscraper.md
kind: skyscraper
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: list<cell>
  visible:
    description: The number of digits visible from the clue.
    default: Required.
    type: position
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
---

# Skyscraper

Read from the clue. A digit is visible when it is greater than every digit before it. The clue counts visible digits.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| visible | The number of digits visible from the clue. | Required. |
| channel | Read printed digits (D) or effective values (V). | D. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|visibleRecords(cells,channel)|=visible
```

Record-high visibility counts a number only when it exceeds every earlier number.

## Example

````markdown
---
format: open-rules
title: Skyscraper example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
skyscraper r1c1-r1c2-r1c3 visible 2
```
````

Satisfies the rule: r1c1=1, r1c2=3, r1c3=2. 1 then 3 are visible; the later 2 is hidden.

Breaks the rule: r1c1=1, r1c2=2, r1c3=3. All three increasing digits are visible, exceeding clue 2.
