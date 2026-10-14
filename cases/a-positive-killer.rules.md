---
format: open-rules
title: A Positive Killer
setter: Meggen033
source: https://sudokupad.app/3hsop4hsly
case: https://sudoku-sleuth.com/cases/a-positive-killer
library: https://rules.sudoku-sleuth.com/
status: read
exported: f254f2d61f27e196cd23f456e4b1b6ab
---

```rules
sudoku 9x9
cage-1: cage r4c1-r4c2 total 6 connected true
cage-2: cage r1c4-r2c4 total 6 connected true
cage-3: cage r4c4-r4c5-r5c4 total 8 connected true
cage-4: cage r8c6-r9c6 total 14 connected true
cage-5: cage r6c8-r6c9 total 14 connected true
cage-6: cage r5c6-r6c5-r6c6 total 22 connected true
cage-7: cage r1c7-r1c8 total 5 connected true
cage-8: cage r2c9-r3c9 total 15 connected true
cage-9: cage r7c1-r8c1 total 10 connected true
cage-10: cage r9c2-r9c3 total 10 connected true
cage-11: cage r3c3-r3c4-r4c3 total 19 connected true
cage-12: cage r6c7-r7c6-r7c7 total 11 connected true
cage-13: cage r2c7-r2c8-r3c8 total 15 connected true
cage-14: cage r7c2-r8c2-r8c3 total 15 connected true
cage-15: cage r2c5-r2c6 total 9 connected true
cage-16: cage r1c1-r1c2 total 15 connected true
cage-17: cage r7c8-r8c8 total 7 connected true
cage-18: cage r4c8-r5c8 total 8 connected true
diagonal direction "anti"
```

•	Normal Sudoku rules apply. 
•	Digits along the positive diagonal cannot repeat.
•	Digits in a cage do not repeat and sum to the clue in the top left.
