---
format: open-rules
title: "'I can resist everything but temptation'"
setter: Kennet's Dad
source: https://tinyurl.com/ys6apmmw
case: https://sudoku-sleuth.com/cases/i-can-resist-everything-but-temptation
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
anti-knight
thermo r9c3-r8c3-r8c2
kropki-1: kropki r6c6-r7c6 colour "black"
kropki-2: kropki r6c7-r7c7 colour "black"
kropki-3: kropki r6c5-r7c5 colour "black"
kropki-4: kropki r3c7-r4c7 colour "black"
kropki-5: kropki r3c6-r4c6 colour "black"
kropki-6: kropki r3c8-r4c8 colour "black"
```

Normal sudoku rules apply. Digits in cells a knight's move apart in chess must not be the same digit. Any 2x2 area of cells in the grid must contain at least one digit from each modulo 3 set: 147, 258, 369. Digits in cells separated by a black dot must be in a 1:2 ratio. Digits along a thermometer must increase from the bulb end.
