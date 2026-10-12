---
format: open-rules
title: Turbulence
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/apvbsieete
case: https://sudoku-sleuth.com/cases/turbulence
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c8-r4c8 colour "white"
kropki-2: kropki r3c5-r4c5 colour "white"
kropki-3: kropki r4c3-r4c4 colour "white"
kropki-4: kropki r6c3-r6c4 colour "white"
kropki-5: kropki r8c5-r8c6 colour "white"
kropki-6: kropki r5c8-r5c9 colour "white"
kropki-7: kropki r3c6-r3c7 colour "white"
kropki-8: kropki r6c2-r7c2 colour "white"
kropki-9: kropki r7c5-r8c5 colour "black"
kropki-10: kropki r8c4-r8c5 colour "black"
kropki-11: kropki r4c6-r4c7 colour "black"
arrow-1: arrow r5c3-r6c2-r7c2 bulb ["r5c4"]
arrow-2: arrow r5c3-r4c2-r3c2 bulb ["r5c4"]
arrow-3: arrow r5c7-r4c8-r3c8 bulb ["r5c6"]
arrow-4: arrow r5c7-r6c8-r7c8 bulb ["r5c6"]
arrow-5: arrow r1c3-r2c4-r3c5-r4c5 bulb ["r1c2"]
arrow-6: arrow r1c7-r2c6-r3c5-r4c5 bulb ["r1c8"]
arrow-7: arrow r8c4-r9c3-r9c2 bulb ["r7c5"]
arrow-8: arrow r8c6-r9c7-r9c8 bulb ["r7c5"]
```

Standard sudoku rules apply: each row, column, and box must contain a complete set of the digits 1-9.

Standard arrow constraint: digits along an arrow sum to the number in the attached circle and may repeat if permitted by standard sudoku constraints.

Standard kropki dots: digits separated by a white dot form a consecutive pair. Digits separated by a black dot are in a 1:2 ratio.
