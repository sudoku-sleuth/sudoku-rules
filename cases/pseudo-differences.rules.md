---
format: open-rules
title: Pseudo Differences
setter: Marty Sears
source: https://sudokupad.app/6gii5nrtz0
case: https://sudoku-sleuth.com/cases/pseudo-differences
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[0.7,6.3]],"color":"#11fdff","thickness":10,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[7.5,7.5],[4.5,4.5],[3.5,4.5],[1.5,6.5]],"color":"#11fdff","thickness":10,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[4.5,8.5],[5.3,7.7]],"color":"#11fdff","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.3,7.3],[4.5,6.5],[3.5,6.5]],"color":"#11fdff","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[6.5,1.5],[7.5,2.5],[7.5,3.5],[8.5,4.5],[8.5,3.5]],"color":"#11fdff","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[2.5,0.5],[2.5,2.5],[1.5,3.5]],"color":"#11fdff","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[7.5,6.5],[6.5,5.5],[6.5,4.5],[5.5,3.5],[6.5,3.5]],"color":"#11fdff","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[4.5,0.5],[4.5,1.5]],"color":"#11fdff","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.7,6.7],[1.1,7.1]],"color":"#11fdff","thickness":10,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1,7],[1.5,7.5],[0.5,7.5]],"color":"#11fdff","thickness":10,"rounded":true}}
```

• Normal sudoku rules apply.
• Every row, column and box contains exactly one 'pseudo cell'. The nine pseudo cells contain a complete set of the digits 1-9.
• The real value of a pseudo cell is calculated by adding its row number to its column number. Eg: if there is a pseudo cell in r5c6, it has the value of 11 (regardless of which digit appears in that cell.)
• The values of every pair of adjacent cells along a turquoise line have the same difference. In this puzzle, this 'same difference' is unique for each line. Ie: adjacent values on one line will never have the same difference as adjacent values on another line.
