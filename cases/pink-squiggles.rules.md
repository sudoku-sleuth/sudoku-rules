---
format: open-rules
title: Pink Squiggles
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/38u60kxz3e
case: https://sudoku-sleuth.com/cases/pink-squiggles
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=2 r3c3=3 r3c7=7 r5c1=9 r5c5=4 r5c9=8 r7c3=5 r7c7=2 r9c5=1
exported: a71cd6660190f27c02fa9111d7782dc1
---

```rules
sudoku 9x9
renban-1: renban r1c1-r1c2-r1c3-r1c4
renban-2: renban r1c9-r2c9-r3c9-r4c9
renban-3: renban r9c9-r9c8-r9c7-r9c6
renban-4: renban r9c1-r8c1-r7c1-r6c1
renban-5: renban r1c6-r1c7-r1c8-r2c8
renban-6: renban r8c8-r8c9-r7c9-r6c9
renban-7: renban r2c2-r2c1-r3c1-r4c1
renban-8: renban r9c4-r9c3-r9c2-r8c2
renban-9: renban r3c2-r3c3-r2c3-r2c4
renban-10: renban r7c8-r7c7-r8c7-r8c6
renban-11: renban r3c8-r3c7-r3c6-r2c7
renban-12: renban r7c2-r7c3-r6c3
renban-13: renban r5c2-r5c3
renban-14: renban r4c3-r4c4
renban-15: renban r6c6-r6c7
```

**Standard Sudoku, Renban**

Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.

Renban line: Usually shown as purple lines, digits along a Renban line must form a set of non-repeating consecutive digits in any order.
