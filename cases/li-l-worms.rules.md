---
format: open-rules
title: Li'l Worms
setter: Timotab
source: https://sudokupad.app/eiag0skt50
case: https://sudoku-sleuth.com/cases/li-l-worms
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8f78c9af215e8a66e6f34d8617913915
---

```rules
sudoku 9x9
thermo-1: thermo r6c4-r7c4-r7c3-r8c3-r8c2-r9c2-r9c1
thermo-2: thermo r4c4-r4c3-r3c3-r3c2-r2c2-r2c1-r1c1
thermo-3: thermo r4c6-r3c6-r3c7-r2c7-r2c8-r1c8-r1c9
thermo-4: thermo r6c6-r6c7-r7c7-r7c8
thermo-5: thermo r9c5-r9c4-r8c5-r8c6
thermo-6: thermo r5c8-r5c7-r4c7
arrow-1: arrow r3c1-r4c2 bulb ["r3c2"]
arrow-2: arrow r2c3 bulb ["r1c4"]
```

• Normal Sudoku rules apply. 
• Digits on grey thermometers strictly increase from the bulb to the tip.
• Digits on arrows sum to the digit in the attached bulb
