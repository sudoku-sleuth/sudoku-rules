---
format: open-rules
title: The Arrows Are A Bit Dotty
setter: EPH
source: https://tinyurl.com/26s8f58d
case: https://sudoku-sleuth.com/cases/the-arrows-are-a-bit-dotty
library: https://rules.sudoku-sleuth.com/
status: read
exported: bc9d1f4ec6143345c4453b677a959d75
---

```rules
sudoku 9x9
kropki-1: kropki r2c1-r3c1 white
kropki-2: kropki r5c1-r6c1 white
kropki-3: kropki r6c2-r7c2 white
kropki-4: kropki r5c5-r5c6 white
kropki-5: kropki r2c4-r2c5 white
kropki-6: kropki r1c6-r2c6 white
kropki-7: kropki r1c1-r2c1 black
kropki-8: kropki r4c3-r5c3 black
kropki-9: kropki r5c2-r5c3 black
kropki-10: kropki r8c4-r8c5 black
kropki-11: kropki r6c4-r7c4 black
arrow-1: arrow r2c8-r1c8 bulb ["r3c9"]
arrow-2: arrow r5c8-r6c8 bulb ["r4c9"]
arrow-3: arrow r8c9-r7c9 bulb ["r9c9"]
arrow-4: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-5: arrow r3c6-r3c5-r3c4 bulb ["r1c7","r2c7"]
arrow-6: arrow r4c6-r4c5-r4c4 bulb ["r5c7","r6c7"]
arrow-7: arrow r7c7-r8c7-r9c7-r9c6-r9c5-r9c4 bulb ["r5c7","r6c7"]
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits in cells separated by a black dot are in a 1:2 ratio; digits in cells separated by a white dot are consecutive.  Not all possible dots are given.

Bi-directional Arrow rules - digits in cells along an arrow sum to the one- or two-digit number in the circles and pills, READ IN THE DIRECTION OF THE ARROW.  Eg if an arrow is  <---(34)--->, the left arrow sums to 43, and the right arrow sums to 34.
