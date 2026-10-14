---
format: open-rules
title: Circulating Heat
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/circulating-heat
case: https://sudoku-sleuth.com/cases/circulating-heat
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3f177255ff79548c79e7db3c36382f8a
---

```rules
sudoku 9x9
thermo-1: thermo r2c2-r1c3-r2c4-r3c3-r4c2-r3c1
thermo-2: thermo r2c8-r1c7-r2c6-r3c7-r4c8-r3c9
thermo-3: thermo r7c1-r6c2-r7c3-r8c4-r9c3-r8c2
thermo-4: thermo r7c9-r6c8-r7c7-r8c6-r9c7-r8c8
thermo-5: thermo r5c3-r5c4-r4c5-r4c6-r5c7-r6c6-r6c5
kropki-1: kropki r3c8-r4c8 white
kropki-2: kropki r3c2-r3c3 white
kropki-3: kropki r1c8-r2c8 white
kropki-4: kropki r5c8-r6c8 white
kropki-5: kropki r7c3-r8c3 white
kropki-6: kropki r7c1-r8c1 white
kropki-7: kropki r5c6-r5c7 white
kropki-8: kropki r5c2-r6c2 white
kropki-9: kropki r4c2-r5c2 white
```

**Sudoku, Thermometers, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear once each in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Consecutive Pairs: Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
