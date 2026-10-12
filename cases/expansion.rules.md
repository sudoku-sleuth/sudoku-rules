---
fog:
  initiallyLit:
    - 4
    - 19
    - 22
    - 30
    - 31
    - 32
    - 38
    - 39
    - 40
    - 41
    - 42
    - 48
    - 49
    - 50
    - 58
    - 61
    - 76
format: open-rules
title: Expansion
setter: sujoyku
source: https://sudokupad.app/mfw6bsrygb
case: https://sudoku-sleuth.com/cases/expansion
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
anti-knight stated true
kropki-1: kropki r4c4-r4c5 colour "white"
kropki-2: kropki r6c5-r6c6 colour "black"
arrow-1: arrow r7c7-r7c8-r7c9 bulb ["r7c6"]
arrow-2: arrow r3c3-r3c2-r3c1 bulb ["r3c4"]
arrow-3: arrow r1c5-r1c6 bulb ["r1c4"]
arrow-4: arrow r9c5-r9c4 bulb ["r9c6"]
arrow-5: arrow r8c1-r9c1 bulb ["r7c1"]
arrow-6: arrow r2c9-r1c9 bulb ["r3c9"]
pair-1: pair r4c6-r5c6 relation {"op":"sum","value":10}
pair-2: pair r5c3-r5c4 relation {"op":"sum","value":10}
pair-3: pair r3c5-r4c5 relation {"op":"sum","value":10}
pair-4: pair r6c5-r7c5 relation {"op":"sum","value":10}
pair-5: pair r5c4-r6c4 relation {"op":"sum","value":5}
pair-6: pair r5c6-r5c7 relation {"op":"sum","value":5}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Fog of War: The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.

- Anti-Knight: Cells a knight's move (in chess) apart may not contain identical digits.

- XV: Digits joined by a V sum to 5. Digits joined by an X sum to 10. (Not all XV are given.)

- Kropki: Digits joined by white dot are consecutive. Digits joined by a black dot have a 1:2 ratio. (Not all dots are given.)

- Arrows: Digits along an arrow sum to the digit in the circle from which the arrow emerges.
