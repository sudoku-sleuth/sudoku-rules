---
format: open-rules
title: Dutch Flat Mates (Spooky Division)
setter: sujoyku
source: https://sudokupad.app/jyxp5dro80
case: https://sudoku-sleuth.com/cases/dutch-flat-mates-spooky-division
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 6adc2abbda90d0053592fe8074997810
---

```rules
sudoku 9x9
flat-mates digit 5 above 1 below 9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[0.5,8.5],[2.5,8.5],[2.5,7.5],[3.5,8.5],[4.5,7.5],[3.5,6.5],[5.5,6.5],[5.5,5.5],[1.5,5.5],[1.5,7.5]],"color":"#fb8e87ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[6.5,8.5],[7.5,7.5],[7.5,6.5],[6.5,5.5],[7.5,4.5],[6.5,3.5],[6.5,4.5],[4.5,4.5],[4.5,3.5],[3.5,3.5],[2.5,4.5],[2.5,1.5],[1.5,1.5],[1.5,4.5]],"color":"#fb8e87ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[0.5,0.5],[3.5,0.5],[3.5,1.5],[5.5,1.5],[6.5,2.5],[7.5,2.5],[7.5,1.5],[8.5,1.5],[8.5,0.5]],"color":"#fb8e87ff","thickness":6.4,"rounded":true}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Dutch Flat Mates: Each 5 in the grid either has a 1 directly above or a 9 directly below it. (It may have both, but it does not need both.)
 
- Spooky Division Lines: On each line in the grid, the digits must sum to exactly 81. Moreover, box borders divide lines into segments. If two segments are on the same line, their sums differ by 1 or less (even if the segments are not adjacent).
