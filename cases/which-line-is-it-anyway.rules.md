---
format: open-rules
title: Which Line Is It Anyway?
setter: Marty Sears
source: https://sudokupad.app/e2g5e6ewdn
case: https://sudoku-sleuth.com/cases/which-line-is-it-anyway
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
givens: r5c5=5
exported: 41cb80ac084ef674229fcebf46a3b5da
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,5.5],[1.5,6.5],[1.5,7.5],[0.5,7.5],[1.5,8.5],[0.5,8.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[3.5,7.5],[3.5,8.5],[4.5,8.5],[5.5,8.5],[5.5,7.5],[5.5,6.5],[6.5,7.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[7.5,8.5],[6.5,8.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[6.5,5.5],[7.5,4.5],[6.5,3.5],[7.5,3.5],[7.5,2.5],[8.5,3.5],[8.5,4.5],[7.5,5.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[5.5,0.5],[4.5,0.5],[3.5,0.5],[3.5,1.5],[3.5,2.5],[4.5,2.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[5.5,1.5],[5.5,2.5],[5.5,3.5],[4.5,3.5],[3.5,3.5],[2.5,3.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[1.5,1.5],[0.5,2.5],[1.5,3.5],[1.5,4.5],[1.5,5.5],[2.5,6.5],[3.5,5.5],[4.5,5.5],[4.5,6.5],[4.5,7.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
```

Normal Sudoku rules apply. Each of the seven line types listed below appears once in the grid.
You must determine which line is which.

RENBAN LINE: Contains a set of non-repeating consecutive digits, in any order.
GERMAN WHISPER LINE: Adjacent digits along the line have a difference of at least 5.
THERMOMETER: Digits are arranged in ascending order, from one end to the other, without repeats.
REGION SUM LINE: Along the line, digits within each 3x3 box have the same total. The line visits at least two different boxes.
PALINDROME LINE: The sequence of digits along the line reads the same in either direction.
PARITY LINE: All digits on the line have the same parity.
UNLUCKY LINE: Adjacent digits along the line sum to at least 13.




Exported from sudokulab.net
