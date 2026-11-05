---
name: Thermo
url: https://rules.sudoku-sleuth.com/thermo.md
kind: thermo
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  strict:
    type: boolean
    description: Whether each step must strictly increase.
    default: true.
  orientation:
    type: Orientation
    description: Read forwards, backwards, or choose either direction for the whole line.
    default: forward.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: V.
layer: rule
alias_of: monotone-line
alias_bind:
  line: line
  strict: strict
  orientation: orientation
  channel: channel
---

# Thermo

Values increase from bulb to tip. By default every step is strict and reads effective values. `strict false` permits equal neighbours; `orientation "reverse"` reads from the listed tip, and `orientation "either"` lets either end be the bulb. The chosen orientation applies to the whole line.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| strict | `boolean` | Whether each step must strictly increase. | true. |
| orientation | `Orientation` | Read forwards, backwards, or choose either direction for the whole line. | forward. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | V. |

## Definition

Block: [monotone-line](monotone-line.md) — `line=line; strict=strict; orientation=orientation; channel=channel`.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.



One orientation applies to the entire line; either chooses a single increasing direction.

## Example

````markdown
---
format: open-rules
title: Thermo example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo r1c1-r1c2
```
````

Satisfies the rule: r1c1=1, r1c2=2. 1 then 2 increases from the bulb.

Breaks the rule: r1c1=2, r1c2=1. 2 then 1 decreases from the bulb.

### Either end

```rules
thermo r2c1-r2c2-r2c3 orientation "either" channel "D"
```

Digits 7,4,1 satisfy this declaration by increasing from the last cell. Digits 1,4,2 break it because neither direction increases throughout.
