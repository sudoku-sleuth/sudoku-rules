---
format: open-rules
title: Millenium Falcon Cockpit
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/millenium-falcon-cockpit
library: https://rules.sudoku-sleuth.com/
status: read
exported: f9db7f672bd944cb27b7816db7bf5b8f
---

```rules
sudoku 9x9
cage r5c5-r5c6 total 14 connected true
kropki-1: kropki r8c1-r8c2 black
kropki-2: kropki r8c8-r8c9 black
kropki-3: kropki r9c4-r9c5 black
kropki-4: kropki r9c8-r9c9 black
kropki-5: kropki r9c6-r9c7 black
palindrome r7c7-r7c6-r7c5-r7c4-r7c3-r6c2-r5c2-r4c2-r3c3-r2c4-r2c5-r2c6-r3c7-r4c8-r5c8-r6c8
whispers-1: whispers r6c5-r6c4-r5c4-r4c4 gap 5
whispers-2: whispers r4c5-r4c6-r5c6-r6c6 gap 5
whispers-3: whispers r7c8-r6c9-r5c9-r4c9-r3c9-r2c8-r1c7-r1c6-r1c5-r1c4 gap 4
whispers-4: whispers r7c2-r6c1-r5c1-r4c1 gap 4
whispers-5: whispers r1c3-r2c2 gap 4
renban-1: renban r6c4-r7c3
renban-2: renban r6c6-r7c7
renban-3: renban r5c6-r5c7-r5c8-r5c9
renban-4: renban r4c6-r3c7-r2c8
renban-5: renban r4c5-r3c5-r2c5-r1c5
renban-6: renban r4c4-r3c3-r2c2
renban-7: renban r5c4-r5c3-r5c2-r5c1
renban-8: renban r6c5-r7c5
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on red lines. RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. The gray line is a palindrome (Numbers the same distance from both ends are the same as one another). Numbers with a black dot between them are in a ratio of 2:1. Not all dots are given. Numbers in the cage sum to the number in the top left corner of the cage.
