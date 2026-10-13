---
format: open-rules
title: Hello!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/hello
case: https://sudoku-sleuth.com/cases/hello
library: https://rules.sudoku-sleuth.com/
status: read
givens: r9c3=2 r9c7=9
---

```rules
sudoku 9x9
renban-1: renban r3c2-r2c3-r1c4
renban-2: renban r1c6-r2c7-r3c8
renban-3: renban r4c2-r5c3-r6c4
renban-4: renban r6c6-r5c7-r4c8
renban-5: renban r6c1-r7c2-r8c3
renban-6: renban r8c7-r7c8-r6c9
pair-1: pair r1c4-r1c5 sum 10
pair-2: pair r6c5-r6c6 sum 10
pair-3: pair r3c8-r4c8 sum 10
pair-4: pair r8c1-r9c1 sum 10
pair-5: pair r5c4-r5c5 sum 10
pair-6: pair r2c5-r2c6 sum 10
pair-7: pair r3c2-r4c2 sum 5
pair-8: pair r1c5-r1c6 sum 5
pair-9: pair r6c4-r6c5 sum 5
pair-10: pair r8c3-r8c4 sum 5
pair-11: pair r8c6-r8c7 sum 5
```

**Sudoku, Renban Lines, XV**

- Normal Sudoku Rules: Each row, column, and box contains a complete set of the digits 1-9.
- Renban Line: Digits along a renban line must form a set of non-repeating consecutive digits in some order.
- XV: Digits in cells separated by an X sum to 10. Digits in cells separated by a V sum to 5.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
