---
format: open-rules
title: Interaction
setter: Jobo
source: https://tinyurl.com/5a5skc3d
case: https://sudoku-sleuth.com/cases/interaction
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c6=4 r4c9=3 r9c1=1
---

```rules
sudoku 9x9
diagonal direction "main"
thermo-1: thermo r5c5-r4c6-r3c7
thermo-2: thermo r4c4-r3c5-r2c6
thermo-3: thermo r6c6-r5c7-r4c8
thermo-4: thermo r3c3-r2c4-r1c5
thermo-5: thermo r7c7-r6c8-r5c9
arrow-1: arrow r6c4-r7c3 bulb ["r5c5"]
arrow-2: arrow r5c3-r6c2 bulb ["r4c4"]
arrow-3: arrow r4c2-r5c1 bulb ["r3c3"]
arrow-4: arrow r7c5-r8c4 bulb ["r6c6"]
arrow-5: arrow r8c6-r9c5 bulb ["r7c7"]
```

Normal sudoku rules apply.

Digits cannot repeat along the marked diagonal.

Along thermometers, digits must increase from the bulb end.

Digits along an arrow must sum to the digit in that arrow's circle.
