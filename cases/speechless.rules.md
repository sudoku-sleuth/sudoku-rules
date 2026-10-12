---
format: open-rules
title: Speechless
setter: sujoyku
source: https://sudokupad.app/n0xqqwfrl0
case: https://sudoku-sleuth.com/cases/speechless
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
whispers r7c9-r8c8-r9c7-r8c6-r7c5-r8c4-r9c3-r8c2-r7c1-r6c2-r5c3-r5c2-r4c1-r3c1-r2c2-r1c3-r2c4-r3c5-r2c6-r1c7-r2c8-r3c9-r4c8-r5c7-r5c8-r6c9 gap 5 loop true
pair-1: pair r7c4-r7c5 relation {"op":"sum","value":10}
pair-2: pair r4c3-r5c3 relation {"op":"sum","value":10}
pair-3: pair r5c7-r6c7 relation {"op":"sum","value":10}
pair-4: pair r3c5-r3c6 relation {"op":"sum","value":5}
```

Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each. Digits joined by a V sum to 5. Digits joined by an X sum to 10. (Not all V and X are given.) Adjacent digits on the green German Whispers line must have a difference of at least 5.
