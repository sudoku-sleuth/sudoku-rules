---
format: open-rules
title: Cruel Summer (Bananarama 1983)
setter: Will Power
source: https://sudokupad.app/tottlr5y2u
case: https://sudoku-sleuth.com/cases/cruel-summer-bananarama-1983
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=5
exported: 9e26c5272bf21107a2c4aad517874866
---

```rules
sudoku 9x9
cage-1: cage r5c2-r6c2 total 8 connected true
cage-2: cage r3c9-r4c9 total 7 connected true
cage-3: cage r5c5-r5c6 total 14 connected true
kropki-1: kropki r4c1-r5c1 black
kropki-2: kropki r4c3-r5c3 black
kropki-3: kropki r4c8-r4c9 black
whispers-1: whispers r2c9-r3c8-r4c8-r5c7-r5c8-r6c8-r6c9-r7c8-r8c9 gap 4
whispers-2: whispers r5c2-r6c2 gap 4
whispers-3: whispers r2c4-r1c5-r1c6-r1c7 gap 4
whispers-4: whispers r4c4-r4c5-r5c5-r5c4 gap 4
whispers-5: whispers r2c2-r2c3-r3c4-r4c4-r5c4-r6c4-r7c4-r8c3-r8c2-r8c1 gap 4
whispers-6: whispers r1c7-r2c8-r3c7-r4c7-r4c6-r3c5-r2c4 gap 4
renban-1: renban r4c8-r3c9
renban-2: renban r4c3-r5c2-r4c1
renban-3: renban r7c2-r7c3
```

"Strange voices are saying..." "What did they say?' Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. THE ONLY 5 ON RED LINES IS GIVEN.  RENBAN- Numbers on purple lines (all eyebrows and left man's mouth) are each a set of non-repeating, consecutive numbers, in any order. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. The 8 is duplicated in its cage because the purple line can obscure it in certain puzzle formats.
