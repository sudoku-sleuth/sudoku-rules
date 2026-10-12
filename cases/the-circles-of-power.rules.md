---
format: open-rules
title: The Circles of Power
setter: sujoyku
source: https://sudokupad.app/4ezh2tzh6l
case: https://sudoku-sleuth.com/cases/the-circles-of-power
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
counting-circles r1c1-r1c6-r1c7-r1c8-r2c2-r2c4-r2c6-r2c9-r3c2-r3c4-r4c2-r4c3-r4c4-r4c6-r5c5-r5c7-r6c1-r6c2-r6c4-r6c5-r7c7-r7c8-r8c1-r8c7-r8c9-r9c2-r9c5-r9c8-r9c9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[7.5,7.5],[6.5,7.5],[5.5,7.5],[4.5,6.5],[3.5,6.5],[2.5,6.5],[2.5,5.5],[2.5,4.5],[1.5,4.5],[0.5,4.5],[0.5,3.5],[0.5,2.5],[1.5,2.5],[2.5,2.5],[2.5,1.5],[2.5,0.5],[3.5,0.5],[4.5,0.5],[4.5,1.5],[4.5,2.5],[5.5,2.5],[6.5,2.5],[6.5,3.5],[6.5,4.5],[6.5,5.5],[5.5,5.5]],"color":"#FF9D00","thickness":9.6,"rounded":true}}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Counting Circles: A circled digit indicates exactly how many circles contain that digit.

 - Omnipotent Lines: The orange line is a so-called Omnipotent Line, i.e. each pair of adjacent digits on the line must fulfill either an X, V, white or black Kropki dot clue. In other words, any pair of adjacent digits on the line must sum to 5 or 10, be consecutive or in a 1:2 ratio. (At least one of these constraints must be met, it is allowed that two are fulfilled simultaneously.) For example, a 3 may be adjacent on the line to either a 2 (V or white Kropki dot), a 4 (white Kropki dot), a 6 (black Kropki dot) or a 7 (X).
