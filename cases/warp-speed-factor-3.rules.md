---
format: open-rules
title: Warp Speed Factor 3
setter: The Bard
source: https://sudokupad.app/4u0frp8m7x
case: https://sudoku-sleuth.com/cases/warp-speed-factor-3
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 669dd0ce4ed51547d45c4425cebed082
---

```rules
sudoku 9x9
cage-1: cage r3c4-r3c5-r4c5-r5c2-r5c5-r6c2-r6c3-r6c4-r6c5 connected true
cage-2: cage r8c9-r9c8-r9c9 total 14 connected true
cage-3: cage r8c2-r9c1-r9c2 total 21 connected true
anti-knight
whispers-1: whispers r2c8-r3c9 gap 5
whispers-2: whispers r1c1-r2c2-r3c3 gap 5
whispers-3: whispers r7c5-r8c6 gap 5
whispers-4: whispers r8c4-r9c5 gap 5
whispers-5: whispers r1c5-r2c6 gap 5
palindrome-1: palindrome r1c6-r2c7
palindrome-2: palindrome r5c6-r6c7
palindrome-3: palindrome r6c6-r7c7
palindrome-4: palindrome r8c6-r9c7
palindrome-5: palindrome r6c1-r7c2-r8c3
palindrome-6: palindrome r2c1-r3c2-r4c3
palindrome-7: palindrome r1c3-r2c4
palindrome-8: palindrome r3c7-r4c8-r5c9
palindrome-9: palindrome r5c7-r6c8-r7c9
palindrome-10: palindrome r3c1-r4c2-r5c3
quadruple-1: quadruple r3c7-r3c8-r4c7-r4c8 digits [7,7]
quadruple-2: quadruple r3c6-r3c7-r4c6-r4c7 digits [8,8]
```

```drawing
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"KM","textColor":"#000000","fontSize":15}}
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.

Knights Move: Digits separated by a chess knights move cannot contain the same digit.

German Whispers: Consecutive digits along the green line differ by at least 5.

Quadruples: digits in the small white circle must appear in one of the four surrounding cells.

Palindrome: Digits along the grey line read the same forward and backwards.

Killer cages: Digits in cages add up to the total in the corner if given and cannot repeat.
