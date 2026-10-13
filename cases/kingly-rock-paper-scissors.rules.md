---
format: open-rules
title: Kingly Rock Paper Scissors
setter: Tingo
source: https://tinyurl.com/kinglyrockpaperscissors
case: https://sudoku-sleuth.com/cases/kingly-rock-paper-scissors
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-king
thermo-1: thermo r9c1-r8c2-r7c3-r6c4-r5c5-r4c6-r3c7
thermo-2: thermo r9c9-r8c8-r7c7-r6c6-r5c5-r4c4-r3c3
kropki-1: kropki r7c8-r7c9 colour "white"
kropki-2: kropki r5c7-r6c7 colour "white"
whispers r3c2-r4c1-r5c1-r6c2-r5c3-r4c3 gap 5
renban r2c8-r1c8-r1c9-r2c9-r3c9-r4c9-r4c8-r3c8
pair-1: pair r6c1-r6c2 sum 10
pair-2: pair r8c4-r8c5 sum 10
pair-3: pair r2c7-r2c8 sum 10
pair-4: pair r3c7-r3c8 sum 10
pair-5: pair r1c8-r1c9 sum 10
```

Normal Sudoku Rules Apply
Any two cells separated by a king's move (in chess) cannot contain the same digit.
The green line (Rock) is a Whispers line where adjacent digits must differ by a value of at least 5.
The pink line (Paper) is a Renban line where all digits on the line are consecutive in any order.
The two thermometers (Scissors) use normal thermometer rules - all digits must strictly increase from the bulb end.
Cells connected by X sum to 10. Not all Xs are given.
Cells connected by white dots are consecutive. Not all white dots are given.
