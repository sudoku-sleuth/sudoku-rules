---
format: open-rules
title: Centre Diamond
setter: Dr Logic
source: ""
case: https://sudoku-sleuth.com/cases/centre-diamond
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
diagonal direction "main"
kropki-1: kropki r8c3-r9c3 colour "white"
kropki-2: kropki r7c8-r8c8 colour "white"
kropki-3: kropki r1c8-r2c8 colour "white"
kropki-4: kropki r3c7-r3c8 colour "black"
kropki-5: kropki r3c8-r3c9 colour "black"
kropki-6: kropki r3c6-r3c7 colour "black"
kropki-7: kropki r6c3-r7c3 colour "black"
kropki-8: kropki r7c3-r8c3 colour "black"
kropki-9: kropki r6c8-r6c9 colour "black"
whispers-1: whispers r4c5-r5c5-r6c5 gap 5
whispers-2: whispers r4c3-r4c4-r3c4 gap 5
whispers-3: whispers r3c4-r2c5 gap 5
whispers-4: whispers r4c3-r5c2 gap 5
whispers-5: whispers r3c1-r2c2-r1c3 gap 5
whispers-6: whispers r3c9-r4c9-r5c8-r6c7-r7c6-r8c5-r9c4-r9c3 gap 5
renban r5c4-r5c5-r5c6
nabner-1: nabner r4c5-r5c4-r6c5-r5c6
nabner-2: nabner r6c4-r6c3-r7c3-r7c4
nabner-3: nabner r4c6-r3c6-r3c7-r4c7
```

Normal Sudoku Rules apply.
German Whispers (Green): Adjacent digits must differ by at least 5.
Renban (purple): Form a set of consecutive digits in any order.
Nabner (gold): No digits along a nabner line can be consecutive. (e.g, 135 is allowed but 192 is not, because 1 and 2 are consecutive)
Ratio (black dot): Cells separated by a black dot must be in a 1:2 ratio. (Not all are given)
Difference (white dot): Cells separated by a white dot must be consecutive. (Not all are given)
Negative Diagonal: Digits cannot repeat on the marked diagonal (R1C1 - R9C9)
