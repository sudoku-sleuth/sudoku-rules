---
format: open-rules
title: Neil Visits Floris
setter: FPMHJ, FullDeck and Missing a Few Cards
source: https://sudokupad.app/1xi4mxc39l
case: https://sudoku-sleuth.com/cases/neil-visits-floris
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=5 r7c3=6 r7c7=7
---

```rules
sudoku 9x9
whispers-1: whispers r1c2-r1c1-r2c1-r3c1 gap 4
whispers-2: whispers r2c2-r2c1 gap 4
whispers-3: whispers r1c5-r2c5-r3c5-r3c6 gap 4
whispers-4: whispers r4c2-r4c3-r5c3-r6c3-r6c2-r5c2 gap 4 loop true
whispers-5: whispers r6c6-r5c6-r4c6-r4c7-r4c8-r5c7-r6c8 gap 4
whispers-6: whispers r5c6-r5c7 gap 4
whispers-7: whispers r7c4-r8c4-r9c4 gap 4
whispers-8: whispers r7c9-r7c8-r8c8-r8c9-r9c9-r9c8 gap 4
pair-1: pair r4c2-r4c3 relation {"op":"sum","value":10}
pair-2: pair r4c6-r4c7 relation {"op":"sum","value":10}
pair-3: pair r3c6-r4c6 relation {"op":"sum","value":10}
pair-4: pair r1c2-r2c2 relation {"op":"sum","value":10}
pair-5: pair r6c3-r6c4 relation {"op":"sum","value":10}
pair-6: pair r8c1-r9c1 relation {"op":"sum","value":10}
pair-7: pair r6c6-r6c7 relation {"op":"sum","value":10}
pair-8: pair r3c3-r3c4 relation {"op":"sum","value":5}
pair-9: pair r3c6-r3c7 relation {"op":"sum","value":5}
pair-10: pair r6c8-r7c8 relation {"op":"sum","value":5}
pair-11: pair r6c4-r7c4 relation {"op":"sum","value":5}
pair-12: pair r9c7-r9c8 relation {"op":"sum","value":5}
```

**Sudoku, Dutch Whispers, XV Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- XV pairs: Digits in cells separated by a V sum to 5. Digits in cells connected by a X sum to 10. Not all possible Xs or Vs are necessarily given.
