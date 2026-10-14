---
format: open-rules
title: We're Gonna Need a Bigger Boat
setter: Will Power
source: https://sudokupad.app/bsw2upn05y
case: https://sudoku-sleuth.com/cases/we-re-gonna-need-a-bigger-boat
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: e1417dc0fee053f79d5c53d643b9f159
---

```rules
sudoku 9x9
cage-1: cage r4c8-r4c9 total 7 connected true
cage-2: cage r4c1-r4c2 total 11 connected true
cage-3: cage r3c5-r3c6 total 11 connected true
cage-4: cage r7c5-r8c5 total 12 connected true
kropki-1: kropki r2c3-r2c4 white
kropki-2: kropki r5c4-r5c5 black
kropki-3: kropki r5c5-r5c6 black
kropki-4: kropki r2c2-r2c3 black
kropki-5: kropki r2c4-r2c5 black
kropki-6: kropki r1c1-r1c2 black
kropki-7: kropki r1c7-r1c8 black
kropki-8: kropki r1c4-r1c5 black
kropki-9: kropki r3c7-r3c8 black
kropki-10: kropki r7c2-r8c2 black
kropki-11: kropki r8c2-r8c3 black
kropki-12: kropki r8c7-r8c8 black
entropic r9c2-r9c3-r8c2-r8c3-r7c2-r7c3-r6c4-r7c4-r6c5-r7c6-r6c6-r7c7-r7c8-r8c7-r8c8-r9c7-r9c8
renban-1: renban r2c7-r2c8-r3c8-r3c7-r2c6-r1c7-r1c8-r3c5-r3c6
renban-2: renban r1c1-r2c2-r2c3-r2c4-r2c5-r2c1-r3c2
parity-cells r5c1-r5c9-r6c1-r6c9 parity "even"
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[3.5,4.5],[3.5,5.5],[4.5,6.5],[5.5,7.5],[6.5,8.5],[7.5,8.5],[8.5,8.5]],"color":"#C7C7C7","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,2.5],[5.5,1.5],[6.5,0.5],[7.5,0.5],[8.5,0.5]],"color":"#C7C7C7","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. ENTROPY LINES- Each continuous set of 3 numbers on the red line contains one low digit (1-3), one medium digit (4-6) and one high digit (7-9). KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. KILLER- Numbers in cages sum to the number in the top left corner of the cage. Cells with a gray square are EVEN.
