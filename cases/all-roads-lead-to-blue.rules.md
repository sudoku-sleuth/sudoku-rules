---
format: open-rules
title: All Roads Lead to..... Blue
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/all-roads-lead-to-blue
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: ca0ebc3647f1d5648412e632a4772a07
---

```rules
sudoku 9x9
kropki-1: kropki r6c9-r7c9 white
kropki-2: kropki r8c6-r9c6 white
kropki-3: kropki r7c3-r8c3 white
kropki-4: kropki r5c4-r5c5 white
kropki-5: kropki r5c5-r6c5 white
kropki-6: kropki r4c1-r5c1 white
kropki-7: kropki r2c2-r3c2 white
kropki-8: kropki r2c1-r2c2 white
kropki-9: kropki r1c4-r1c5 white
kropki-10: kropki r1c4-r2c4 white
kropki-11: kropki r3c7-r4c7 white
kropki-12: kropki r3c7-r3c8 white
kropki-13: kropki r6c4-r6c5 white
kropki-14: kropki r4c7-r4c8 white
kropki-15: kropki r5c1-r5c2 white
kropki-16: kropki r4c4-r5c4 black
kropki-17: kropki r3c4-r4c4 black
kropki-18: kropki r5c6-r5c7 black
kropki-19: kropki r5c7-r6c7 black
kropki-20: kropki r6c7-r6c8 black
kropki-21: kropki r8c3-r8c4 black
kropki-22: kropki r1c5-r2c5 black
arrow-1: arrow r1c3-r1c2 bulb ["r1c4"]
arrow-2: arrow r7c2-r7c1 bulb ["r7c3"]
arrow-3: arrow r3c6-r3c5 bulb ["r3c7"]
arrow-4: arrow r9c5-r9c4 bulb ["r9c6"]
arrow-5: arrow r5c8-r5c7 bulb ["r6c9"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#D0D0FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"1","textColor":"#000000","fontSize":20}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"2","textColor":"#000000","fontSize":20}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,2.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"3","textColor":"#000000","fontSize":20}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,3.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"4","textColor":"#000000","fontSize":20}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,4.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"5","textColor":"#000000","fontSize":20}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"6","textColor":"#000000","fontSize":20}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"7","textColor":"#000000","fontSize":20}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,7.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"8","textColor":"#000000","fontSize":20}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,8.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"9","textColor":"#000000","fontSize":20}}
```

Normal Sudoku rules apply. The numbers in blue boxes sum to 45. Additionally, summing the blue boxes in columns 1-n, where n is the column number, gives a result that is a multiple of n. Example: The sum of the blue numbers in columns 1,2 and 3 is a multiple of 3. Numbers on arrows sum to the number in the arrow's circle. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
