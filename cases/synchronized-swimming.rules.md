---
format: open-rules
title: Synchronized Swimming
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/q8wt20o5y5
case: https://sudoku-sleuth.com/cases/synchronized-swimming
library: https://rules.sudoku-sleuth.com/
status: read
exported: eb9e64cdaa7cc8a1865e430c8cb40965
---

```rules
sudoku 9x9
cage-1: cage r1c5-r2c5 total 6 connected true
cage-2: cage r3c5-r4c5 total 5 connected true
cage-3: cage r5c5-r6c5 total 13 connected true
cage-4: cage r7c5-r8c5 total 15 connected true
cage-5: cage r1c1-r1c2 total 9 connected true
cage-6: cage r2c8-r2c9 total 9 connected true
cage-7: cage r3c1-r3c2 total 10 connected true
cage-8: cage r5c1-r5c2 total 11 connected true
cage-9: cage r4c8-r4c9 total 8 connected true
cage-10: cage r6c8-r6c9 total 6 connected true
cage-11: cage r8c8-r8c9 total 11 connected true
cage-12: cage r7c1-r7c2 total 11 connected true
cage-13: cage r9c4-r9c5-r9c6 total 9 connected true
cage-14: cage r6c3-r6c4 total 13 connected true
cage-15: cage r5c6-r5c7 total 8 connected true
palindrome-1: palindrome r1c2-r1c3-r2c4-r2c5
palindrome-2: palindrome r3c5-r3c6-r4c7-r4c8
palindrome-3: palindrome r3c2-r3c3-r4c4-r4c5
palindrome-4: palindrome r5c5-r5c6-r6c7-r6c8
palindrome-5: palindrome r5c2-r5c3-r6c4-r6c5
palindrome-6: palindrome r7c5-r7c6-r8c7-r8c8
palindrome-7: palindrome r7c2-r7c3-r8c4-r8c5
palindrome-8: palindrome r1c5-r1c6-r2c7-r2c8
```

**Standard Sudoku, Palindromes, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Palindromes: Digits along a palindrome line read the same forwards as backwards along the line.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
