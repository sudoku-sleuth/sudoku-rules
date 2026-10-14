---
format: open-rules
title: CarabinerenibaraC
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zennhfif3c
case: https://sudoku-sleuth.com/cases/carabinerenibarac
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=6 r9c1=4
exported: 6b5cc5be1ad4e7e8137a5ce80ae33925
---

```rules
sudoku 9x9
cage-1: cage r4c2-r4c3-r4c4 total 8 connected true
cage-2: cage r6c6-r6c7-r6c8 total 16 connected true
cage-3: cage r2c6-r3c6 total 15 connected true
cage-4: cage r7c4-r8c4 total 5 connected true
cage-5: cage r5c2-r6c2 total 13 connected true
cage-6: cage r3c7-r4c7 total 11 connected true
cage-7: cage r4c8-r5c8 total 6 connected true
cage-8: cage r6c3-r7c3 total 6 connected true
cage-9: cage r4c9-r5c9-r6c9 total 16 connected true
palindrome-1: palindrome r4c1-r3c1-r2c2-r1c3-r1c4-r1c5-r2c6
palindrome-2: palindrome r6c9-r7c9-r8c8-r9c7-r9c6-r9c5-r8c4
palindrome-3: palindrome r4c2-r5c2-r6c3-r7c4-r7c5-r6c6
palindrome-4: palindrome r6c8-r5c8-r4c7-r3c6-r3c5-r4c4
palindrome-5: palindrome r4c9-r4c8-r3c7-r2c7-r1c7
palindrome-6: palindrome r6c1-r6c2-r7c3-r8c3-r9c3
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Palindromes: Digits along a palindrome line read the same forwards as backwards along the line.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
