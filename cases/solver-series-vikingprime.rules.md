---
format: open-rules
title: "Solver Series: VikingPrime"
setter: Tingo
source: https://sudokupad.app/id9r1qi1ve
case: https://sudoku-sleuth.com/cases/solver-series-vikingprime
library: https://rules.sudoku-sleuth.com/
status: read
exported: e0af87054fa84abb3f3c99ec4e11ca13
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r2c1-r3c2-r2c3-r1c3
thermo-2: thermo r3c5-r2c5-r1c5
thermo-3: thermo r2c7-r1c7
thermo-4: thermo r2c7-r3c7
thermo-5: thermo r2c7-r1c8
thermo-6: thermo r2c7-r2c8-r3c9
thermo-7: thermo r6c2-r5c2-r4c2
thermo-8: thermo r6c4-r5c4-r4c4-r5c5-r6c6-r5c6-r4c6
thermo-9: thermo r9c7-r8c7-r7c7-r7c8
thermo-10: thermo r9c7-r9c8-r9c9-r8c9-r8c8
kropki-1: kropki r3c8-r3c9 white
kropki-2: kropki r2c1-r3c1 white
kropki-3: kropki r1c2-r1c3 white
kropki-4: kropki r4c2-r4c3 white
kropki-5: kropki r5c4-r6c4 black
kropki-6: kropki r5c4-r5c5 black
kropki-7: kropki r5c5-r6c5 black
kropki-8: kropki r3c1-r3c2 black
kropki-9: kropki r3c2-r4c2 black
kropki-10: kropki r3c2-r3c3 black
kropki-11: kropki r1c4-r2c4 black
kropki-12: kropki r2c7-r2c8 black
kropki-13: kropki r7c8-r7c9 black
pair-1: pair r7c9-r8c9 sum 10
pair-2: pair r2c8-r3c8 sum 10
pair-3: pair r7c7-r8c7 sum 10
```

Normal Sudoku Rules Apply
Thermometer digits must strictly increase from the bulb end. Additionally, the sum of digits along a given thermometer must add up to a prime number.
Cells joined by Xs sum to 10. Not all Xs are given.
Cells joined by white dots are consecutive in value.
Cells joined by black dots are in ration of 2:1. Not all dots are given.
