---
format: open-rules
title: Different Kind Of Bent Triples
setter: Will Power
source: https://sudokupad.app/yuc8i8lhch
case: https://sudoku-sleuth.com/cases/different-kind-of-bent-triples
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-king
kropki-1: kropki r5c4-r6c4 colour "white"
kropki-2: kropki r6c4-r6c5 colour "white"
kropki-3: kropki r4c6-r4c7 colour "white"
kropki-4: kropki r3c7-r4c7 colour "white"
kropki-5: kropki r7c5-r8c5 colour "white"
kropki-6: kropki r8c5-r8c6 colour "white"
kropki-7: kropki r2c2-r3c2 colour "white"
kropki-8: kropki r3c2-r3c3 colour "white"
kropki-9: kropki r8c8-r9c8 colour "white"
kropki-10: kropki r9c7-r9c8 colour "white"
kropki-11: kropki r2c4-r2c5 colour "white"
kropki-12: kropki r1c5-r2c5 colour "white"
kropki-13: kropki r5c5-r5c6 colour "white"
kropki-14: kropki r4c5-r5c5 colour "white"
kropki-15: kropki r1c3-r2c3 colour "white"
kropki-16: kropki r1c3-r1c4 colour "white"
kropki-17: kropki r3c1-r4c1 colour "white"
kropki-18: kropki r4c1-r4c2 colour "white"
kropki-19: kropki r5c4-r5c5 colour "black"
kropki-20: kropki r4c4-r5c4 colour "black"
arrow-1: arrow r3c7-r4c6 bulb ["r2c8"]
arrow-2: arrow r2c2-r3c3-r4c4 bulb ["r1c1"]
arrow-3: arrow r7c3-r6c4 bulb ["r8c2"]
arrow-4: arrow r8c8-r7c7-r6c6 bulb ["r9c9"]
arrow-5: arrow r7c5-r6c5 bulb ["r7c4"]
arrow-6: arrow r3c5-r4c5 bulb ["r3c6"]
whispers-1: whispers r4c9-r4c8-r5c8 gap 4
whispers-2: whispers r5c3-r6c3-r6c2 gap 4
whispers-3: whispers r7c2-r7c1-r8c1 gap 4
whispers-4: whispers r8c8-r8c7-r9c7 gap 4
whispers-5: whispers r8c5-r9c5-r9c4 gap 4
whispers-6: whispers r2c4-r3c4-r3c5 gap 4
```

Normal Sudoku rules apply. 

ANTI-KING- Cells a chess king's move apart cannot have the same number.

ARROWS- Numbers on arrows sum to the number in the arrow's circle.

DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
