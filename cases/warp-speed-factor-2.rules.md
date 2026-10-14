---
format: open-rules
title: Warp Speed Factor 2
setter: The Bard
source: https://sudokupad.app/rju9xklktj
case: https://sudoku-sleuth.com/cases/warp-speed-factor-2
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 84ba29d4e78ae3baed4569cc669c0331
---

```rules
sudoku 9x9
cage-1: cage r3c4-r3c5-r3c6-r3c7-r4c4-r4c7-r5c7-r6c6-r6c7 connected true
cage-2: cage r8c7-r9c7-r9c8 total 13 connected true
cage-3: cage r1c2-r1c3-r2c3 total 14 connected true
anti-knight
whispers-1: whispers r5c2-r6c1 gap 5
whispers-2: whispers r6c9-r7c8-r8c7 gap 5
whispers-3: whispers r2c9-r3c8 gap 5
palindrome-1: palindrome r1c7-r2c6
palindrome-2: palindrome r5c9-r6c8-r7c7-r8c6
palindrome-3: palindrome r3c2-r4c1
palindrome-4: palindrome r8c4-r9c3
palindrome-5: palindrome r6c5-r7c4-r8c3
palindrome-6: palindrome r5c5-r6c4-r7c3
quadruple r8c1-r8c2-r9c1-r9c2 digits [4,5,7,8]
```

```drawing
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"KM","textColor":"#000000","fontSize":15}}
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.

Knights Move: Digits separated by a chess knights move cannot contain the same digit.

German Whispers: Consecutive digits along the green line differ by at least 5.

Quadruples: digits in the small white circle must appear in one of the four surrounding cells.

Palindrome: Digits along the grey line read the same forward and backwards.

Killer cages: Digits in cages add up to the total in the corner if given and cannot repeat.
