---
format: open-rules
title: Tightrope
setter: Jobo
source: https://tinyurl.com/2p8afftv
case: https://sudoku-sleuth.com/cases/tightrope-2
library: https://rules.sudoku-sleuth.com/
status: read
givens: r9c7=7
---

```rules
sudoku 9x9
anti-king
diagonal direction "anti"
thermo-1: thermo r8c1-r8c2-r8c3
thermo-2: thermo r7c2-r7c3-r7c4
thermo-3: thermo r6c3-r6c4-r6c5
thermo-4: thermo r5c4-r5c5-r5c6
thermo-5: thermo r4c5-r4c6-r4c7
thermo-6: thermo r3c6-r3c7-r3c8
thermo-7: thermo r2c7-r2c8-r2c9
kropki-1: kropki r5c4-r5c5 colour "white"
kropki-2: kropki r5c5-r5c6 colour "white"
arrow-1: arrow r2c8-r2c7 bulb ["r2c9"]
arrow-2: arrow r3c7-r3c6 bulb ["r3c8"]
arrow-3: arrow r4c6-r4c5 bulb ["r4c7"]
arrow-4: arrow r5c5-r5c4 bulb ["r5c6"]
arrow-5: arrow r6c4-r6c3 bulb ["r6c5"]
arrow-6: arrow r7c3-r7c2 bulb ["r7c4"]
arrow-7: arrow r8c2-r8c1 bulb ["r8c3"]
```

Normal sudoku rules apply.

Digits cannot repeat on the marked diagonal.

Along thermometers, digits must increase from the bulb end.

Digits along an arrow must sum to the digit in that arrow's circle. (CTC app note: turning on 'Draw Arrows Above Lines' could be helpful)

Digits separated by a white dot must be consecutive. Not all dots are given.

Cells separated by a king's move cannot contain the same digit.
