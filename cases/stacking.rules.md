---
format: open-rules
title: Stacking
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fklqpaez7m
case: https://sudoku-sleuth.com/cases/stacking
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c5=5
exported: 7133fa84a6bfabb073ddaf4eeeed640c
---

```rules
sudoku 9x9
kropki-1: kropki r3c6-r3c7 white
kropki-2: kropki r3c3-r3c4 white
kropki-3: kropki r5c2-r5c3 white
kropki-4: kropki r6c8-r6c9 black
kropki-5: kropki r6c1-r6c2 black
kropki-6: kropki r3c9-r4c9 black
kropki-7: kropki r1c3-r2c3 black
kropki-8: kropki r1c7-r2c7 black
kropki-9: kropki r8c3-r9c3 black
kropki-10: kropki r8c7-r9c7 black
kropki-11: kropki r3c5-r4c5 black
kropki-12: kropki r7c5-r8c5 black
palindrome-1: palindrome r6c1-r6c2-r5c3-r5c4-r4c4
palindrome-2: palindrome r6c9-r6c8-r5c7-r5c6-r4c6
renban-1: renban r4c1-r3c1-r3c2-r3c3-r2c3-r1c3-r1c2
renban-2: renban r4c9-r3c9-r3c8-r3c7-r2c7-r1c7-r1c8
renban-3: renban r6c9-r7c9-r7c8-r7c7-r8c7-r9c7-r9c8
renban-4: renban r6c1-r7c1-r7c2-r7c3-r8c3-r9c3-r9c2
renban-5: renban r5c4-r6c5-r5c6
```

**Sudoku, Renban, Palindromes, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a THIN pink Renban line must form a set of non-repeating consecutive digits in some order.
- Palindromes: Digits along a THICK grey palindrome line read the same forwards as backwards along the line.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
