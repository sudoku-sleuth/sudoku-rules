---
format: open-rules
title: Boiling Pot
setter: EPH
source: https://sudokupad.app/4umstqhw8j
case: https://sudoku-sleuth.com/cases/boiling-pot
library: https://rules.sudoku-sleuth.com/
status: read
exported: e42bb37c124370ec1970a5f2bcc4a02c
---

```rules
sudoku 9x9
kropki-1: kropki r7c3-r7c4 white
kropki-2: kropki r7c6-r7c7 white
kropki-3: kropki r7c5-r8c5 white
kropki-4: kropki r6c2-r7c2 white
kropki-5: kropki r6c8-r7c8 white
kropki-6: kropki r4c2-r4c3 white
kropki-7: kropki r1c5-r2c5 white
kropki-8: kropki r4c9-r5c9 white
kropki-9: kropki r1c8-r1c9 white
kropki-10: kropki r2c1-r2c2 white
kropki-11: kropki r8c8-r9c8 white
kropki-12: kropki r9c3-r9c4 black
kropki-13: kropki r9c6-r9c7 black
entropic-1: entropic r7c3-r6c2-r7c1-r8c2-r9c3-r8c4-r7c5-r8c6-r9c7-r8c8-r7c9-r6c8-r7c7
entropic-2: entropic r3c5-r3c6-r3c7-r4c8-r4c7-r4c6-r4c5-r4c4-r4c3-r4c2-r3c3-r3c4-r2c5
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

The light peach line is an entropic line: every group of three consecutive cells along a line must contain a low digit (1,2,3), a middle digit (4,5,6), and a high digit (7,8,9).

Digits separated by a black dot must be in a 1:2 ratio.
Digits separated by a white dot must be consecutive.
