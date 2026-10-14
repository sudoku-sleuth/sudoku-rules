---
format: open-rules
title: The Train and the Fly
setter: Marty Sears
source: https://sudokupad.app/jfp95v2kq0
case: https://sudoku-sleuth.com/cases/the-train-and-the-fly
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
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
    - 7
    - 8
exported: 0194ae065c79edee4a4b530ecf2961c4
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
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.125,5.125],[6.125,6.125],[-0.125,6.125],[-0.125,-0.125],[6.125,-0.125],[6.125,5.125]],"color":"#fdb4b0ff","thickness":5,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2,4],[4,4],[4,5],[3,5],[3,4]],"color":"#b5b5b5ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3,4],[3,3],[4,3],[4,4],[5,4],[5,5],[4,5],[4,6],[5,6],[5,5]],"color":"#b5b5b5ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5,5],[6,5],[6,4],[5,4],[5,3],[4,3],[4,2],[5,2],[5,3]],"color":"#b5b5b5ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4,6],[3,6],[3,5],[2,5],[2,4],[1,4],[1,5],[2,5]],"color":"#b5b5b5ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2,4],[2,3],[3,3],[3,2],[4,2],[4,1],[5,1],[5,2],[6,2],[6,3],[5,3]],"color":"#b5b5b5ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2,5],[2,6],[3,6]],"color":"#b5b5b5ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2,6],[1,6],[1,5],[0,5],[0,6],[1,6]],"color":"#b5b5b5ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6,4],[6,3]],"color":"#b5b5b5ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5,6],[6,6],[6,5]],"color":"#b5b5b5ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6,2],[6,1],[5,1],[5,0],[6,0],[6,1]],"color":"#b5b5b5ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0,5],[0,4],[1,4],[1,3],[2,3],[2,2],[3,2],[3,1],[4,1],[4,0],[5,0]],"color":"#b5b5b5ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[0,4],[0,3],[1,3],[1,2],[2,2],[2,1],[3,1],[3,0],[4,0]],"color":"#b5b5b5ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[0,3],[0,2],[1,2],[1,1],[2,1],[2,0],[1,0],[1,1]],"color":"#b5b5b5ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[1,1],[0,1],[0,2]],"color":"#b5b5b5ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[3,0],[2,0]],"color":"#b5b5b5ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[0,1],[0,0],[1,0]],"color":"#b5b5b5ff","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[1.4,1.9],[1.5,2],[1.6,1.9]],"color":"#000000","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[1.6,2.1],[1.5,2],[1.4,2.1]],"color":"#000000","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[1.4,3.9],[1.6,4.1]],"color":"#000000","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[1.6,3.9],[1.4,4.1]],"color":"#000000","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[4.9,5.4],[5,5.5],[5.1,5.4]],"color":"#000000","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[5.1,5.6],[5,5.5],[4.9,5.6]],"color":"#000000","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2.6],"width":0.24,"height":0.16,"rounded":true,"fill":"#ffffff74","stroke":"#7f7f7f8e","thickness":1,"angle":30}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2.4],"width":0.24,"height":0.16,"rounded":true,"fill":"#ffffff74","stroke":"#7f7f7f8e","thickness":1,"angle":330}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2.5],"width":0.22,"height":0.26,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.9,2.45],"width":0.06,"height":0.06,"rounded":true,"fill":"#9492c4ff","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.9,2.55],"width":0.06,"height":0.06,"rounded":true,"fill":"#9492c4ff","thickness":0,"angle":0}}
```

- Fill the grid with digits, and draw a train that moves orthogonally through the grid and visits every cell once.
- The train consists of 4 carriages of equal length.
- A carriage doesn't touch itself, not even diagonally.
- Adjacent digits along a carriage are consecutive.
- An X connects the end cells of two carriages, which sum to 10.
- The black fly connects two digits with a 1:2 ratio.
- Identical digits may not touch each other orthogonally.
- A digit on the train indicates how many times that digit appears on the train.
