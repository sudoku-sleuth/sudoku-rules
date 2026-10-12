---
format: open-rules
title: Roman Crossings
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/h7hhpqb098
case: https://sudoku-sleuth.com/cases/roman-crossings
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=3 r2c8=9 r8c2=6 r8c8=2
---

```rules
sudoku 9x9
renban-1: renban r3c1-r2c1-r1c1-r1c2-r1c3
renban-2: renban r1c7-r1c8-r1c9-r2c9-r3c9
renban-3: renban r7c9-r8c9-r9c9-r9c8-r9c7
renban-4: renban r7c1-r8c1-r9c1-r9c2-r9c3
renban-5: renban r6c2-r6c3-r6c4-r7c4-r8c4
renban-6: renban r8c6-r7c6-r6c6-r6c7-r6c8
renban-7: renban r4c8-r4c7-r4c6-r3c6-r2c6
renban-8: renban r2c4-r3c4-r4c4-r4c3-r4c2
renban-9: renban r4c1-r3c2-r2c3-r1c4
renban-10: renban r1c6-r2c7-r3c8-r4c9
renban-11: renban r6c9-r7c8-r8c7-r9c6
renban-12: renban r6c1-r7c2-r8c3-r9c4
pair-1: pair r6c9-r7c9 relation {"op":"sum","value":10}
pair-2: pair r1c6-r1c7 relation {"op":"sum","value":10}
pair-3: pair r3c1-r4c1 relation {"op":"sum","value":10}
pair-4: pair r9c3-r9c4 relation {"op":"sum","value":10}
pair-5: pair r4c8-r4c9 relation {"op":"sum","value":10}
pair-6: pair r8c6-r9c6 relation {"op":"sum","value":10}
pair-7: pair r6c1-r6c2 relation {"op":"sum","value":10}
pair-8: pair r1c4-r2c4 relation {"op":"sum","value":10}
pair-9: pair r1c5-r2c5 relation {"op":"sum","value":10}
pair-10: pair r8c5-r9c5 relation {"op":"sum","value":10}
pair-11: pair r5c9-r6c9 relation {"op":"sum","value":5}
pair-12: pair r3c2-r3c3 relation {"op":"sum","value":5}
pair-13: pair r4c1-r5c1 relation {"op":"sum","value":5}
```

**Standard Sudoku, Renban, XV**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- X and V pairs: Digits in cells separated by a V sum to 5. Digits in cells connected by a X sum to 10. Not all possible Xs or Vs are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
