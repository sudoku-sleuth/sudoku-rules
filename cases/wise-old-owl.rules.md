---
format: open-rules
title: Wise Old Owl
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/wise-old-owl
case: https://sudoku-sleuth.com/cases/wise-old-owl
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c1=6 r2c9=4 r3c5=5 r4c8=6 r5c5=7 r8c2=3 r8c8=8
exported: 76f02bf19cb73a5698eaa2df5baf37c7
---

```rules
sudoku 9x9
renban-1: renban r3c2-r3c3-r2c3-r1c3-r1c2
renban-2: renban r1c8-r1c7-r2c7-r3c7-r3c8
renban-3: renban r8c3-r8c4-r7c4-r6c4
renban-4: renban r2c4-r1c5-r2c6-r3c5
renban-5: renban r6c6-r7c6-r8c6-r8c7
renban-6: renban r4c7-r5c7-r6c7
renban-7: renban r4c3-r5c3-r6c3
renban-8: renban r4c2-r5c2-r6c2
renban-9: renban r5c8-r6c8-r7c8
renban-10: renban r7c9-r6c9-r5c9
renban-11: renban r8c1-r7c1-r6c1-r5c1
renban-12: renban r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8
```

**Sudoku, Renban Lines**

• Normal Sudoku rules apply. Place the digits 1-9 in each row, column and marked 3x3 region without repetition.
• Renban Lines: Digits placed on purple lines must be a non-repeating set of consecutive digits in any order.
