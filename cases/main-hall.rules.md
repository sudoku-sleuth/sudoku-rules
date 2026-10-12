---
format: open-rules
title: Main Hall
setter: sujoyku
source: https://sudokupad.app/64oypgwxi3
case: https://sudoku-sleuth.com/cases/main-hall
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
arrow-1: arrow r2c4-r1c3 bulb ["r3c5"]
arrow-2: arrow r2c1-r1c1 bulb ["r3c1"]
arrow-3: arrow r3c6-r2c6 bulb ["r4c6"]
arrow-4: arrow r6c5-r6c4 bulb ["r6c6"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fceed6ff","thickness":0,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3],"width":1.18,"height":1.18,"rounded":true,"fill":"#b6b5b5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3],"width":1.02,"height":1.02,"rounded":true,"fill":"#f1f1f1ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.35],"width":0.29,"height":0.29,"rounded":true,"fill":"#FFFFFF","stroke":"#e4e247ff","thickness":3.2,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4.35],"width":0.29,"height":0.29,"rounded":true,"fill":"#FFFFFF","stroke":"#e4e247ff","thickness":3.2,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,2.85],"width":0.29,"height":0.29,"rounded":true,"fill":"#FFFFFF","stroke":"#e4e247ff","thickness":3.2,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5.35],"width":0.29,"height":0.29,"rounded":true,"fill":"#FFFFFF","stroke":"#e4e247ff","thickness":3.2,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5.35],"width":0.29,"height":0.29,"rounded":true,"fill":"#FFFFFF","stroke":"#e4e247ff","thickness":3.2,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.55,0.65],"width":0.1,"height":0.1,"rounded":false,"fill":"#e4e247ff","thickness":0,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.55,4.65],"width":0.1,"height":0.1,"rounded":false,"fill":"#e4e247ff","thickness":0,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.05,3.15],"width":0.1,"height":0.1,"rounded":false,"fill":"#e4e247ff","thickness":0,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.55,5.65],"width":0.1,"height":0.1,"rounded":false,"fill":"#e4e247ff","thickness":0,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.55,5.65],"width":0.1,"height":0.1,"rounded":false,"fill":"#e4e247ff","thickness":0,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.6],"width":0.24,"height":0.04,"rounded":false,"fill":"#e4e247ff","thickness":0,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3.1],"width":0.24,"height":0.04,"rounded":false,"fill":"#e4e247ff","thickness":0,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4.6],"width":0.24,"height":0.04,"rounded":false,"fill":"#e4e247ff","thickness":0,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5.6],"width":0.24,"height":0.04,"rounded":false,"fill":"#e4e247ff","thickness":0,"angle":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5.6],"width":0.24,"height":0.04,"rounded":false,"fill":"#e4e247ff","thickness":0,"angle":0}}
```

At the centre, you see the portal which apparently is the only way out of here. But in order to use it, you need the magic keys which are hidden in the [Poisonous Yard](https://sudokupad.app/dosj3f0697), the [Library](https://sudokupad.app/fgwlwhjrlw), the [Laboratory](https://sudokupad.app/t7gxiv6e7u) and the [Aviary](https://sudokupad.app/sp7u9y5nm1).

---

Rules:

- Normal 6x6 sudoku rules apply, i.e each row, column, and 2x3 region has to contain the digits from 1 to 6 once each.

- Keys: Each key digit has to appear at least once in one of the four centrals cells touching the Portal. Moreover, each key digit has to appear at least once in an arrow's circle.

- Arrows: Digits on an arrow sum to the digit in the circle from which the arrow emerges.
