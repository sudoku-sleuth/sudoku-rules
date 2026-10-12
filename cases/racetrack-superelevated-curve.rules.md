---
format: open-rules
title: Racetrack Superelevated Curve
setter: Will Power
source: https://sudokupad.app/tqlaqplmwh
case: https://sudoku-sleuth.com/cases/racetrack-superelevated-curve
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
cage-1: cage r8c6-r9c6 total 11 connected true
cage-2: cage r7c5-r8c5-r9c5 total 12 connected true
cage-3: cage r6c4-r7c4-r8c4 total 13 connected true
cage-4: cage r5c1-r5c2 total 8 connected true
kropki-1: kropki r7c2-r8c2 colour "white"
kropki-2: kropki r7c1-r7c2 colour "white"
kropki-3: kropki r7c1-r8c1 colour "white"
kropki-4: kropki r8c1-r9c1 colour "white"
kropki-5: kropki r9c1-r9c2 colour "white"
kropki-6: kropki r9c2-r9c3 colour "white"
kropki-7: kropki r7c9-r8c9 colour "white"
kropki-8: kropki r8c9-r9c9 colour "white"
kropki-9: kropki r9c8-r9c9 colour "white"
kropki-10: kropki r8c8-r9c8 colour "white"
kropki-11: kropki r8c7-r8c8 colour "white"
kropki-12: kropki r7c7-r8c7 colour "white"
kropki-13: kropki r1c1-r2c1 colour "white"
kropki-14: kropki r2c1-r2c2 colour "white"
kropki-15: kropki r1c2-r2c2 colour "white"
kropki-16: kropki r1c3-r2c3 colour "white"
kropki-17: kropki r2c3-r3c3 colour "white"
kropki-18: kropki r1c2-r1c3 colour "white"
kropki-19: kropki r2c8-r3c8 colour "white"
kropki-20: kropki r3c7-r3c8 colour "white"
kropki-21: kropki r2c7-r3c7 colour "white"
kropki-22: kropki r1c7-r2c7 colour "white"
kropki-23: kropki r1c7-r1c8 colour "white"
kropki-24: kropki r1c9-r2c9 colour "white"
kropki-25: kropki r2c9-r3c9 colour "white"
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[5.5,1.5],[6.5,2.5],[7.5,3.5],[8.5,4.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[3.5,1.5],[4.5,2.5],[5.5,3.5],[6.5,4.5],[7.5,5.5],[8.5,6.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[7.5,4.5],[6.5,3.5],[5.5,2.5],[4.5,1.5],[3.5,0.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
```

Normal Sudoku rules apply. PALINDROMES(+)- Numbers the same distance from the ends of a gray line are the same number. In addition, neighbors on palindromes are either the same number or consecutive. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.
