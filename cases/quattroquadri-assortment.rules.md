---
format: open-rules
title: Quattroquadri Assortment
setter: Timotab
source: https://sudokupad.app/b23j3ll1x6
case: https://sudoku-sleuth.com/cases/quattroquadri-assortment
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
    - 7
    - 8
    - 9
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
      - r3c2
      - r3c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
      - r3c4
      - r3c5
      - r3c6
    - - r4c1
      - r4c2
      - r4c3
      - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r4c4
      - r4c5
      - r4c6
      - r5c4
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
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6
unique-15: unique r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-16: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
thermo r1c1-r1c2-r1c3
kropki r4c2-r4c3 colour "black"
arrow r1c5-r1c4-r1c3 bulb ["r1c6"]
whispers-1: whispers r3c4-r3c3-r2c4 loop false gap 5
whispers-2: whispers r6c5-r6c6-r5c6 loop false gap 4
renban r6c2-r6c3
region-sum r4c6-r4c5-r4c4-r4c3 segments [["r4c6","r4c5","r4c4"],["r4c3"]]
pair-1: pair r4c4-r5c4 sum 10
pair-2: pair r5c1-r6c1 sum 5
quadruple r5c4-r5c5-r6c4-r6c5 digits [8]
little-killer r1c2-r2c3-r3c4-r4c5-r5c6 sum 21
extremum r2c2 type "max" exhaustive false
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.38,1.11],[1.5,1.06],[1.62,1.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.62,1.89],[1.5,1.94],[1.38,1.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.11,1.62],[1.06,1.5],[1.11,1.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.89,1.38],[1.94,1.5],[1.89,1.62]],"color":"#000000","thickness":1.92,"rounded":true}}
```

• Normal quattroquadri rules apply and all clues are standard.

• Place the digits 1-9 once each in every 3x3 box. Digits may not repeat in any box, row, or column.
• Digits along a grey thermometer must strictly increase from the bulb end.
• Digits along an arrow sum to the digit in the attached circle.
• The digit in the fully shaded grey fortress cell must be larger than the orthogonally adjacent non-fortress cells.
• Adjacent digits along a green line must differ by at least 5.
• Adjacent digits along an orange line must differ by at least 4.
• Box borders separate a blue line into segments of equal sum.
• Where a black dot separates two digits, one must be double the other.
• Digits separated by an X sum to 10.
• Digits separated by a V sum to 5.
• A purple line contains a non-repeating consecutive set of digits in any order.
• A digit in a circle must appear in one of the four cells touching that circle. 
• A number outside the grid is the sum of all digits that appear on the indicated diagonal.
