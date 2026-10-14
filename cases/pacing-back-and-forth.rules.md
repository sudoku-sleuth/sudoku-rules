---
format: open-rules
title: Pacing Back and Forth
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/62x3b3tw45
case: https://sudoku-sleuth.com/cases/pacing-back-and-forth
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9c5ccc531ddea110fcc2fcf5be073d91
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1-r4c1 total 8 connected true
cage-2: cage r8c6-r8c7-r9c6 total 15 connected true
cage-3: cage r1c4-r2c3-r2c4 total 9 connected true
cage-4: cage r6c9-r7c9-r8c9 total 16 connected true
cage-5: cage r2c5-r3c4-r3c5 total 21 connected true
cage-6: cage r5c8-r6c8-r7c8 total 22 connected true
cage-7: cage r7c5-r7c6-r8c5 total 8 connected true
cage-8: cage r3c2-r4c2-r5c2 total 10 connected true
cage-9: cage r4c7-r5c7-r6c7 total 12 connected true
cage-10: cage r3c6-r4c5-r4c6 total 17 connected true
cage-11: cage r4c3-r5c3-r6c3 total 16 connected true
cage-12: cage r6c4-r6c5-r7c4 total 18 connected true
cage-13: cage r5c4-r5c5-r5c6 total 10 connected true
kropki-1: kropki r8c6-r9c6 black
kropki-2: kropki r5c3-r5c4 black
kropki-3: kropki r3c4-r3c5 black
palindrome-1: palindrome r2c1-r3c2-r4c3-r5c4-r6c5-r7c6-r8c7
palindrome-2: palindrome r2c3-r3c4-r4c5-r5c6-r6c7-r7c8-r8c9
palindrome-3: palindrome r4c1-r5c2-r6c3-r7c4-r8c5-r9c6
palindrome-4: palindrome r1c4-r2c5-r3c6-r4c7-r5c8-r6c9
palindrome-5: palindrome r6c1-r7c2-r8c3
palindrome-6: palindrome r2c7-r3c8-r4c9
```

**Standard Sudoku, Palindromes, Cages, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Palindromes: Digits along a palindrome line read the same forwards as backwards along the line.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Ratio pairs: Cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.

For more of our puzzles, visit https://missingdeck.net
