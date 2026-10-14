---
format: open-rules
title: The Kids Are Back In Town
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fmunmxw2iw
case: https://sudoku-sleuth.com/cases/the-kids-are-back-in-town
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c2=8 r5c8=5 r8c1=4 r9c5=6
exported: 8dc808368f13eb18d972a584b4255dbf
---

```rules
sudoku 9x9
thermo-1: thermo r2c2-r2c1-r1c1-r1c2-r1c3
thermo-2: thermo r3c3-r2c3-r2c4-r3c4-r4c4
thermo-3: thermo r8c8-r9c8-r9c9-r8c9-r7c9
thermo-4: thermo r5c4-r5c3-r5c2-r6c2-r6c3
thermo-5: thermo r8c5-r8c6-r7c6-r7c5
thermo-6: thermo r1c6-r1c5-r2c5-r2c6
thermo-7: thermo r1c9-r2c9-r2c8-r1c8
thermo-8: thermo r9c3-r9c2-r8c2-r8c3
thermo-9: thermo r4c7-r4c8-r5c8-r5c7
window-classes classes "entropy"
```

**Sudoku, Global Entropy, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Global Entropy: Every 2x2 region must contain at least one low digit (123), at least one middle digit (456) and at least one high digit (789).
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
