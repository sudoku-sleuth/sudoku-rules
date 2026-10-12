---
format: open-rules
title: Lockout Labyrinth
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/vybt2zgiyp
case: https://sudoku-sleuth.com/cases/lockout-labyrinth
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c3=9 r5c1=1 r5c9=9 r6c7=1
---

```rules
sudoku 9x9
kropki-1: kropki r8c4-r9c4 colour "white"
kropki-2: kropki r1c6-r2c6 colour "white"
kropki-3: kropki r8c9-r9c9 colour "white"
kropki-4: kropki r1c1-r2c1 colour "white"
kropki-5: kropki r9c2-r9c3 colour "white"
kropki-6: kropki r1c7-r1c8 colour "white"
lockout-1: lockout r4c4-r4c5-r4c6 ends ["r4c3","r4c7"] gap 4
lockout-2: lockout r6c4-r6c5-r6c6 ends ["r6c3","r6c7"] gap 4
lockout-3: lockout r5c6-r5c7-r4c8-r3c8-r3c7 ends ["r5c5","r3c6"] gap 4
lockout-4: lockout r5c4-r5c3-r6c2-r7c2-r7c3 ends ["r5c5","r7c4"] gap 4
lockout-5: lockout r8c3-r8c2-r7c1-r6c1 ends ["r8c4","r5c1"] gap 4
lockout-6: lockout r2c7-r2c8-r3c9-r4c9 ends ["r2c6","r5c9"] gap 4
lockout-7: lockout r1c8-r1c7 ends ["r2c9","r1c6"] gap 4
lockout-8: lockout r9c2-r9c3 ends ["r8c1","r9c4"] gap 4
lockout-9: lockout r2c2 ends ["r2c3","r2c1"] gap 4
lockout-10: lockout r8c8 ends ["r8c7","r8c9"] gap 4
```

Standard sudoku constraints: Every row, column, and box must contain a complete set of the digits 1-9.

Lockout lines: Digits in the diamonds at the ends of a lockout line must differ by at least 4. Digits on the line may repeat but cannot be equal to or between the digits in the diamonds. 

Kropki dots: Digits on either side of a white dot are consecutive. Not all possible dots are shown.
