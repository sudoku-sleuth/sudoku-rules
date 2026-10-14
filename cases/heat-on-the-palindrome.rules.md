---
format: open-rules
title: Heat On The Palindrome
setter: Chip Sounder
source: https://sudokupad.app/3kg3m6ykj6
case: https://sudoku-sleuth.com/cases/heat-on-the-palindrome
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
givens: r4c9=1
exported: 75e83f23b7a18a727b9992ede60c63fd
---

```rules
sudoku 9x9
kropki-1: kropki r4c4-r4c5 white
kropki-2: kropki r3c5-r4c5 white
kropki-3: kropki r2c8-r3c8 white
kropki-4: kropki r3c8-r3c9 white
kropki-5: kropki r8c4-r8c5 white
slow-thermo-1: slow-thermo r6c2-r5c3-r4c4-r3c5-r2c6-r1c7-r2c8-r3c9
slow-thermo-2: slow-thermo r9c5-r8c6-r9c7-r8c8-r7c9-r6c8-r5c7-r4c8
slow-thermo-3: slow-thermo r9c1-r8c2-r7c3
slow-thermo-4: slow-thermo r3c7-r4c6-r5c5
pair r9c5-r9c6 sum 10
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,5.5],[8.5,6.5],[6.5,8.5],[4.5,6.5],[2.5,8.5],[0.5,6.5],[5.5,1.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[8.5,0.5]],"color":"#aaaf","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
The lines in the grid are duality lines.
Digits on the palindrome must read the same forwards as backwards.
Digits on a slow thermometer must not decrease from the bulb end.
Cells separated by a white dot are consecutive. Not all dots are necessarily given.
Cells separated by an X sum to 10. Not all Xs are necessarily given.
No domino in the grid can sum to 5.
