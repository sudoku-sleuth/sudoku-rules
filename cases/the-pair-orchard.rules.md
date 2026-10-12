---
format: open-rules
title: The Pair Orchard
setter: EPH
source: https://tinyurl.com/bdfxjp72
case: https://sudoku-sleuth.com/cases/the-pair-orchard
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight
kropki r5c1-r5c2 colour "black"
whispers-1: whispers r5c3-r4c3-r3c3-r3c4-r3c5-r3c6-r4c6-r5c6-r6c6-r6c5 gap 5
whispers-2: whispers r4c5-r4c4-r5c4-r6c4-r7c4-r7c5-r7c6-r7c7-r6c7-r5c7 gap 5
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Cells which are a chess knight's move apart may not contain the same digit.

The green lines are German Whisper lines: adjacent cells along a line must contain digits which differ by at least 5.

The black dot separates digits where one of them is double the other.  Not all black dots are necessarily given.
