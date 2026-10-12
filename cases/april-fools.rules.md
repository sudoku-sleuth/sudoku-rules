---
format: open-rules
title: April Fools
setter: Will Power
source: https://sudokupad.app/gm8lenmsyx
case: https://sudoku-sleuth.com/cases/april-fools
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
---

```rules
sudoku 9x9
cage-1: cage r3c1-r3c2 total 5 connected true
cage-2: cage r3c3-r3c4 total 5 connected true
cage-3: cage r2c7-r2c8 total 5 connected true
cage-4: cage r4c7-r4c8 total 5 connected true
cage-5: cage r6c1-r6c2 total 10 connected true
cage-6: cage r6c4-r6c5 total 10 connected true
cage-7: cage r6c6-r6c7 total 10 connected true
cage-8: cage r7c2-r7c3 total 10 connected true
cage-9: cage r1c7-r1c8-r1c9-r2c9-r3c9 total 23 connected true
cage-10: cage r1c4-r1c5-r1c6 total 15 connected true
cage-11: cage r1c1-r1c2-r1c3 total 19 connected true
cage-12: cage r9c4-r9c5-r9c6 total 20 connected true
cage-13: cage r9c7-r9c8-r9c9 total 9 connected true
cage-14: cage r8c2-r9c1-r9c2-r9c3 total 19 connected true
kropki-1: kropki r8c5-r9c5 colour "white"
kropki-2: kropki r4c5-r5c5 colour "white"
kropki-3: kropki r3c5-r4c5 colour "white"
kropki-4: kropki r1c5-r2c5 colour "white"
kropki-5: kropki r3c3-r3c4 colour "white"
kropki-6: kropki r3c5-r3c6 colour "white"
kropki-7: kropki r8c8-r8c9 colour "white"
kropki-8: kropki r7c7-r8c7 colour "white"
kropki-9: kropki r7c6-r8c6 colour "white"
kropki-10: kropki r7c4-r8c4 colour "white"
kropki-11: kropki r7c3-r8c3 colour "white"
kropki-12: kropki r1c2-r2c2 colour "white"
kropki-13: kropki r6c5-r6c6 colour "black"
kropki-14: kropki r7c5-r8c5 colour "black"
kropki-15: kropki r8c5-r8c6 colour "black"
kropki-16: kropki r2c1-r3c1 colour "black"
kropki-17: kropki r3c3-r4c3 colour "black"
kropki-18: kropki r8c6-r9c6 colour "black"
kropki-19: kropki r9c8-r9c9 colour "black"
```

```drawing
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[2.5,0.5],[1.5,0.5],[1.5,1.5],[2.5,1.5],[3.5,1.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[2.5,1.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[6.5,4.5],[5.5,4.5],[5.5,5.5],[6.5,5.5],[7.5,5.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[7.5,4.5]],"color":"#98FF96","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[5.5,3.5],[6.5,3.5],[7.5,3.5],[7.5,2.5],[6.5,2.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[6.5,2.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[5.5,7.5],[6.5,7.5],[6.5,8.5],[7.5,8.5],[7.5,7.5],[7.5,6.5],[6.5,6.5],[5.5,6.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,6.5],[3.5,6.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[5.5,0.5],[6.5,0.5],[7.5,0.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[6.5,1.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[2.5,2.5],[1.5,2.5],[1.5,3.5],[2.5,3.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,2.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[2.5,4.5],[1.5,4.5],[1.5,5.5],[2.5,5.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[2.5,4.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[2.5,4.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[2.5,7.5],[3.5,7.5],[3.5,8.5]],"color":"#C4C4C4","thickness":8,"rounded":true}}
```

IT IS CRITICAL TO READ AND UNDERSTAND ALL RULES BEFORE ATTEMPTING THIS PUZZLE. RULES APPLY TO ENTIRE LINES, NOT JUST PORTIONS OF A LINE.
Rule 1- Normal Sudoku Rules apply. 
Rule 2- All lines are either RENBAN (non-repeating consecutive set, in any order), GERMAN WHISPER (neighbors on the line are at least 5 apart from their neighbors on the line), DUTCH WHISPER (neighbors on the line are at least 4 apart from their neighbors on the line, EQUAL COMPOSITION (have the same set of numbers as other lines), or REBEL (does not satisfy any line type in rule 2). 
Rule 3- KROPKI PAIRS and KILLER CAGES- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. Numbers in cages sum to the number in the top left corner of the cage. 
Rule 4- Rules 1, 2, 3 and 4 are always correct. Rule 5 is NEVER CORRECT.
Rule 5- Green lines are German Whispers. Red lines are Dutch Whispers. Purple lines are RENBAN. Blue Lines are equal composition. Gray lines are rebels.
