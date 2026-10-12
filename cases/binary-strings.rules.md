---
format: open-rules
title: Binary Strings
setter: Blobz
source: https://sudokupad.app/blobz/binary-strings
case: https://sudoku-sleuth.com/cases/binary-strings
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=4
---

```rules
sudoku 9x9
cage-1: cage r7c1-r7c2-r8c1-r8c2 total 14 connected true
cage-2: cage r2c2-r2c3-r3c2-r3c3 total 21 connected true
cage-3: cage r2c8-r2c9-r3c8-r3c9 total 14 connected true
cage-4: cage r1c4-r1c5-r2c4-r2c5 total 17 connected true
cage-5: cage r5c3-r5c4-r6c3-r6c4 total 29 connected true
cage-6: cage r8c6-r8c7-r9c6-r9c7 total 16 connected true
cage-7: cage r4c1-r4c2-r5c1-r5c2 total 17 connected true
whispers-1: whispers r6c6-r7c6-r8c6 gap 5
whispers-2: whispers r2c1-r3c1-r4c1 gap 5
whispers-3: whispers r2c2-r2c3-r3c3-r4c3-r4c2-r3c2 gap 5 loop true
whispers-4: whispers r6c4-r6c5-r7c5-r8c5-r8c4-r7c4 gap 5 loop true
renban-1: renban r6c9-r7c9-r8c9
renban-2: renban r2c4-r3c4-r4c4
renban-3: renban r2c5-r3c5-r4c5-r4c6-r3c6-r2c6
renban-4: renban r6c7-r6c8-r7c8-r8c8-r8c7-r7c7
region-sum-1: region-sum r6c3-r7c3-r8c3 segments [["r6c3"],["r7c3","r8c3"]]
region-sum-2: region-sum r2c7-r3c7-r4c7 segments [["r2c7","r3c7"],["r4c7"]]
region-sum-3: region-sum r2c8-r3c8-r4c8-r4c9-r3c9-r2c9 segments [["r2c8","r3c8","r3c9","r2c9"],["r4c8","r4c9"]]
region-sum-4: region-sum r6c1-r6c2-r7c2-r8c2-r8c1-r7c1 segments [["r6c1","r6c2"],["r7c2","r8c2","r8c1","r7c1"]]
```

Normal sudoku rules apply.

Digits in cages do not repeat, and sum to the given total.

Along green lines, adjacent digits differ by 5 or more.

Along pink lines, digits form a non-repeating consecutive sequence in any order.

Box borders divide blue lines into segments with the same sum.
