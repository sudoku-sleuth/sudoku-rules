---
format: open-rules
title: "Cake: Find the Liar Layer"
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/cake-find-the-liar-layer
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
givens: r1c5=2
exported: 3fe03ce30ec2d1b68f1cc5db50720ee5
---

```rules
sudoku 9x9
kropki-1: kropki r2c5-r2c6 white
kropki-2: kropki r3c5-r3c6 white
kropki-3: kropki r3c4-r3c5 white
kropki-4: kropki r5c6-r5c7 white
kropki-5: kropki r5c5-r5c6 white
kropki-6: kropki r5c4-r5c5 white
kropki-7: kropki r5c3-r5c4 white
kropki-8: kropki r6c3-r6c4 white
kropki-9: kropki r6c2-r6c3 white
kropki-10: kropki r6c7-r6c8 white
kropki-11: kropki r7c6-r7c7 white
kropki-12: kropki r7c7-r7c8 white
kropki-13: kropki r7c8-r7c9 white
kropki-14: kropki r6c8-r6c9 white
kropki-15: kropki r6c4-r6c5 white
kropki-16: kropki r4c4-r4c5 white
kropki-17: kropki r9c2-r9c3 white
kropki-18: kropki r9c3-r9c4 white
kropki-19: kropki r9c8-r9c9 white
kropki-20: kropki r8c4-r8c5 white
kropki-21: kropki r8c6-r8c7 white
kropki-22: kropki r7c4-r7c5 white
kropki-23: kropki r7c2-r7c3 white
kropki-24: kropki r5c1-r5c2 white
kropki-25: kropki r5c8-r5c9 white
kropki-26: kropki r2c6-r2c7 white
kropki-27: kropki r3c3-r3c4 white
between-1: between r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8 ends ["r9c1","r9c9"]
between-2: between r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8 ends ["r8c1","r8c9"]
between-3: between r7c2-r7c3-r7c4 ends ["r7c1","r7c5"]
between-4: between r7c8-r7c7 ends ["r7c9","r7c6"]
between-5: between r6c2-r6c3-r6c4 ends ["r6c1","r6c5"]
between-6: between r6c7-r6c8 ends ["r6c6","r6c9"]
between-7: between r5c7-r5c6-r5c5-r5c4-r5c3 ends ["r5c8","r5c2"]
between-8: between r3c6-r3c5-r3c4 ends ["r3c7","r3c3"]
between-9: between r2c5-r2c6 ends ["r2c4","r2c7"]
between-10: between r4c4-r4c5-r4c6 ends ["r4c3","r4c7"]
renban-1: renban r5c3-r5c4-r5c5-r5c6-r5c7
renban-2: renban r4c4-r4c5-r4c6
renban-3: renban r4c1-r4c2
renban-4: renban r6c2-r6c3-r6c4-r6c5
renban-5: renban r6c7-r6c8-r6c9
renban-6: renban r7c6-r7c7-r7c8-r7c9
renban-7: renban r2c5-r2c6-r2c7
renban-8: renban r5c1-r5c2
renban-9: renban r5c8-r5c9
renban-10: renban r3c1-r3c2
renban-11: renban r2c8-r2c9
renban-12: renban r1c7-r1c8
renban-13: renban r3c3-r3c4-r3c5-r3c6
renban-14: renban r9c8-r9c9
renban-15: renban r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1
renban-16: renban r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
pair r1c3-r1c4 sum 10
negative relations [{"op":"difference","value":1}] except [["r2c5","r2c6"],["r3c5","r3c6"],["r3c4","r3c5"],["r5c6","r5c7"],["r5c5","r5c6"],["r5c4","r5c5"],["r5c3","r5c4"],["r6c3","r6c4"],["r6c2","r6c3"],["r6c7","r6c8"],["r7c6","r7c7"],["r7c7","r7c8"],["r7c8","r7c9"],["r6c8","r6c9"],["r6c4","r6c5"],["r4c4","r4c5"],["r9c2","r9c3"],["r9c3","r9c4"],["r9c8","r9c9"],["r8c4","r8c5"],["r8c6","r8c7"],["r7c4","r7c5"],["r7c2","r7c3"],["r5c1","r5c2"],["r5c8","r5c9"],["r2c6","r2c7"],["r3c3","r3c4"],["r1c3","r1c4"]]
```

```drawing
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[6.5,1.5],[6.5,2.5],[6.5,3.5],[6.5,4.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Between Lines- Numbers on horizontal lines are between the numbers in the circles attached to the line. Renban Lines- Numbers on pink lines are a set of consecutive, non-repeating numbers, in any order. All possible horizontal Renban lines are shown, except none have all nine numbers. ONE RENBAN LINE IS A LIAR, and the numbers do not match Renban requirements. Numbers with an X between them sum to 10. Not all possible X are shown. Numbers with a white dot between them are consecutive. All possible white dots ON THE CAKE are shown. The cake consists of all Between Lines and circles.
