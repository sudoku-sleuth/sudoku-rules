---
format: open-rules
title: "Supersquish 1: German Whispers"
setter: Marty Sears
source: https://sudokupad.app/qaynwgkwy6
case: https://sudoku-sleuth.com/cases/supersquish-1-german-whispers
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 5
  cols: 5
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
  givens: r3c3=1
exported: 51ac67501f3e31c71f3b86eaba0289ca
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5
unique-6: unique r1c1-r2c1-r3c1-r4c1-r5c1
unique-7: unique r1c2-r2c2-r3c2-r4c2-r5c2
unique-8: unique r1c3-r2c3-r3c3-r4c3-r5c3
unique-9: unique r1c4-r2c4-r3c4-r4c4-r5c4
unique-10: unique r1c5-r2c5-r3c5-r4c5-r5c5
whispers-1: whispers r3c2-r2c2-r2c3-r1c4-r2c5 loop false gap 5
whispers-2: whispers r4c2-r3c3-r3c4-r4c4-r4c3 loop false gap 5
whispers-3: whispers r4c1-r5c1-r5c2-r5c3-r5c4 loop false gap 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0,0],[0,1],[3,1],[3,0],[0,0]],"color":"#f5f5f5ff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0,1],[0,2],[1,2],[1,0]],"color":"#f5f5f5ff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0,2],[0,3],[1,3],[1,2],[2,2],[2,0]],"color":"#f5f5f5ff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0,3],[0,4],[1,4],[1,3],[2,3],[2,2],[3,2],[3,1],[4,1],[4,0],[3,0]],"color":"#f5f5f5ff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4,0],[5,0],[5,1],[4,1],[4,2],[3,2],[3,3],[2,3],[2,4],[1,4],[1,5],[2,5],[2,4]],"color":"#f5f5f5ff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1,5],[0,5],[0,4]],"color":"#f5f5f5ff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2,4],[4,4],[4,3],[3,3],[3,4]],"color":"#f5f5f5ff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2,5],[4,5],[4,4],[5,4],[5,5],[4,5]],"color":"#f5f5f5ff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3,4],[3,5]],"color":"#f5f5f5ff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5,1],[5,2],[4,2],[4,3],[5,3],[5,4]],"color":"#f5f5f5ff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5,2],[5,3]],"color":"#f5f5f5ff","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.95,2.75],[2.95,4.95],[-0.05,4.95],[-0.05,1.95],[2.95,1.95],[2.95,2.75]],"color":"#fae98dff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.05,2.75],[3.05,2.95],[0.05,2.95],[0.05,-0.05],[3.05,-0.05],[3.05,2.75]],"color":"#b4dffdff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.05,2.85],[5.05,3.05],[2.05,3.05],[2.05,0.05],[5.05,0.05],[5.05,2.85]],"color":"#c9f5aeff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.45,0.05],[3.25,0.05]],"color":"#c9f5aeff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[1.95,4.85],[1.95,5.05],[4.95,5.05],[4.95,2.05],[1.95,2.05],[1.95,4.85]],"color":"#fccbcbff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[2.95,2.15],[2.95,1.95]],"color":"#fae98dff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.15,1.95],[1.95,1.95]],"color":"#fae98dff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[-0.05,1.95],[0.15,1.95]],"color":"#fae98dff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[3.05,2.15],[3.05,1.95]],"color":"#b4dffdff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[3.05,-0.05],[3.05,0.15]],"color":"#b4dffdff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[5.05,3.05],[4.85,3.05]],"color":"#c9f5aeff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[3,1],[4,1],[4,4],[1,4],[1,1],[3,1]],"color":"#c8b5d5ff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#ffffff2c","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff2c","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.6,"height":0.6,"rounded":true,"fill":"#ffffff2c","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#ffffff2c","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#ffffff2c","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff2c","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.2,"height":0.2,"rounded":true,"fill":"#ffffff2c","thickness":0,"angle":0}}
```

SUPERSQUISH:
Fill the grid with the digits 1-9 so that digits don't repeat in any row, column, or any of the five coloured 3x3 boxes.

GERMAN WHISPER LINES:
Adjacent digits along a green line have a difference of at least 5.
