---
format: open-rules
title: Gold Diamonds
setter: Dr Logic
source: ""
case: https://sudoku-sleuth.com/cases/gold-diamonds
library: https://rules.sudoku-sleuth.com/
status: read
exported: f79ffa12ec673fe4e112ece6fc072519
---

```rules
sudoku 9x9
kropki-1: kropki r1c1-r2c1 white
kropki-2: kropki r6c5-r7c5 white
kropki-3: kropki r3c3-r3c4 black
whispers-1: whispers r2c3-r3c3-r4c3 gap 5
whispers-2: whispers r3c7-r4c7-r5c7 gap 5
whispers-3: whispers r6c2-r7c2-r8c2 gap 5
whispers-4: whispers r7c8-r8c8-r9c8 gap 5
whispers-5: whispers r5c4-r6c4-r5c5-r6c6-r5c6 gap 5
whispers-6: whispers r7c5-r7c6 gap 5
whispers-7: whispers r4c5-r4c6 gap 5
whispers-8: whispers r1c5-r2c5-r3c5 gap 5
renban-1: renban r3c2-r3c3-r3c4
renban-2: renban r4c6-r4c7-r4c8
renban-3: renban r7c1-r7c2-r7c3
renban-4: renban r8c7-r8c8-r8c9
renban-5: renban r5c4-r6c5-r5c6
renban-6: renban r8c4-r8c5-r8c6
renban-7: renban r2c4-r2c5-r2c6
nabner-1: nabner r2c3-r3c2-r4c3-r3c4
nabner-2: nabner r3c7-r4c6-r5c7-r4c8
nabner-3: nabner r7c8-r8c7-r9c8-r8c9
nabner-4: nabner r6c2-r7c1-r8c2-r7c3
nabner-5: nabner r7c5-r8c4-r9c5-r8c6
nabner-6: nabner r2c8-r2c9-r3c9
nabner-7: nabner r4c2-r5c3-r6c3
nabner-8: nabner r4c4-r3c5-r3c6
pair r4c7-r4c8 sum 5
```

Normal Sudoku Rules apply.
German Whispers (Green): Adjacent digits must differ by at least 5.
Renban (purple): Form a set of consecutive digits in any order.
Nabner (gold): No digits along a nabner line can be consecutive. (e.g, 135 is allowed but 192 is not, because 1 and 2 are consecutive)
Ratio (black dot): Cells separated by a black dot must be in a 1:2 ratio.
Difference (white dot): Cells separated by a white dot must be consecutive.
V: Cells separated by a 'V' sum to 5.
No negative constraints
