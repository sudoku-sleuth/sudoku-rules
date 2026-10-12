---
format: open-rules
title: Purple Flame
setter: BremSter & FullDeck & Missing a Few Cards
source: https://sudokupad.app/pg14bpkw3r
case: https://sudoku-sleuth.com/cases/purple-flame
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
renban-1: renban r1c1-r2c1-r3c1-r4c2-r5c2-r6c2
renban-2: renban r4c3-r3c3-r2c4-r2c5
renban-3: renban r5c1-r6c1-r7c1-r8c1-r9c2
renban-4: renban r9c3-r8c3-r7c3-r6c4-r5c4
renban-5: renban r5c6-r4c6-r3c7-r2c7-r1c7
renban-6: renban r1c9-r2c9-r3c9-r4c8-r5c8-r6c8
renban-7: renban r6c7-r7c7-r8c6-r9c5
renban-8: renban r9c6-r9c7-r8c8
renban-9: renban r8c9-r9c8
pair-1: pair r1c9-r2c9 relation {"op":"sum","value":10}
pair-2: pair r3c6-r4c6 relation {"op":"sum","value":10}
pair-3: pair r3c4-r4c4 relation {"op":"sum","value":10}
pair-4: pair r5c2-r6c2 relation {"op":"sum","value":10}
pair-5: pair r6c4-r7c4 relation {"op":"sum","value":10}
pair-6: pair r6c6-r6c7 relation {"op":"sum","value":10}
pair-7: pair r1c1-r2c1 relation {"op":"sum","value":5}
pair-8: pair r4c3-r4c4 relation {"op":"sum","value":5}
pair-9: pair r6c6-r7c6 relation {"op":"sum","value":5}
pair-10: pair r5c8-r6c8 relation {"op":"sum","value":5}
```

• Normal Sudoku rules apply.
• Renban: Digits placed on purple lines must be a non-repeating set of consecutive digits, in any order.
• XV Pairs: Digits separated by an X sum to 10. Digits separated by a V sum to 5.
