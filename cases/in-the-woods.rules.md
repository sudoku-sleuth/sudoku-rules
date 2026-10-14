---
fog:
  initiallyLit:
    - r1c7
    - r1c8
    - r1c9
    - r2c7
    - r3c8
format: open-rules
title: In The Woods
setter: Sandra & Nala
source: https://sudokupad.app/sandra-and-nala/in-the-woods
case: https://sudoku-sleuth.com/cases/in-the-woods
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
  givens: r1c7=5 r2c3=7 r4c5=7 r5c6=8 r7c9=1
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
exported: 3c35421e28ade25500cbd08d5f834767
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
cage-1: cage r3c7-r4c7-r4c8 total 12 connected true
cage-2: cage r7c4-r7c5 total 17 connected true
cage-3: cage r2c3-r3c3-r3c4 total 20 connected true
cage-4: cage r8c7-r8c8-r9c7 total 20 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.55,8.75],"width":0.06,"height":0.06,"rounded":true,"fill":"#947863ff","stroke":"#926e59ff","thickness":1,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.7],"width":0.04,"height":0.06,"rounded":true,"fill":"#FFFFFF","stroke":"#2da2f2ff","thickness":1,"angle":135}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.6,8.7],"width":0.04,"height":0.06,"rounded":true,"fill":"#FFFFFF","stroke":"#2da2f2ff","thickness":1,"angle":45}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.75],"width":0.04,"height":0.04,"rounded":true,"fill":"#FFFFFF","stroke":"#79aafaff","thickness":1,"angle":90}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.6,8.75],"width":0.04,"height":0.04,"rounded":true,"fill":"#FFFFFF","stroke":"#79aafaff","thickness":1,"angle":90}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.55,8.7],"width":0.04,"height":0.04,"rounded":true,"fill":"#FFFFFF","stroke":"#5cbaffff","thickness":1,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[0.55,8.65],[0.55,8.75],[0.65,8.75],[0.7,8.7],[0.7,8.6],[0.6,8.6],[0.55,8.55],[0.65,8.55],[0.7,8.5],[0.65,8.45],[0.65,8.35],[0.75,8.35],[0.8,8.3],[0.7,8.3],[0.65,8.25],[0.55,8.25],[0.55,8.35],[0.4,8.2],[0.35,8.25],[0.6,8.5],[0.35,8.55],[0.25,8.65],[0.3,8.7],[0.4,8.6],[0.55,8.75]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[0.4,8.3],[0.3,8.4],[0.35,8.45],[0.45,8.45],[0.5,8.4]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[0.35,8.55],[0.25,8.55],[0.2,8.5],[0.3,8.5],[0.35,8.45]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[0.35,6.55],[0.3,6.5],[0.2,6.5],[0.3,6.6],[0.2,6.7],[0.25,6.75],[0.35,6.65],[0.35,6.75],[0.4,6.7],[0.4,6.8],[0.45,6.75],[0.5,6.8],[0.55,6.75],[0.6,6.8]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[0.4,6.5],[0.3,6.4],[0.35,6.25],[0.4,6.3],[0.35,6.35],[0.4,6.4],[0.45,6.25],[0.5,6.2],[0.6,6.2],[0.5,6.3]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[0.6,6.7],[0.6,6.6],[0.7,6.6],[0.65,6.65],[0.6,6.6]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[0.85,6.55],[0.75,6.55],[0.8,6.5],[0.8,6.4],[0.75,6.35],[0.7,6.4],[0.7,6.5],[0.65,6.45],[0.7,6.4]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[0.75,6.55],[0.55,6.55],[0.6,6.6],[0.6,6.5],[0.55,6.55]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[0.6,6.6],[0.55,6.65],[0.5,6.6],[0.55,6.55],[0.5,6.5],[0.55,6.45],[0.65,6.45],[0.65,6.35],[0.7,6.4]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[0.6,6.5],[0.55,6.45]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[7.45,3.45],[7.35,3.35],[7.35,3.25],[7.4,3.2],[7.45,3.25],[7.4,3.4],[7.4,3.5],[7.5,3.5],[7.55,3.45],[7.55,3.35],[7.65,3.25],[7.65,3.45],[7.7,3.4],[7.8,3.4]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[7.4,3.5],[7.4,3.6],[7.5,3.6],[7.5,3.5],[7.35,3.45],[7.3,3.4]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[7.4,3.6],[7.5,3.7],[7.6,3.7],[7.6,3.6],[7.5,3.6],[7.55,3.75],[7.6,3.7]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[7.65,3.45],[7.7,3.5],[7.7,3.6],[7.75,3.65],[7.75,3.75],[7.8,3.8]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[7.7,3.6],[7.55,3.55],[7.7,3.7],[7.75,3.65]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[7.75,3.75],[7.6,3.7],[7.55,3.65]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[7.5,3.7],[7.35,3.75],[7.35,3.55],[7.25,3.55],[7.2,3.5],[7.2,3.6],[7.3,3.6],[7.35,3.55]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[1.25,1.45],[1.3,1.5],[1.4,1.5],[1.4,1.7],[1.45,1.75],[1.45,1.65],[1.4,1.6]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[1.4,1.6],[1.45,1.55],[1.35,1.55],[1.25,1.65],[1.25,1.75],[1.55,1.65],[1.55,1.55],[1.45,1.65]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[1.45,1.75],[1.4,1.8],[1.45,1.85],[1.5,1.8],[1.55,1.85],[1.6,1.7]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[1.55,2.45],[1.65,2.35],[1.7,2.4],[1.7,2.5],[1.8,2.6],[1.7,2.6],[1.65,2.65],[1.7,2.7],[1.65,2.75],[1.5,2.6],[1.4,2.6],[1.35,2.75],[1.35,2.65],[1.25,2.65],[1.35,2.55],[1.3,2.5],[1.35,2.45],[1.4,2.5],[1.5,2.5],[1.55,2.55],[1.55,2.65]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[1.6,2.7],[1.6,2.6]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[1.55,2.65],[1.5,2.7],[1.45,2.65],[1.45,2.55],[1.4,2.5]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[1.5,2.6],[1.45,2.55],[1.5,2.5],[1.6,2.5],[1.75,2.35],[1.75,2.25],[1.8,2.2],[1.7,2.3]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[1.45,2.45],[1.4,2.4],[1.55,2.25]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[1.4,2.4],[1.3,2.4],[1.25,2.35],[1.3,2.3],[1.35,2.35],[1.45,2.35],[1.5,2.4],[1.55,2.35]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[1.5,2.3],[1.5,2.2]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[0.55,8.45],[0.45,8.45],[0.5,8.5],[0.55,8.45]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[0.65,6.35],[0.55,6.35],[0.6,6.3],[0.65,6.35]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[7.7,3.5],[7.8,3.5],[7.75,3.45],[7.7,3.5]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[1.55,1.55],[1.75,1.55],[1.75,1.65],[1.8,1.7],[1.75,1.75],[1.55,1.55]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[1.55,1.55],[1.5,1.5],[1.5,1.4],[1.7,1.4],[1.65,1.35],[1.6,1.4]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[1.6,1.4],[1.45,1.45],[1.35,1.35],[1.45,1.25],[1.45,1.45]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[3.45,4.75],[3.5,4.8],[3.6,4.7],[3.35,4.55],[3.4,4.5],[3.45,4.55],[3.6,4.4],[3.6,4.5],[3.45,4.55]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[3.45,4.75],[3.4,4.7],[3.4,4.8],[3.55,4.85],[3.7,4.7],[3.65,4.65],[3.75,4.55],[3.7,4.5],[3.5,4.5],[3.45,4.45],[3.7,4.3],[3.65,4.25],[3.55,4.25],[3.6,4.2],[3.7,4.2],[3.8,4.3],[3.8,4.4],[3.7,4.4],[3.65,4.45],[3.7,4.5]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[3.45,4.55],[3.4,4.7],[3.45,4.65],[3.3,4.7],[3.3,4.6],[3.35,4.55],[3.3,4.5],[3.4,4.5],[3.35,4.45],[3.3,4.5]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[3.4,4.5],[3.4,4.3],[3.6,4.3],[3.6,4.4],[3.55,4.35],[3.55,4.25],[3.45,4.35],[3.4,4.3]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[3.65,4.65],[3.6,4.6],[3.5,4.6],[3.55,4.55],[3.6,4.6]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[3.55,4.25],[3.55,4.15],[3.45,4.15],[3.4,4.2],[3.4,4.3]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[3.55,4.35],[3.45,4.35],[3.45,4.45],[3.35,4.45],[3.2,4.4],[3.15,4.45],[3.2,4.5],[3.3,4.5]],"color":"#7dda7eff","thickness":10,"rounded":true}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[2.15,0.15],[2.05,0.15],[2.1,0.2],[2.2,0.2],[2.2,0.3],[2.15,0.35],[2.15,0.25],[2.2,0.2]],"color":"#ff7ca2ff","thickness":4,"rounded":true}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[2.3,0.2],[2.2,0.2],[2.2,0.1]],"color":"#ff7ca2ff","thickness":4,"rounded":true}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[5.3,8.7],[5.35,8.75],[5.25,8.75],[5.25,8.85],[5.2,8.8],[5.25,8.75]],"color":"#ffce10ff","thickness":3,"rounded":true}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[5.3,8.7],[5.25,8.75],[5.2,8.7],[5.2,8.8]],"color":"#ffce10ff","thickness":3,"rounded":true}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[5.25,8.75],[5.25,8.55],[5.2,8.6],[5.2,8.7],[5.15,8.75],[5.05,8.75],[5.1,8.7],[5.2,8.7]],"color":"#ffce10ff","thickness":3,"rounded":true}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[5.3,8.8],[5.15,8.65],[5.05,8.65]],"color":"#767676ff","thickness":2,"rounded":true}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[5.15,8.65],[5.15,8.55]],"color":"#767676ff","thickness":2,"rounded":true}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[2.25,0.15],[2.15,0.25],[2.05,0.25]],"color":"#767676ff","thickness":2,"rounded":true}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[2.15,0.25],[2.1,0.3]],"color":"#767676ff","thickness":2,"rounded":true}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[6.9,8.9],[6.9,8.7],[6.95,8.65],[6.95,8.35],[6.9,8.4],[6.85,8.55],[6.85,8.35]],"color":"#b59152ff","thickness":5,"rounded":true}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[6.95,8.75],[6.95,8.85]],"color":"#b59152ff","thickness":5,"rounded":true}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[8.9,1.6],[8.9,1.4],[8.85,1.45],[8.85,1.25],[8.9,1.2],[8.9,1.1]],"color":"#b59152ff","thickness":5,"rounded":true}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[8.9,1.4],[8.9,1.3]],"color":"#b59152ff","thickness":5,"rounded":true}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[6.55,8.75],[6.85,8.75],[6.8,8.8],[6.8,8.9],[6.75,8.85],[6.8,8.8]],"color":"#24d73cff","thickness":2,"rounded":true}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[8.55,1.15],[8.85,1.15],[8.75,1.05],[8.8,1],[8.8,1.1]],"color":"#24d73cff","thickness":2,"rounded":true}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[6.75,8.75],[6.7,8.7],[6.75,8.65],[6.75,8.75]],"color":"#24d73cff","thickness":2,"rounded":true}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[8.75,1.15],[8.75,1.25],[8.7,1.2],[8.75,1.15]],"color":"#24d73cff","thickness":2,"rounded":true}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"cage","cells":[7],"label":"Nala","color":"#3d6746ff","labelColor":"#166e5aff"}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"cage","cells":[54],"label":"Nelly","color":"#3d6746ff","labelColor":"#166e5aff"}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.55,1.15],"width":0.06,"height":0.06,"rounded":true,"fill":"#947863ff","stroke":"#926e59ff","thickness":1,"angle":0}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.6,8.8],"width":0.04,"height":0.06,"rounded":true,"fill":"#FFFFFF","stroke":"#2da2f2ff","thickness":1,"angle":135}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8.8],"width":0.04,"height":0.06,"rounded":true,"fill":"#FFFFFF","stroke":"#2da2f2ff","thickness":1,"angle":45}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,1.1],"width":0.04,"height":0.06,"rounded":true,"fill":"#FFFFFF","stroke":"#2da2f2ff","thickness":1,"angle":135}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.6,1.2],"width":0.04,"height":0.06,"rounded":true,"fill":"#FFFFFF","stroke":"#2da2f2ff","thickness":1,"angle":135}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.6,1.1],"width":0.04,"height":0.06,"rounded":true,"fill":"#FFFFFF","stroke":"#2da2f2ff","thickness":1,"angle":225}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,1.2],"width":0.04,"height":0.06,"rounded":true,"fill":"#FFFFFF","stroke":"#2da2f2ff","thickness":1,"angle":225}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.55,1.1],"width":0.04,"height":0.04,"rounded":true,"fill":"#FFFFFF","stroke":"#79aafaff","thickness":1,"angle":90}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.55,1.2],"width":0.04,"height":0.04,"rounded":true,"fill":"#FFFFFF","stroke":"#79aafaff","thickness":1,"angle":90}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.55,8.8],"width":0.04,"height":0.04,"rounded":true,"fill":"#FFFFFF","stroke":"#5cbaffff","thickness":1,"angle":0}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.6,1.15],"width":0.04,"height":0.04,"rounded":true,"fill":"#FFFFFF","stroke":"#5cbaffff","thickness":1,"angle":0}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,1.15],"width":0.04,"height":0.04,"rounded":true,"fill":"#FFFFFF","stroke":"#5cbaffff","thickness":1,"angle":0}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.25],"width":0.19,"height":0.17,"rounded":true,"fill":"#ff3030ff","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.25],"width":0.14,"height":0.12,"rounded":true,"fill":"#f70000ff","thickness":0,"angle":45}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.3],"width":0.04,"height":0.04,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.2],"width":0.04,"height":0.04,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.55,4.25],"width":0.04,"height":0.04,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.45,4.25],"width":0.04,"height":0.04,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.25],"width":0.04,"height":0.04,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
```

Normal sudoku rules apply. Place the digits 1-9 in every row, column and 3x3 box exactly once each.

The grid is partially covered in fog. Entering correct digits will clear the fog from surrounding cells, possibly revealing more clues.

Help Nala to map the forest and find the place where we agreed to meet Nelly - her best friend. It’s marked and hidden somewhere in the fog.

Shade some of the cells such that all shaded cells (the woods) are orthogonally connected to an edge of the grid via shaded cells and all unshaded cells form an orthogonally connected area (the paths). No 2x2 area can be fully path. This rule does not apply to the woods. Each circled cell is unshaded and a digit in a circle indicates how many unshaded cells can be seen in horizontal and vertical direction (including itself). Shaded cells obstruct the view. Additionally all shaded cells act as „Fortress cells“ (i.e. each digit in a shaded cell must be larger than any digit in an orthogonally adjacent unshaded cell.)

All cells that have trees in them must be shaded. 

Digits in a dashed cage must sum to the small number in the top left corner. Digits may not repeat within their own cage.
