---
format: open-rules
title: Icicles
setter: Blobz
source: https://sudokupad.app/oixxq43qb4
case: https://sudoku-sleuth.com/cases/icicles
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c2=6
exported: cd53f9c08a02e93b40598e6fd7def27d
---

```rules
sudoku 9x9
cage-1: cage r2c1-r2c2-r2c3 total 19 connected true
cage-2: cage r2c7-r2c8-r2c9 total 18 connected true
cage-3: cage r9c8-r9c9 total 13 connected true
cage-4: cage r8c1-r9c1-r9c2 total 12 connected true
cage-5: cage r8c7-r8c8-r9c7 total 17 connected true
whispers-1: whispers r3c7-r4c7-r5c7 gap 5
whispers-2: whispers r3c8-r4c8-r5c8-r6c8 gap 5
whispers-3: whispers r3c9-r4c9-r5c9-r6c9-r7c9-r8c9 gap 5
renban-1: renban r3c2-r4c2-r5c2-r6c2
renban-2: renban r3c5-r4c5
renban-3: renban r3c6-r4c6-r5c6-r6c6-r7c6-r8c6
region-sum-1: region-sum r3c1-r4c1-r5c1 segments [["r3c1"],["r4c1","r5c1"]]
region-sum-2: region-sum r3c3-r4c3-r5c3-r6c3 segments [["r3c3"],["r4c3","r5c3","r6c3"]]
region-sum-3: region-sum r3c4-r4c4-r5c4-r6c4-r7c4-r8c4 segments [["r3c4"],["r4c4","r5c4","r6c4"],["r7c4","r8c4"]]
```

Normal sudoku rules apply. 

Pink lines contain a set of consecutive digits in any order (Renban).

Adjacent digits along a green line must differ by at least 5 (German Whisper).

Blue lines have an equal sum N within each box they pass through (Region Sum).

Digits in cages must sum to the clue in the top left corner.
