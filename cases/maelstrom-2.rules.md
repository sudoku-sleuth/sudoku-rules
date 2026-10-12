---
format: open-rules
title: Maelstrom
setter: Blobz
source: https://sudokupad.app/005aenz0pg
case: https://sudoku-sleuth.com/cases/maelstrom-2
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=9 r1c8=7 r9c8=8
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
whispers-1: whispers r1c6-r1c7-r2c8-r3c9-r4c9 gap 5
whispers-2: whispers r1c5-r1c4-r1c3-r2c2-r3c1-r4c1 gap 5
whispers-3: whispers r6c1-r7c1-r8c2-r9c3 gap 5
whispers-4: whispers r8c8-r7c9-r6c9 gap 5
whispers-5: whispers r4c3-r3c4-r3c5 gap 5
region-sum-1: region-sum r8c3-r8c4-r8c5-r8c6-r7c7 segments [["r8c3"],["r8c4","r8c5","r8c6"],["r7c7"]]
region-sum-2: region-sum r8c7-r7c8-r6c8-r5c8-r4c8-r3c7 segments [["r8c7","r7c8"],["r6c8","r5c8","r4c8"],["r3c7"]]
region-sum-3: region-sum r3c8-r2c7-r2c6-r2c5-r2c4-r3c3 segments [["r3c8","r2c7"],["r2c6","r2c5","r2c4"],["r3c3"]]
region-sum-4: region-sum r2c3-r3c2-r4c2-r5c2-r6c2-r7c3 segments [["r2c3","r3c2"],["r4c2","r5c2","r6c2"],["r7c3"]]
```

Normal sudoku rules apply. 

Along a green line, adjacent digits must differ by 5 or more.

Box borders divide blue lines into segments with the same sum.

Digits cannot repeat along the marked diagonals.
