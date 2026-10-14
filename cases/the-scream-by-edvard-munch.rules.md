---
format: open-rules
title: The Scream, by Edvard Munch
setter: Will Power
source: https://sudokupad.app/3e3hxu8zs8
case: https://sudoku-sleuth.com/cases/the-scream-by-edvard-munch
library: https://rules.sudoku-sleuth.com/
status: read
exported: 85aaf9364c09db2d895a09be6946ff19
---

```rules
sudoku 9x9
cage-1: cage r6c4-r6c5-r6c6 total 21 connected true
cage-2: cage r5c8-r6c8 total 16 connected true
cage-3: cage r5c2-r6c2 total 11 connected true
cage-4: cage r3c5-r4c5-r5c5 total 10 connected true
cage-5: cage r4c1-r5c1 total 11 connected true
cage-6: cage r4c3-r5c3 total 11 connected true
cage-7: cage r4c7-r5c7 total 14 connected true
cage-8: cage r4c9-r5c9 total 9 connected true
cage-9: cage r8c1-r8c2 total 7 connected true
kropki-1: kropki r5c4-r5c5 black
kropki-2: kropki r5c5-r5c6 black
whispers-1: whispers r9c3-r8c3-r7c2-r6c1-r5c1-r4c1-r3c1-r2c1-r1c2 gap 5
whispers-2: whispers r4c2-r3c3-r4c4-r5c3 gap 5
whispers-3: whispers r3c7-r4c6-r5c7-r4c8 gap 5
whispers-4: whispers r6c8-r7c8-r8c8-r9c7 gap 5
whispers-5: whispers r7c5-r8c5 gap 5
whispers-6: whispers r2c3-r1c4-r1c5-r1c6-r1c7 gap 5
renban-1: renban r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c8
renban-2: renban r9c2-r8c2-r8c1-r7c1
pair-1: pair r7c8-r8c8 sum 10
pair-2: pair r5c1-r6c1 sum 10
pair-3: pair r3c1-r4c1 sum 10
pair-4: pair r1c5-r1c6 sum 10
pair-5: pair r2c6-r3c6 sum 10
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines, if other rules allow. RENBAN- Numbers on orange lines are each a set of non-repeating, consecutive numbers, in any order. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. XV PAIRS- Numbers with an X between them sum to 10. Not all possible dots and X are given. The orange and gray cell shading has no effect on the puzzle.
