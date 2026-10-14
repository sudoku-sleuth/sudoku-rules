---
format: open-rules
title: Periscope
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/cb30diygdq
case: https://sudoku-sleuth.com/cases/periscope
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=2 r9c6=5
exported: 6a3b2c0ccdc4bd2acef8235fb3ddf58e
---

```rules
sudoku 9x9
kropki-1: kropki r4c2-r5c2 black
kropki-2: kropki r1c5-r2c5 black
kropki-3: kropki r6c1-r7c1 black
kropki-4: kropki r4c5-r4c6 black
kropki-5: kropki r1c3-r1c4 black
kropki-6: kropki r2c4-r2c5 black
renban-1: renban r4c2-r3c2-r2c3-r2c4
renban-2: renban r2c6-r2c7-r3c8-r4c8
renban-3: renban r6c8-r7c8-r8c7-r8c6
renban-4: renban r8c4-r8c3-r7c2-r6c2
renban-5: renban r3c1-r2c1-r1c2-r1c3
renban-6: renban r1c7-r1c8-r2c9-r3c9
renban-7: renban r9c7-r9c8-r8c9-r7c9
renban-8: renban r7c1-r8c1-r9c2-r9c3
renban-9: renban r6c5-r7c5-r8c5-r9c5
renban-10: renban r4c5-r3c5-r2c5-r1c5
renban-11: renban r5c4-r5c3-r5c2-r5c1
renban-12: renban r5c6-r5c7-r5c8-r5c9
```

- Normal sudoku rules apply.
- Renban lines: Digits along purple Renban lines must form a set of non-repeating consecutive digits in any order.
- Ratio pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.
