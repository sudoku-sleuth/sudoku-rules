---
format: open-rules
title: Six Rooms
setter: Marty Sears
source: https://tinyurl.com/2x75uvf8
case: https://sudoku-sleuth.com/cases/six-rooms
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
kropki r5c5-r6c5 colour "white"
parity-cells r3c1 parity "odd"
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.889,0.778],[0.889,0.111],[0.111,0.111],[0.111,0.889],[0.889,0.889]],"color":"#ffef0b","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.944,3.056],[4.389,3.056],[4.333,3.111],[4.889,3.111],[4.889,3.889],[4.667,3.889],[4.5,3.944],[4.944,3.944],[4.944,3.167]],"color":"#ffef0b","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.389,3.056],[4.056,3.056],[4.056,3.944],[4.5,3.944],[4.556,3.889],[4.667,3.889]],"color":"#ffef0b","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.333,3.111],[4.222,3.111],[4.278,3.056]],"color":"#ffef0b","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.556,3.889],[4.111,3.889],[4.111,3.111]],"color":"#ffef0b","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.944,4.056],[2.056,4.056],[2.056,4.944],[2.944,4.944]],"color":"#ffef0b","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.944,4.167],[2.944,4.833]],"color":"#ffef0b","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.889,4.778],[2.889,4.889],[2.111,4.889],[2.111,4.111],[2.889,4.111],[2.889,4.778]],"color":"#ffef0b","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.111,1.667],[4.111,1.889],[4.889,1.889],[4.889,0.111],[4.111,0.111],[4.111,1.667]],"color":"#ffef0b","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.111,1.889],[4.056,1.944],[4.944,1.944],[4.944,0.056],[4.056,0.056],[4.056,1.944]],"color":"#ffef0b","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.556,1.889],[4.5,1.944]],"color":"#ffef0b","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[0.056,0.056],[0.056,0.944],[0.944,0.944],[0.944,0.056],[0.056,0.056]],"color":"#ffef0b","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[0,1],[6,1]],"color":"#b2b2b2","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6,2],[5,2],[5,0]],"color":"#b2b2b2","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[6,3],[5,3],[5,2],[4,2],[4,0]],"color":"#b2b2b2","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[6,4],[5,4],[5,3],[4,3],[4,2],[3,2],[3,0]],"color":"#b2b2b2","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[6,5],[5,5],[5,4],[4,4],[4,3],[3,3],[3,2],[2,2],[2,0]],"color":"#b2b2b2","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[5,6],[5,5],[4,5],[4,4],[3,4],[3,3],[2,3],[2,2],[1,2],[1,0]],"color":"#b2b2b2","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[4,6],[4,5],[3,5],[3,4],[2,4],[2,3],[1,3],[1,2],[0,2]],"color":"#b2b2b2","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[3,6],[3,5],[2,5],[2,4],[1,4],[1,3],[0,3]],"color":"#b2b2b2","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[2,6],[2,5],[1,5],[1,4],[0,4]],"color":"#b2b2b2","thickness":2,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[1,6],[1,5],[0,5]],"color":"#b2b2b2","thickness":2,"rounded":true,"layer":"over"}}
```

• Divide the grid into six 2x3 boxes. It must be determined whether these are horizontal or vertical.

• Fill the grid with the digits 1-6, so that digits don't repeat in a row, column, or box.

• The boxes are numbered 1-6, in reading order from top left to bottom right.

• The yellow frame in box N displays the sum of all the digits within that box that are orthogonally adjacent to the digit N within that box. Eg: the yellow frame in box 4 contains the sum of any digits within box 4 that are orthogonally adjacent to the 4 in box 4.

• For 2-digit totals, the yellow frame covers a horizontal domino and the total reads from left to right.

• Every box will have a yellow frame. Only four of these have been shown; the position of the other two are to be discovered.

• The grey circle contains an odd digit.

• The white dot connects two consecutive digits. (Not all possible white dots are shown.)
