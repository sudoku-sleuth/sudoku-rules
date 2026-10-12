---
format: open-rules
title: Ropetide
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/kkdcb4rrku
case: https://sudoku-sleuth.com/cases/ropetide
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
palindrome-1: palindrome r2c1-r2c2-r2c3-r3c4-r3c5-r3c6
palindrome-2: palindrome r2c4-r2c5-r2c6-r3c7-r3c8-r3c9
palindrome-3: palindrome r6c1-r6c2-r6c3-r7c4-r7c5-r7c6
palindrome-4: palindrome r6c4-r6c5-r6c6-r7c7-r7c8-r7c9
palindrome-5: palindrome r6c9-r6c8-r6c7-r5c6-r5c5-r5c4
palindrome-6: palindrome r7c1-r7c2-r7c3-r8c4-r8c5-r8c6
quadruple-1: quadruple r2c6-r2c7-r3c6-r3c7 digits [3,4]
quadruple-2: quadruple r2c3-r2c4-r3c3-r3c4 digits [4,5,6]
quadruple-3: quadruple r1c1-r1c2-r2c1-r2c2 digits [2,8]
quadruple-4: quadruple r8c8-r8c9-r9c8-r9c9 digits [7,8,9]
quadruple-5: quadruple r1c8-r1c9-r2c8-r2c9 digits [1,2,3]
quadruple-6: quadruple r7c5-r7c6-r8c5-r8c6 digits [1,5]
quadruple-7: quadruple r7c4-r7c5-r8c4-r8c5 digits [3]
quadruple-8: quadruple r6c8-r6c9-r7c8-r7c9 digits [1,4,6]
quadruple-9: quadruple r8c1-r8c2-r9c1-r9c2 digits [3,4,5,6]
quadruple-10: quadruple r6c1-r6c2-r7c1-r7c2 digits [7]
quadruple-11: quadruple r4c2-r4c3-r5c2-r5c3 digits [9]
```

**Sudoku, Palindromes, Quadruples**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Palindromes: Digits along a palindrome line read the same forwards as backwards along the line.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
