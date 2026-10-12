---
format: open-rules
title: Arrows in the Window
setter: Sir Moose
source: https://sudokupad.app/3exf8mxe7q
case: https://sudoku-sleuth.com/cases/arrows-in-the-window
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3-r2c4-r3c2-r3c3-r3c4-r4c2-r4c3-r4c4 connected true
cage-2: cage r2c6-r2c7-r2c8-r3c6-r3c7-r3c8-r4c6-r4c7-r4c8 connected true
cage-3: cage r6c6-r6c7-r6c8-r7c6-r7c7-r7c8-r8c6-r8c7-r8c8 connected true
cage-4: cage r6c2-r6c3-r6c4-r7c2-r7c3-r7c4-r8c2-r8c3-r8c4 connected true
arrow-1: arrow r2c1-r3c1-r4c1 bulb ["r1c1"]
arrow-2: arrow r9c4-r9c3-r9c2 bulb ["r9c5"]
arrow-3: arrow r8c1-r9c2 bulb ["r7c2"]
arrow-4: arrow r6c2-r7c3-r8c4 bulb ["r5c1"]
arrow-5: arrow r4c2-r4c3 bulb ["r5c3"]
arrow-6: arrow r2c4-r2c3 bulb ["r1c5"]
arrow-7: arrow r2c8-r1c7 bulb ["r1c9"]
arrow-8: arrow r6c9-r7c9-r8c9 bulb ["r5c9"]
arrow-9: arrow r8c8-r7c8 bulb ["r9c9"]
arrow-10: arrow r6c7-r5c6 bulb ["r7c7"]
arrow-11: arrow r7c6 bulb ["r6c5"]
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.95,1.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.95,1.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.95,2.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.95,2.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.95,2.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.95,3.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.95,3.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.05,3.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.05,3.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.95,3.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.95,3.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.05,3.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.05,3.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.05,2.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.05,2.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.05,2.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.05,1.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.05,1.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.05,1.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.05,1.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.95,1.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.95,1.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.05,2.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.05,2.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.05,2.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.95,2.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.95,2.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.95,2.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.95,5.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.95,5.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.05,5.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.05,5.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.95,5.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.95,5.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.05,5.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.05,5.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.05,6.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.05,6.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.05,6.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.95,6.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.95,6.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.95,6.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.05,6.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.05,6.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.05,6.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.95,6.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.95,6.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.95,6.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.95,7.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.95,7.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.05,7.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.05,7.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.95,7.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.95,7.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.05,7.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.05,7.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.95,1.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.95,1.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.05,1.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.05,1.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.95,1.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.95,1.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.05,1.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.05,1.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.05,3.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.05,3.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.05,3.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.05,3.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.95,3.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-122","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.95,3.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-123","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-125","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.95,3.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-126","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.95,3.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-127","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-129","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-130","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.95,2.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-131","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.95,2.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-132","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.95,2.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-133","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.05,2.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-134","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.05,2.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-135","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.05,2.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-136","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-138","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-139","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.95,2.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-140","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.95,2.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-141","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.95,2.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-142","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.05,2.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-143","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.05,2.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-144","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.05,2.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-145","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-147","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-149","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-150","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.95,5.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-151","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.95,5.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-152","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.05,5.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-153","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.05,5.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-155","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-156","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.95,5.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-157","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.95,5.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-158","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.05,5.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-159","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.05,5.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-161","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-162","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.05,6.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-163","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.05,6.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-164","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.05,6.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-165","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-167","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-168","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.05,6.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-169","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.05,6.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-170","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.05,6.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-171","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-173","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-174","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.95,6.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-175","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.95,6.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-176","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.95,6.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-177","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.05,7.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-178","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.05,7.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-179","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-181","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.95,7.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-182","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.95,7.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-183","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-185","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.95,7.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-186","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.95,7.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-187","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-189","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.95],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-190","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.95,6.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-191","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.95,6.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-192","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.95,6.95],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-193","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.05,7.05],"width":0.1,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-194","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.05,7.5],"width":0.8,"height":0.1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-195","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.05],"width":0.1,"height":0.8,"rounded":false,"fill":"#0003","thickness":0}}
```

Normal Sudoku Rules Apply

Digits cannot repeat in cages.

Digits along an arrow sum to the digit in that arrow's circle.
