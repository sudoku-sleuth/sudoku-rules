---
name: Monotone Line
url: https://rules.sudoku-sleuth.com/monotone-line.md
kind: monotone-line
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
layer: block
---

# Monotone Line

Values increase from bulb to tip. By default every step is strict and reads effective values. `strict false` permits equal neighbours; `orientation "reverse"` reads from the listed tip, and `orientation "either"` lets either end be the bulb. The chosen orientation applies to the whole line.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| strict | `boolean` | Whether each step must strictly increase. | true. |
| orientation | `Orientation` | Read forwards, backwards, or choose either direction for the whole line. | forward. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | V. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
((((orientation = "forward") or (orientation = "either")) and forall i∈[0,(|line| - 1)): if strict then (read(line[i],channel) < read(line[(i + 1)],channel)) else (read(line[i],channel) <= read(line[(i + 1)],channel))) or (((orientation = "reverse") or (orientation = "either")) and forall i∈[0,(|line| - 1)): if strict then (read(line[i],channel) > read(line[(i + 1)],channel)) else (read(line[i],channel) >= read(line[(i + 1)],channel))))
```

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
