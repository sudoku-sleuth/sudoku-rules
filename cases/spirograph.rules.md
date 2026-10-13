---
format: open-rules
title: Spirograph
setter: Tingo
source: https://tinyurl.com/4wp5fsb7
case: https://sudoku-sleuth.com/cases/spirograph
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some source features still need to be checked against our reading.
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
---

```rules
sudoku 9x9
cage-1: cage r2c1-r2c2 total 9 connected true
cage-2: cage r2c3-r2c4 total 9 connected true
cage-3: cage r3c8-r4c8 total 10 connected true
cage-4: cage r1c8-r2c8 total 9 connected true
cage-5: cage r8c8-r8c9 total 11 connected true
cage-6: cage r8c6-r8c7 total 11 connected true
cage-7: cage r6c2-r7c2 total 13 connected true
cage-8: cage r8c2-r9c2 total 6 connected true
pair-1: pair r9c6-r9c7 sum 10
pair-2: pair r3c9-r4c9 sum 10
pair-3: pair r1c3-r1c4 sum 10
pair-4: pair r6c1-r7c1 sum 10
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,5.5],[1.5,6.5],[2.5,7.5],[3.5,7.5],[4.5,7.5],[5.5,6.5],[5.5,5.5],[4.5,4.5]],"color":"#999999","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[3.5,0.5],[2.5,1.5],[1.5,2.5],[1.5,3.5],[1.5,4.5],[2.5,5.5],[3.5,5.5],[4.5,4.5]],"color":"#999999","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[8.5,3.5],[7.5,2.5],[6.5,1.5],[5.5,1.5],[4.5,1.5],[3.5,2.5],[3.5,3.5],[4.5,4.5]],"color":"#999999","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[5.5,8.5],[6.5,7.5],[7.5,6.5],[7.5,5.5],[7.5,4.5],[6.5,3.5],[5.5,3.5],[4.5,4.5]],"color":"#999999","thickness":8,"rounded":true}}
```

Normal Sudoku Rules Apply
The spiral is comprised of 4 lines, each of length 9, that share their origin digit (r5c5). The line type must be determined by the solver. There is one line of each of the following types:
German Whispers lines - Adjacent digits must differ by at least 5.
Region sums line - Digits along a line must sum to the same total in each region the line enters.  If a line enters a region multiple times, each instance is calculated separately.
Renban line - all digits along the line are consecutive in any order
Thermometer - digits must strictly increase from the bulb end. Furthermore, the center digit of the puzzle acts as the bulb.
Cells joined by Xs sum to 10. Not all Xs are given.
Digits in cages must sum to the value in the top left corner of the cage. Digits cannot repeat within cages. Additionally, the 2-cell cage in column 8, rows 3 and 4, has a value of 10.
