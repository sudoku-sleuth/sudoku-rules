---
format: open-rules
title: Repeater Lines 2
setter: The Bard
source: https://sudokupad.app/7iajtynhi1
case: https://sudoku-sleuth.com/cases/repeater-lines-2
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: cd1b1a54fe80dd5ce6e1b42b01f716fe
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r9c2-r9c3 black
kropki-2: kropki r9c3-r9c4 black
kropki-3: kropki r1c6-r1c7 black
kropki-4: kropki r5c4-r5c5 black
pair-1: pair r2c7-r2c8 sum 10
pair-2: pair r1c2-r1c3 sum 10
pair-3: pair r2c4-r2c5 sum 10
pair-4: pair r3c6-r4c6 sum 10
pair-5: pair r5c3-r5c4 sum 10
pair-6: pair r5c3-r6c3 sum 10
pair-7: pair r7c2-r8c2 sum 10
pair-8: pair r7c5-r8c5 sum 10
pair-9: pair r9c7-r9c8 sum 10
pair-10: pair r3c8-r3c9 sum 10
pair-11: pair r5c5-r5c6 sum 10
pair-12: pair r2c2-r3c2 sum 10
pair-13: pair r4c8-r5c8 sum 10
pair-14: pair r6c5-r6c6 sum 10
pair-15: pair r7c3-r7c4 sum 10
pair-16: pair r7c4-r8c4 sum 10
pair-17: pair r8c9-r9c9 sum 10
pair-18: pair r8c7-r8c8 sum 10
negative relations [{"op":"sum","value":10}] except [["r9c2","r9c3"],["r9c3","r9c4"],["r1c6","r1c7"],["r5c4","r5c5"],["r2c7","r2c8"],["r1c2","r1c3"],["r2c4","r2c5"],["r3c6","r4c6"],["r5c3","r5c4"],["r5c3","r6c3"],["r7c2","r8c2"],["r7c5","r8c5"],["r9c7","r9c8"],["r3c8","r3c9"],["r5c5","r5c6"],["r2c2","r3c2"],["r4c8","r5c8"],["r6c5","r6c6"],["r7c3","r7c4"],["r7c4","r8c4"],["r8c9","r9c9"],["r8c7","r8c8"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,5.5],[3.5,4.5],[2.5,3.5],[1.5,2.5]],"color":"#FF0080","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[3.5,2.5],[4.5,3.5],[5.5,2.5],[6.5,1.5]],"color":"#FF0080","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[3.5,6.5],[4.5,5.5],[5.5,6.5],[6.5,7.5]],"color":"#FF0080","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,3.5],[0.5,2.5],[1.5,1.5],[2.5,0.5],[3.5,0.5],[4.5,0.5]],"color":"#FF0080","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.

Knights Move: digits within a chess knights move away from each other cannot be the same.

Repeater lines: a digit on the red-wine colored line must occur multiple times.

XV: digits with an X between them add to ten. All Xs have been given. 

Kropki: Digits separated by a black dot have a ratio of 2:1.
