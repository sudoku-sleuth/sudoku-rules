---
format: open-rules
title: The Pill Bottle
setter: Blobz
source: https://sudokupad.app/ifrjpvt1fs
case: https://sudoku-sleuth.com/cases/the-pill-bottle
library: https://rules.sudoku-sleuth.com/
status: read
exported: 86f0c9828c4b4de095a42bff5162f5c2
---

```rules
sudoku 9x9
kropki-1: kropki r9c2-r9c3 white
kropki-2: kropki r8c2-r9c2 white
kropki-3: kropki r7c7-r7c8 white
kropki-4: kropki r8c9-r9c9 black
whispers-1: whispers r1c4-r1c5-r1c6 gap 5
whispers-2: whispers r3c3-r3c4-r4c4-r4c5-r4c6-r3c6-r3c7 gap 5
whispers-3: whispers r6c3-r7c4-r7c5-r7c6-r6c7 gap 5
whispers-4: whispers r9c4-r9c5-r9c6 gap 5
renban-1: renban r3c8-r4c8-r4c9-r3c9
renban-2: renban r8c5-r8c6
renban-3: renban r6c6-r5c7
region-sum-1: region-sum r1c4-r2c4-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c4 segments [["r1c4","r2c4"],["r3c3"],["r4c3","r5c3","r6c3"],["r7c3","r8c3"],["r9c4"]]
region-sum-2: region-sum r1c6-r2c6-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c6 segments [["r1c6","r2c6"],["r3c7"],["r4c7","r5c7","r6c7"],["r7c7","r8c7"],["r9c6"]]
```

Normal sudoku rules apply.

Region Sum: Blue lines have an equal sum N within each box they pass through; N may be different on each line.

German Whisper: Adjacent digits along green lines must differ by at least 5.

Renban: Pink lines contain a set of non-repeating consecutive digits in any order.

Kropki: Digits separated by a white dot are consecutive. Digits separated by a black dot have a 2:1 ratio. Not all such dots are shown.
