---
format: open-rules
title: Looking for Phisto
setter: EPH
source: https://tinyurl.com/42htvjat
case: https://sudoku-sleuth.com/cases/looking-for-phisto
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight
thermo r5c1-r6c1-r6c2-r6c3
whispers-1: whispers r1c8-r2c7-r3c8-r2c8 gap 5 loop true
whispers-2: whispers r7c5-r8c4-r9c5-r8c6 gap 5 loop true
whispers-3: whispers r3c2-r2c2-r2c1-r3c1 gap 5
whispers-4: whispers r7c8-r8c8-r9c8-r8c9 gap 5
renban-1: renban r4c3-r3c4-r2c5-r3c6-r4c5-r5c4
renban-2: renban r2c4-r3c5-r4c6
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

The two, separate purple lines each contain a non-repeating set of consecutive digits, in any order.

Adjacent digits on a green line must differ by at least 5.

Digits along the grey thermometer must strictly increase from the bulb to the tip.

Cells which are a chess knight's move apart must contain different digits.
