---
name: Slow Thermo
url: https://rules.sudoku-sleuth.com/slow-thermo.md
kind: slow-thermo
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  orientation:
    type: Orientation
    description: The increasing direction of the whole line.
    default: forward.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
alias_of: monotone-line
alias_bind:
  line: line
  strict: "false"
  orientation: orientation
  channel: channel
layer: rule
---

# Slow Thermo

Digits never decrease from the bulb to the tip. Equal neighbours are allowed.

List the path from bulb to tip. The rule reads printed digits and permits repeats when other rules allow; a strict [Thermo](https://rules.sudoku-sleuth.com/thermo.md) instead compares effective values with a strict increase.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| orientation | `Orientation` | The increasing direction of the whole line. | forward. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | D. |

## Definition

Block: [monotone-line](monotone-line.md) — `line=line; strict=false; orientation=orientation; channel=channel`.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.


The shared Monotone Line block permits equal neighbours.

## Example

````markdown
---
format: open-rules
title: Slow Thermo example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
slow-thermo r1c1-r1c2
```
````

Satisfies the rule: r1c1=2, r1c2=2. Equal neighbours do not decrease.

Breaks the rule: r1c1=2, r1c2=1. The second digit is smaller than the bulb.
