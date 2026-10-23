---
name: Decoration
url: https://rules.sudoku-sleuth.com/decoration.md
kind: decoration
shape: cells
parameters:
  cells:
    type: set<cell>
    description: The cells covered by the decorative marks, including every cell of a marked region.
    default: Required.
  note:
    type: string
    description: A description of which marks to ignore.
    default: Omitted.
layer: block
composition: Case drawing metadata and overlap ownership.
---

# Decoration

The specified drawn marks are decorative only. They carry no rule, and tools must derive no constraints from them. Other marks on the same cells retain their own rules.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `set<cell>` | The cells covered by the decorative marks, including every cell of a marked region. | Required. |
| note | `string` | A description of which marks to ignore. | Omitted. |

Use the common `element "..."` metadata to identify a particular drawn element. Use the same element ID on declarations referring to the same mark; different marks need different IDs. A decoration and a constraining declaration with the same element ID and overlapping cells produce a warning. A note describes the marks; tools must not interpret it as a rule.

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the common notation.

```text
true
```

Decoration adds no condition. Semantic comparison drops it from the logical meaning and retains its cells, note, element ID and source as metadata. Negation and conditions are not accepted on decoration; file-level negation leaves decorations unchanged.

## Example

```rules
sudoku 9x9
decoration r1c1-r1c2-r2c2 note "The grey ribbon is decorative." element "grey-ribbon"
```

Satisfies the declaration: r1c1=1, r1c2=2, r2c2=3. The ribbon imposes no relationship between these digits.

There is no breaking assignment: `true` accepts every assignment. For example, r1c1=9, r1c2=1, r2c2=7 also satisfies the declaration. The other puzzle rules still apply.
