---
format: open-rules
title: Fishbones
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/rkljeojz5y
case: https://sudoku-sleuth.com/cases/fishbones
library: https://rules.sudoku-sleuth.com/
status: read
exported: d98101f05ed8558f5a764b7573ab6cdc
---

```rules
sudoku 9x9
kropki-1: kropki r9c5-r9c6 white
kropki-2: kropki r5c1-r6c1 white
kropki-3: kropki r2c9-r3c9 white
kropki-4: kropki r1c7-r1c8 white
kropki-5: kropki r3c5-r4c5 white
kropki-6: kropki r8c8-r9c8 black
kropki-7: kropki r5c9-r6c9 black
kropki-8: kropki r1c4-r1c5 black
kropki-9: kropki r5c2-r5c3 black
kropki-10: kropki r7c1-r7c2 black
slow-thermo-1: slow-thermo r9c1-r8c2-r7c3-r6c4-r5c5-r4c6-r3c7-r2c8-r1c9
slow-thermo-2: slow-thermo r9c1-r8c2-r7c3-r6c4-r5c5-r4c6-r3c7-r2c6-r1c5
slow-thermo-3: slow-thermo r9c1-r8c2-r7c3-r6c4-r5c5-r4c6-r3c7-r4c8-r5c9
slow-thermo-4: slow-thermo r9c1-r8c2-r7c3-r6c4-r5c5-r4c4-r3c3-r2c2
slow-thermo-5: slow-thermo r9c1-r8c2-r7c3-r6c4-r5c5-r6c6-r7c7-r8c8
slow-thermo-6: slow-thermo r9c1-r8c2-r7c3-r8c4-r9c5
slow-thermo-7: slow-thermo r9c1-r8c2-r7c3-r6c2-r5c1
```

**Sudoku, Slow Thermometers, Kropki (no negative)**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Slow Thermometers: Digits along thermometers can repeat but cannot decrease as you move from bulb to tip.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more of our puzzles, visit https://missingdeck.net
