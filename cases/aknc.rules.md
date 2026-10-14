---
format: open-rules
title: AKNC
setter: Chip Sounder
source: https://sudokupad.app/joylux5b8i
case: https://sudoku-sleuth.com/cases/aknc
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=3 r1c7=4 r2c9=6 r4c5=8 r6c7=5 r7c1=5 r9c6=4 r9c8=3
exported: 8d02ba8f43b51d87865a4f97362ebb9e
---

```rules
sudoku 9x9
cage r5c4-r6c4 total 5 connected true
anti-knight
```

Conflict checker off is requested for this set. Somebody has eaten all of the smoreos and as punishment, the marshmallows have been banned and the oreos have been hidden away from view.
Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Cells separated by a knight's move (in chess) cannot contain the same digit.
Any dominoes in the grid are forbidden to be consecutive. 
All of the oreos (black dots) are hidden from you. Dominoes may have a 1:2 ratio (i.e. 4 and 8 can go next each other because it is not a negative constraint, you just can't see the dots!). 
Digits in a dotted cage sum to the total given in the top left corner of the cage without repeating a digit.
