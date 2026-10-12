---
format: open-rules
title: The Misty Mountains
setter: Blobz
source: https://sudokupad.app/blobz/the-misty-mountains
case: https://sudoku-sleuth.com/cases/the-misty-mountains
library: https://rules.sudoku-sleuth.com/
status: read
givens: .5.....................7..4.2...........1....8......9...2..6....6..2..3..........
---

```rules
sudoku 9x9
renban-1: renban r4c2-r3c3-r2c4-r3c5
renban-2: renban r4c5-r3c6-r2c7-r3c8-r4c9
renban-3: renban r2c1-r1c2-r2c3
renban-4: renban r2c6-r1c7-r2c8-r3c9
renban-5: renban r6c1-r5c2-r4c3-r5c4
renban-6: renban r6c4-r5c5-r4c6-r5c7
renban-7: renban r7c1-r6c2-r7c3
renban-8: renban r8c3-r7c4-r6c5-r7c6-r8c7
renban-9: renban r7c7-r6c8-r7c9
renban-10: renban r9c1-r8c2-r9c3
renban-11: renban r9c4-r8c5-r9c6
renban-12: renban r9c7-r8c8-r9c9
```

Gandalf fell silent, gazing eastward from the porch to the far peaks of the Misty Mountains, at whose great roots the peril of the world had so long lain hidden.

Normal sudoku rules apply. 

Digits on lines form a non-repeating consecutive sequence in any order.
