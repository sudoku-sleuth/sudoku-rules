---
format: open-rules
title: Sawyer Beetle
setter: BremSter, FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/sawyer-beetle
library: https://rules.sudoku-sleuth.com/
status: read
exported: b369cecaf7034ab70d10fd9ac3fe19a6
---

```rules
sudoku 9x9
entropic-1: entropic r2c3-r2c4-r3c5-r2c6-r2c7
entropic-2: entropic r4c4-r5c4-r5c3-r6c3-r6c2-r7c2
entropic-3: entropic r4c6-r5c6-r5c7-r6c7-r6c8-r7c8
entropic-4: entropic r9c1-r8c1-r8c2-r9c2
entropic-5: entropic r9c8-r8c8-r8c9-r9c9
entropic-6: entropic r7c3-r8c3-r8c4-r9c4-r9c5-r9c6-r8c6-r8c7-r7c7
entropic-7: entropic r3c7-r2c8-r1c9
renban-1: renban r1c1-r2c2-r3c3
renban-2: renban r3c5-r4c5-r5c5
renban-3: renban r6c1-r5c1-r4c2
renban-4: renban r6c9-r5c9-r4c8
pair-1: pair r7c2-r7c3 sum 10
pair-2: pair r6c1-r6c2 sum 10
pair-3: pair r7c7-r7c8 sum 10
pair-4: pair r4c6-r5c6 sum 10
pair-5: pair r6c8-r6c9 sum 5
pair-6: pair r4c4-r5c4 sum 5
```

- Normal Sudoku rules apply.
- Cells separated by an X must sum to 10. Cells separated by a V must sum to 5. Not all Xs and Vs are given.
- Any set of three sequential cells along the beige Entropic Lines must contain a low digit (1-3), a middle digit (4-6), and a high digit (7-9). Digits may repeat on lines, if allowed by other rules.
- Digits placed on purple Renban Lines must be a set of consecutive, non-repeating digits, in any order.
