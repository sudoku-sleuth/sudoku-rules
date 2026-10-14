---
format: open-rules
title: Tuna Melt
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/yj8yui1clt
case: https://sudoku-sleuth.com/cases/tuna-melt
library: https://rules.sudoku-sleuth.com/
status: read
exported: cec8d3c14e8cdb3cfe5d0b7db6556726
---

```rules
sudoku 9x9
thermo-1: thermo r1c3-r1c4-r1c5-r1c6-r1c7
thermo-2: thermo r7c1-r7c2-r7c3-r7c4-r7c5
thermo-3: thermo r4c4-r4c5-r4c6-r4c7-r4c8
thermo-4: thermo r9c5-r9c4-r9c3
thermo-5: thermo r8c8-r8c7-r8c6
sandwich-1: sandwich r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 9
sandwich-2: sandwich r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 sum 9
sandwich-3: sandwich r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 sum 9
sandwich-4: sandwich r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 sum 18
sandwich-5: sandwich r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 sum 14
sandwich-6: sandwich r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 9
sandwich-7: sandwich r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 9
sandwich-8: sandwich r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 sum 11
sandwich-9: sandwich r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 sum 15
sandwich-10: sandwich r9c8-r8c8-r7c8-r6c8-r5c8-r4c8-r3c8-r2c8-r1c8 sum 8
sandwich-11: sandwich r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 sum 11
```

**Sudoku, Sandwiches, Thermometers** 

- Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
- Sandwich: The numbers outside the grid give the sum of the digits between the 1 and the 9 in that row or column.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
