---
format: open-rules
title: Clone 853
setter: Blobz
source: https://sudokupad.app/blobz/clone-853
case: https://sudoku-sleuth.com/cases/clone-853
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=4 r5c7=8 r5c8=5 r5c9=3 r8c5=6
---

```rules
sudoku 9x9
whispers-1: whispers r3c2-r3c1-r4c1-r4c2 gap 5
whispers-2: whispers r2c3-r3c3-r3c4 gap 5
whispers-3: whispers r4c6-r3c6-r2c6-r3c7-r4c7 gap 5
whispers-4: whispers r1c9-r2c8-r2c9 gap 5
whispers-5: whispers r2c8-r3c9 gap 5
whispers-6: whispers r1c4-r2c4-r2c5-r1c5 gap 5 loop true
region-sum-1: region-sum r6c2-r6c1-r7c1-r7c2 segments [["r6c2","r6c1"],["r7c1","r7c2"]]
region-sum-2: region-sum r7c3-r8c3-r8c4 segments [["r7c3","r8c3"],["r8c4"]]
region-sum-3: region-sum r8c6-r7c6-r6c6-r7c7-r8c7 segments [["r8c6","r7c6"],["r6c6"],["r7c7","r8c7"]]
region-sum-4: region-sum r6c9-r7c8-r8c9-r7c9 segments [["r6c9"],["r7c8","r8c9","r7c9"]]
region-sum-5: region-sum r6c4-r7c4-r7c5-r6c5 segments [["r6c4","r6c5"],["r7c4","r7c5"]]
```

Normal sudoku rules apply.

Along green lines, adjacent digits differ by at least 5.

Box borders divide the blue lines into segments with the same sum.
