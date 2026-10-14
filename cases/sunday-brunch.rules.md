---
format: open-rules
title: Sunday Brunch
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/215bjr4xu9
case: https://sudoku-sleuth.com/cases/sunday-brunch
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c7=7 r5c2=4 r5c9=5 r7c5=1
exported: 82b20427705d7a1acaac69bd0e3b887f
---

```rules
sudoku 9x9
sandwich-1: sandwich r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 6
sandwich-2: sandwich r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 sum 6
sandwich-3: sandwich r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r1c1 sum 2
sandwich-4: sandwich r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 sum 2
sandwich-5: sandwich r1c9-r1c8-r1c7-r1c6-r1c5-r1c4-r1c3-r1c2-r1c1 sum 2
sandwich-6: sandwich r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 2
sandwich-7: sandwich r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 sum 6
sandwich-8: sandwich r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 sum 6
sandwich-9: sandwich r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 sum 33
sandwich-10: sandwich r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9-r1c9 sum 33
sandwich-11: sandwich r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 sum 28
sandwich-12: sandwich r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 sum 27
sandwich-13: sandwich r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 sum 7
sandwich-14: sandwich r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 8
```

**Sudoku, Sandwich Sums**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Sandwich sum: Clues outside the grid indicate the sum of the digits between 1 and 9 in that row or column.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
