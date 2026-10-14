---
format: open-rules
title: Kaleidoscope
setter: Will Power
source: https://sudokupad.app/9aniav902j
case: https://sudoku-sleuth.com/cases/kaleidoscope
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 04364b0a166af6eb0bd6b101598c1c27
---

```rules
sudoku 9x9
cage-1: cage r6c6-r7c6-r8c6 total 19 connected true
cage-2: cage r6c2-r6c3-r6c4 total 14 connected true
cage-3: cage r2c4-r3c4-r4c4 total 17 connected true
cage-4: cage r4c6-r4c7-r4c8 total 8 connected true
cage-5: cage r1c7-r2c7 total 7 connected true
cage-6: cage r8c2-r9c2 total 8 connected true
kropki-1: kropki r1c7-r1c8 black
kropki-2: kropki r5c8-r5c9 black
kropki-3: kropki r2c1-r3c1 black
kropki-4: kropki r6c3-r7c3 black
kropki-5: kropki r5c5-r5c6 black
kropki-6: kropki r5c4-r6c4 black
```

```drawing
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[6.5,5.5],[7.5,5.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[4.5,1.5],[5.5,1.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[3.5,6.5],[3.5,7.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[6.5,3.5],[7.5,3.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[5.5,6.5],[5.5,5.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[2.5,5.5],[3.5,5.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[3.5,2.5],[3.5,1.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[5.5,2.5],[5.5,3.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[4.5,7.5],[5.5,7.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[2.5,3.5],[1.5,3.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[1.5,4.5],[1.5,5.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,6.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[1.5,6.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,7.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[8.5,1.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[7.5,1.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[7.5,0.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[8.5,1.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[7.5,4.5],[7.5,5.5]],"color":"#BFBFBF","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. SUMMING LINES- Lines each have a VALUE, according to their color. All colors have a different VALUE. Cell numbers are equal to the sum of all line values that go to the cell's center. Example: Row 2 Column 4 is equal to the values of green + purple. Row 3 Column 4 is just the value of green. Cells with no lines can be any number. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
