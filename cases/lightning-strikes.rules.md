---
format: open-rules
title: Lightning Strikes
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/6g84m0d0l8
case: https://sudoku-sleuth.com/cases/lightning-strikes
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r3c1-r2c2-r3c2-r4c2-r3c3-r4c3-r5c3
thermo-2: thermo r3c9-r2c8-r3c8-r4c8-r3c7-r4c7-r5c7
thermo-3: thermo r7c3-r6c4-r7c4-r8c4-r7c5-r8c5-r9c5
kropki-1: kropki r4c8-r5c8 colour "white"
kropki-2: kropki r1c8-r2c8 colour "white"
kropki-3: kropki r2c3-r3c3 colour "white"
kropki-4: kropki r2c7-r3c7 colour "white"
kropki-5: kropki r4c3-r4c4 colour "white"
kropki-6: kropki r9c8-r9c9 colour "white"
kropki-7: kropki r7c1-r8c1 colour "white"
kropki-8: kropki r4c2-r5c2 colour "black"
kropki-9: kropki r1c2-r2c2 colour "black"
kropki-10: kropki r7c5-r7c6 colour "black"
kropki-11: kropki r5c6-r5c7 colour "black"
kropki-12: kropki r9c2-r9c3 colour "black"
```

**Sudoku, Thermometers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
 - Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more puzzles like these, please visit our website https://missingdeck.net
