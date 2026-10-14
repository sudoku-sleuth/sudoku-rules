---
format: open-rules
title: Six Swirls
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/six-swirls
case: https://sudoku-sleuth.com/cases/six-swirls
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=2 r5c5=7
exported: 0bb2d0a8c839fb0ad8ce8e3ca3128c17
---

```rules
sudoku 9x9
thermo-1: thermo r3c3-r2c2-r2c3-r2c4-r3c4-r4c3
thermo-2: thermo r3c7-r2c8-r2c7-r2c6-r3c6-r4c7
thermo-3: thermo r7c3-r8c2-r8c3-r8c4-r7c4-r6c3
thermo-4: thermo r7c7-r8c8-r8c7-r8c6-r7c6-r6c7
thermo-5: thermo r5c8-r4c9-r5c9-r6c9
thermo-6: thermo r5c2-r6c1-r5c1-r4c1
```

**Sudoku, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
