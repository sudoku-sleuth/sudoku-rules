---
format: open-rules
title: Parting Ways
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/parting-ways
case: https://sudoku-sleuth.com/cases/parting-ways
library: https://rules.sudoku-sleuth.com/
status: read
givens: r8c8=2
---

```rules
sudoku 9x9
thermo-1: thermo r1c3-r2c3-r3c3-r4c4-r5c4
thermo-2: thermo r9c6-r8c7-r7c7-r6c6-r5c6
thermo-3: thermo r7c2-r6c1-r5c1-r4c1-r3c1
thermo-4: thermo r8c3-r8c4-r8c5-r7c6
thermo-5: thermo r2c6-r3c6-r4c7-r5c8-r6c8
thermo-6: thermo r1c8-r2c8-r3c9
region-sum-1: region-sum r1c3-r2c3-r3c3-r4c4-r5c4-r6c4 segments [["r1c3","r2c3","r3c3"],["r4c4","r5c4","r6c4"]]
region-sum-2: region-sum r6c5-r6c6-r7c7-r8c7-r9c6-r9c5 segments [["r6c5","r6c6"],["r7c7","r8c7"],["r9c6","r9c5"]]
region-sum-3: region-sum r5c1-r6c1-r7c2-r8c2-r8c3-r8c4 segments [["r5c1","r6c1"],["r7c2","r8c2","r8c3"],["r8c4"]]
region-sum-4: region-sum r1c6-r2c6-r3c6-r4c7-r4c8-r3c9-r2c9 segments [["r1c6","r2c6","r3c6"],["r4c7","r4c8"],["r3c9","r2c9"]]
```

**Sudoku, Region Sum Lines, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Region Sum Lines: Box borders split blue region sum lines into sections and the digits on those section must sum to the same value.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
