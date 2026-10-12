---
format: open-rules
title: Between Odd and Even
setter: Sandra & Nala
source: https://sudokupad.app/0y4fjt20ul
case: https://sudoku-sleuth.com/cases/between-odd-and-even
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
between-1: between r2c4-r3c3 ends ["r1c3","r4c3"]
between-2: between r5c3-r5c4-r4c5 ends ["r6c4","r4c6"]
between-3: between r2c2-r3c3 ends ["r3c1","r3c4"]
between-4: between r5c2 ends ["r6c3","r4c2"]
```

```drawing
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"","textColor":"#000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"","textColor":"#000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2],"width":0.34,"height":0.34,"rounded":true,"fill":"#0581d1","stroke":"#000000","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4],"width":0.34,"height":0.34,"rounded":true,"fill":"#d96500","stroke":"#000000","thickness":1,"opacity":0.5,"angle":0}}
```

Normal 6x6 Sudoku Rules apply. 
Digits along a between line must be between the digits on the circled ends of the line.

The Effects of Color: 
On a blue line digits in the circles (not the entire line) must be even. 
On an orange line digits in the circles (not the entire line) must be odd. 

Digits separated by a blue dot are even and digits separated by an orange dot are odd.  
Not all possible dots are given. There is no negative constraint.
