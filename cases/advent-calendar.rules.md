---
format: open-rules
title: Advent Calendar
setter: Marty Sears
source: https://sudokupad.app/m2vivcjlbk
case: https://sudoku-sleuth.com/cases/advent-calendar
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
board:
  rows: 9
  cols: 9
  symbols:
    - 0
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
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
exported: 6488b70e70ad372a9419a19c5ae1c91d
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
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.625,9.125],[9.125,9.125],[9.125,-0.125],[-0.125,-0.125],[-0.125,9.125],[2.875,9.125]],"color":"#ee4f4fff","thickness":12.8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[9.125,5.625],[9.125,5.375]],"color":"#ee4f4fff","thickness":12.8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[8.25,-0.25],[9.25,-0.25],[9.25,9.25],[-0.25,9.25],[-0.25,-0.25],[8.25,-0.25]],"color":"#28db59ff","thickness":12.8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.167,0.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"19","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.167,2.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"3","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.167,4.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"12","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.167,6.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.167,8.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"13","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.167,0.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"2","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.167,2.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"14","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.167,4.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"20","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.167,6.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"5","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.167,8.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"21","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.167,0.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"16","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.167,2.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"17","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.167,6.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.167,8.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.167,0.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"18","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.167,2.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"23","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.167,4.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.167,6.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.167,8.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"4","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.167,0.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.167,2.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"1","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.167,4.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.167,6.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"22","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.167,8.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"24","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#bfbfbfff","thickness":2.56,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#bfbfbfff","thickness":2.56,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#bfbfbfff","thickness":2.56,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,3.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.92,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,5.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.92,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2],"width":0.31,"height":0.31,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.92,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4],"width":0.31,"height":0.31,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.92,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7],"width":0.31,"height":0.31,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.92,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,3.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.92,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,5.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.92,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2],"width":0.31,"height":0.31,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.92,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4],"width":0.31,"height":0.31,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.92,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,5],"width":0.31,"height":0.31,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2],"width":0.31,"height":0.31,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3],"width":0.31,"height":0.31,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,0.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,7.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0.31,"height":0.31,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4],"width":0.31,"height":0.31,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5],"width":0.31,"height":0.31,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
```

• Normal sudoku rules apply but using the digits 0-8 instead of 1-9.
• Find and colour the 24 hidden cages, which do not overlap. Each cage has a different total between 1 and 24 – the total for each cage is given on one of its cells (by a small clue in the corner).
• Digits MAY repeat within cages.
• All cages are triominoes (ie consist of 3 orthogonally connected cells) apart from one, which is a pentomino (containing 5 orthogonally connected cells.)
• Cells with a large snowball in the central 3x3 box count as double their value for the purposes of their cage totals (if they reside within a cage).
• Cells separated by a small white dot contain consecutive digits.
• Cells separated by a small black dot contain digits with a ratio of 1:2 (ie one is double the other.)
• Not all possible black and white dots are given.
