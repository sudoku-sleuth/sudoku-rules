---
format: open-rules
title: alchemy set 2. Puzzle 4
setter: Chip Sounder
source: https://sudokupad.app/lmn9tvo90n
case: https://sudoku-sleuth.com/cases/alchemy-set-2-puzzle-4
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
pair-1: pair r3c3-r4c3 ratio 3
pair-2: pair r2c3-r2c4 difference 2
whispers r3c5-r3c4-r4c3-r4c2 loop false gap 4
unique-19: unique r1c1-r1c4-r3c1-r3c4-r5c1-r5c4
unique-20: unique r1c2-r1c5-r3c2-r3c5-r5c2-r5c5
unique-21: unique r1c3-r1c6-r3c3-r3c6-r5c3-r5c6
unique-22: unique r2c1-r2c4-r4c1-r4c4-r6c1-r6c4
unique-23: unique r2c2-r2c5-r4c2-r4c5-r6c2-r6c5
unique-24: unique r2c3-r2c6-r4c3-r4c6-r6c3-r6c6
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.38,4.06],[4.5,4.11],[4.62,4.06]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.62,4.94],[4.5,4.89],[4.38,4.94]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.06,4.62],[4.11,4.5],[4.06,4.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.94,4.38],[4.89,4.5],[4.94,4.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[4.5,3.5]],"color":"#aaaf","thickness":6.4,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[4,10,16],"label":"16"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff80","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff80","stroke":"#aaaf","thickness":1.28}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,-0.5],"width":1,"height":1,"rounded":true,"thickness":0,"text":"5","textColor":"#000000","fontSize":36}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,2.5],"width":1,"height":1,"rounded":true,"thickness":0,"text":"17","textColor":"#000000","fontSize":36}}
```

Any clue type throughout the set may appear only once.
Normal 6x6 sudoku rules apply. Place the digits 1-6 once each in every row column and 2x3 box.
Cells in the same relative position within a 2x3 box cannot contain the same digit.
Digits on a grey line must be between the digits in the connected circles.
The 5 clue outside the grid is a sandwich and the sum must appear between the 1 and 6 in the respective row.
The cell with the fortress (inequality signs pointing inwards) must be less than the orthogonally connected cells.
In a dotted cage, read the clue out loud and it indicates how many of that digit are in the cage. i.e. if the clue reads 2314, that means there will be two 3s and one 4 in the cage.
The 17 clue outside the grid is an XSums clue and gives the sum of the first x digits in the direction from the clue, x being the first digit seen in the respective column.
Adjacent digits along a dark green line must differ by at least 4.
The cells joined by the white dot has a difference of 2.
The black dot has a ratio of 1:3 (one digit is triple the other).
