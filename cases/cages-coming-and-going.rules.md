---
format: open-rules
title: Cages Coming and Going
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/vw12m79nlv
case: https://sudoku-sleuth.com/cases/cages-coming-and-going
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c8-r1c9-r2c9 total 6 connected true
cage-2: cage r8c1-r9c1-r9c2 total 7 connected true
cage-3: cage r1c1-r1c2-r2c1 total 14 connected true
cage-4: cage r8c9-r9c8-r9c9 total 18 connected true
cage-5: cage r4c4-r5c3-r5c4 total 8 connected true
cage-6: cage r6c5-r6c6-r7c5 total 9 connected true
cage-7: cage r5c1-r6c1 total 8 connected true
cage-8: cage r2c6-r3c6 total 6 connected true
cage-9: cage r4c7-r4c8 total 8 connected true
cage-10: cage r9c4-r9c5 total 12 connected true
cage-11: cage r4c5-r5c5-r5c6 total 14 connected true
palindrome-1: palindrome r4c1-r4c2-r4c3-r3c4-r3c5-r3c6
palindrome-2: palindrome r9c6-r8c6-r7c6-r6c7-r5c7-r4c7
palindrome-3: palindrome r6c1-r6c2-r6c3-r7c4-r8c4-r9c4
palindrome-4: palindrome r8c8-r7c8-r6c9-r5c9-r4c9
palindrome-5: palindrome r2c2-r2c3-r1c4-r1c5-r1c6
palindrome-6: palindrome r2c6-r2c7-r1c8
palindrome-7: palindrome r4c8-r3c8-r2c9
```

**Standard Sudoku, Cages, Palindromes**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Palindromes: Digits along a palindrome line read the same forwards as backwards along the line.
