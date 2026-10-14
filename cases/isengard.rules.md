---
format: open-rules
title: Isengard
setter: Blobz
source: https://sudokupad.app/blobz/isengard
case: https://sudoku-sleuth.com/cases/isengard
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: 13.....289.......6......................9......................3.......924.....71
exported: 8e5b10934407851b12b5e4ccf24e03e5
---

```rules
sudoku 9x9
kropki-1: kropki r5c3-r5c4 white
kropki-2: kropki r1c6-r2c6 white
kropki-3: kropki r5c8-r5c9 white
kropki-4: kropki r8c5-r9c5 white
whispers-1: whispers r2c4-r2c3-r3c2-r4c2-r5c2 gap 5
whispers-2: whispers r6c2-r7c2-r8c3-r8c4 gap 5
whispers-3: whispers r8c6-r8c7-r7c8-r6c8-r5c8 gap 5
whispers-4: whispers r4c8-r3c8-r2c7-r2c6 gap 5
whispers-5: whispers r4c5-r5c4-r6c5-r5c6 gap 5 loop true
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[2.5,0.5],[0.5,2.5],[0.5,3.5]],"color":"#aaad","thickness":6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[0.5,6.5],[2.5,8.5],[3.5,8.5]],"color":"#aaad","thickness":6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[6.5,8.5],[8.5,6.5],[8.5,5.5]],"color":"#aaad","thickness":6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[8.5,2.5],[6.5,0.5],[5.5,0.5]],"color":"#aaad","thickness":6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,2.5],[3.5,2.5],[4.5,1.5]],"color":"#aaad","thickness":6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[2.5,6.5],[2.5,5.5],[1.5,4.5]],"color":"#aaad","thickness":6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[6.5,2.5],[6.5,3.5],[7.5,4.5]],"color":"#aaad","thickness":6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[6.5,6.5],[5.5,6.5],[4.5,7.5]],"color":"#aaad","thickness":6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#ffffffa0","stroke":"#555","thickness":4}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#ffffffa0","stroke":"#555","thickness":4}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#ffffffa0","stroke":"#555","thickness":4}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,8.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#ffffffa0","stroke":"#555","thickness":4}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#ffffffa0","stroke":"#555","thickness":4}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,5.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#ffffffa0","stroke":"#555","thickness":4}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#ffffffa0","stroke":"#555","thickness":4}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,0.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#ffffffa0","stroke":"#555","thickness":4}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#ffffffa0","stroke":"#555","thickness":4}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#ffffffa0","stroke":"#555","thickness":4}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#ffffffa0","stroke":"#555","thickness":4}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#ffffffa0","stroke":"#555","thickness":4}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#ffffffa0","stroke":"#555","thickness":4}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#ffffffa0","stroke":"#555","thickness":4}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#ffffffa0","stroke":"#555","thickness":4}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.86,"height":0.86,"rounded":true,"fill":"#ffffffa0","stroke":"#555","thickness":4}}
```

'Welcome, my lords, to Isengard!' he said. 'We are the doorwardens. Meriadoc, son of Saradoc is my name; and my companion is Peregrin, son of Paladin, of the house of Took. The Lord Saruman is within; but at the moment he is closeted with one Wormtongue, or doubtless he would be here to welcome such honourable guests.'

Normal sudoku rules apply. 

Along green lines, adjacent digits differ by at least 5.

Digits along grey lines must be between the digits in the circled ends of the line.

Digits separated by a white dot are consecutive.
