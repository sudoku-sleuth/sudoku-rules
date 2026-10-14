---
format: open-rules
title: Sesame Seed Bun
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/lph7lf7kjj
case: https://sudoku-sleuth.com/cases/sesame-seed-bun
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0a8faea8dc58a3c50fe24948a340b6ab
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c2-r3c3 total 8 connected true
cage-2: cage r7c7-r7c8-r8c7 total 22 connected true
cage-3: cage r9c3-r9c4-r9c5 total 8 connected true
cage-4: cage r4c9-r5c9 total 13 connected true
cage-5: cage r1c5-r1c6-r1c7 total 20 connected true
cage-6: cage r5c1-r6c1 total 6 connected true
cage-7: cage r6c4-r6c5 total 12 connected true
cage-8: cage r8c1-r8c2 total 7 connected true
cage-9: cage r4c5-r4c6 total 7 connected true
cage-10: cage r2c8-r2c9 total 9 connected true
kropki-1: kropki r8c2-r9c2 black
kropki-2: kropki r6c1-r7c1 black
kropki-3: kropki r1c6-r2c6 black
kropki-4: kropki r7c5-r7c6 black
kropki-5: kropki r4c8-r4c9 black
palindrome-1: palindrome r5c1-r4c1-r3c2-r2c3-r1c4-r1c5-r1c6
palindrome-2: palindrome r5c9-r6c9-r7c8-r8c7-r9c6-r9c5-r9c4
palindrome-3: palindrome r8c2-r7c3-r6c4
palindrome-4: palindrome r4c6-r3c7-r2c8
```

**Sudoku, Palindromes, Cages, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Palindromes: Digits along a palindrome line read the same forwards as backwards along the line.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Ratio dots: Digits separated by a black dot are in a 2:1 ratio.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
