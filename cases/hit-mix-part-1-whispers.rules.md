---
format: open-rules
title: "HIT & MIX - Part 1: Whispers"
setter: Marty Sears
source: https://sudokupad.app/u60jrno7yu
case: https://sudoku-sleuth.com/cases/hit-mix-part-1-whispers
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
    - 7
    - 8
    - 9
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
exported: 64304ded4019bbb42ffd1e176550553a
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
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6
unique-15: unique r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-16: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
kropki-1: kropki r4c1-r5c1 black
kropki-2: kropki r6c1-r6c2 white
kropki-3: kropki r1c6-r2c6 white
whispers-1: whispers r4c5-r3c5-r2c5-r2c4-r2c3-r2c2-r1c2-r1c3 loop false gap 5
whispers-2: whispers r4c4-r5c4-r6c5-r5c6-r4c6 loop false gap 5
whispers-3: whispers r5c3-r4c3-r3c2-r3c1-r2c1-r1c1 loop false gap 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.625,2.625],"width":0.25,"height":0.25,"rounded":true,"fill":"#FFFFFF","stroke":"#e6ddc9ff","thickness":3.2,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.625,3.375],"width":0.25,"height":0.25,"rounded":true,"fill":"#FFFFFF","stroke":"#e6ddc9ff","thickness":3.2,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.625,3.75],"width":0.25,"height":0.25,"rounded":true,"fill":"#FFFFFF","stroke":"#e6ddc9ff","thickness":3.2,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.625,2.25],"width":0.25,"height":0.25,"rounded":true,"fill":"#FFFFFF","stroke":"#e6ddc9ff","thickness":3.2,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.625,1.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#75e166ff","stroke":"#e6ddc9ff","thickness":3.2,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.625,4.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FFFFFF","stroke":"#e6ddc9ff","thickness":3.2,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.167,5.5],[6.167,6.167],[-0.167,6.167],[-0.167,-0.167],[6.167,-0.167],[6.167,5.5]],"color":"#d1bf94ff","thickness":19.2,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,-0.25],[2.5,-0.25]],"color":"#d1bf94ff","thickness":19.84,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[-0.25,2.5],[-0.25,3.5]],"color":"#d1bf94ff","thickness":19.84,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.5,6.25],[2.5,6.25]],"color":"#d1bf94ff","thickness":19.84,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6.25,3.5],[6.25,2.5]],"color":"#d1bf94ff","thickness":19.84,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[1,3],[3,3],[3,6],[6,6],[6,3],[3,3]],"color":"#000000","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[1,3],[0,3],[0,6],[3,6]],"color":"#000000","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[3,3],[3,0],[6,0],[6,3]],"color":"#000000","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[3,0],[0,0],[0,3]],"color":"#000000","thickness":5.12,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[3,4],[3,6],[0,6],[0,3],[3,3],[3,4]],"color":"#000000","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[3,6],[6,6],[6,3],[3,3],[3,0],[6,0],[6,3]],"color":"#000000","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[3,0],[0,0],[0,3]],"color":"#000000","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[6,1],[5,1],[5,2],[6,2]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[6,4],[5,4],[5,2],[4,2],[4,4],[5,4]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[5,4],[5,5],[6,5]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[5,6],[5,5],[4,5],[4,4],[2,4],[2,6]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[4,6],[4,5],[1,5],[1,4],[2,4],[2,2],[4,2],[4,1],[5,1],[5,0]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[1,6],[1,5],[0,5]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[4,0],[4,1],[2,1],[2,2],[1,2],[1,4],[0,4]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[2,0],[2,1],[1,1],[1,2],[0,2]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[0,1],[1,1],[1,0]],"color":"#000000","thickness":1.28,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.5],"width":0.65,"height":0.65,"rounded":false,"fill":"#75e166ff","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.65,"height":0.65,"rounded":false,"fill":"#75e166ff","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0.65,"height":0.65,"rounded":false,"fill":"#75e166ff","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3.5],"width":0.79,"height":0.79,"rounded":true,"fill":"#FFFFFF","stroke":"#4cedfcff","thickness":4.48,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2.5],"width":0.79,"height":0.79,"rounded":true,"fill":"#FFFFFF","stroke":"#4cedfcff","thickness":4.48,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.79,"height":0.79,"rounded":true,"fill":"#FFFFFF","stroke":"#4cedfcff","thickness":4.48,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.625,3],"width":0.25,"height":0.25,"rounded":true,"fill":"#FFFFFF","stroke":"#e6ddc9ff","thickness":3.2,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.625,1.875],"width":0.25,"height":0.25,"rounded":true,"fill":"#FFFFFF","stroke":"#e6ddc9ff","thickness":3.2,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.625,4.125],"width":0.25,"height":0.25,"rounded":true,"fill":"#FFFFFF","stroke":"#e6ddc9ff","thickness":3.2,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,2.45],"width":0.07,"height":0.21,"rounded":false,"fill":"#4cedfcff","thickness":0,"angle":45}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,2.55],"width":0.07,"height":0.21,"rounded":false,"fill":"#4cedfcff","thickness":0,"angle":135}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3.45],"width":0.07,"height":0.21,"rounded":false,"fill":"#4cedfcff","thickness":0,"angle":135}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3.55],"width":0.07,"height":0.21,"rounded":false,"fill":"#4cedfcff","thickness":0,"angle":45}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.45,3],"width":0.07,"height":0.21,"rounded":false,"fill":"#4cedfcff","thickness":0,"angle":45}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.55,3],"width":0.07,"height":0.21,"rounded":false,"fill":"#4cedfcff","thickness":0,"angle":135}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.95,3.5],"width":0.07,"height":0.21,"rounded":false,"fill":"#4cedfcff","thickness":0,"angle":180}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.05,2.5],"width":0.07,"height":0.21,"rounded":false,"fill":"#4cedfcff","thickness":0,"angle":180}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3.05],"width":0.07,"height":0.21,"rounded":false,"fill":"#4cedfcff","thickness":0,"angle":90}}
```

Fill each 3x3 box with the digits 1-9, so that no digit repeats in any row, column or box.

HITLINES: 
In every puzzle in this pack, each line is a hitline. Digits may not repeat along a hitline. The number in a blue circle pointing at a hitline indicates the total of all the digits along that line that match their position number along the line (starting at the square, which is position 1.) Eg: a line reading 92485 would have a 7 pointing at it, because the only 'hits' are the 2 in the 2nd position and the 5 in the 5th position, and these sum to 7.

GERMAN WHISPERS:
In this grid, each line is also a German Whisper: adjacent digits on a green line have a difference of at least 5.

KROPKI:
If two digits are joined by a white dot they are consecutive. If two digits are joined by a black dot, one is double the other.
