---
format: open-rules
title: Hot, Cold, Just Right
setter: The Bard
source: https://sudokupad.app/e48gucd61r
case: https://sudoku-sleuth.com/cases/hot-cold-just-right
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight
thermo-1: thermo r9c5-r8c5-r9c6-r8c6
thermo-2: thermo r8c2-r7c2-r8c3-r7c3
thermo-3: thermo r3c3-r2c3-r3c2-r2c2
thermo-4: thermo r5c8-r4c8-r5c9-r4c9
thermo-5: thermo r5c1-r6c2-r5c2-r6c3
thermo-6: thermo r2c9-r3c8-r2c8-r3c7
arrow-1: arrow r8c7-r8c6 bulb ["r8c8"]
arrow-2: arrow r7c4-r7c3 bulb ["r7c5"]
arrow-3: arrow r4c7-r4c8 bulb ["r4c6"]
window-classes classes "entropy"
```

Hot, Cold, Just Right
Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
Global Entropy: Every 2x2 set of cells must contain at least 1 high (7,8,9), medium (4,5,6), and a low (1,2,3) digit.
Anti-Knight: Cells that are a Knight's move apart (in chess) may not contain the same digit.
Thermometers: Digits on grey thermos must increase from the bulb to the tip.
Arrow: Digits on an arrow must sum to the digit placed in that arrow's circle.
