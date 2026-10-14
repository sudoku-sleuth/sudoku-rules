---
format: open-rules
title: Happy Birthday, Will Power
setter: Will Power
source: https://sudokupad.app/4q94cfsozs
case: https://sudoku-sleuth.com/cases/happy-birthday-will-power
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c2=1 r2c9=1 r3c4=1 r4c7=1 r5c5=1 r6c3=1 r7c8=1 r8c1=1 r9c6=1
exported: 67ce3bcbf96ccec0ab002e135e03a37b
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r4c1 white
kropki-2: kropki r3c2-r3c3 white
kropki-3: kropki r2c3-r2c4 white
kropki-4: kropki r5c7-r6c7 white
kropki-5: kropki r5c8-r6c8 white
kropki-6: kropki r5c6-r6c6 white
kropki-7: kropki r4c5-r4c6 white
kropki-8: kropki r7c2-r8c2 white
kropki-9: kropki r7c2-r7c3 white
kropki-10: kropki r8c4-r9c4 white
kropki-11: kropki r9c4-r9c5 white
kropki-12: kropki r7c5-r8c5 white
kropki-13: kropki r7c4-r7c5 white
kropki-14: kropki r7c6-r8c6 white
kropki-15: kropki r8c8-r9c8 white
kropki-16: kropki r7c7-r8c7 white
kropki-17: kropki r1c3-r1c4 white
kropki-18: kropki r1c1-r2c1 black
kropki-19: kropki r3c1-r3c2 black
kropki-20: kropki r2c4-r2c5 black
kropki-21: kropki r1c6-r2c6 black
kropki-22: kropki r1c7-r1c8 black
kropki-23: kropki r2c8-r2c9 black
kropki-24: kropki r2c8-r3c8 black
kropki-25: kropki r5c2-r6c2 black
kropki-26: kropki r6c2-r6c3 black
kropki-27: kropki r4c3-r5c3 black
kropki-28: kropki r4c4-r4c5 black
kropki-29: kropki r4c6-r5c6 black
kropki-30: kropki r4c5-r5c5 black
kropki-31: kropki r4c7-r5c7 black
kropki-32: kropki r6c7-r6c8 black
kropki-33: kropki r7c8-r7c9 black
kropki-34: kropki r8c9-r9c9 black
kropki-35: kropki r8c1-r9c1 black
extremum r6c1-r6c8 type "max" exhaustive false
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#FFA0A0","thickness":0,"opacity":0.5}}
```

Hello, all. My birthday is coming up on 7 June. Complete this puzzle, and MULTIPLY all digits in red cells to get my age.

Normal Sudoku rules apply. 

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.

MAXIMUMS- Numbers in gray cells are greater than all orthogonally adjacent cells.
