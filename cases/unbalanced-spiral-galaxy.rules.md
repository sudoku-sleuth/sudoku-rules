---
format: open-rules
title: Unbalanced Spiral Galaxy
setter: Will Power
source: https://sudokupad.app/iy01433dbl
case: https://sudoku-sleuth.com/cases/unbalanced-spiral-galaxy
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 617d3dbe3c84694fff9dedae46a7b327
---

```rules
sudoku 9x9
cage-1: cage r2c3-r2c4-r2c5-r2c6-r3c3-r4c3-r5c3-r6c3-r6c4 total 67 repeats true connected true
cage-2: cage r4c6-r4c7-r5c7-r6c7-r7c7-r8c4-r8c5-r8c6-r8c7 total 65 repeats true connected true
kropki-1: kropki r6c3-r6c4 white
kropki-2: kropki r5c3-r6c3 white
kropki-3: kropki r4c3-r5c3 white
kropki-4: kropki r3c3-r4c3 white
kropki-5: kropki r2c3-r3c3 white
kropki-6: kropki r2c4-r2c5 white
kropki-7: kropki r2c5-r2c6 white
kropki-8: kropki r4c7-r5c7 white
kropki-9: kropki r5c7-r6c7 white
kropki-10: kropki r6c7-r7c7 white
kropki-11: kropki r7c7-r8c7 white
kropki-12: kropki r8c6-r8c7 white
kropki-13: kropki r8c5-r8c6 white
kropki-14: kropki r8c4-r8c5 white
kropki-15: kropki r1c4-r1c5 white
kropki-16: kropki r3c7-r3c8 black
kropki-17: kropki r3c5-r3c6 black
kropki-18: kropki r4c4-r4c5 black
kropki-19: kropki r7c2-r7c3 black
kropki-20: kropki r7c4-r7c5 black
kropki-21: kropki r6c5-r6c6 black
kropki-22: kropki r4c1-r4c2 black
kropki-23: kropki r5c2-r6c2 black
kropki-24: kropki r2c1-r2c2 black
kropki-25: kropki r6c8-r6c9 black
kropki-26: kropki r8c9-r9c9 black
kropki-27: kropki r1c6-r1c7 black
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[2.5,3.5],[2.5,4.5],[2.5,5.5],[2.5,6.5],[2.5,7.5],[3.5,7.5],[4.5,7.5],[5.5,7.5]],"color":"#F0F0F0","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[6.5,5.5],[6.5,4.5],[6.5,3.5],[6.5,2.5],[6.5,1.5],[5.5,1.5],[4.5,1.5],[3.5,1.5]],"color":"#F0F0F0","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[5.5,2.5],[4.5,2.5],[3.5,2.5],[2.5,2.5],[1.5,2.5],[1.5,3.5],[1.5,4.5],[1.5,5.5]],"color":"#F0F0F0","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[3.5,6.5],[4.5,6.5],[5.5,6.5],[6.5,6.5],[7.5,6.5],[7.5,5.5],[7.5,4.5],[7.5,3.5]],"color":"#F0F0F0","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply.

DASHED REGIONS- Numbers in dashed regions sum to the number in the top left corner of the region. Numbers may repeat in regions, if other rules allow.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.

The light gray lines show the galaxy shape, but do not affect the puzzle.
