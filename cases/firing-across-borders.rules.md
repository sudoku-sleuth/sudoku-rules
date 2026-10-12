---
format: open-rules
title: Firing Across Borders
setter: Marty Sears
source: https://sudokupad.app/mbro62z0e7
case: https://sudoku-sleuth.com/cases/firing-across-borders
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
arrow-1: arrow r7c3-r7c2-r7c1 bulb ["r7c4"]
arrow-2: arrow r3c3-r2c3-r1c3-r1c2 bulb ["r2c2"]
arrow-3: arrow r7c6-r6c5-r6c4 bulb ["r7c5"]
arrow-4: arrow r6c6-r5c5 bulb ["r7c7"]
arrow-5: arrow r2c5-r3c4 bulb ["r3c5"]
arrow-6: arrow r4c6-r5c6 bulb ["r4c5"]
arrow-7: arrow r2c6-r3c7-r4c7 bulb ["r3c6"]
constructed-regions size 7 borders [] joins []
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,-0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,-0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,-0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,-0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,-0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,-0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,-0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,1.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,2.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,3.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,4.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,5.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,6.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,-0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,-0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,7.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.25,0.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.25,-0.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.25,-0.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.75,-0.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.25,-0.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.75,-0.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.25,-0.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.25,-0.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.75,-0.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.25,-0.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.75,-0.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.25,-0.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.75,-0.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.25,-0.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.75,-0.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.75,-0.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.25,-0.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.25,0.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.25,0.75],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.25,1.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.25,1.75],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.25,2.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.25,2.75],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.25,3.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.25,3.75],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.25,5.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.25,4.75],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.25,4.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.25,5.75],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.25,6.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.25,6.75],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.25,7.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.75,7.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.25,7.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.75,7.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.25,7.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.75,7.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.25,7.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.75,7.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.25,7.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.75,7.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.25,7.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.75,7.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.25,7.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.75,7.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.25,7.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.25,7.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.25,0.75],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.25,1.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.25,1.75],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.25,2.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.25,2.75],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.25,3.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.25,3.75],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.25,4.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.25,4.75],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.25,5.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.25,5.75],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.25,6.25],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.25,6.75],"width":0.36,"height":0.36,"rounded":false,"fill":"#6dd2fbff","thickness":0,"angle":45}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,0],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"shape","layer":"under","center":[1,0],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"shape","layer":"under","center":[2,0],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"shape","layer":"under","center":[3,0],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"shape","layer":"under","center":[4,0],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"shape","layer":"under","center":[5,0],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"shape","layer":"under","center":[6,0],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,0],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,1],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,1.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,2],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,2.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,3],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,3.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,4],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,4.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,5],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,7],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,6.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,6],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"shape","layer":"under","center":[7,5.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-122","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-123","rules":[],"visual":{"kind":"shape","layer":"under","center":[6,7],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-124","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-125","rules":[],"visual":{"kind":"shape","layer":"under","center":[5,7],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-126","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-127","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,7],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-128","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-129","rules":[],"visual":{"kind":"shape","layer":"under","center":[1,7],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-130","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-131","rules":[],"visual":{"kind":"shape","layer":"under","center":[2,7],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-132","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-133","rules":[],"visual":{"kind":"shape","layer":"under","center":[3,7],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-134","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-135","rules":[],"visual":{"kind":"shape","layer":"under","center":[4,7],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-136","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-137","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,1],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-138","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,1.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-139","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,2],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-140","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,2.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-141","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,3],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-142","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,3.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-143","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,4],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-144","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,4.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-145","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,5],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-146","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,5.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-147","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,6],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-148","rules":[],"visual":{"kind":"shape","layer":"under","center":[0,6.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#04aef2ff","thickness":0,"angle":45}}
- {"id":"drawing-149","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":7.02,"height":7.02,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-165","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,0],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-166","rules":[],"visual":{"kind":"shape","layer":"over","center":[0,-0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-167","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,-0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-168","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,-0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-169","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,-0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-170","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,-0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-171","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,-0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-172","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,-0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-173","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,-0.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-174","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-175","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-176","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,2],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-177","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-178","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-179","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-180","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-181","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-182","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,7.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-183","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,7.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-184","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,7.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-185","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,7.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-186","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,7.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-187","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-188","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,7.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-189","rules":[],"visual":{"kind":"shape","layer":"over","center":[0,7.5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-190","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,1],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-191","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,2],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-192","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,3],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-193","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,4],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-194","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,5],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-195","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,6],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
- {"id":"drawing-196","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,7],"width":0.36,"height":0.36,"rounded":false,"fill":"#b8e8fcff","thickness":0,"angle":45}}
```

Divide the grid into seven regions of orthogonally connected cells. Fill the grid with the digits 1-7 so that no digits repeat in any row, column or region.

Digits along an arrow sum to the digit in the attached circle. An arrow's circle and its tip are always in different regions. Each region must contain exactly one circle and one arrow tip.
