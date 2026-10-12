---
format: open-rules
title: Shrek
setter: Will Power
source: https://sudokupad.app/olfsb3698s
case: https://sudoku-sleuth.com/cases/shrek
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c5-r5c5-r6c5-r7c5-r8c5 total 16 connected true
cage-2: cage r2c5-r3c5 total 12 connected true
cage-3: cage r2c2-r2c3 total 10 connected true
cage-4: cage r2c7-r2c8 total 16 connected true
cage-5: cage r6c2-r6c3 total 7 connected true
cage-6: cage r6c7-r7c7 total 5 connected true
kropki-1: kropki r3c1-r4c1 colour "white"
kropki-2: kropki r4c1-r4c2 colour "white"
kropki-3: kropki r3c9-r4c9 colour "white"
kropki-4: kropki r4c8-r4c9 colour "white"
kropki-5: kropki r4c8-r5c8 colour "white"
kropki-6: kropki r5c8-r6c8 colour "white"
kropki-7: kropki r6c7-r6c8 colour "white"
kropki-8: kropki r7c4-r8c4 colour "white"
kropki-9: kropki r7c4-r7c5 colour "white"
kropki-10: kropki r7c5-r7c6 colour "white"
kropki-11: kropki r7c6-r8c6 colour "white"
kropki-12: kropki r8c6-r8c7 colour "white"
whispers-1: whispers r3c2-r2c3-r1c4-r1c5-r1c6-r2c7-r3c8-r4c8 gap 5
whispers-2: whispers r8c7-r9c6-r9c5-r9c4-r8c3-r7c2-r6c2 gap 5
renban-1: renban r3c9-r4c9-r5c8-r4c8
renban-2: renban r3c1-r4c2-r5c2-r4c1
renban-3: renban r6c4-r5c4-r5c5-r5c6-r6c6
renban-4: renban r4c3-r4c4
renban-5: renban r4c6-r4c7
renban-6: renban r7c3-r7c4-r7c5-r7c6-r7c7-r8c6-r8c5-r8c4
```

Normal Sudoku rules apply. GERMAN WHISPER- Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines, if other rules allow. RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. The 16 is repeated in its cage because the green line can obscure it in some puzzle formats. KROPKI PAIRS- Numbers with white dots between them are consecutive. Not all possible dots are given.
