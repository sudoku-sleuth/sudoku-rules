---
format: open-rules
title: Twenty Eight
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/xz3c19wgzz
case: https://sudoku-sleuth.com/cases/twenty-eight
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=8 r2c2=2 r4c7=8 r6c3=2 r8c8=8 r9c5=2
---

```rules
sudoku 9x9
anti-knight
renban-1: renban r4c2-r4c1-r3c1-r3c2-r3c3
renban-2: renban r4c8-r4c9-r3c9-r3c8-r3c7
renban-3: renban r6c2-r6c1-r7c1-r7c2-r7c3
renban-4: renban r6c8-r6c9-r7c9-r7c8-r7c7
renban-5: renban r8c3-r9c3-r9c4-r8c4-r7c4
renban-6: renban r2c7-r1c7-r1c6-r2c6-r3c6
renban-7: renban r7c6-r8c7-r9c6
renban-8: renban r1c4-r2c3-r3c4
```

- Normal sudoku rules apply.
- Antiknight: Digits a chess knight's move apart must be different.
- Renban Lines: Digits along a pink Renban line form a set of non-repeating consecutive digits in some order.
