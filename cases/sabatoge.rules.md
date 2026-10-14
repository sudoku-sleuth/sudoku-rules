---
format: open-rules
title: Sabatoge
setter: Kennet's Dad
source: https://sudokupad.app/81upsnpdbs
case: https://sudoku-sleuth.com/cases/sabatoge
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
exported: f32b606a6f22724bb070f4db092b706d
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
kropki r3c3-r3c4 black
pair-1: pair r2c5-r2c6 sum 5
pair-2: pair r6c4-r6c5 sum 5
unique-19: unique r3c3-r3c4
unique-20: unique r2c5-r2c6-r6c4-r6c5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.8,"height":0.8,"rounded":false,"fill":"#25eaf6d1","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0.8,"height":0.8,"rounded":false,"fill":"#25eaf6d1","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[4.5,3.5]],"color":"#3baf","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[0.5,2.5],[0.5,3.5],[1.5,3.5]],"color":"#3baf","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[4.5,1.5]],"color":"#9e66ffff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[4.5,5.5]],"color":"#9e66ffff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[2.5,1.5]],"color":"#9e66ffff","thickness":9.6,"rounded":true}}
```

-Normal 6x6 sudoku rules apply. 
-Each of the following constraint types may contain no repeated digits anywhere in the puzzle. E.g., if a purple line contains a 5, then no other purple line in the puzzle may contain a 5:
1) Digits on a purple line must be consecutive. 
2) Any set of three digits along a turquoise line must have at least one digit from each of the following sets: (1, 4), (2, 5), (3, 6). 
3) Digits in cells separated by a V must sum to 5.
4) One digit is double the other in cells separated by a black dot. 
5) A blue square must contain an even digit.
