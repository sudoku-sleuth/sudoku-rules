---
format: open-rules
title: The Secret Sudoku Cell
setter: Marty Sears
source: https://sudokupad.app/x02n1zpi40
case: https://sudoku-sleuth.com/cases/the-secret-sudoku-cell
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
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
kropki-1: kropki r1c5-r1c6 colour "black"
kropki-2: kropki r1c5-r2c5 colour "black"
kropki-3: kropki r1c6-r2c6 colour "black"
kropki-4: kropki r2c5-r2c6 colour "black"
kropki-5: kropki r5c4-r6c4 colour "black"
kropki-6: kropki r4c4-r4c5 colour "black"
kropki-7: kropki r5c2-r6c2 colour "black"
kropki-8: kropki r5c1-r5c2 colour "black"
kropki-9: kropki r3c4-r4c4 colour "black"
kropki-10: kropki r1c4-r2c4 colour "white"
kropki-11: kropki r2c3-r3c3 colour "white"
region-sum-1: region-sum r5c3-r6c3-r6c4-r6c5-r6c6-r5c6-r5c5 segments [["r5c3","r6c3"],["r6c4","r6c5","r6c6","r5c6","r5c5"]]
region-sum-2: region-sum r3c1-r2c1-r1c2-r1c3 segments [["r3c1"],["r2c1","r1c2","r1c3"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#e7abffff","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#e7abffff","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,3.5],[2.5,5.5],[3.5,5.5]],"color":"#e7abffff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[3.5,3.5],[3.5,1.5],[2.5,1.5]],"color":"#e7abffff","thickness":9.6,"rounded":true}}
```

Sudoku rules mostly don't apply.

Fill the grid with the digits 1-6, but each row, column and box must have exactly one repeated digit (and one digit missing). With the following exception: 

One cell in the grid is the Secret Sudoku Cell, to be located. The row, column and box containing the Secret Sudoku Cell must each obey normal sudoku rules (ie; contain no repeating digits), and indeed be the ONLY row, column and box where sudoku rules apply.

REGION SUM LINES: Box borders divide blue lines into segments that have the same sum.

ZIPPER LINES: Digits an equal distance from the central spot on a lavender line sum to the digit on the central spot.

BLACK DOTS: Digits separated by a black dot have a 1:2 ratio.

WHITE DOTS: Digits separated by a white dot are consecutive.
