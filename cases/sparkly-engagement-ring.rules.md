---
format: open-rules
title: Sparkly Engagement Ring
setter: Will Power
source: https://sudokupad.app/sx3ee1ck1v
case: https://sudoku-sleuth.com/cases/sparkly-engagement-ring
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage r2c3-r3c3 total 14 connected true
kropki-1: kropki r3c1-r4c1 colour "white"
kropki-2: kropki r4c1-r4c2 colour "white"
kropki-3: kropki r3c2-r4c2 colour "white"
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[4.5,4.5],[4.5,5.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[4.5,4.5],[5.5,4.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[4.5,6.5],[5.5,5.5],[5.5,4.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[6.5,4.5],[5.5,3.5],[4.5,3.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[4.5,2.5],[3.5,3.5],[3.5,4.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,4.5],[3.5,5.5],[4.5,5.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,3.5],[2.5,2.5]],"color":"#BFBFBF","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[3.5,1.5]],"color":"#BFBFBF","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,3.5],[6.5,2.5],[5.5,1.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[2.5,6.5],[1.5,5.5],[0.5,4.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[6.5,6.5],[7.5,5.5],[8.5,4.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[8.5,8.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[7.5,7.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[8.5,8.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,1.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[0.5,0.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[1.5,1.5]],"color":"#FFA666","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. SUMMING LINES- Lines each have a VALUE, according to their color. All colors have a different VALUE. Cell numbers are equal to the sum of all line values that go to the cell's center. Example: Row 5 Column 6 is equal to the values of red + orange. Row 5 Column 5 is just the value of red (one time, not two). KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown. KILLER CAGE- The numbers in the cage sum to the number in the top left corner of the cage.
