---
format: open-rules
title: Math Test
setter: Will Power
source: https://sudokupad.app/45ocyayp5z
case: https://sudoku-sleuth.com/cases/math-test
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r2c5-r2c6-r2c7-r2c8-r2c9 total 15 connected true
cage-2: cage r3c8-r3c9 total 13 connected true
cage-3: cage r4c8-r4c9 total 11 connected true
cage-4: cage r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 total 27 connected true
cage-5: cage r6c1-r6c2 total 11 connected true
cage-6: cage r7c8-r7c9 total 12 connected true
cage-7: cage r8c8-r8c9 total 14 connected true
cage-8: cage r9c7-r9c8-r9c9 total 8 connected true
kropki-1: kropki r3c1-r3c2 colour "white"
kropki-2: kropki r4c3-r4c4 colour "white"
kropki-3: kropki r7c4-r7c5 colour "white"
kropki-4: kropki r1c5-r1c6 colour "white"
kropki-5: kropki r8c4-r8c5 colour "white"
kropki-6: kropki r6c5-r6c6 colour "white"
kropki-7: kropki r2c8-r2c9 colour "white"
kropki-8: kropki r2c6-r2c7 colour "white"
kropki-9: kropki r2c5-r2c6 colour "white"
kropki-10: kropki r3c4-r4c4 colour "black"
kropki-11: kropki r4c4-r5c4 colour "black"
```

```drawing
- {"id":"drawing-63","rules":[],"visual":{"kind":"cage","cells":[53],"label":"2"}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"cage","cells":[8],"label":"7"}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"cage","cells":[0],"label":"9"}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":2.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":2.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":2.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":2.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6],"width":1.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5],"width":0.5,"height":0.5,"rounded":true,"fill":"#FF483B","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2],"width":0.5,"height":0.5,"rounded":true,"fill":"#FF483B","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2],"width":0.5,"height":0.5,"rounded":true,"fill":"#FF483B","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,6],"width":0.5,"height":0.5,"rounded":true,"fill":"#FF483B","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1],"width":0.4,"height":0.4,"rounded":true,"fill":"#758CFF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3],"width":0.4,"height":0.4,"rounded":true,"fill":"#758CFF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3],"width":0.4,"height":0.4,"rounded":true,"fill":"#758CFF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1],"width":0.4,"height":0.4,"rounded":true,"fill":"#758CFF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,2],"width":0.4,"height":0.4,"rounded":true,"fill":"#758CFF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3],"width":0.4,"height":0.4,"rounded":true,"fill":"#758CFF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0.4,"height":0.4,"rounded":true,"fill":"#758CFF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6],"width":0.4,"height":0.4,"rounded":true,"fill":"#758CFF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,6],"width":0,"height":0,"rounded":false,"thickness":0,"text":"X","textColor":"#000000","fontSize":23}}
- {"id":"drawing-122","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2],"width":0,"height":0,"rounded":false,"thickness":0,"text":"X","textColor":"#000000","fontSize":23}}
- {"id":"drawing-123","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2],"width":0,"height":0,"rounded":false,"thickness":0,"text":"X","textColor":"#000000","fontSize":23}}
- {"id":"drawing-124","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"X","textColor":"#000000","fontSize":23}}
- {"id":"drawing-125","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1],"width":0,"height":0,"rounded":false,"thickness":0,"text":"+","textColor":"#000000","fontSize":30}}
- {"id":"drawing-126","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3],"width":0,"height":0,"rounded":false,"thickness":0,"text":"+","textColor":"#000000","fontSize":30}}
- {"id":"drawing-127","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,2],"width":0,"height":0,"rounded":false,"thickness":0,"text":"+","textColor":"#000000","fontSize":30}}
- {"id":"drawing-128","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1],"width":0,"height":0,"rounded":false,"thickness":0,"text":"+","textColor":"#000000","fontSize":30}}
- {"id":"drawing-129","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3],"width":0,"height":0,"rounded":false,"thickness":0,"text":"+","textColor":"#000000","fontSize":30}}
- {"id":"drawing-130","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4],"width":0,"height":0,"rounded":false,"thickness":0,"text":"=","textColor":"#000000","fontSize":30}}
- {"id":"drawing-131","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2],"width":0,"height":0,"rounded":false,"thickness":0,"text":"=","textColor":"#000000","fontSize":30}}
- {"id":"drawing-132","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7],"width":0,"height":0,"rounded":false,"thickness":0,"text":"=","textColor":"#000000","fontSize":30}}
- {"id":"drawing-133","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6],"width":0,"height":0,"rounded":false,"thickness":0,"text":"+","textColor":"#000000","fontSize":30}}
- {"id":"drawing-134","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4],"width":0,"height":0,"rounded":false,"thickness":0,"text":"=","textColor":"#000000","fontSize":30}}
- {"id":"drawing-135","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4],"width":0,"height":0,"rounded":false,"thickness":0,"text":"=","textColor":"#000000","fontSize":30}}
- {"id":"drawing-136","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4],"width":0,"height":0,"rounded":false,"thickness":0,"text":"=","textColor":"#000000","fontSize":30}}
- {"id":"drawing-137","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,3],"width":0,"height":0,"rounded":false,"thickness":0,"text":"=","textColor":"#000000","fontSize":30}}
- {"id":"drawing-138","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"=","textColor":"#000000","fontSize":30}}
- {"id":"drawing-139","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4],"width":0,"height":0,"rounded":false,"thickness":0,"text":"=","textColor":"#000000","fontSize":30}}
- {"id":"drawing-140","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2],"width":0,"height":0,"rounded":false,"thickness":0,"text":"=","textColor":"#000000","fontSize":30}}
- {"id":"drawing-141","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0,"height":0,"rounded":false,"thickness":0,"text":"+","textColor":"#000000","fontSize":30}}
- {"id":"drawing-142","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3],"width":0,"height":0,"rounded":false,"thickness":0,"text":"+","textColor":"#000000","fontSize":30}}
```

Normal Sudoku rules apply. Numbers in pills are two or three digit numbers, read from left to right. SUMS- Circles and Pills with a "+" between them are added together to equal the pill or sum on the other side of the "=" sign. PRODUCTS- Pills with an "X" between them are multiplied together to equal the number on the other side of the "=" sign. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
