---
format: open-rules
title: Jammy Dodger
setter: Blobz
source: https://sudokupad.app/blobz/jammy-dodger
case: https://sudoku-sleuth.com/cases/jammy-dodger
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 7
  cols: 7
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
  givens: r1c7=2 r2c2=5 r4c2=6 r4c4=7 r4c6=3 r6c6=1 r7c1=4
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r1c4
      - r2c1
      - r2c2
      - r3c1
    - - r1c5
      - r1c6
      - r1c7
      - r2c6
      - r2c7
      - r3c7
      - r4c7
    - - r2c3
      - r2c4
      - r3c2
      - r3c3
      - r4c2
      - r4c3
      - r5c2
    - - r2c5
      - r3c4
      - r3c5
      - r4c4
      - r5c3
      - r5c4
      - r6c3
    - - r3c6
      - r4c5
      - r4c6
      - r5c5
      - r5c6
      - r6c4
      - r6c5
    - - r4c1
      - r5c1
      - r6c1
      - r6c2
      - r7c1
      - r7c2
      - r7c3
    - - r5c7
      - r6c6
      - r6c7
      - r7c4
      - r7c5
      - r7c6
      - r7c7
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7
unique-8: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1
unique-9: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2
unique-10: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3
unique-11: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4
unique-12: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5
unique-13: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6
unique-14: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7
unique-15: unique r1c1-r1c2-r1c3-r1c4-r2c1-r2c2-r3c1
unique-16: unique r1c5-r1c6-r1c7-r2c6-r2c7-r3c7-r4c7
unique-17: unique r2c3-r2c4-r3c2-r3c3-r4c2-r4c3-r5c2
unique-18: unique r2c5-r3c4-r3c5-r4c4-r5c3-r5c4-r6c3
unique-19: unique r3c6-r4c5-r4c6-r5c5-r5c6-r6c4-r6c5
unique-20: unique r4c1-r5c1-r6c1-r6c2-r7c1-r7c2-r7c3
unique-21: unique r5c7-r6c6-r6c7-r7c4-r7c5-r7c6-r7c7
kropki-1: kropki r3c5-r4c5 colour "black"
kropki-2: kropki r4c3-r5c3 colour "black"
kropki-3: kropki r3c6-r3c7 colour "black"
kropki-4: kropki r5c1-r5c2 colour "black"
kropki-5: kropki r6c2-r7c2 colour "white"
kropki-6: kropki r1c6-r2c6 colour "white"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fdbfbfff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fdbfbfff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fdbfbfff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fdbfbfff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fdbfbfff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fdbfbfff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fdbfbfff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f5e5c5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f5e5c5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f5e5c5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f5e5c5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f5e5c5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f5e5c5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f5e5c5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f5e5c5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f5e5c5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f5e5c5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f5e5c5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f5e5c5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f5e5c5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#f5e5c5ff","stroke":"#000000","thickness":1.28,"angle":0}}
```

Every row, column and region must contain the digits 1 to 7 once each.

Black dots separate digits where one is double the other.

White dots separate consecutive digits.
