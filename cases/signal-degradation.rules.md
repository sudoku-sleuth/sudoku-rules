---
format: open-rules
title: Signal Degradation
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zl65vqhux8
case: https://sudoku-sleuth.com/cases/signal-degradation
library: https://rules.sudoku-sleuth.com/
status: read
givens: 9.......3....8................1.7....9..5..7....6.9................2....5.......9
---

```rules
sudoku 9x9
zipper-1: zipper r4c2-r3c3-r2c4
zipper-2: zipper r3c1-r2c2-r1c3
zipper-3: zipper r1c7-r2c8-r3c9
zipper-4: zipper r2c6-r3c7-r4c8
zipper-5: zipper r7c9-r8c8-r9c7
zipper-6: zipper r8c6-r7c7-r6c8
zipper-7: zipper r7c1-r8c2-r9c3
zipper-8: zipper r6c2-r7c3-r8c4
zipper-9: zipper r5c3-r4c4-r3c5-r4c6
zipper-10: zipper r6c4-r7c5-r6c6-r5c7
nabner-1: nabner r3c1-r2c2-r1c3 distinct true
nabner-2: nabner r1c7-r2c8-r3c9 distinct true
nabner-3: nabner r2c6-r3c7-r4c8 distinct true
nabner-4: nabner r7c1-r8c2-r9c3 distinct true
nabner-5: nabner r6c2-r7c3-r8c4 distinct true
nabner-6: nabner r8c6-r7c7-r6c8 distinct true
nabner-7: nabner r9c7-r8c8-r7c9 distinct true
nabner-8: nabner r5c3-r4c4-r3c5-r4c6 distinct true
nabner-9: nabner r6c4-r7c5-r6c6-r5c7 distinct true
nabner-10: nabner r4c2-r3c3-r2c4 distinct true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- All lines are both Zipper AND Nabner lines.
- Zipper Lines: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For Zipper lines of odd length, that sum is the central digit on the line.
- Nabner Lines: No two digits along a Nabner line can be consecutive, regardless of their position on the line. Digits may not repeat on Nabner lines.
