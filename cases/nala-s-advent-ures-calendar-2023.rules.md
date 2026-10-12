---
format: open-rules
title: Nala's Advent(ures) Calendar 2023
setter: Sandra & Nala
source: https://sudokupad.app/iz03mej19g
case: https://sudoku-sleuth.com/cases/nala-s-advent-ures-calendar-2023
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
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
cage r3c4-r4c3-r4c4 repeats false total 6 connected true
thermo-1: thermo r2c1-r3c1-r4c2
thermo-2: thermo r1c2-r2c3
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.35,2.25],"width":0.1,"height":0.1,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.3,3.65],"width":0.1,"height":0.1,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.35,2.25],"width":0.1,"height":0.1,"rounded":true,"fill":"#f00","stroke":"#ff2727","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.3,3.65],"width":0.1,"height":0.1,"rounded":true,"fill":"#f00","stroke":"#ff2727","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.25,3.55],[2.15,3.55],[2.15,3.65],[2.2,3.7],[2.2,3.6],[2.15,3.55]],"color":"#00bf22","thickness":6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2.1,3.8],[2.1,3.7],[2.2,3.7],[2.35,3.75],[2.3,3.7],[2.2,3.7]],"color":"#00bf22","thickness":6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2.2,3.7],[2.15,3.75],[2.15,3.65],[2.1,3.6],[2.1,3.7]],"color":"#00bf22","thickness":6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.6,3.9],[2.55,3.85],[2.45,3.85],[2.5,3.9],[2.4,3.9],[2.35,3.85],[2.25,3.85],[2.15,3.75],[2.15,3.85],[2.25,3.85]],"color":"#00bf22","thickness":6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.35,3.85],[2.45,3.85],[2.4,3.8],[2.2,3.8],[2.15,3.85],[2.2,3.9],[2.2,3.8]],"color":"#00bf22","thickness":6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.15,3.85],[2.1,3.9]],"color":"#00bf22","thickness":6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2.2,3.8],[2.25,3.85],[2.2,3.9],[2.4,3.9]],"color":"#00bf22","thickness":6,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.15,3.45],[2.15,3.55],[2.1,3.6],[2.1,3.5],[2.15,3.55]],"color":"#00bf22","thickness":6,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[3.15,3.05],[3.15,2.85],[3.3,2.7],[3.2,2.6],[3.15,2.65],[3.25,2.75]],"color":"#00bf22","thickness":6,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[3.2,2.8],[3.2,2.7]],"color":"#00bf22","thickness":6,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[3.85,2.15],[3.75,2.15],[3.7,2.2],[3.65,2.15],[3.45,2.15],[3.4,2.2],[3.45,2.25],[3.65,2.25],[3.6,2.2],[3.4,2.2]],"color":"#00bf22","thickness":6,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[3.45,2.15],[3.35,2.15],[3.4,2.2],[3.2,2.2],[3.25,2.15],[3.35,2.15]],"color":"#00bf22","thickness":6,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[3.4,2.2],[3.1,2.2],[3.15,2.25],[3.15,2.35],[3.1,2.3],[3.1,2.2]],"color":"#00bf22","thickness":6,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[3.05,2.95],[3.15,2.85],[3.15,2.65],[3.15,2.85]],"color":"#00bf22","thickness":6,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[3.15,2.65],[3.1,2.5],[3.2,2.6],[3.15,2.55],[3.15,2.35],[3.25,2.45],[3.15,2.45]],"color":"#00bf22","thickness":6,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[3.15,2.45],[3.05,2.55],[3.1,2.7],[3.1,2.9]],"color":"#00bf22","thickness":6,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[3.2,2.1],[3.1,2.1],[3.05,2.15],[3.1,2.2],[3.15,2.15],[3.25,2.15],[3.25,2.35],[3.3,2.4],[3.3,2.3],[3.25,2.15]],"color":"#00bf22","thickness":6,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[3.25,2.25],[3.15,2.25],[3.2,2.3],[3.15,2.35],[3.2,2.4],[3.2,2.3]],"color":"#00bf22","thickness":6,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[3.25,2.25],[3.2,2.3]],"color":"#00bf22","thickness":6,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[0.25,1.25],[0.2,1.3],[0.2,1],[0.25,0.95],[0.35,1.05],[0.55,1.05],[0.5,1.1],[0.3,1.2],[0.45,1.05]],"color":"#f6ae55","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[0.45,1.05],[0.3,1.1],[0.25,1.15]],"color":"#f6ae55","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[0.2,2],[0.15,1.85],[0.25,1.95],[0.3,1.9],[0.5,1.9],[0.45,1.85],[0.3,1.8],[0.2,1.7],[0.15,1.75],[0.15,1.85]],"color":"#f6ae55","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[0.15,1.85],[0.35,1.85],[0.2,1.8]],"color":"#f6ae55","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[0.65,1.35],[0.75,1.45],[0.75,1.55],[0.65,1.65]],"color":"#000000","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[1.25,0.75],[1.2,0.7],[1.2,0.8],[1.45,1.05],[1.55,1.05]],"color":"#e6261f","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[1.2,0.7],[1.2,0.5],[1.25,0.45],[1.25,0.35],[1.15,0.25],[1.1,0.3],[1,0.3],[0.95,0.35],[0.95,0.45],[0.9,0.5],[0.9,0.8],[0.95,0.85],[1.05,0.85],[1.15,0.95],[1.3,1],[1.35,1.05],[1.45,1.05]],"color":"#e6261f","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[1.2,0.6],[1.15,0.55],[1.15,0.35],[1.05,0.45],[1.05,0.75],[1.15,0.85],[1,0.8],[0.9,0.7],[0.95,0.65],[1.05,0.35],[1.1,0.3]],"color":"#e6261f","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[1.05,0.45],[1.05,0.25]],"color":"#e6261f","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[1.05,0.65],[1.1,0.7],[1.05,0.55],[1,0.5],[1,0.4],[1.05,0.35]],"color":"#e6261f","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[1.25,0.25],[1.2,0.2],[1.2,0.4],[1.25,0.45],[1.2,0.5],[1.2,0.4]],"color":"#ded8d8","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[1.2,0.2],[1.15,0.25],[1.1,0.2]],"color":"#ded8d8","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[1.1,0.4],[1.2,0.5],[1.2,0.6],[1.25,0.65],[1.25,0.75],[1.2,0.8],[1.25,0.85],[1.1,0.8],[1.15,0.75]],"color":"#ded8d8","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[1.2,0.5],[1.15,0.55],[1.15,0.45],[1.25,0.35],[1.2,0.3],[1.15,0.35],[1.15,0.45]],"color":"#ded8d8","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[1.15,0.55],[1.2,0.6],[1.3,0.6],[1.3,0.4]],"color":"#ded8d8","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[1.2,0.6],[1.15,0.65],[1.2,0.7],[1.25,0.65],[1.15,0.65]],"color":"#ded8d8","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[1.55,1.05],[1.6,1],[1.65,1.05],[1.7,1]],"color":"#ded8d8","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[1.6,1],[1.6,1.1],[1.65,1.05]],"color":"#ded8d8","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[1.7,1.1],[1.6,1.1],[1.55,1.15]],"color":"#ded8d8","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[1.85,0.65],[1.9,0.6],[1.8,0.6],[1.75,0.55],[1.75,0.45],[1.7,0.3],[1.75,0.25],[1.7,0.2]],"color":"#ded8d8","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[1.75,0.55],[1.75,0.65],[1.8,0.6],[1.8,0.5],[1.75,0.45],[1.8,0.4],[1.9,0.5],[1.75,0.45]],"color":"#ded8d8","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[1.8,0.4],[1.75,0.35],[1.8,0.5],[1.85,0.55],[2.05,0.55],[2,0.6],[1.9,0.6],[1.85,0.55]],"color":"#ded8d8","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[1.8,0.6],[1.7,0.5],[1.75,0.45],[1.7,0.4],[1.8,0.3],[1.85,0.35],[1.95,0.35],[1.95,0.45],[1.9,0.5],[2,0.5],[1.95,0.45]],"color":"#ded8d8","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[1.9,0.5],[1.85,0.55]],"color":"#ded8d8","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[1.75,0.65],[1.75,0.75],[1.8,0.7],[1.75,0.65]],"color":"#ded8d8","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[1.75,0.65],[1.7,0.7],[1.7,0.8],[1.75,0.75]],"color":"#ded8d8","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[1.85,0.35],[1.9,0.3],[1.95,0.35],[1.9,0.4],[1.85,0.35]],"color":"#ded8d8","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.45,1.7],"width":0.06,"height":0.06,"rounded":true,"fill":"#000000fe","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.45,1.3],"width":0.06,"height":0.06,"rounded":true,"fill":"#000000fe","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.6,1.5],"width":0.14,"height":0.08,"rounded":true,"fill":"#000000fe","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.45,0.3],"width":0.06,"height":0.06,"rounded":true,"fill":"#000000fe","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.45,0.7],"width":0.06,"height":0.06,"rounded":true,"fill":"#000000fe","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,3.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.85],"width":0.1,"height":0.1,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.2,2.9],"width":0.1,"height":0.1,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.2,2.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.65,2.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,3.6],"width":0.1,"height":0.1,"rounded":true,"fill":"#f00","stroke":"#ff2727","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.85],"width":0.1,"height":0.1,"rounded":true,"fill":"#f00","stroke":"#ff2727","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.2,2.4],"width":0.1,"height":0.1,"rounded":true,"fill":"#f00","stroke":"#ff2727","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.2,2.9],"width":0.1,"height":0.1,"rounded":true,"fill":"#f00","stroke":"#ff2727","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.65,2.2],"width":0.1,"height":0.1,"rounded":true,"fill":"#f00","stroke":"#ff2727","thickness":1,"opacity":0.5,"angle":0}}
```

Are you ready for the festive season? It seems like Nala and Santa have teamed up to make this years festive season a bit more special. Is Santa mentally prepared to have Nala as his dedicated helper for this years Christmas preparations? What is Nala looking forward to the most over the next few weeks? Surely there are many festive Advent(ures) to look forward to!

Normal 4x4 sudoku rules apply. Place the digits 1-4 in each row, column and box exactly once each. 

Digits along Nala and Santa increase as they move away from their individual faces (thermometer rules). 

Digits in a festive looking dashed cage must sum to the value in the top left corner of the cage. Digits may not repeat within their own cage.
