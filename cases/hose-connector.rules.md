---
format: open-rules
title: Hose Connector
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/k7nz08zisq
case: https://sudoku-sleuth.com/cases/hose-connector
library: https://rules.sudoku-sleuth.com/
status: read
exported: 030b9eb28c99ee342d377a4b1803e811
---

```rules
sudoku 9x9
palindrome-1: palindrome r4c1-r3c2-r3c3-r2c4-r2c5-r3c6
palindrome-2: palindrome r6c1-r7c2-r7c3-r8c4-r8c5-r7c6
palindrome-3: palindrome r6c9-r7c8-r7c7-r8c6-r9c5
palindrome-4: palindrome r4c9-r3c8-r3c7-r2c6-r1c5
little-killer-1: little-killer r9c4-r8c3-r7c2-r6c1 sum 8
little-killer-2: little-killer r4c1-r3c2-r2c3-r1c4 sum 7
little-killer-3: little-killer r6c9-r7c8-r8c7-r9c6 sum 16
little-killer-4: little-killer r1c6-r2c7-r3c8-r4c9 sum 19
little-killer-5: little-killer r1c4-r2c5-r3c6-r4c7-r5c8-r6c9 sum 13
little-killer-6: little-killer r4c9-r5c8-r6c7-r7c6-r8c5-r9c4 sum 18
little-killer-7: little-killer r6c1-r5c2-r4c3-r3c4-r2c5-r1c6 sum 24
little-killer-8: little-killer r1c8-r2c9 sum 11
little-killer-9: little-killer r2c1-r1c2 sum 14
little-killer-10: little-killer r8c9-r9c8 sum 17
```

**Sudoku, Diagonal Sums, Palindromes**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Diagonal sums: Clues outside the grid are the sum of the digits along the indicated diagonal.
- Palindromes: Digits along a palindrome line read the same forwards as backwards along the line.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
