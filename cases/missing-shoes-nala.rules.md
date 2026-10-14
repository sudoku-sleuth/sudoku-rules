---
fog:
  initiallyLit:
    - r1c2
    - r2c2
    - r3c2
    - r3c3
format: open-rules
title: Missing Shoes - Nala!?
setter: Sandra & Nala
source: https://sudokupad.app/sandra-and-nala-/missing-shoes-nala
case: https://sudoku-sleuth.com/cases/missing-shoes-nala
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 9
  cols: 9
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
    - - r1c7
      - r1c8
      - r1c9
      - r2c7
      - r2c8
      - r2c9
      - r3c7
      - r3c8
      - r3c9
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
    - - r4c7
      - r4c8
      - r4c9
      - r5c7
      - r5c8
      - r5c9
      - r6c7
      - r6c8
      - r6c9
    - - r7c1
      - r7c2
      - r7c3
      - r8c1
      - r8c2
      - r8c3
      - r9c1
      - r9c2
      - r9c3
    - - r7c4
      - r7c5
      - r7c6
      - r8c4
      - r8c5
      - r8c6
      - r9c4
      - r9c5
      - r9c6
    - - r7c7
      - r7c8
      - r7c9
      - r8c7
      - r8c8
      - r8c9
      - r9c7
      - r9c8
      - r9c9
exported: 410c8318845fb719655afc5459ebee5f
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
unique-10: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
unique-11: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
unique-12: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
unique-13: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
unique-14: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
unique-15: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
unique-16: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
unique-17: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
unique-18: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
unique-19: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3
unique-20: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6
unique-21: unique r1c7-r1c8-r1c9-r2c7-r2c8-r2c9-r3c7-r3c8-r3c9
unique-22: unique r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-23: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
unique-24: unique r4c7-r4c8-r4c9-r5c7-r5c8-r5c9-r6c7-r6c8-r6c9
unique-25: unique r7c1-r7c2-r7c3-r8c1-r8c2-r8c3-r9c1-r9c2-r9c3
unique-26: unique r7c4-r7c5-r7c6-r8c4-r8c5-r8c6-r9c4-r9c5-r9c6
unique-27: unique r7c7-r7c8-r7c9-r8c7-r8c8-r8c9-r9c7-r9c8-r9c9
cage-1: cage r5c2-r5c4-r6c2-r6c3-r6c4 total 22 connected true
cage-2: cage r1c3-r1c4-r1c5-r2c5-r2c6-r3c6-r4c5-r4c6-r5c5 connected true
cage-3: cage r1c7-r2c7-r3c7-r4c7-r5c7-r6c5-r6c6-r6c7-r7c5 connected true
cage-4: cage r3c3-r3c4-r4c3 total 6 connected true
cage-5: cage r1c2-r2c1-r2c2 total 8 connected true
cage-6: cage r8c3-r9c2-r9c3 total 13 connected true
double-arrow-1: double-arrow r4c2-r4c1-r3c2 ends ["r3c3","r2c2"]
double-arrow-2: double-arrow r5c6-r4c6 ends ["r5c5","r3c7"]
double-arrow-3: double-arrow r3c6-r4c5-r5c4-r6c4-r7c4-r7c3 ends ["r2c5","r8c4"]
double-arrow-4: double-arrow r8c7-r8c8-r7c9-r6c8-r5c9 ends ["r9c7","r5c8"]
double-arrow-5: double-arrow r5c2-r6c2-r6c3 ends ["r5c3","r7c2"]
double-arrow-6: double-arrow r8c1-r9c2 ends ["r7c1","r9c3"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":0,"height":0.972,"rounded":true,"thickness":0,"angle":0,"text":"👟","textColor":"#000000","fontSize":37,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":0,"height":0.972,"rounded":true,"thickness":0,"angle":270,"text":"👟","textColor":"#000000","fontSize":37,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Nala has a tendency to pick the first thing she can find that looks „toy-ish“ when she wants to play. In this case she took a pair of shoes that has been missing since. Can you help us find it?

Normal Sudoku rules apply.

The sum of the digits along a „double arrow“ is equal to the sum of the digits in circles attached to either end of the line. Each double arrow has its own color. Elements do the same color are connected.

Digits in killer cages sum to the number in the top left corner (if given) and cannot repeat. Each killer cage has its own color. Elements of the same color are connected. 

Additionally the grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues. (And a pair of missing shoes)!
