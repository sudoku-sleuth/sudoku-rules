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
alias_of: thermo
alias_bind:
  line: line
  strict: "false"
  orientation: orientation
  channel: channel
---

# Slow Thermo

Digits never decrease from the bulb to the tip. Equal neighbours are allowed.

List the path from bulb to tip. The rule reads printed digits and permits repeats when other rules allow; a strict [Thermo](https://rules.sudoku-sleuth.com/thermo.md) instead compares effective values with a strict increase.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| orientation | The increasing direction of the whole line. | forward. |
| channel | Read printed digits (D) or effective values (V). | D. |

## Maths

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a shorthand for [thermo](thermo.md). Its header binds the canonical parameters; its own parameters retain the defaults listed above.

The shared monotonic predicate permits equal neighbours.

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
