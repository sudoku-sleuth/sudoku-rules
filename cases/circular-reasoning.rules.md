---
format: open-rules
title: Circular Reasoning
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/f37ml1w88r
case: https://sudoku-sleuth.com/cases/circular-reasoning
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c1=6 r5c3=3 r5c5=5 r5c7=7 r8c9=4
---

```rules
sudoku 9x9
thermo-1: thermo r1c3-r2c2-r3c1-r4c1-r5c1-r6c1
thermo-2: thermo r4c9-r5c9-r6c9-r7c9-r8c8-r9c7
thermo-3: thermo r7c1-r8c2-r9c3-r9c4-r9c5-r9c6
thermo-4: thermo r1c4-r1c5-r1c6-r1c7-r2c8-r3c9
thermo-5: thermo r3c3-r3c4-r3c5
thermo-6: thermo r7c5-r7c6-r7c7
thermo-7: thermo r3c7-r4c7-r5c7
thermo-8: thermo r5c3-r6c3-r7c3
thermo-9: thermo r3c2-r4c2-r5c2
thermo-10: thermo r5c8-r6c8-r7c8
thermo-11: thermo r8c3-r8c4-r8c5
thermo-12: thermo r2c5-r2c6-r2c7
```

- Normal sudoku rules apply.
- Digits along Thermometers must strictly increase from bulb to tip.
