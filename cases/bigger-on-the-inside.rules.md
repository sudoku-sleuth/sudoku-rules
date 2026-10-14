---
format: open-rules
title: Bigger on the Inside
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/bigger-on-the-inside
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c3=1 r2c6=2 r3c4=1 r3c6=3 r4c1=1 r4c2=3 r6c7=1 r6c8=5 r7c2=1 r7c3=4
exported: 3a56d2ffba1ea11806cd1a0b0dcbd769
---

```rules
sudoku 9x9
tardis-1: tardis cell "r1c1" neighbours ["r1c2","r2c1","r2c2"]
tardis-2: tardis cell "r1c3" neighbours ["r1c2","r1c4","r2c2","r2c3","r2c4"]
tardis-3: tardis cell "r1c5" neighbours ["r1c4","r1c6","r2c4","r2c5","r2c6"]
tardis-4: tardis cell "r1c7" neighbours ["r1c6","r1c8","r2c6","r2c7","r2c8"]
tardis-5: tardis cell "r3c1" neighbours ["r2c1","r2c2","r3c2","r4c1","r4c2"]
tardis-6: tardis cell "r5c1" neighbours ["r4c1","r4c2","r5c2","r6c1","r6c2"]
tardis-7: tardis cell "r7c1" neighbours ["r6c1","r6c2","r7c2","r8c1","r8c2"]
tardis-8: tardis cell "r9c4" neighbours ["r8c3","r8c4","r8c5","r9c3","r9c5"]
tardis-9: tardis cell "r9c6" neighbours ["r8c5","r8c6","r8c7","r9c5","r9c7"]
tardis-10: tardis cell "r6c9" neighbours ["r5c8","r5c9","r6c8","r7c8","r7c9"]
tardis-11: tardis cell "r5c7" neighbours ["r4c6","r4c7","r4c8","r5c6","r5c8","r6c6","r6c7","r6c8"]
tardis-12: tardis cell "r4c5" neighbours ["r3c4","r3c5","r3c6","r4c4","r4c6","r5c4","r5c5","r5c6"]
```

- Normal sudoku rules apply.

- A cell containing a blue rectangle is a TARDIS (Thinking About Relative Directions In Sudoku), and is bigger on the inside. That is, the value in a TARDIS cell is strictly greater than all adjacent cells orthogonally or diagonally.
