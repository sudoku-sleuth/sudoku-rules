---
format: open-rules
title: The Power Of The Three Knights
setter: Tingo
source: https://tinyurl.com/powerofthethreeknights
case: https://sudoku-sleuth.com/cases/the-power-of-the-three-knights
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight
thermo-1: thermo r2c1-r3c2-r3c1-r2c2-r3c3-r2c3
thermo-2: thermo r5c4-r6c4
thermo-3: thermo r3c8-r4c9
kropki-1: kropki r7c4-r7c5 colour "white"
kropki-2: kropki r6c3-r6c4 colour "white"
kropki-3: kropki r1c2-r1c3 colour "white"
kropki-4: kropki r3c7-r3c8 colour "white"
kropki-5: kropki r2c8-r3c8 colour "white"
kropki-6: kropki r2c1-r3c1 colour "black"
kropki-7: kropki r3c1-r4c1 colour "black"
kropki-8: kropki r3c2-r3c3 colour "black"
kropki-9: kropki r6c2-r6c3 colour "black"
kropki-10: kropki r6c4-r7c4 colour "black"
kropki-11: kropki r5c4-r6c4 colour "black"
```

Normal Sudoku Rules Apply
Any two cells separated by a knight's move (in chess) cannot contain the same digit.
White dots indicate consecutive digits. Black dots indicate digits of a ratio of 2:1 Not all dots are given.
All digits on a thermometer must increase from the bulb end.
Each thermometer represents a Knight. Each Knight has a rank of 1, 2, or 3, and each rank only appears once in puzzle. The value of the thermometer of the Knight equals 3^n where n is the rank of the Knight. Each Knight's rank must be determined by the solver.
