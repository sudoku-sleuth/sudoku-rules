---
format: open-rules
title: Interlinked
setter: Blobz
source: https://sudokupad.app/eg9aqi6b20
case: https://sudoku-sleuth.com/cases/interlinked
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
givens: r8c3=2 r9c5=7
---

```rules
sudoku 9x9
whispers r2c2-r3c2-r4c2-r5c2-r5c3-r5c4-r5c5-r4c5-r3c5-r2c5-r2c4-r2c3 gap 5 loop true
region-sum-1: region-sum r6c3-r5c3-r4c3-r3c4-r3c5-r3c6-r4c7-r5c7-r6c7-r7c6-r7c5-r7c4 segments [["r6c3","r5c3","r4c3"],["r3c4","r3c5","r3c6"],["r4c7","r5c7","r6c7"],["r7c6","r7c5","r7c4"]]
renban-1: renban r9c7-r9c8-r9c9-r8c9-r7c9-r7c8-r7c7-r8c7
renban-2: renban r3c1-r3c2-r3c3-r2c3-r1c3-r2c1-r1c1-r1c2
renban-3: renban r6c2-r6c3-r6c4-r7c3
renban-4: renban r4c7-r3c8-r2c8-r2c7-r2c6-r3c6-r4c6
region-sum-2: region-sum r6c8-r7c8-r8c8-r8c7-r8c6-r7c6-r6c6-r6c7 segments [["r6c8","r6c7"],["r7c8","r8c8","r8c7"],["r8c6","r7c6"],["r6c6"]]
region-sum-3: region-sum r9c5-r9c4-r9c3-r8c2-r8c3-r8c4 segments [["r9c5","r9c4","r8c4"],["r9c3","r8c2","r8c3"]]
```

Normal sudoku rules apply. 

Pink lines contain a non-repeating set of consecutive digits in any order (Renban).

Adjacent digits along the green line must differ by at least 5 (German Whisper).

Any set of three sequential digits along the orange line must consist of a low (1-3) digit, a middly (4-6) digit, and a high (7-9) digit (Entropic).

Blues lines have an equal sum N within each box they pass through (Region Sum). N may be different on each line.
