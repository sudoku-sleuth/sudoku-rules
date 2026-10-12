---
format: open-rules
title: Jewels and Duality (Entrance)
setter: Marty Sears
source: https://sudokupad.app/ero1ob45y8
case: https://sudoku-sleuth.com/cases/jewels-and-duality-entrance
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
board:
  rows: 4
  cols: 4
  symbols:
    - 1
    - 2
    - 3
    - 4
  regions:
    - - r1c1
      - r1c2
      - r2c1
      - r2c2
    - - r1c3
      - r1c4
      - r2c3
      - r2c4
    - - r3c1
      - r3c2
      - r4c1
      - r4c2
    - - r3c3
      - r3c4
      - r4c3
      - r4c4
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4
unique-2: unique r2c1-r2c2-r2c3-r2c4
unique-3: unique r3c1-r3c2-r3c3-r3c4
unique-4: unique r4c1-r4c2-r4c3-r4c4
unique-5: unique r1c1-r2c1-r3c1-r4c1
unique-6: unique r1c2-r2c2-r3c2-r4c2
unique-7: unique r1c3-r2c3-r3c3-r4c3
unique-8: unique r1c4-r2c4-r3c4-r4c4
unique-9: unique r1c1-r1c2-r2c1-r2c2
unique-10: unique r1c3-r1c4-r2c3-r2c4
unique-11: unique r3c1-r3c2-r4c1-r4c2
unique-12: unique r3c3-r3c4-r4c3-r4c4
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#c6c6c6ff","thickness":0,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#c6c6c6ff","thickness":0,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#c6c6c6ff","thickness":0,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":0.4,"height":0.4,"rounded":false,"fill":"#c6c6c6ff","thickness":0,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[0.5,3.5]],"color":"#c6c6c6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[3.5,0.5]],"color":"#c6c6c6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[1.5,3.5],[2.5,3.5]],"color":"#c6c6c6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[2.5,2.5],[2.5,1.5],[3.5,1.5]],"color":"#c6c6c6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[-0.5,4.5],[4.5,4.5],[4.5,-0.5],[-0.5,-0.5],[-0.5,4.5]],"color":"#FFFFFF","thickness":0.64,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.167,2],"width":4,"height":0.28,"rounded":false,"fill":"#889fb1ff","thickness":0,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0.5],"width":0.5,"height":0.18,"rounded":false,"fill":"#889fb1ff","thickness":0,"angle":8}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,1.375],"width":0.89,"height":0.18,"rounded":false,"fill":"#889fb1ff","thickness":0,"angle":358}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2.125],"width":0.89,"height":0.18,"rounded":false,"fill":"#889fb1ff","thickness":0,"angle":358}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3.25],"width":0.89,"height":0.18,"rounded":false,"fill":"#889fb1ff","thickness":0,"angle":8}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3.875],"width":0.89,"height":0.18,"rounded":false,"fill":"#889fb1ff","thickness":0,"angle":8}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.25,2],"width":4,"height":0.28,"rounded":false,"fill":"#889fb1ff","thickness":0,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0],"width":0.58,"height":0.24,"rounded":true,"fill":"#889fb1ff","thickness":0,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,1],"width":0.58,"height":0.28,"rounded":true,"fill":"#889fb1ff","thickness":0,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2.5],"width":0.72,"height":0.24,"rounded":true,"fill":"#889fb1ff","thickness":0,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3.5],"width":0.6,"height":0.3,"rounded":true,"fill":"#889fb1ff","thickness":0,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,-0.167],"width":0.49,"height":4.81,"rounded":false,"fill":"#c39d50ff","stroke":"#987535ff","thickness":2.56,"angle":360}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4.167],"width":0.49,"height":4.81,"rounded":false,"fill":"#c39d50ff","stroke":"#987535ff","thickness":2.56,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,-0.187],"width":0.02,"height":4.76,"rounded":false,"fill":"#987535ff","thickness":0,"angle":360}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4.188],"width":0.02,"height":4.76,"rounded":false,"fill":"#987535ff","thickness":0,"angle":360}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,-0.312],"width":0.02,"height":4.76,"rounded":false,"fill":"#987535ff","thickness":0,"angle":360}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4.313],"width":0.02,"height":4.76,"rounded":false,"fill":"#987535ff","thickness":0,"angle":360}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,-0.062],"width":0.02,"height":4.76,"rounded":false,"fill":"#987535ff","thickness":0,"angle":360}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4.063],"width":0.02,"height":4.76,"rounded":false,"fill":"#987535ff","thickness":0,"angle":360}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.167,2],"width":4.9,"height":0.49,"rounded":false,"fill":"#c39d50ff","stroke":"#987535ff","thickness":2.56,"angle":359}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.143,2],"width":4.85,"height":0.02,"rounded":false,"fill":"#987535ff","thickness":0,"angle":359}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.25,2],"width":4.85,"height":0.02,"rounded":false,"fill":"#987535ff","thickness":0,"angle":359}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.062,2],"width":4.85,"height":0.02,"rounded":false,"fill":"#987535ff","thickness":0,"angle":359}}
```

Welcome to the entrance of an underground jewel mine. Normal 4x4 sudoku rules apply.

Grey lines are INDEX LINES. The digit in position N along an index line (starting from the end with diamond) indicates the position along the line where the digit N should be placed. Eg: An index line could read 3214; the 1st digit being a 3 indicates that the 3rd digit is a 1, and so on.
