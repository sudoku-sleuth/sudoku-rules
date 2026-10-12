---
format: open-rules
title: Taking The Temperature
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/s1g4s6gy3l
case: https://sudoku-sleuth.com/cases/taking-the-temperature
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r3c1-r2c1-r2c2-r3c2-r4c2-r4c3-r3c3
thermo-2: thermo r3c9-r2c9-r2c8-r3c8-r4c8-r4c7-r3c7
thermo-3: thermo r1c4-r2c4-r3c4
thermo-4: thermo r3c6-r2c6-r1c6
thermo-5: thermo r9c5-r8c5-r7c5-r6c5
thermo-6: thermo r9c2-r8c2-r7c2-r6c2
thermo-7: thermo r9c8-r8c8-r7c8-r6c8
thermo-8: thermo r7c3-r8c3-r9c3
thermo-9: thermo r7c7-r8c7-r9c7
thermo-10: thermo r9c1-r8c1-r7c1
thermo-11: thermo r7c9-r8c9-r9c9
kropki-1: kropki r5c5-r6c5 colour "white"
kropki-2: kropki r6c8-r6c9 colour "white"
kropki-3: kropki r6c1-r6c2 colour "white"
kropki-4: kropki r2c3-r3c3 colour "white"
kropki-5: kropki r5c6-r6c6 colour "white"
kropki-6: kropki r4c3-r5c3 colour "white"
kropki-7: kropki r7c2-r8c2 colour "white"
```

**Sudoku, Thermometers, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers strictly increase from bulb to tip.
- Consecutive pairs: Digits in cells separated by a white dot are consecutive. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
