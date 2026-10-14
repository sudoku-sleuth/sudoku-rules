---
format: open-rules
title: Just Passing Through
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/e4qeipgtdu
case: https://sudoku-sleuth.com/cases/just-passing-through
library: https://rules.sudoku-sleuth.com/
status: read
exported: 46a63292732972d8be820203e7b3c614
---

```rules
sudoku 9x9
cage-1: cage r4c3-r5c2-r5c3-r6c3 total 13 connected true
cage-2: cage r3c6-r4c5-r4c6-r4c7 total 14 connected true
cage-3: cage r5c8-r6c7-r6c8-r7c8 total 13 connected true
cage-4: cage r7c4-r7c5-r7c6-r8c5 total 15 connected true
cage-5: cage r2c4-r3c2-r3c3-r3c4 total 14 connected true
cage-6: cage r8c7-r8c8-r8c9-r9c8 total 22 connected true
cage-7: cage r6c2-r7c2-r7c3-r8c2 total 23 connected true
cage-8: cage r5c4-r5c5-r6c4 total 8 connected true
cage-9: cage r1c7-r1c8-r2c7 total 7 connected true
cage-10: cage r1c6-r2c6 total 9 connected true
cage-11: cage r3c7-r3c8 total 14 connected true
region-sum-1: region-sum r4c7-r3c8-r4c9-r5c8 segments [["r4c7"],["r3c8"],["r4c9","r5c8"]]
region-sum-2: region-sum r5c2-r4c1-r3c2-r4c3 segments [["r5c2","r4c1"],["r3c2"],["r4c3"]]
region-sum-3: region-sum r7c2-r8c3-r7c4-r6c3 segments [["r7c2","r8c3"],["r7c4"],["r6c3"]]
region-sum-4: region-sum r6c7-r7c6-r8c7-r7c8 segments [["r6c7"],["r7c6"],["r8c7","r7c8"]]
region-sum-5: region-sum r2c4-r3c4-r4c5-r3c6-r2c6 segments [["r2c4","r3c4"],["r4c5"],["r3c6","r2c6"]]
region-sum-6: region-sum r9c4-r9c3-r9c2 segments [["r9c4"],["r9c3","r9c2"]]
region-sum-7: region-sum r1c6-r1c7-r2c7 segments [["r1c6"],["r1c7","r2c7"]]
```

Equal Sum Lines, Cages

- Normal sudoku rules apply. 
- Equal Sum Line: The sum of the digits on a blue line within a particular region must be the same for all of the regions the line passes through. Disconnected segments of the same line within the same region count separately. For example, r4c1 + r5c2 = r4c3 = r3c2.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
