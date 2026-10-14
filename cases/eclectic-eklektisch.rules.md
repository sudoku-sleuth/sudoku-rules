---
format: open-rules
title: Eclectic (Eklektisch) 不拘一格的
setter: Will Power
source: https://sudokupad.app/6rmbscyfsm
case: https://sudoku-sleuth.com/cases/eclectic-eklektisch
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6e99f37f70c5f2467d9e03d8b3b8fc45
---

```rules
sudoku 9x9
cage-1: cage r8c8-r8c9 total 10 connected true
cage-2: cage r9c8-r9c9 total 10 connected true
cage-3: cage r7c7-r7c8-r8c7 total 10 connected true
cage-4: cage r8c5-r9c5-r9c6 total 10 connected true
cage-5: cage r5c2-r5c3-r6c3 total 10 connected true
kropki r1c4-r1c5 black
whispers-1: whispers r5c1-r4c1-r3c1-r2c1-r1c1-r1c2-r1c3-r1c4-r1c5 gap 4
whispers-2: whispers r3c6-r3c5-r4c5-r5c5-r5c4-r5c3-r6c3 gap 5
whispers-3: whispers r5c9-r6c9-r6c8-r6c7-r5c7-r4c7-r4c8-r4c9 gap 5
whispers-4: whispers r9c7-r8c7-r8c8-r9c8-r9c9-r8c9-r7c9-r7c8 gap 4
whispers-5: whispers r7c4-r8c4-r9c4 gap 5
whispers-6: whispers r9c5-r8c5-r9c6 gap 5
renban-1: renban r1c6-r2c6-r2c5-r2c4-r2c3-r2c2-r3c2-r4c2-r5c2
renban-2: renban r3c7-r4c6-r5c6-r6c6-r6c5-r6c4-r7c3-r8c2-r9c1
```

Normal Sudoku rules apply.

GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line.

DUTCH WHIUSPERS- Numbers on red lines are at least 4 apart from their neighbors on the line.

RENBAN- Numbers on purple lines are each a set of non-repeating consecutive numbers, in any order.

Numbers do not repeat on  ANY lines.

KILLER CAGES- Numbers in cages sum to 10.

KROPKI PAIR- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
