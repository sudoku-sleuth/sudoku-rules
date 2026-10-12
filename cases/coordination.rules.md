---
format: open-rules
title: Coordination
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ka8mi54q2q
case: https://sudoku-sleuth.com/cases/coordination
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c2=4 r5c7=7 r6c6=5 r7c1=3 r9c4=8
---

```rules
sudoku 9x9
coordinate-arrows arrows [["r1c1","r2c2"],["r3c1","r4c2"],["r3c4","r4c5"],["r3c5","r4c6"],["r5c8","r6c9"],["r1c3","r2c2"],["r3c3","r4c2"],["r8c9","r9c8"],["r3c1","r2c2"],["r5c1","r4c2"],["r3c3","r2c2"],["r5c3","r4c2"],["r8c9","r7c8"]]
```

**Sudoku, Coordinate Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Coordinate Arrows: Digits on an arrow spell out the coordinates for the digit that is their sum. The base of the arrow indicates the row number and the tip of the arrow indicates the column number. For example,  an arrow with 1 on the base and 4 on the tip indicates there is a 5 in r1c4. EACH ARROW INDICATES A DIFFERENT COORDINATE PAIR. Digits may repeat on an arrow if allowed by other rules.
