---
format: open-rules
title: XV = X-ray Vision
setter: sujoyku
source: https://tinyurl.com/ycxfuv66
case: https://sudoku-sleuth.com/cases/xv-x-ray-vision
library: https://rules.sudoku-sleuth.com/
status: read
exported: 64281dbb28116d4d5a4739dd92d5e296
---

```rules
sudoku 9x9
cage-1: cage r3c6-r3c7-r4c7-r5c7 total 16 connected true
cage-2: cage r6c7-r7c5-r7c6-r7c7 total 13 connected true
cage-3: cage r5c3-r6c3-r7c3-r7c4 total 14 connected true
cage-4: cage r3c3-r3c4-r3c5-r4c3 total 17 connected true
kropki-1: kropki r8c9-r9c9 black
kropki-2: kropki r7c8-r8c8 black
kropki-3: kropki r2c7-r2c8 black
pair-1: pair r2c1-r2c2 sum 10
pair-2: pair r1c8-r2c8 sum 10
pair-3: pair r2c5-r3c5 sum 10
pair-4: pair r5c7-r5c8 sum 10
pair-5: pair r7c5-r8c5 sum 10
pair-6: pair r5c2-r5c3 sum 10
pair-7: pair r8c8-r8c9 sum 10
pair-8: pair r8c2-r9c2 sum 10
pair-9: pair r1c1-r1c2 sum 5
pair-10: pair r1c9-r2c9 sum 5
pair-11: pair r9c8-r9c9 sum 5
pair-12: pair r8c1-r9c1 sum 5
negative relations [{"op":"sum","value":10},{"op":"sum","value":5}] except [["r8c9","r9c9"],["r7c8","r8c8"],["r2c7","r2c8"],["r1c1","r1c2"],["r2c1","r2c2"],["r1c8","r2c8"],["r1c9","r2c9"],["r2c5","r3c5"],["r5c7","r5c8"],["r7c5","r8c5"],["r5c2","r5c3"],["r8c8","r8c9"],["r9c8","r9c9"],["r8c2","r9c2"],["r8c1","r9c1"]]
```

Normal Sudoku rules apply. Digits joined by an X sum to 10. Digits joined by a V sum to 5. All X and V are given. NEGATIVE CONSTRAINT: Digits that are NOT joined by a V or an X do not sum to either 5 or 10.
Digits in a killer cage do not repeat and sum to the clue in the top left. Digits joined by black dot have a 1:2 ratio. (Not all dots are given.)
