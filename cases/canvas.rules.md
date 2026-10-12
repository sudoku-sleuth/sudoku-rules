---
format: open-rules
title: Canvas
setter: Crusader175, FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/canvas
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
diagonal-lines classes "entropy" minLength 7
```

Normal sudoku rules apply. 
The finished grid contains the minimum number of friendly cells, i.e. cell that contain digits which match at least one of the row, column, or box number. 
Every diagonal of length 7 or more is either entropic lines or isotropic lines. On entropic lines, every set of three sequential digits must contain a low digit (1,2,3), a middle digit (4,5,6), and a high digit (7,8,9). On isotropic lines, all digits are from the same entropic rank (low/middle/high).
Each cell is orthogonally adjacent to at least one cell whose digit has a difference of at least 4 with the digit in the original cell.
