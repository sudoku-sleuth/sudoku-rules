---
format: open-rules
title: Squishpers
setter: Marty Sears
source: https://tinyurl.com/ymamap53
case: https://sudoku-sleuth.com/cases/squishpers
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
    - 8
    - 9
exported: b6a9a636c2b9988791a81dd1450cf6ff
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
kropki r3c4-r4c4 black
whispers-1: whispers r7c2-r7c3-r6c4-r5c3-r4c4-r3c5-r2c4-r1c5-r1c6 loop false gap 5
whispers-2: whispers r4c2-r3c1-r2c2-r3c3 loop false gap 5
whispers-3: whispers r5c5-r6c6-r5c7-r4c6 loop false gap 5
pair-1: pair r2c2-r3c2 sum 5
pair-2: pair r6c5-r6c6 sum 5
counting-circles r2c1-r2c3-r2c5-r2c7-r3c2-r3c4-r3c6-r4c1-r4c3-r4c5-r4c7-r5c2-r5c4-r5c6-r6c1-r6c3-r6c5-r6c7-r7c2-r7c4-r7c6
```

```drawing
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[4.5,0.056],[4.5,0.278]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[4.5,0.389],[4.5,0.611]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[4.5,0.722],[4.5,0.944]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[4.5,1.056],[4.5,1.278]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[4.5,1.389],[4.5,1.611]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[4.5,1.722],[4.5,1.944]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[4.5,2.056],[4.5,2.278]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[4.5,2.389],[4.5,2.611]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[4.611,2.5],[4.389,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[4.5,2.722],[4.5,2.944]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[4.5,3.056],[4.5,3.278]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[4.5,3.389],[4.5,3.611]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[4.5,3.722],[4.5,3.944]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[4.5,4.056],[4.5,4.278]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[4.5,4.389],[4.5,4.611]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[4.611,4.5],[4.389,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[4.5,4.722],[4.5,4.944]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[4.5,5.056],[4.5,5.278]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[4.5,5.389],[4.5,5.611]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[4.5,5.722],[4.5,5.944]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[4.5,6.056],[4.5,6.278]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[4.5,6.389],[4.5,6.611]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[4.5,6.722],[4.5,6.944]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[2.5,0.056],[2.5,0.278]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[2.5,0.389],[2.5,0.611]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[2.5,0.722],[2.5,0.944]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[2.5,1.056],[2.5,1.278]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[2.5,1.389],[2.5,1.611]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[2.5,1.722],[2.5,1.944]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[2.5,2.056],[2.5,2.278]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[2.5,2.389],[2.5,2.611]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[2.611,2.5],[2.389,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[2.5,2.722],[2.5,2.944]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[2.5,3.056],[2.5,3.278]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[2.5,3.389],[2.5,3.611]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[2.5,3.722],[2.5,3.944]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[2.5,4.056],[2.5,4.278]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[2.5,4.389],[2.5,4.611]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[2.611,4.5],[2.389,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[2.5,4.722],[2.5,4.944]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[2.5,5.056],[2.5,5.278]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[2.5,5.389],[2.5,5.611]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[2.5,5.722],[2.5,5.944]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[2.5,6.056],[2.5,6.278]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[2.5,6.389],[2.5,6.611]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[2.5,6.722],[2.5,6.944]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[0.056,2.5],[0.278,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[0.389,2.5],[0.611,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[0.722,2.5],[0.944,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[1.056,2.5],[1.278,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[1.389,2.5],[1.611,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[1.722,2.5],[1.944,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[2.056,2.5],[2.278,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[2.722,2.5],[2.944,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[3.056,2.5],[3.278,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[3.389,2.5],[3.611,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[3.722,2.5],[3.944,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[4.056,2.5],[4.278,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[4.722,2.5],[4.944,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[5.056,2.5],[5.278,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[5.389,2.5],[5.611,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[5.722,2.5],[5.944,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[6.056,2.5],[6.278,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[6.389,2.5],[6.611,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[6.722,2.5],[6.944,2.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[0.056,4.5],[0.278,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"line","points":[[0.389,4.5],[0.611,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"line","points":[[0.944,4.5],[0.722,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"line","points":[[1.056,4.5],[1.278,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"line","points":[[1.389,4.5],[1.611,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"line","points":[[1.722,4.5],[1.944,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"line","points":[[2.056,4.5],[2.278,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"line","points":[[2.722,4.5],[2.944,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"line","points":[[3.056,4.5],[3.278,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"line","points":[[3.389,4.5],[3.611,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"line","points":[[3.722,4.5],[3.944,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"line","points":[[4.056,4.5],[4.278,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"line","points":[[4.722,4.5],[4.944,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"line","points":[[5.278,4.5],[5.056,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"line","points":[[5.389,4.5],[5.611,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"line","points":[[5.722,4.5],[5.944,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"line","points":[[6.056,4.5],[6.278,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"line","points":[[6.389,4.5],[6.611,4.5]],"color":"#808080","thickness":2,"rounded":true}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"line","points":[[6.722,4.5],[6.944,4.5]],"color":"#808080","thickness":2,"rounded":true}}
```

SQUISHDOKU: Place digits from 1-9 in every cell, so that no digit repeats in a row, column, or 3x3 region. The dashed lines indicate the boundaries of regions, and cells on the dashed lines are simultaneously part of the regions on both sides of the line.
COUNTING CIRCLES: A circled digit indicates exactly how many circles contain that digit.
GERMAN WHISPERS: Adjacent digits along a green line have a difference of at least 5.
KROPKI DOTS: The black dot joins two digits that are in a 1:2 ratio (one is double the other.) Not all possible black dots are shown. 
V: Digits joined by a V sum to 5.
