---
format: open-rules
title: Walk around the cages
setter: sujoyku
source: https://tinyurl.com/ywafe595
case: https://sudoku-sleuth.com/cases/walk-around-the-cages
library: https://rules.sudoku-sleuth.com/
status: read
exported: f4e19f3b9c3fcdc4954e873366558676
---

```rules
sudoku 9x9
cage-1: cage r2c3-r2c4-r2c5-r3c3-r3c4-r3c5-r4c3-r4c4-r4c5 connected true
cage-2: cage r3c6-r3c7-r3c8-r4c6-r4c7-r4c8-r5c6-r5c7-r5c8 connected true
cage-3: cage r6c5-r6c6-r6c7-r7c5-r7c6-r7c7-r8c5-r8c6-r8c7 connected true
cage-4: cage r5c2-r5c3-r5c4-r6c2-r6c3-r6c4-r7c2-r7c3-r7c4 connected true
kropki-1: kropki r3c1-r4c1 white
kropki-2: kropki r7c1-r8c1 white
kropki-3: kropki r3c7-r3c8 black
kropki-4: kropki r4c6-r5c6 black
kropki-5: kropki r8c8-r9c8 black
arrow-1: arrow r1c5-r1c4 bulb ["r1c6"]
arrow-2: arrow r2c6-r3c6 bulb ["r1c6"]
arrow-3: arrow r6c4-r5c4 bulb ["r7c4"]
arrow-4: arrow r7c3-r7c2 bulb ["r7c4"]
arrow-5: arrow r2c2-r3c2 bulb ["r1c2"]
arrow-6: arrow r8c3-r8c2 bulb ["r8c4"]
arrow-7: arrow r9c5-r9c6 bulb ["r9c4"]
pair-1: pair r4c3-r4c4 sum 10
pair-2: pair r4c1-r4c2 sum 10
pair-3: pair r5c1-r6c1 sum 10
pair-4: pair r2c3-r3c3 sum 5
pair-5: pair r4c9-r5c9 sum 5
pair-6: pair r6c8-r6c9 sum 5
```

Normal Sudoku rules apply. In a killer cage digits do not repeat. Digits on an arrow sum to the digit in the circle where the arrow emerges from. Digits joined by a V sum to 5. Digits joined by an X sum to 10. (Not all Vs and Xs are given.) Digits joined by a black dot have a 1:2 ratio. Digits joined by a white dot are consecutive. (Not all black and white dots are given.)
