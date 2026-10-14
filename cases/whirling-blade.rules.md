---
format: open-rules
title: Whirling Blade
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/df11uvxb52
case: https://sudoku-sleuth.com/cases/whirling-blade
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=3 r2c1=5 r3c8=1 r4c4=7 r5c1=8 r5c9=1 r7c2=9 r8c6=8 r8c7=2
exported: bc0b76e36dd9cfa215fd04c6ce6c845b
---

```rules
sudoku 9x9
renban-1: renban r9c3-r9c4-r8c5-r7c6-r7c7
renban-2: renban r1c7-r1c6-r2c5-r3c4-r3c3
renban-3: renban r7c3-r6c3-r5c2-r4c1-r3c1
renban-4: renban r3c7-r4c7-r5c8-r6c9-r7c9
renban-5: renban r2c1-r1c1-r1c2-r1c3-r1c4
renban-6: renban r1c8-r1c9-r2c9-r3c9-r4c9
renban-7: renban r8c9-r9c9-r9c8-r9c7-r9c6
renban-8: renban r9c2-r9c1-r8c1-r7c1-r6c1
```

**Sudoku, Renban Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in some order.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
