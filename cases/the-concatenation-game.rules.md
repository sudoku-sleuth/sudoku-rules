---
format: open-rules
title: The Concatenation Game
setter: Marty Sears
source: https://sudokupad.app/m4gbwkzg4n
case: https://sudoku-sleuth.com/cases/the-concatenation-game
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
exported: a21ab3f3ca8d1ee3681c77f93fa7f0e2
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
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.75,6.25],[6.25,6.25],[6.25,-0.25],[-0.25,-0.25],[-0.25,6.25],[5.75,6.25]],"color":"#f8e05577","thickness":28.8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.167,5.5],[6.167,6.167],[-0.167,6.167],[-0.167,-0.167],[6.167,-0.167],[6.167,5.5]],"color":"#94eed2ff","thickness":23.04,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.625,-0.125],[6.125,-0.125],[6.125,6.125],[-0.125,6.125],[-0.125,-0.125],[0.625,-0.125]],"color":"#1cdf","thickness":13.44,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.43,5.5],[4.07,5.5]],"color":"#cc9ff0ff","thickness":4.48,"headLength":0.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.43,5.5],[5.07,5.5]],"color":"#cc9ff0ff","thickness":4.48,"headLength":0.2,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,2.57],[0.5,2.93]],"color":"#cc9ff0ff","thickness":4.48,"headLength":0.2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.5,2.57],[1.5,2.93]],"color":"#cc9ff0ff","thickness":4.48,"headLength":0.2,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.5,2.57],[3.5,2.93]],"color":"#cc9ff0ff","thickness":4.48,"headLength":0.2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.5,2.57],[5.5,2.93]],"color":"#cc9ff0ff","thickness":4.48,"headLength":0.2,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.5,3.43],[4.5,3.07]],"color":"#cc9ff0ff","thickness":4.48,"headLength":0.2,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,1.57],[4.5,1.93]],"color":"#cc9ff0ff","thickness":4.48,"headLength":0.2,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1.5,3.57],[1.5,3.93]],"color":"#cc9ff0ff","thickness":4.48,"headLength":0.2,"rounded":true}}
```

Normal 6x6 sudoku rules apply. For each arrow, all the digits it points at sum to a two digit total. The two digits of that total sum to the digit on the arrow.
