---
format: open-rules
title: Feverish Knight
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/bx8q3w1mb4
case: https://sudoku-sleuth.com/cases/feverish-knight
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=4 r2c9=2 r4c2=6 r4c6=3 r8c3=1 r9c8=5
---

```rules
sudoku 9x9
anti-knight
thermo-1: thermo r4c1-r5c1-r6c1-r7c1-r8c2-r9c3
thermo-2: thermo r6c9-r5c9-r4c9-r3c9-r2c8-r1c7
thermo-3: thermo r1c6-r1c5-r1c4-r1c3-r2c2-r3c1
thermo-4: thermo r7c7-r8c8-r9c9
thermo-5: thermo r9c4-r9c5-r9c6
```

**Standard Sudoku, Thermometer, Anti-knight**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermos: Digits on Thermos are strictly increasing from bulb (grey circle) to tip (along the grey line).
- Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.

For more of our puzzles, please visit https://missingdeck.net
