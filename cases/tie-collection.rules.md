---
format: open-rules
title: Tie Collection
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/dx9dnbaj0f
case: https://sudoku-sleuth.com/cases/tie-collection
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=3 r2c2=3 r3c4=7 r3c7=5 r4c3=8 r6c7=9 r7c3=5 r7c6=4 r8c8=7 r9c1=7
exported: abb7aa9cc17649b3bf15ae677eadb708
---

```rules
sudoku 9x9
renban-1: renban r5c2-r4c2-r3c2-r2c3-r2c4-r2c5
renban-2: renban r8c5-r8c6-r8c7-r7c8-r6c8-r5c8
renban-3: renban r5c1-r6c1-r7c2-r8c3-r9c4-r9c5
renban-4: renban r1c5-r1c6-r2c7-r3c8-r4c9-r5c9
renban-5: renban r5c3-r6c3-r7c4-r7c5
renban-6: renban r3c5-r3c6-r4c7-r5c7
renban-7: renban r3c3-r4c4-r5c5-r6c6-r7c7
renban-8: renban r5c4-r6c4-r6c5
renban-9: renban r4c5-r4c6-r5c6
```

**Sudoku, Renban Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in some order.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
