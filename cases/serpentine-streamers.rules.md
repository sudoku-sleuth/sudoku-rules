---
fog:
  initiallyLit:
    - r3c8
    - r4c8
    - r4c9
    - r6c6
    - r6c7
    - r6c9
    - r7c7
format: open-rules
title: Serpentine Streamers
setter: Sandra & Nala
source: https://sudokupad.app/sandra-and-nala/serpentine-streamers
case: https://sudoku-sleuth.com/cases/serpentine-streamers
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
exported: 73a0cb92398d4e8ff80d608a38b3fe40
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
cage-1: cage r7c6-r7c8-r8c6-r8c7-r8c8 total 17 connected true
cage-2: cage r4c5-r5c4-r5c5 total 13 connected true
cage-3: cage r3c8-r4c8-r4c9 total 6 connected true
cage-4: cage r1c4-r1c5-r2c3-r2c4-r3c3 total 19 connected true
cage-5: cage r6c6-r6c7-r7c7 total 24 connected true
cage-6: cage r1c4-r1c5-r2c3-r2c4-r3c3 total 19 connected true
lockout-1: lockout r7c4 ends ["r8c5","r6c4"] gap 4
lockout-2: lockout r6c8-r6c9-r5c9 ends ["r6c7","r4c8"] gap 4
lockout-3: lockout r3c9 ends ["r4c8","r2c9"] gap 4
lockout-4: lockout r3c4 ends ["r2c5","r4c4"] gap 4
lockout-5: lockout r4c3 ends ["r4c4","r5c2"] gap 4
lockout-6: lockout r4c2 ends ["r5c2","r3c3"] gap 4
lockout-7: lockout r3c6 ends ["r2c7","r3c5"] gap 4
lockout-8: lockout r4c6 ends ["r3c5","r5c6"] gap 4
lockout-9: lockout r6c5-r7c5 ends ["r5c6","r7c6"] gap 4
lockout-10: lockout r8c7-r7c8-r6c8 ends ["r7c6","r5c8"] gap 4
lockout-11: lockout r7c2 ends ["r8c3","r7c1"] gap 4
lockout-12: lockout r8c1 ends ["r7c1","r9c1"] gap 4
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.7,0.7],"width":0,"height":1.424,"rounded":true,"thickness":0,"angle":0,"text":"🦴","textColor":"#000000","fontSize":54.4,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Lockout Lines turned 2 years on August 12th! Happy (a little late) birthday! 
When Nala noticed that there was reason to celebrate, she happily picked the best gift she could find and was on her way to the party immediately. Will the Lockout Lines like her gift?

Normal Sudoku rules apply: Place the digits 1-9 in every row, column and box exactly once each. 

All lines are lockout lines. Digits along a lockout line must not be equal to or between the digits on the diamond ends of the line, which have a difference of at least 4. Each line has at least one line segment between it's endpoints. Each line also has its own color. Lines of the same color are connected.

Digits in killer cages sum to the number in the top left corner and cannot repeat within their cage. Each killer cage has its own color. Cages of the same color are connected. 

Additionally the grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.
