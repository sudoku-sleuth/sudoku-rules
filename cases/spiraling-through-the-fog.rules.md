---
fog:
  initiallyLit:
    - 30
    - 31
    - 32
    - 39
    - 41
    - 48
    - 49
    - 50
format: open-rules
title: Spiraling Through the Fog
setter: Sir Moose
source: https://sudokupad.app/y9m5b6vfqa
case: https://sudoku-sleuth.com/cases/spiraling-through-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
renban-1: renban r6c4-r6c5-r6c6
renban-2: renban r4c6-r4c5-r4c4
renban-3: renban r5c3-r5c2-r5c1
renban-4: renban r6c1-r7c1-r8c2
renban-5: renban r8c1-r9c1
renban-6: renban r9c2-r9c3
renban-7: renban r7c5-r8c5
renban-8: renban r4c7-r5c7
renban-9: renban r6c7-r7c7
renban-10: renban r3c6-r3c7
renban-11: renban r1c7-r1c8
renban-12: renban r1c9-r2c9
renban-13: renban r1c1-r2c1
renban-14: renban r7c3-r7c4
pair-1: pair r5c5-r5c6 sum 10
pair-2: pair r6c2-r7c2 sum 10
pair-3: pair r6c4-r7c4 sum 10
pair-4: pair r8c3-r8c4 sum 10
pair-5: pair r9c5-r9c6 sum 10
pair-6: pair r5c8-r6c8 sum 10
pair-7: pair r2c7-r3c7 sum 10
pair-8: pair r9c7-r9c8 sum 10
pair-9: pair r8c9-r9c9 sum 10
pair-10: pair r1c4-r1c5 sum 10
pair-11: pair r1c2-r2c2 sum 10
pair-12: pair r5c3-r5c4 sum 5
pair-13: pair r5c3-r6c3 sum 5
pair-14: pair r7c2-r7c3 sum 5
pair-15: pair r8c4-r9c4 sum 5
```

Normal Sudoku Rules Apply

The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.

Renban Lines: Digits along a line must form a consecutive sequence in any order. Numbers cannot repeat. 

Cells separated by an X sum to 10; cells separated by a V sum to 5.  Not all X's or V's are given.
