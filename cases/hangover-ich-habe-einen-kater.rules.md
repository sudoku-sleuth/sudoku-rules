---
format: open-rules
title: Hangover(Ich habe einen Kater)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/hangover-ich-habe-einen-kater
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c5-r5c5 colour "black"
kropki-2: kropki r6c5-r7c5 colour "black"
kropki-3: kropki r5c6-r6c6 colour "black"
kropki-4: kropki r4c6-r4c7 colour "black"
kropki-5: kropki r5c2-r5c3 colour "black"
kropki-6: kropki r2c6-r3c6 colour "black"
kropki-7: kropki r2c4-r3c4 colour "black"
kropki-8: kropki r7c3-r7c4 colour "black"
kropki-9: kropki r6c8-r6c9 colour "black"
whispers-1: whispers r9c1-r8c2-r7c3-r6c4-r5c5-r4c6-r3c7-r2c8-r1c9 gap 5
whispers-2: whispers r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 gap 5
renban-1: renban r5c6-r5c7-r4c7-r4c8-r3c8-r3c9-r2c9
renban-2: renban r3c2-r4c2-r5c2-r6c2-r7c2
renban-3: renban r9c4-r8c4-r8c5
renban-4: renban r7c5-r7c6-r8c6-r9c6-r8c7
renban-5: renban r1c4-r1c5-r2c5-r3c5-r3c4
renban-6: renban r9c2-r9c3
renban-7: renban r4c1-r5c1
```

Normal Sudoku rules apply. Numbers on the green line are at least 5 apart from their neighbors on the line. Numbers may repeat on the green line. Numbers on purple lines are a non-repeating set of consecutive numbers, in any order. Numbers with a black dot between them are in a ratio of 2:1. Not all possible black dots are shown.
