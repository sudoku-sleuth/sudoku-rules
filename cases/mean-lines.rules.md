---
format: open-rules
title: Mean Lines
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/codw2iffw2
case: https://sudoku-sleuth.com/cases/mean-lines
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c7=8 r2c5=4 r3c9=9 r5c2=6 r6c7=1 r7c1=5 r7c6=2 r8c8=3 r9c3=7
---

```rules
sudoku 9x9
mean-lines lines [["r1c1","r1c2"],["r2c1","r2c2"],["r3c1","r3c2"],["r1c3","r2c3"],["r3c4","r3c5","r3c6"],["r3c7","r2c8","r1c9"],["r4c3","r5c3","r6c3"],["r7c3","r8c2","r9c1"],["r2c4","r1c5","r2c6"],["r4c2","r5c1","r6c2"],["r3c3","r4c4","r5c5"],["r4c6","r5c6","r6c6","r6c5","r6c4"],["r6c8","r7c7","r8c6"]]
```

• Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
• Mean Lines: The gold lines are Mean Lines. The arithmetic mean (average) of the values on each line is the same.  For example, if one line had average 7, then all lines would have average 7.  The arithmetic mean is the sum of the digits on the line divided by the number of cells on the line.
