---
format: open-rules
title: Further Graduated Thermometers
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/3xwv6pblkh
case: https://sudoku-sleuth.com/cases/further-graduated-thermometers
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c7=2 r2c8=9 r4c9=5 r8c4=2 r8c5=5
---

```rules
sudoku 9x9
kropki-1: kropki r5c5-r5c6 colour "white"
kropki-2: kropki r5c2-r5c3 colour "white"
kropki-3: kropki r9c4-r9c5 colour "white"
kropki-4: kropki r1c2-r1c3 colour "white"
kropki-5: kropki r2c5-r3c5 colour "white"
kropki-6: kropki r2c1-r3c1 colour "white"
kropki-7: kropki r7c2-r7c3 colour "white"
kropki-8: kropki r4c8-r5c8 colour "white"
kropki-9: kropki r7c8-r8c8 colour "white"
kropki-10: kropki r9c8-r9c9 colour "white"
kropki-11: kropki r5c7-r5c8 colour "white"
slow-thermo-1: slow-thermo r2c4-r1c3-r1c2-r2c1-r3c1-r4c1-r5c2-r5c3-r4c4
slow-thermo-2: slow-thermo r3c5-r4c6-r5c6-r4c7-r5c8-r4c8-r3c9
slow-thermo-3: slow-thermo r6c6-r5c5-r5c4-r6c3-r7c3-r8c3-r9c4-r9c5-r8c6
```

**Standard Sudoku, Thermometers, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Slow Thermometers: Digits along grey thermos can repeat but cannot decrease as you move from bulb to tip.
- Consecutive Pairs: Digits separated by white dots are consecutive.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
