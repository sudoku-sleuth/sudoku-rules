---
format: open-rules
title: Wibbly Wobbly
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/psuct3u5cr
case: https://sudoku-sleuth.com/cases/wibbly-wobbly
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c3=7 r4c6=3 r7c5=4 r9c9=6
---

```rules
sudoku 9x9
thermo-1: thermo r4c3-r5c2-r6c3
thermo-2: thermo r5c3-r6c4-r7c3
thermo-3: thermo r7c4-r8c3-r9c4
thermo-4: thermo r8c4-r9c5-r8c6
thermo-5: thermo r7c6-r8c7-r9c6
thermo-6: thermo r5c7-r6c6-r7c7
thermo-7: thermo r4c7-r5c8-r6c7
thermo-8: thermo r2c8-r3c7-r4c8
thermo-9: thermo r2c2-r3c3-r4c2
thermo-10: thermo r1c2-r2c1-r3c2
thermo-11: thermo r1c8-r2c9-r3c8
kropki-1: kropki r3c2-r4c2 colour "white"
kropki-2: kropki r4c2-r5c2 colour "white"
kropki-3: kropki r2c8-r3c8 colour "white"
kropki-4: kropki r4c8-r5c8 colour "white"
kropki-5: kropki r8c6-r9c6 colour "white"
kropki-6: kropki r8c4-r9c4 colour "white"
kropki-7: kropki r5c3-r6c3 colour "white"
kropki-8: kropki r3c7-r4c7 colour "white"
kropki-9: kropki r6c6-r7c6 colour "white"
kropki-10: kropki r6c7-r7c7 colour "white"
kropki-11: kropki r5c4-r6c4 colour "white"
kropki-12: kropki r3c3-r4c3 colour "white"
kropki-13: kropki r1c2-r2c2 colour "white"
```

**Sudoku, Thermometers, Consecutive Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Consecutive Dots: Digits in cells separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
