---
format: open-rules
title: Knight in the Hot Seat
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/kiym0h0l87
case: https://sudoku-sleuth.com/cases/knight-in-the-hot-seat
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=1 r2c8=5 r5c5=9 r7c9=4 r8c2=6 r9c7=7
exported: 4c8f846c62c459c811d85bc532eefb2d
---

```rules
sudoku 9x9
anti-knight
thermo-1: thermo r2c5-r2c4-r3c4-r3c5-r3c6-r2c6
thermo-2: thermo r8c5-r8c6-r7c6-r7c5-r7c4-r8c4
thermo-3: thermo r5c2-r4c2-r4c3-r5c3-r6c3-r6c2
thermo-4: thermo r5c8-r6c8-r6c7-r5c7-r4c7-r4c8
thermo-5: thermo r3c3-r4c4
thermo-6: thermo r3c7-r4c6
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
