---
format: open-rules
title: Dots with maximum heat
setter: Chip Sounder
source: https://sudokupad.app/295tlqkh9z
case: https://sudoku-sleuth.com/cases/dots-with-maximum-heat
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r1c2-r1c3-r1c4
thermo-2: thermo r1c1-r2c1-r3c1-r4c1-r5c1
thermo-3: thermo r1c9-r1c8-r1c7-r1c6-r1c5
thermo-4: thermo r1c9-r2c9-r3c9-r4c9
thermo-5: thermo r9c9-r8c9-r7c9-r6c9-r5c9
thermo-6: thermo r9c9-r9c8-r9c7-r9c6
thermo-7: thermo r9c1-r9c2-r9c3-r9c4-r9c5
thermo-8: thermo r9c1-r8c1-r7c1-r6c1
thermo-9: thermo r5c2-r6c3-r7c4-r8c5-r8c6
thermo-10: thermo r6c4-r5c3-r4c3-r3c3-r2c3
thermo-11: thermo r6c4-r5c5-r4c6-r3c7-r2c8
thermo-12: thermo r4c8-r5c8-r6c8-r7c8-r8c8
kropki-1: kropki r9c1-r9c2 colour "black"
kropki-2: kropki r8c8-r8c9 colour "black"
kropki-3: kropki r1c8-r1c9 colour "black"
kropki-4: kropki r4c3-r5c3 colour "black"
```

• Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
• Thermo: Digits on grey thermos must increase from the bulb to the tip.
• Ratio Pairs: Digits separated by a black dot must be in a 2:1 ratio.
