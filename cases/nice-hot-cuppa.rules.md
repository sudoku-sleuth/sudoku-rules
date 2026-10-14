---
format: open-rules
title: Nice Hot Cuppa
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/nice-hot-cuppa
library: https://rules.sudoku-sleuth.com/
status: read
exported: 5f58b5cc9f829e91056e729d31b6a6d0
---

```rules
sudoku 9x9
palindrome-1: palindrome r6c1-r7c1-r8c2-r9c3-r9c4-r9c5-r9c6-r8c7-r8c8-r7c9-r6c9-r6c8-r6c7-r7c7
palindrome-2: palindrome r6c2-r5c3-r4c3-r3c2-r2c2-r1c3
palindrome-3: palindrome r6c4-r5c5-r4c5-r3c4-r2c4-r1c5
palindrome-4: palindrome r6c6-r5c7-r4c7-r3c6-r2c6-r1c7
quadruple-1: quadruple r6c1-r6c2-r7c1-r7c2 digits [1,2,3,4]
quadruple-2: quadruple r6c6-r6c7-r7c6-r7c7 digits [3,4,5,6]
quadruple-3: quadruple r3c3-r3c4-r4c3-r4c4 digits [3,4,6,8]
quadruple-4: quadruple r2c7-r2c8-r3c7-r3c8 digits [1,3,7,9]
quadruple-5: quadruple r1c5-r1c6-r2c5-r2c6 digits [4,5,8,9]
quadruple-6: quadruple r4c7-r4c8-r5c7-r5c8 digits [1,2,5,8]
quadruple-7: quadruple r5c5-r5c6-r6c5-r6c6 digits [3,5,7,8]
```

Sometimes you need to take a little time for self-care and sit down with a nice hot cuppa.

Standard sudoku rules apply: Each row, column, and 3x3 box contains each number from 1 to 9 exactly once.

Palindromes: Digits along each gray line read the same forwards as backwards along the line. Digits can repeat along palindromes provided they follow normal sudoku constraints.

Quadruples: Digits shown within a circle must appear in one of the four cells adjacent to the circle.
