---
format: open-rules
title: Beaker on a Slow Burner
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/beaker-on-a-slow-burner
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
slow-thermo-1: slow-thermo r2c7-r3c6-r4c7-r5c6-r6c7-r7c6-r8c7-r9c6-r9c5-r9c4-r8c3-r7c4-r6c3-r5c4-r4c3-r3c4-r2c3
slow-thermo-2: slow-thermo r1c1-r2c1-r3c1-r4c2-r5c1-r6c2-r7c1
slow-thermo-3: slow-thermo r9c2-r9c3
slow-thermo-4: slow-thermo r9c8-r9c7
slow-thermo-5: slow-thermo r1c9-r2c9-r3c9-r4c8-r5c9-r6c8-r7c9
slow-thermo-6: slow-thermo r7c5-r6c5-r5c5-r4c5-r3c5
```

Normal sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

Slow thermometers: digits along thermometers can repeat but cannot decrease as you move from bulb to tip.
