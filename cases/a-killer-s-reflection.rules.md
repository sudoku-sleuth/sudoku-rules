---
format: open-rules
title: A Killer's Reflection
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/a-killer-s-reflection
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
kropki-1: kropki r6c5-r7c5 colour "white"
kropki-2: kropki r8c5-r9c5 colour "white"
kropki-3: kropki r5c6-r5c7 colour "white"
kropki-4: kropki r5c7-r5c8 colour "white"
kropki-5: kropki r1c5-r2c5 colour "black"
kropki-6: kropki r1c4-r2c4 colour "black"
kropki-7: kropki r1c6-r1c7 colour "black"
kropki-8: kropki r2c3-r3c3 colour "black"
kropki-9: kropki r3c3-r4c3 colour "black"
kropki-10: kropki r4c2-r4c3 colour "black"
kropki-11: kropki r6c7-r6c8 colour "black"
kropki-12: kropki r8c1-r8c2 colour "black"
kropki-13: kropki r3c1-r3c2 colour "black"
kropki-14: kropki r5c3-r6c3 colour "black"
kropki-15: kropki r8c6-r8c7 colour "black"
kropki-16: kropki r2c1-r2c2 colour "black"
kropki-17: kropki r6c6-r6c7 colour "black"
kropki-18: kropki r4c3-r4c4 colour "black"
kropki-19: kropki r6c8-r7c8 colour "black"
```

```drawing
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,3.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"9","textColor":"#FF9875","fontSize":28}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"9","textColor":"#FF9875","fontSize":28}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,5.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"1","textColor":"#FF9875","fontSize":28}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,3.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"1","textColor":"#FF9875","fontSize":28}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"44","textColor":"#A8B6F0","fontSize":28}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"44","textColor":"#A8B6F0","fontSize":28}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,9.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"36","textColor":"#A8B6F0","fontSize":28}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"36","textColor":"#A8B6F0","fontSize":28}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,8.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"37","textColor":"#A6F09C","fontSize":28}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"37","textColor":"#A6F09C","fontSize":28}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,8.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"34","textColor":"#A6F09C","fontSize":28}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"34","textColor":"#A6F09C","fontSize":28}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,7.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"31","textColor":"#DDE04D","fontSize":28}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"31","textColor":"#DDE04D","fontSize":28}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,7.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"25","textColor":"#DDE04D","fontSize":28}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"25","textColor":"#DDE04D","fontSize":28}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"9","textColor":"#FFD257","fontSize":28}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,2.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"9","textColor":"#FFD257","fontSize":28}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"17","textColor":"#FFD257","fontSize":28}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,2.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"17","textColor":"#FFD257","fontSize":28}}
```

Normal Sudoku rules apply.  REFLECTED LITTLE KILLER clues- Numbers outside the grid are the sum of the numbers on the diagonal to the center column reflected back to the equivalent number. Top reflects to top and bottom reflects to bottom. Numbers with Black dots between them are in a ratio of 2:1. Numbers with a white dot between them are consecutive. Not all dots are given.
