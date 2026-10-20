---
format: open-rules
title: German Whisper Lies
setter: Marty Sears
source: https://sudokupad.app/0vi2mlpdqn
case: https://sudoku-sleuth.com/cases/german-whisper-lies
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
liar-cells
kropki-1: kropki r3c3-r4c3 black
kropki-2: kropki r5c3-r6c3 black
kropki-3: kropki r7c8-r7c9 black
kropki-4: kropki r2c9-r3c9 black
kropki-5: kropki r1c7-r1c8 black
whispers-1: whispers r7c3-r6c3-r6c4-r6c5-r6c6-r5c6-r4c6-r4c5-r4c4-r4c3-r5c3-r5c2-r4c2-r4c1-r5c1-r6c1-r6c2-r7c2-r8c2-r8c3-r8c4-r9c4-r9c3 gap 5
whispers-2: whispers r3c4-r2c4-r1c4 gap 5
whispers-3: whispers r8c7-r8c8 gap 5
whispers-4: whispers r5c7-r5c8 gap 5
whispers-5: whispers r1c2-r2c3-r3c2-r2c1 gap 5 loop true
xv-1: pair r5c4-r5c5 sum 10
xv-2: pair r7c1-r8c1 sum 10
xv-3: pair r6c7-r6c8 sum 10
```

## Source rules

Normal sudoku rules apply.

LIAR CELLS:
Every row, column and 3x3 box contains one liar cell, whose real value is different from its digit.

• Every liar cell contains a different digit from 1-9.
• Every liar cell has a different value from 1-9.

GERMAN WHISPER LINES: 
Adjacent values along a green line have a difference of at least 5.

BLACK DOTS:
If a black dot sits between two cells, the value of one is double the value of the other.

X:
If an X sits between two cells, their values sum to 10.

NOTES:
The arrows and circles on the right can be use to keep track.

The arrows and circles to the right are optional notes, outside the Sudoku board.
