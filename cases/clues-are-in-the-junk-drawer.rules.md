---
format: open-rules
title: Clues Are In The Junk Drawer
setter: Will Power
source: https://sudokupad.app/p0hsjhanyc
case: https://sudoku-sleuth.com/cases/clues-are-in-the-junk-drawer
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
cage-1: cage r1c8-r1c9 total 10 connected true
cage-2: cage r2c7-r3c7 total 10 connected true
cage-3: cage r2c8-r2c9 total 10 connected true
cage-4: cage r3c8-r3c9 total 10 connected true
cage-5: cage r4c3-r5c3-r6c3 total 8 connected true
cage-6: cage r5c4-r5c5-r5c6 total 12 connected true
cage-7: cage r5c1-r5c2 total 7 connected true
kropki-1: kropki r7c8-r8c8 colour "white"
kropki-2: kropki r8c8-r9c8 colour "white"
kropki-3: kropki r6c8-r7c8 colour "white"
kropki-4: kropki r1c1-r2c1 colour "white"
kropki-5: kropki r7c3-r8c3 colour "white"
kropki-6: kropki r8c3-r9c3 colour "white"
kropki-7: kropki r8c1-r8c2 colour "white"
kropki-8: kropki r3c7-r3c8 colour "black"
kropki-9: kropki r1c8-r2c8 colour "black"
kropki-10: kropki r2c6-r2c7 colour "black"
between r8c1-r9c1-r9c2-r9c3 ends ["r8c2","r8c3"]
little-killer-1: little-killer r1c5-r2c6-r3c7-r4c8-r5c9 sum 34
little-killer-2: little-killer r5c1-r6c2-r7c3-r8c4-r9c5 sum 34
little-killer-3: little-killer r2c9-r3c8-r4c7-r5c6-r6c5-r7c4-r8c3-r9c2 sum 34
parity-cells r1c1-r1c2-r1c3-r2c2 parity "odd"
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[2.5,1.5],[2.5,2.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[2.5,1.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[4.5,4.5],[4.5,5.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[4.5,4.5],[5.5,4.5]],"color":"#FF7383","thickness":8,"rounded":true}}
```

Apologies that Sudokupad requires an abbreviated rule set. See complete rules on Logic Masters Germany or F-Puzzles version of this puzzle.
Normal Sudoku rules apply. 
KROPKI PAIRS- Not all possible dots are given. 
DUTCH WHISPERS- Standard. 
KILLER CAGES- Standard.
LITTLE KILLER- Standard.
BETWEEN LINE- Numbers on the gray line in box 7 are between the numbers in the two circles at the endpoints. ODD NUMBERS- Numbers on gray highlighted circles in box 1 are odd.
