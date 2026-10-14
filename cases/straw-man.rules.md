---
format: open-rules
title: Straw Man
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/t91awpxzxr
case: https://sudoku-sleuth.com/cases/straw-man
library: https://rules.sudoku-sleuth.com/
status: read
exported: b12d1e6d5871c8413e28e1adb852d031
---

```rules
sudoku 9x9
thermo-1: thermo r3c3-r2c3-r2c4-r2c5
thermo-2: thermo r3c8-r2c8-r2c7-r2c6
thermo-3: thermo r8c7-r9c7-r9c8-r8c8-r7c8-r6c8
thermo-4: thermo r6c5-r6c4-r7c4-r7c5
thermo-5: thermo r4c5-r4c6-r3c6-r3c5
thermo-6: thermo r8c2-r8c1
thermo-7: thermo r4c1-r5c1
x-sum-1: x-sum r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 10
x-sum-2: x-sum r2c9-r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2-r2c1 sum 28
x-sum-3: x-sum r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 sum 20
x-sum-4: x-sum r9c8-r8c8-r7c8-r6c8-r5c8-r4c8-r3c8-r2c8-r1c8 sum 26
x-sum-5: x-sum r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 sum 36
x-sum-6: x-sum r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 sum 11
x-sum-7: x-sum r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 sum 13
x-sum-8: x-sum r7c9-r7c8-r7c7-r7c6-r7c5-r7c4-r7c3-r7c2-r7c1 sum 20
x-sum-9: x-sum r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 17
```

- Normal sudoku rules apply.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- X-Sums: Clues outside the grid give the sum of the first X numbers placed in the corresponding row or column, where X is digit in the cell next to the X-sum clue.
