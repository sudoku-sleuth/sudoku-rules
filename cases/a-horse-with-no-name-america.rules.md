---
format: open-rules
title: A Horse With No Name (America)
setter: Will Power
source: https://sudokupad.app/weeguc98qh
case: https://sudoku-sleuth.com/cases/a-horse-with-no-name-america
library: https://rules.sudoku-sleuth.com/
status: read
givens: r6c1=5
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c2 connected true
cage-2: cage r2c1-r3c1 connected true
cage-3: cage r3c2-r3c3 connected true
cage-4: cage r4c4-r5c4 connected true
cage-5: cage r5c1-r5c2 connected true
cage-6: cage r7c2-r7c3 connected true
cage-7: cage r8c2-r8c3 connected true
cage-8: cage r8c1-r9c1 connected true
cage-9: cage r8c5-r8c6 connected true
cage-10: cage r8c8-r8c9 connected true
cage-11: cage r9c8-r9c9 connected true
cage-12: cage r1c6-r2c6 connected true
cage-13: cage r1c9-r2c9-r3c8-r3c9 connected true
cage-14: cage r7c7-r8c7 connected true
kropki-1: kropki r5c5-r6c5 colour "black"
kropki-2: kropki r2c6-r2c7 colour "black"
whispers-1: whispers r9c6-r8c6-r7c6-r6c6-r7c7-r8c8-r9c8-r9c9-r8c9-r7c9-r6c8-r5c7-r4c6-r4c5 gap 4
whispers-2: whispers r6c1-r7c2-r8c2-r9c3 gap 4
whispers-3: whispers r9c5-r8c5-r7c5-r6c5-r6c4-r7c3-r8c3 gap 4
whispers-4: whispers r6c1-r5c1-r4c2 gap 4
renban-1: renban r2c8-r2c7-r2c6-r3c6-r3c7
renban-2: renban r4c6-r3c5-r2c5-r3c4-r4c3-r4c4-r4c5-r5c5-r6c5
```

'I've been through the desert on a horse with no name.' (America, 1971) Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on red lines (horse) are at least 4 apart from their neighbors on the line. The only 5 on red lines is the given one. RENBAN- Numbers on purple lines (Native American) are each a set of non-repeating, consecutive numbers, in any order. KILLER CAGES- Numbers in cages sum to 10. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. The picture is inspired by "End of the Trail" sculpture by James Earl Fraser.
