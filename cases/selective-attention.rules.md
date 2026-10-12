---
format: open-rules
title: Selective Attention
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/dm18a98h9h
case: https://sudoku-sleuth.com/cases/selective-attention
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c9-r6c9 colour "black"
kropki-2: kropki r1c8-r1c9 colour "black"
kropki-3: kropki r2c5-r3c5 colour "black"
kropki-4: kropki r8c3-r9c3 colour "black"
kropki-5: kropki r3c3-r4c3 colour "black"
kropki-6: kropki r9c7-r9c8 colour "black"
kropki-7: kropki r4c8-r5c8 colour "black"
kropki-8: kropki r4c7-r5c7 colour "black"
modular-1: modular r1c3-r2c3-r3c3-r4c4-r5c4
modular-2: modular r6c5-r6c6-r7c7-r7c8-r7c9
region-sum-1: region-sum r2c4-r3c4-r4c3-r5c3-r6c3 segments [["r2c4","r3c4"],["r4c3","r5c3","r6c3"]]
region-sum-2: region-sum r7c5-r7c6-r6c7-r6c8-r6c9 segments [["r7c5","r7c6"],["r6c7","r6c8","r6c9"]]
region-sum-3: region-sum r5c1-r6c1-r7c1-r8c2-r9c3-r9c4 segments [["r5c1","r6c1"],["r7c1","r8c2","r9c3"],["r9c4"]]
region-sum-4: region-sum r1c6-r1c7-r2c8-r3c9-r4c9-r5c9 segments [["r1c6"],["r1c7","r2c8","r3c9"],["r4c9","r5c9"]]
region-sum-5: region-sum r9c6-r9c7-r9c8-r8c9 segments [["r9c6"],["r9c7","r9c8","r8c9"]]
region-sum-6: region-sum r1c3-r2c3-r3c3-r4c4-r5c4 segments [["r1c3","r2c3","r3c3"],["r4c4","r5c4"]]
region-sum-7: region-sum r6c5-r6c6-r7c7-r7c8-r7c9 segments [["r6c5","r6c6"],["r7c7","r7c8","r7c9"]]
```

Normal sudoku rules apply.

All lines are both modular and region sum lines. Different colors are solely to distinguish lines that intersect.

Digits separated by a black dot are in a 1:2 ratio. Not all black dots are necessarily given.
