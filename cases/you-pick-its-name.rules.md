---
format: open-rules
title: You pick its name
setter: The Bard
source: https://sudokupad.app/30mf6nj729
case: https://sudoku-sleuth.com/cases/you-pick-its-name
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c9-r5c9-r6c9 total 6 connected true
cage-2: cage r1c4-r1c5-r1c6 total 24 connected true
cage-3: cage r9c4-r9c5-r9c6 total 6 connected true
cage-4: cage r4c1-r5c1-r6c1 total 24 connected true
thermo-1: thermo r6c6-r7c7
thermo-2: thermo r4c6-r3c7
thermo-3: thermo r4c4-r3c3
thermo-4: thermo r6c4-r7c3
kropki-1: kropki r9c7-r9c8 colour "black"
kropki-2: kropki r1c2-r1c3 colour "black"
kropki-3: kropki r2c5-r3c5 colour "black"
kropki-4: kropki r7c5-r8c5 colour "black"
kropki-5: kropki r7c7-r8c7 colour "black"
kropki-6: kropki r4c2-r4c3 colour "white"
kropki-7: kropki r6c7-r6c8 colour "white"
kropki-8: kropki r7c4-r8c4 colour "white"
kropki-9: kropki r5c6-r6c6 colour "white"
kropki-10: kropki r3c5-r3c6 colour "white"
kropki-11: kropki r4c4-r4c5 colour "white"
kropki-12: kropki r2c1-r3c1 colour "white"
kropki-13: kropki r6c3-r7c3 colour "white"
whispers-1: whispers r1c9-r2c8 gap 5
whispers-2: whispers r1c1-r2c2 gap 5
whispers-3: whispers r8c2-r9c1 gap 5
whispers-4: whispers r8c8-r9c9 gap 5
parity-cells r4c5-r5c5-r6c5-r5c6-r5c4 parity "odd"
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
German Whispers: Adjacent digits on a green line must have a difference of at least 5.
Killer: Digits in cages must sum to the number in the top left corner of the cage. Digits may not repeat within a cage.
Kropki Pairs: Digits separated by a black dot must be in a 2:1 ratio. Digits separated by a white dot must be consecutive.
Odd: Digits in bordered light gray circles must be odd. 
Thermo: Digits on grey thermos must increase from the bulb to the tip.
