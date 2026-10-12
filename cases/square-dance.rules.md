---
format: open-rules
title: Square Dance
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/square-dance
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4 total 15 connected true
cage-2: cage r2c2-r3c2 total 13 connected true
cage-3: cage r1c5-r2c5 total 11 connected true
cage-4: cage r1c7-r1c8 total 15 connected true
cage-5: cage r2c8-r3c8 total 7 connected true
cage-6: cage r6c8-r6c9 total 15 connected true
cage-7: cage r3c5-r4c5 total 15 connected true
cage-8: cage r4c3-r5c3 total 5 connected true
cage-9: cage r6c4-r6c5 total 5 connected true
cage-10: cage r7c1-r7c2 total 7 connected true
cage-11: cage r8c2-r9c2 total 9 connected true
cage-12: cage r7c5-r8c5 total 11 connected true
cage-13: cage r8c6-r9c6 total 15 connected true
cage-14: cage r9c7-r9c8 total 11 connected true
cage-15: cage r9c4-r9c5 total 3 connected true
cage-16: cage r4c6-r5c6 total 5 connected true
cage-17: cage r4c8-r4c9 total 13 connected true
cage-18: cage r4c1-r4c2 total 7 connected true
parity-cells r1c5-r3c5-r6c5-r7c5-r9c8-r1c3-r1c7-r6c9-r7c1-r2c2-r3c8-r5c3-r8c2-r8c6-r9c4-r4c6-r4c2-r4c8 parity "even"
```

Normal Sudoku rules apply. Numbers in cages sum to the number in the top left corner of the cage. Numbers in cells with gray squares are even. You are looking at a square dance below you. Each of the EVEN numbers shown arrived at the dance with an EVEN partner that is ADJACENT TO THEM RIGHT NOW, but not shown. The 18 shown EVEN numbers have temporarily changed partners in the dance (a cage of 2 each). Find all 18 original EVEN partners that are not shown and complete the puzzle.
