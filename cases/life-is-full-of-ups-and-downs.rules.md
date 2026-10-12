---
format: open-rules
title: Life is full of Ups and Downs
setter: EPH
source: https://tinyurl.com/2zah4c42
case: https://sudoku-sleuth.com/cases/life-is-full-of-ups-and-downs
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c9-r7c9 colour "white"
kropki-2: kropki r3c1-r4c1 colour "black"
kropki-3: kropki r1c6-r1c7 colour "black"
arrow-1: arrow r3c5-r4c6 bulb ["r2c4"]
arrow-2: arrow r7c5-r6c4 bulb ["r8c6"]
arrow-3: arrow r5c8-r6c8-r7c8 bulb ["r5c7"]
whispers-1: whispers r3c1-r3c2-r3c3-r3c4 gap 5
whispers-2: whispers r1c7-r2c7-r3c7-r4c7 gap 5
whispers-3: whispers r7c9-r7c8-r7c7-r7c6 gap 5
whispers-4: whispers r6c3-r7c3-r8c3-r9c3 gap 5
whispers-5: whispers r1c1-r1c2-r1c3-r1c4-r1c5-r1c6 gap 5
whispers-6: whispers r1c9-r2c9-r3c9-r4c9-r5c9-r6c9 gap 5
whispers-7: whispers r9c9-r9c8-r9c7-r9c6-r9c5-r9c4 gap 5
whispers-8: whispers r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 gap 5
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.
The green lines are Whisper lines: digits in adjacent cells connected by a green line must have a difference of at least 5.
Digits on an arrow must sum to the digit in the attached circle.
Digits separated by a black dot must be in a 1:2 ratio.
Digits separated by a white dot must be consecutive.
