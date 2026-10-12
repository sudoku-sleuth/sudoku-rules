---
fog:
  initiallyLit:
    - 21
format: open-rules
title: Casting About in the Dark
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/hlrk1fho4s
case: https://sudoku-sleuth.com/cases/casting-about-in-the-dark
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c3-r4c4 colour "white"
kropki-2: kropki r4c8-r5c8 colour "white"
kropki-3: kropki r7c2-r8c2 colour "white"
kropki-4: kropki r6c7-r7c7 colour "white"
kropki-5: kropki r6c1-r7c1 colour "white"
kropki-6: kropki r8c7-r8c8 colour "white"
pointing-thermo-1: pointing-thermo r4c5-r3c5-r3c4 ray ["r3c3","r3c2","r3c1"]
pointing-thermo-2: pointing-thermo r3c1-r2c1-r2c2 ray ["r2c3","r2c4","r2c5","r2c6","r2c7","r2c8","r2c9"]
pointing-thermo-3: pointing-thermo r3c1-r4c1-r4c2-r5c2-r5c3 ray ["r5c4","r5c5","r5c6","r5c7","r5c8","r5c9"]
pointing-thermo-4: pointing-thermo r4c6-r5c6-r5c5 ray ["r5c4","r5c3","r5c2","r5c1"]
pointing-thermo-5: pointing-thermo r5c9-r6c9-r6c8-r6c7 ray ["r6c6","r6c5","r6c4","r6c3","r6c2","r6c1"]
pointing-thermo-6: pointing-thermo r6c3-r7c3-r7c4-r6c4 ray ["r5c4","r4c4","r3c4","r2c4","r1c4"]
pointing-thermo-7: pointing-thermo r1c4-r1c3-r2c3 ray ["r3c3","r4c3","r5c3","r6c3","r7c3","r8c3","r9c3"]
pointing-thermo-8: pointing-thermo r2c8-r2c7-r3c7 ray ["r4c7","r5c7","r6c7","r7c7","r8c7","r9c7"]
pointing-thermo-9: pointing-thermo r3c9-r4c9-r4c8 ray ["r4c7","r4c6","r4c5","r4c4","r4c3","r4c2","r4c1"]
pointing-thermo-10: pointing-thermo r9c4-r9c5-r8c5 ray ["r7c5","r6c5","r5c5","r4c5","r3c5","r2c5","r1c5"]
pointing-thermo-11: pointing-thermo r9c4-r9c3-r8c3 ray ["r7c3","r6c3","r5c3","r4c3","r3c3","r2c3","r1c3"]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Fog: Part of the grid is covered with fog. As correct digits are placed, the fog will clear from cells surrounding the correct digit, revealing additional clues. There is always enough information in the revealed portion of the grid to place another correct digit without guessing. Digits can be placed within the fog.
- Consecutive Dots: Digits separated by a white dot are consecutive. Not all possible dots are necessarily given.
- Pointing Thermometers: Digits along thermometers must strictly increase from bulb to tip. In addition, the digit in the bulb of the thermometer appears X cells away from the tip, in the direction pointed to by the tip, where X is the value in the tip of the thermometer.
