---
format: open-rules
title: Warp Speed Factor 4
setter: The Bard
source: https://sudokupad.app/1tb7wv6pns
case: https://sudoku-sleuth.com/cases/warp-speed-factor-4
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c5-r2c6-r3c5-r4c5-r4c8-r5c5-r5c6-r5c7-r5c8 connected true
cage-2: cage r8c7-r9c7-r9c8 total 6 connected true
anti-knight
palindrome-1: palindrome r6c9-r7c8
palindrome-2: palindrome r6c4-r7c3-r8c2
palindrome-3: palindrome r4c7-r3c8-r2c9
palindrome-4: palindrome r7c5-r8c4-r9c3
palindrome-5: palindrome r2c3-r3c2-r4c1
palindrome-6: palindrome r2c4-r3c3
palindrome-7: palindrome r6c5-r7c4-r8c3-r9c2
palindrome-8: palindrome r6c3-r7c2
palindrome-9: palindrome r4c4-r5c3-r6c2
palindrome-10: palindrome r7c7-r8c6-r9c5
whispers-1: whispers r6c7-r7c6 gap 5
whispers-2: whispers r5c2-r6c1 gap 5
whispers-3: whispers r3c4-r4c3 gap 5
quadruple-1: quadruple r1c8-r1c9-r2c8-r2c9 digits [5]
quadruple-2: quadruple r2c2-r2c3-r3c2-r3c3 digits [4]
quadruple-3: quadruple r4c1-r4c2-r5c1-r5c2 digits [7]
quadruple-4: quadruple r7c5-r7c6-r8c5-r8c6 digits [3]
quadruple-5: quadruple r1c2-r1c3-r2c2-r2c3 digits [9]
quadruple-6: quadruple r2c7-r2c8-r3c7-r3c8 digits [6]
quadruple-7: quadruple r3c2-r3c3-r4c2-r4c3 digits [2]
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.

Knights Move: Digits separated by a chess knights move cannot contain the same digit.

German Whispers: Consecutive digits along the green line differ by at least 5.

Quadruples: digits in the small white circle must appear in one of the four surrounding cells.

Palindrome: Digits along the grey line read the same forward and backwards.

Killer cages: Digits in cages add up to the total in the corner if given and cannot repeat.
