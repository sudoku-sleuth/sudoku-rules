---
format: open-rules
title: "Solver Series: SKORP17"
setter: Tingo
source: https://tinyurl.com/349tdckc
case: https://sudoku-sleuth.com/cases/solver-series-skorp17
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo r3c8-r3c7-r2c7-r1c7-r1c8-r1c9-r2c9-r3c9
kropki-1: kropki r1c2-r2c2 colour "white"
kropki-2: kropki r2c2-r3c2 colour "white"
kropki-3: kropki r1c3-r2c3 colour "white"
kropki-4: kropki r2c1-r3c1 colour "white"
kropki-5: kropki r1c4-r1c5 colour "white"
kropki-6: kropki r7c5-r8c5 colour "white"
kropki-7: kropki r1c1-r2c1 colour "black"
kropki-8: kropki r2c3-r3c3 colour "black"
kropki-9: kropki r3c4-r3c5 colour "black"
kropki-10: kropki r5c2-r5c3 colour "black"
whispers-1: whispers r1c3-r1c2-r1c1-r2c1-r2c2-r2c3 gap 2
whispers-2: whispers r3c1-r3c2-r3c3-r2c3 gap 2
whispers-3: whispers r1c4-r2c4-r3c4 gap 2
whispers-4: whispers r1c5-r2c4-r2c5-r3c6 gap 2
whispers-5: whispers r6c4-r5c4-r4c4-r4c5-r4c6-r5c6-r5c5 gap 5
whispers-6: whispers r7c7-r8c7-r9c7 gap 5
whispers-7: whispers r7c8-r7c9-r8c8-r9c8 gap 5
renban r6c1-r5c1-r4c1-r4c2-r4c3-r5c3-r5c2-r6c3
pair-1: pair r1c5-r2c5 relation {"op":"sum","value":10}
pair-2: pair r8c3-r8c4 relation {"op":"sum","value":10}
pair-3: pair r3c6-r4c6 relation {"op":"sum","value":10}
little-killer-1: little-killer r7c1-r8c2-r9c3 sum 17
little-killer-2: little-killer r9c7-r8c8-r7c9 sum 17
```

In honor of all he great solvers out there, I've been working on a  "solver series". Today's edition is for SKORP17 - a legend in the LMG solving community.

Normal Sudoku Rules Apply
Yellow lines are anti-consecutive lines. Adjacent digits along the line must differ in value you by at least 2.
Pink lines are Renban lines. Digits along the line are consecutive in any order.
Green lines are German Whispers lines. Adjacent digits along the line must differ in value by at least 5.
Cells along a thermometer must strictly increase from the bulb end.
Cells joined by white dots are consecutive in value. Cells joined by black dots have values in a ratio of 2:1. Not all dots are given.
Cells joined by Xs sum to 10. Not all Xs are given.
Clues outside the puzzle are little killer clues. The value of the cells along the line the arrow points to must sum to the value of the killer clue.
