---
format: open-rules
title: Ripples
setter: Timotab
source: https://sudokupad.app/4orr8hq7mz
case: https://sudoku-sleuth.com/cases/ripples-3
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3c95ab72e950dac18ea5eaa2967e3b27
---

```rules
sudoku 9x9
thermo-1: thermo r6c1-r5c1-r4c1-r3c1-r2c2-r1c3-r1c4
thermo-2: thermo r2c4-r2c3-r3c2-r4c2
thermo-3: thermo r3c5-r4c5-r5c4-r5c3
thermo-4: thermo r6c3-r6c4-r5c5-r4c6-r3c6-r2c6-r1c6
thermo-5: thermo r9c5-r9c6-r9c7-r8c8-r7c9-r6c9
thermo-6: thermo r6c8-r7c8-r8c7
little-killer-1: little-killer r6c9-r7c8-r8c7-r9c6 sum 28
little-killer-2: little-killer r1c4-r2c3-r3c2-r4c1 sum 18
little-killer-3: little-killer r1c5-r2c4-r3c3-r4c2-r5c1 sum 23
diagonal direction "main"
```

• Normal Sudoku rules apply: Place the digits 1-9 in each row, column, and box, without repetition.
• Digits along the marked diagonal must not repeat.
• Digits along thermometers strictly increase from the bulb end.
• Numbers outside the grid indicate the sum of the digits along the indicated diagonal. Digits may repeat along the diagonal if allowed by other rules.
