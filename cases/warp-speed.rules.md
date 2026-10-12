---
format: open-rules
title: Warp Speed
setter: The Bard
source: https://sudokupad.app/z7ls0c722e
case: https://sudoku-sleuth.com/cases/warp-speed
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r6c1-r6c2-r6c3-r6c4-r7c1-r7c4-r8c4-r9c3-r9c4 connected true
cage-2: cage r1c8-r1c9-r2c9 total 14 connected true
anti-knight
thermo r9c1-r8c2-r7c3
whispers-1: whispers r5c9-r6c8-r7c7-r8c6-r9c5 gap 5
whispers-2: whispers r1c5-r2c4-r3c3-r4c2-r5c1 gap 5
whispers-3: whispers r1c8-r1c9-r2c9 gap 5
whispers-4: whispers r4c5-r5c4 gap 5
palindrome-1: palindrome r3c7-r4c6-r5c5
palindrome-2: palindrome r6c7-r7c6
palindrome-3: palindrome r3c4-r4c3-r5c2
palindrome-4: palindrome r3c9-r4c8
palindrome-5: palindrome r1c7-r2c6-r3c5-r4c4-r5c3
palindrome-6: palindrome r1c4-r2c3
quadruple-1: quadruple r8c8-r8c9-r9c8-r9c9 digits [1,2,8,9]
quadruple-2: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,3,4,6]
quadruple-3: quadruple r2c7-r2c8-r3c7-r3c8 digits [2,7]
quadruple-4: quadruple r7c1-r7c2-r8c1-r8c2 digits [7]
```

```drawing
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"KM","textColor":"#000000","fontSize":14}}
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
Knights Move: Digits separated by a chess knights move cannot contain the same digit.
German Whispers: Consecutive digits along the green line differ by at least 5.
Thermometers: Digits along the grey line increase in value from the bulb end. 
Quadruples: digits in the small white circle must appear in one of the four surrounding cells.
Palindrome: Digits along the grey line read the same forward and backwards. 
Killer cages: Digits in cages add up to the total in the corner if given and cannot repeat.
