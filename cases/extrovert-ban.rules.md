---
format: open-rules
title: Extrovert Ban
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/extrovert-ban
case: https://sudoku-sleuth.com/cases/extrovert-ban
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=4 r3c4=7 r3c9=4 r4c3=1 r4c5=9 r6c7=9 r7c6=9 r8c1=8 r9c8=2
exported: 62f4b3e85208d20589da1a9137783a67
---

```rules
sudoku 9x9
renban-1: renban r4c1-r3c1-r2c2-r1c3-r1c4
renban-2: renban r1c7-r2c7-r3c7-r3c8-r4c9
renban-3: renban r6c9-r7c9-r8c8-r9c7-r9c6
renban-4: renban r9c3-r8c3-r7c3-r7c2-r6c1
renban-5: renban r3c3-r4c4-r5c5-r6c6-r7c7
renban-6: renban r4c2-r5c3-r6c4-r7c5-r8c6
renban-7: renban r6c8-r5c7-r4c6-r3c5-r2c4
renban-8: renban r1c5-r2c5-r3c6-r4c7-r5c8-r5c9
renban-9: renban r5c1-r5c2-r6c3-r7c4-r8c5-r9c5
pair-1: pair r1c3-r2c3 sum 10
pair-2: pair r8c7-r8c8 sum 10
pair-3: pair r1c8-r2c8 sum 10
pair-4: pair r9c1-r9c2 sum 10
pair-5: pair r8c2-r8c3 sum 5
pair-6: pair r4c6-r4c7 sum 5
pair-7: pair r4c6-r5c6 sum 5
pair-8: pair r5c1-r6c1 sum 5
```

**Sudoku, Renban Lines, XV**

- Normal Sudoku Rules: Each row, column, and box contains a complete set of the digits 1-9.
- Renban Line: Digits along a renban line must form a set of non-repeating consecutive digits in some order.
- XV: Digits in cells separated by an X sum to 10. Digits in cells separated by a V sum to 5.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
