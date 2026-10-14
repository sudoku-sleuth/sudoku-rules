---
format: open-rules
title: Slow Down
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zwpdevn7f4
case: https://sudoku-sleuth.com/cases/slow-down
library: https://rules.sudoku-sleuth.com/
status: read
exported: ca03f037193df0fb23fa88155bc5db88
---

```rules
sudoku 9x9
kropki-1: kropki r6c4-r7c4 black
kropki-2: kropki r3c6-r4c6 black
kropki-3: kropki r1c8-r2c8 black
kropki-4: kropki r9c7-r9c8 black
kropki-5: kropki r7c5-r7c6 black
kropki-6: kropki r7c2-r8c2 white
slow-thermo-1: slow-thermo r2c2-r3c3-r4c4-r4c5-r4c6-r3c7-r2c8
slow-thermo-2: slow-thermo r8c2-r7c3-r6c4-r6c5-r6c6-r7c7-r8c8
slow-thermo-3: slow-thermo r3c6-r2c7-r1c8-r2c9-r3c8-r4c7
slow-thermo-4: slow-thermo r7c6-r8c7-r9c8-r8c9-r7c8-r6c7
slow-thermo-5: slow-thermo r4c3-r3c2-r2c1-r1c2-r2c3-r3c4
slow-thermo-6: slow-thermo r6c3-r7c2-r8c1-r9c2-r8c3-r7c4
```

**Sudoku, Slow Thermometers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Slow Thermometers: Digits along thermometers can repeat but cannot decrease as you move from bulb to tip.
- Kropki Pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
