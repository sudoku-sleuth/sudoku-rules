---
format: open-rules
title: Renban-o-fly
setter: BremSter, FullDeck and Missing a Few Cards
source: https://sudokupad.app/ndb44adiuj
case: https://sudoku-sleuth.com/cases/renban-o-fly
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c4=2 r1c9=6 r2c4=5 r3c7=1 r5c2=7 r5c8=4 r7c3=6 r8c6=8 r9c1=4 r9c6=1
exported: 7a591ba971df64e2185340c2a30612ab
---

```rules
sudoku 9x9
renban-1: renban r3c2-r3c1-r2c1-r1c1-r1c2-r1c3-r2c3
renban-2: renban r1c6-r1c7-r2c8-r3c9-r4c9
renban-3: renban r6c1-r7c1-r8c2-r9c3-r9c4
renban-4: renban r5c3-r5c4-r6c5-r7c5
renban-5: renban r3c5-r4c5-r5c6-r5c7
renban-6: renban r3c3-r4c4-r5c5-r6c6-r7c7
renban-7: renban r7c8-r7c9-r8c9-r9c9-r9c8-r9c7-r8c7
```

• Normal Sudoku rules apply.
• Renban: Digits placed on purple lines must be a non-repeating set of consecutive digits in any order.
