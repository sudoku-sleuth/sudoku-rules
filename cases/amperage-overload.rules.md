---
format: open-rules
title: Amperage Overload
setter: Blobz
source: https://sudokupad.app/blobz/amperage-overload
case: https://sudoku-sleuth.com/cases/amperage-overload
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r3c7-r3c8 colour "white"
kropki-2: kropki r2c8-r3c8 colour "white"
kropki-3: kropki r3c6-r3c7 colour "white"
kropki-4: kropki r5c4-r5c5 colour "white"
kropki-5: kropki r1c8-r1c9 colour "white"
kropki-6: kropki r7c3-r7c4 colour "black"
whispers-1: whispers r3c6-r3c5-r3c4-r4c3-r5c3-r5c2-r6c1-r7c1-r8c1-r9c2-r9c3-r9c4-r8c5-r7c5-r7c6-r6c7-r5c7-r4c7 gap 5
whispers-2: whispers r6c3-r7c2-r8c3-r7c4 gap 5 loop true
region-sum-1: region-sum r4c5-r3c6-r2c7-r1c8 segments [["r4c5"],["r3c6"],["r2c7","r1c8"]]
region-sum-2: region-sum r5c6-r4c7-r3c8-r2c9 segments [["r5c6"],["r4c7"],["r3c8","r2c9"]]
region-sum-3: region-sum r5c5-r4c6-r3c7-r2c8-r1c9 segments [["r5c5","r4c6"],["r3c7","r2c8","r1c9"]]
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[80],"label":"AO","color":"#07ff","labelColor":"#07ff"}}
```

Normal sudoku rules apply.

Along green lines, adjacent digits differ by at least 5.

Box borders separate blue lines into segments with the same sum.

White dots separate consecutive digits; black dots separate digits where one is double the other; not all possible dots are given.
