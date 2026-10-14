---
format: open-rules
title: Dutch Flat Mates (Minmax Quads)
setter: sujoyku
source: https://sudokupad.app/6r3l1axd7m
case: https://sudoku-sleuth.com/cases/dutch-flat-mates-minmax-quads
library: https://rules.sudoku-sleuth.com/
status: read
exported: 43b0a7f93a7a166889c539706f947ebd
---

```rules
sudoku 9x9
flat-mates digit 5 above 1 below 9
quadruple-1: quadruple r2c3-r2c4-r3c3-r3c4 digits [2,5]
quadruple-2: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,6]
quadruple-3: quadruple r2c5-r2c6-r3c5-r3c6 digits [1,7]
quadruple-4: quadruple r1c7-r1c8-r2c7-r2c8 digits [3,8]
quadruple-5: quadruple r8c3-r8c4-r9c3-r9c4 digits [5,7]
quadruple-6: quadruple r8c6-r8c7-r9c6-r9c7 digits [4,8]
quadruple-7: quadruple r5c5-r5c6-r6c5-r6c6 digits [2,6]
quadruple-8: quadruple r4c2-r4c3-r5c2-r5c3 digits [2,9]
quadruple-9: quadruple r7c8-r7c9-r8c8-r8c9 digits [2,5]
quadruple-10: quadruple r6c1-r6c2-r7c1-r7c2 digits [4,8]
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 box has to contain the digits from 1 to 9 once each.

- Dutch Flat Mates: Each 5 in the grid either has a 1 directly above or a 9 directly below it. (It may have both, but it does not need both.) 

- Minmax Quads: Digits in a circle must appear in one of the four surrounding cells and either be the lowest or the highest digit in these four cells. (If there is no conflict with other rules, digits around a quad clue may repeat. In particular, the minimum and maximum may appear more than once.)
