---
format: open-rules
title: "ON EDGE: Yellow & Lavender (part A)"
setter: Marty Sears
source: https://sudokupad.app/h9zgkbb48o
case: https://sudoku-sleuth.com/cases/on-edge-yellow-lavender-part-a
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
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
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1,3],[4,3],[4,6],[6,6],[6,3],[4,3]],"color":"#dadadaff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1,3],[0,3],[0,6],[4,6]],"color":"#dadadaff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4,3],[4,0],[6,0],[6,3]],"color":"#dadadaff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4,0],[2,0],[2,6]],"color":"#dadadaff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2,0],[0,0],[0,3]],"color":"#dadadaff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0,1],[6,1]],"color":"#dadadaff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6,2],[5,2],[5,0]],"color":"#dadadaff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3,0],[3,2],[5,2],[5,4],[6,4]],"color":"#dadadaff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6,5],[5,5],[5,4],[3,4],[3,2],[1,2],[1,0]],"color":"#dadadaff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5,6],[5,5],[3,5],[3,6]],"color":"#dadadaff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1,6],[1,5],[3,5],[3,4],[1,4],[1,2],[0,2]],"color":"#dadadaff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0,4],[1,4],[1,5],[0,5]],"color":"#dadadaff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1.5,1],[1,1],[1,1.5]],"color":"#ffe40cff","thickness":12.8,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[1,1],[0.5,1]],"color":"#ffe40cff","thickness":12.8,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[5,2.5],[5,2],[4,2],[4,3],[3,3],[3,2.5]],"color":"#ffe40cff","thickness":12.8,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[5.5,1],[4.5,1]],"color":"#ffe40cff","thickness":12.8,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[3.5,4],[5.5,4]],"color":"#ffe40cff","thickness":12.8,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[3,4.5],[3,4],[2.5,4]],"color":"#ffe40cff","thickness":12.8,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[2.5,5],[1.5,5]],"color":"#ffe40cff","thickness":12.8,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,1.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,2.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,2.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,4.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3],"width":0.32,"height":0.32,"rounded":true,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0.18,"height":0.18,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,1.5],"width":0.18,"height":0.18,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1],"width":0.18,"height":0.18,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1],"width":0.18,"height":0.18,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1],"width":0.18,"height":0.18,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4],"width":0.18,"height":0.18,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4],"width":0.18,"height":0.18,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4],"width":0.18,"height":0.18,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4],"width":0.18,"height":0.18,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,4.5],"width":0.18,"height":0.18,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0.12,"height":0.02,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":108}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,1.5],"width":0.12,"height":0.02,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":108}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1],"width":0.12,"height":0.02,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":108}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1],"width":0.12,"height":0.02,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":108}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1],"width":0.12,"height":0.02,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":108}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4],"width":0.12,"height":0.02,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":108}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,4.5],"width":0.12,"height":0.02,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":108}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4],"width":0.12,"height":0.03,"rounded":false,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4],"width":0.12,"height":0.03,"rounded":false,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4],"width":0.12,"height":0.03,"rounded":false,"fill":"#ffe40cff","thickness":0,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,2.5],"width":0.15,"height":0.03,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2.5],"width":0.15,"height":0.03,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2],"width":0.15,"height":0.03,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,2.5],"width":0.15,"height":0.03,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3],"width":0.15,"height":0.03,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,2.5],"width":0.15,"height":0.03,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":90}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2],"width":0.15,"height":0.03,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":90}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2.5],"width":0.15,"height":0.03,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":90}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,2.5],"width":0.15,"height":0.03,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":90}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3],"width":0.15,"height":0.03,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":90}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5],"width":0.15,"height":0.03,"rounded":false,"fill":"#000000","thickness":0,"angle":45}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5],"width":0.15,"height":0.03,"rounded":false,"fill":"#000000","thickness":0,"angle":45}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5],"width":0.15,"height":0.03,"rounded":false,"fill":"#000000","thickness":0,"angle":135}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5],"width":0.15,"height":0.03,"rounded":false,"fill":"#000000","thickness":0,"angle":135}}
```

Normal 6x6 sudoku rules apply.

Each spot along a coloured edgeline has a value, found by performing a calculation using the two digits it sits between:

• Sum (+) spots: The value of a spot with a plus sign equals the sum of the two digits it sits between.
• Difference (-) spots: The value of a spot with a minus sign equals the larger digit minus the smaller digit.
• Product (x) spots: The value of a spot with a multiplication sign equals the product of the two digits.
• Ratio ( / ) spots: The value of a spot with a forward slash equals the larger digit divided by the smaller digit. (The value will always be an exact integer.)

• Yellow lines are 'edge nabners'. No two spot values anywhere on the same edge nabner may be equal or consecutive.
