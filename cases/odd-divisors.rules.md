---
format: open-rules
title: Odd Divisors?
setter: Dr Logic
source: https://sudokupad.app/o7e5w1gmcp
case: https://sudoku-sleuth.com/cases/odd-divisors
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 6
  cols: 6
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
    - - r3c1
      - r3c2
      - r3c3
      - r4c1
      - r4c2
      - r4c3
    - - r3c4
      - r3c5
      - r3c6
      - r4c4
      - r4c5
      - r4c6
    - - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6
unique-7: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1
unique-8: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2
unique-9: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3
unique-10: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4
unique-11: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5
unique-12: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6
unique-15: unique r3c1-r3c2-r3c3-r4c1-r4c2-r4c3
unique-16: unique r3c4-r3c5-r3c6-r4c4-r4c5-r4c6
unique-17: unique r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-18: unique r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
kropki-1: kropki r4c3-r5c3 colour "black"
kropki-2: kropki r4c4-r5c4 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[1.5,1.5],[0.5,2.5],[0.5,3.5],[1.5,4.5],[1.5,5.5]],"color":"#FF00FF","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[3.5,2.5],[4.5,2.5],[5.5,2.5]],"color":"#FF00FF","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[4.5,3.5],[5.5,3.5]],"color":"#FF00FF","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[4.5,0.5],[4.5,1.5]],"color":"#FF00FF","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply.

Digits along a pink 'divisor' line must be read from one end only and obey the following condition: 'Digits cannot repeat and each subsequent digit after the initial digit must wholly divide the sum of all the previous digits on the line. (e.g 3-1-4 string read left to right as 1 wholly divides 3 and 4 wholy divides 1+3.'

Digits separated by a black dot are in 1:2 ratio.

Enjoy!
