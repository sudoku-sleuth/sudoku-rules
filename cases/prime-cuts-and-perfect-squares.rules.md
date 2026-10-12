---
format: open-rules
title: Prime Cuts and Perfect Squares
setter: Will Power
source: https://sudokupad.app/o3l9hiswjt
case: https://sudoku-sleuth.com/cases/prime-cuts-and-perfect-squares
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r5c1-r6c1-r6c2 total 6 connected true
cage-2: cage r1c5-r1c6-r2c6 total 21 connected true
parity-cells r6c6-r6c7-r6c8-r6c9-r7c6-r8c6-r9c6 parity "even"
allowed-digits-1: allowed-digits r5c1-r6c1-r6c2-r7c2-r7c3-r8c3-r8c4-r9c4-r9c5 digits [2,3,5,7]
allowed-digits-2: allowed-digits r1c5-r1c6-r2c6-r2c7-r3c7-r3c8-r4c8-r4c9-r5c9 digits [2,3,5,7]
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[2.5,1.5],[2.5,2.5],[3.5,2.5]],"color":"#94DBFF","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[3.5,5.5]],"color":"#94DBFF","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[5.5,3.5]],"color":"#94DBFF","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[8.5,1.5]],"color":"#94DBFF","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5]],"color":"#94DBFF","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[6.5,7.5],[7.5,7.5],[7.5,8.5],[8.5,8.5]],"color":"#94DBFF","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. PRIME PAIRS- All neighboring pairs of digits on red lines are prime numbers, when read from left to right or top to bottom. Prime pairs do not repeat on the same red line. In addition, the four endpoints of the red lines are each different single-digit prime numbers. PERFECT SQUARE PAIRS- All neighboring pairs of digits on blue lines are perfect squares (16, 25, 36....), when read from left to right or top to bottom. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. EVEN- Cells with a gray square are even.
