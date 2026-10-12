---
format: open-rules
title: In the Mail
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/2cp6xc8dq8
case: https://sudoku-sleuth.com/cases/in-the-mail
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c1-r5c1 total 6 connected true
cage-2: cage r2c5-r2c6 total 14 connected true
cage-3: cage r1c9-r2c9 total 13 connected true
cage-4: cage r3c1-r3c2 total 10 connected true
cage-5: cage r1c4-r2c4 total 13 connected true
cage-6: cage r8c4-r8c5 total 7 connected true
cage-7: cage r8c1-r9c1 total 9 connected true
cage-8: cage r5c9-r6c9 total 13 connected true
cage-9: cage r5c5-r6c5 total 13 connected true
cage-10: cage r4c4-r4c5 total 12 connected true
cage-11: cage r6c2-r7c2 total 12 connected true
cage-12: cage r8c6-r8c7-r9c6 total 14 connected true
palindrome-1: palindrome r4c1-r3c2-r2c3-r1c4-r2c5
palindrome-2: palindrome r4c5-r5c6-r4c7-r3c8-r2c9
palindrome-3: palindrome r8c1-r7c2-r6c3-r5c4-r6c5
palindrome-4: palindrome r8c5-r9c6-r8c7-r7c8-r6c9
```

**Standard Sudoku, Palindromes, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Palindromes: Digits along a palindrome line read the same forwards as backwards along the line.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.
